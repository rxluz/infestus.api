import mongoose from 'mongoose';
import cloudinary from 'cloudinary';
import config from '../../config/config';

const Schema = mongoose.Schema;

/**
 * Media Schema
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

  return cloudinary.uploader.upload(media.picture, { tags: 'infestus_media' })
    .then((image) => {
      media.picture = image.public_id;
      return next();
    });
});

/**
 * @typedef User
 */
export default mongoose.model('Media', MediaSchema);
