import Promise from 'bluebird';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import _ from 'lodash';
import cloudinary from 'cloudinary';

import auxs from '../helpers/auxs.helper';
import config from '../../config/config';

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret
});


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
  picture: {
    type: String
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
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  following: [{ type: mongoose.Schema.ObjectId, ref: 'User', unique: true }],
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

UserSchema.methods.toJSON = function toJSON() {
  const user = this;
  const userObject = user.toObject();

  userObject.picture = (userObject.picture !== ''
    ? cloudinary.url(userObject.picture, { width: 500, height: 500 })
    : userObject.picture);

  return _.pick(userObject, ['_id', 'email', 'nickname', 'bio', 'picture', 'following', 'likesReceveid', 'createdAt']);
};

UserSchema.set('toJSON', { getters: true, virtuals: true });

UserSchema.methods.toObject = function toObject() {
  const userObject = this;

  userObject.picture = (userObject.picture !== ''
    ? cloudinary.url(userObject.picture, { width: 500, height: 500 })
    : userObject.picture);

  return _.pick(userObject, ['_id', 'email', 'nickname', 'bio', 'picture', 'password', 'active', 'following', 'likesReceveid', 'createdAt']);
};

UserSchema.methods.generateAuthToken = function generateAuthToken() {
  const user = this;
  const access = 'auth';
  const token = jwt.sign({ _id: user._id.toHexString(), access }, config.jwtSecret).toString();

  user.tokens.push({ access, token });

  return user.save().then(() => token);
};

UserSchema.statics.generateRecoverToken = function generateRecoverToken(email) {
  const User = this;
  return User.findOne({ email, active: true }).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    const access = 'recover';
    const token = auxs.getRandomInt(10000, 99000);

    user.tokens.push({ token, access });
    user.save();

    return Promise.resolve(token);
  });
};

UserSchema.statics.checkRecoverToken = function checkRecoverToken(token, email) {
  const User = this;

  return User
    .findOne({ email, 'tokens.token': token, 'tokens.access': 'recover' })
    .then(
      user =>
        new Promise((resolve, reject) => {
          if (!user) {
            reject();
          } else {
            resolve();
          }
        })
    );
};

UserSchema.statics.setRecoverPassword = function setRecoverPassword(token, email, password) {
  const User = this;

  return User
    .findOne({ email, 'tokens.token': token, 'tokens.access': 'recover' })
    .then((user) => {
      if (!user) {
        return Promise.reject();
      }

      const usr = user;

      usr.password = password;
      usr.tokens = usr.tokens.filter(tkn => tkn.token !== token);
      usr.save();

      return usr.generateAuthToken().then(newtoken => Promise.resolve(newtoken));
    });
};

UserSchema.statics.findByToken = function findByToken(token) {
  const User = this;

  return new Promise(
    (resolve, reject) => {
      jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err) {
          return reject();
        }

        return User
          .findOne({
            _id: decoded._id,

            'tokens.token': token,
            'tokens.access': 'auth'
          })
          .then(usr => (usr
            ? resolve(usr)
            : reject())
          )
          .catch(() => reject());
      });
    }
  );
};

UserSchema.statics.findByCredentials = function findByCredentials(nickname, password) {
  const User = this;
  return User.findOne({ nickname, active: true }).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    return new Promise(
      (resolve, reject) =>
        bcrypt.compare(
          password, user.password,
          (err, res) => (res ? resolve(user) : reject())
        )
    );
  });
};

UserSchema.statics.removeByToken = function removeByToken(token) {
  const User = this;

  return User.findOne({ 'tokens.token': token }).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    const usr = user;

    usr.tokens = usr.tokens.filter(tkn => tkn.token !== token);
    usr.save();
    return Promise.resolve(usr);
  });
};

UserSchema.pre('save', function pre(next) {
  const user = this;

  if (!user.isModified('password')) {
    next();
  } else {
    bcrypt.genSalt(10, (err, salt) =>
      bcrypt.hash(user.password, salt, (errr, hash) => {
        user.password = hash;
        next();
        return true;
      })
    );
  }

  return true;
});

UserSchema.pre('save', function pre(next) {
  const user = this;

  if (!user.isModified('picture')) {
    return next();
  }

  if (user.picture === '' || user.picture === 'null') {
    user.picture = '';
    return next();
  }

  return cloudinary.uploader.upload(user.picture, { tags: 'infestus_profile' })
    .then((image) => {
      user.picture = image.public_id;
      return next();
    });
});


/**
 * @typedef User
 */
export default mongoose.model('User', UserSchema);
