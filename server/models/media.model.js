import Promise from 'bluebird';
import mongoose from 'mongoose';
import _ from 'lodash';
import cloudinary  from 'cloudinary';

import User from '../models/user.model';
import Artist from '../models/artist.model';
import auxs from '../helpers/auxs.helper';
import config from '../../config/config';

const Schema = mongoose.Schema;

/**
 * User Schema
 */
const MediaSchema = new mongoose.Schema({
  picture: {
    type: String,
    trim: true,
    required: true
  },
  title: {
    type: String,
    trim: true
  },
  artist: {
    type: String,
    trim: true
  },
  place: {
    name: String,
    lat: Number,
    lng: Number
  },
  artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  comments: [{
    content: String,
    date: Date,
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  }],
  likes: [{
    date: Date,
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  }],
  flags: [{
    date: Date,
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  }],
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});



MediaSchema.pre('save', function pre(next) {
  const media = this;

  if (!media.isModified('picture')) {
    return next();
  }

  cloudinary.config({
    cloud_name: config.cloudinary.cloud_name,
    api_key: config.cloudinary.api_key,
    api_secret: config.cloudinary.api_secret
  });


  return cloudinary.uploader.upload(media.picture, {tags: 'infestus_media'})
    .then(function (image) {
      media.picture=image.public_id;
      console.dir(image);
      return next();
    });
});





/**
 * @typedef User
 */
export default mongoose.model('Media', MediaSchema);
