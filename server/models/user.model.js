import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import validate from 'express-validation';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import _ from 'lodash';

import {auxs} from '../helpers/auxs.helper';

import config from '../../config/config';

import APIError from '../helpers/APIError';



/**
 * User Schema
 */
const UserSchema = new mongoose.Schema({
  nickname: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLenght: 5
  },
  bio: {
    type: String,
    required: false
  },
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});


UserSchema.methods.toJSON = function() {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email', 'nickname', 'bio']);
};

UserSchema.methods.generateAuthToken = function() {

  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, config.jwtSecret).toString();

  user.tokens.push({ access, token });

  return user.save().then(() => {
    return token;
  });

};

UserSchema.statics.generateRecoverToken = function (email) {
  var User = this;

  return User.findOne({email, active: true}).then((user) => {
    if(!user){
      return Promise.reject();
    }

    const access = 'recover';
    const token = auxs.getRandomInt(10000, 99000);

    user.tokens.push({ token, access });
    user.save();

    return Promise.resolve(token);
  });
};

UserSchema.statics.checkRecoverToken = function (token, email) {
  var User = this;

  return User
          .findOne({email, 'tokens.token':token, 'tokens.access': 'recover'})
          .then((user) => {
            return new Promise((resolve, reject) => {
              if(!user){
                reject();
              }else{
                resolve();
              }
            });
          });
};

UserSchema.statics.setRecoverPassword = function (token, email, password) {
  var User = this;

  return User
          .findOne({email, 'tokens.token':token, 'tokens.access': 'recover'})
          .then((user) => {
            if(!user){
              return Promise.reject();
            }

            user.password = password;
            user.tokens = user.tokens.filter(tkn => tkn.token !== token);
            user.save();

            return user.generateAuthToken().then((newtoken) => {
              return Promise.resolve(newtoken);
            });

          });
};


UserSchema.statics.findByToken = function (token) {
  var User = this;
  var decoded;

  try {
    decoded = jwt.verify(token, config.jwtSecret);
  } catch (e) {
    return Promise.reject();
  }

  return User.findOne({
    '_id': decoded._id,
    'active': true,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

UserSchema.statics.findByCredentials = function (nickname, password) {
    var User = this;
    return User.findOne({nickname, active: true}).then((user) => {
      if(!user){
        return Promise.reject();
      }

      return new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password, (err, res) => {
          if(res){
            resolve(user);
          } else {
            reject();
          }
        });
      });
    });
};

UserSchema.statics.removeByToken = function (token) {
    var User = this;

    return User.findOne({'tokens.token': token}).then((user) => {
        if(!user){
          return Promise.reject();
        }

        user.tokens = user.tokens.filter(tkn => tkn.token !== token);

        user.save();

        return Promise.resolve(user);
    });

};

UserSchema.pre('save', function(next) {
  var user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});


/**
 * @typedef User
 */
export default mongoose.model('User', UserSchema);
