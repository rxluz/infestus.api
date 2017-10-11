import mongoose from 'mongoose';
import cloudinary from 'cloudinary';
import _ from 'lodash';
import config from '../../config/config';

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const CommentSchema = new mongoose.Schema({
  content: String,
  date: {
    type: Date,
    default: Date.now
  },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  flags: [{
    date: {
      type: Date,
      default: Date.now
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  }]
});

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
  comments: [CommentSchema],
  likes: [{
    date: {
      type: Date,
      default: Date.now
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User' }
  }],
  flags: [{
    date: {
      type: Date,
      default: Date.now
    },
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

MediaSchema.statics.findByUser = function findByUser(owner) {
  const media = this;
  return media.find({ owner, active: true });
};

MediaSchema.virtual('isLiked').get(function isLiked() {
  console.log("this.likes", this.likes);
  console.log(global.userID);
  if (!global.userID || !this.likes) return false;

  return (this
    .likes
    .filter(l => l.owner.toString() === global.userID.toString())
  ).length > 0;
});

MediaSchema.virtual('isFlagged').get(function isLiked() {
  if (!global.userID || !this.flags) return false;

  return (this
    .flags
    .filter(
      l => l.owner.toString() === global.userID.toString()
    )
  ).length > 0;
});

CommentSchema.virtual('isFlagged').get(function isFlagged() {
  if (!global.userID || !this.flags) return false;

  return (this
    .flags
    .filter(fl => fl.owner.toString() === global.userID.toString())
  ).length > 0;
});


CommentSchema.set('toJSON', { getters: true, virtuals: true });
CommentSchema.set('toObject', { getters: true, virtuals: true });

MediaSchema.set('toJSON', { getters: true, virtuals: true });

MediaSchema.set('toObject', { getters: true, virtuals: true });

MediaSchema.methods.toJSON = function toJSON() {
  const media = this;
  const mediaObject = media.toObject();

  mediaObject.picture = (mediaObject.picture !== ''
    ? cloudinary.url(mediaObject.picture, { width: 500, height: 500 })
    : mediaObject.picture);

  mediaObject.comments = mediaObject.comments
    ? mediaObject.comments.map((co) => {
      if (co.flags) delete co.flags;
      delete co.id;
      return co;
    })
    : [];

  return _.pick(mediaObject, ['_id', 'picture', 'owner', 'artist', 'title', 'createdAt', 'place', 'comments', 'commentsTotal', 'likes', 'likesTotal', 'isLiked', 'isFlagged']);
};

// MediaSchema.methods.toObject = function toObject() {
//   const mediaObject = this;
//   if (!mediaObject._id) {
//     mediaObject._id = new ObjectId();
//   }
//   mediaObject.picture = (mediaObject.picture !== ''
//     ? cloudinary.url(mediaObject.picture, { width: 500, height: 500 })
//     : mediaObject.picture);
//
//   return mediaObject;
// };

CommentSchema.methods.toJSON = function toJSON() {
  const comment = this;
  const commentObject = comment.toObject();

  commentObject.id = undefined;
  commentObject.flags = undefined;
  return commentObject;
};


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
