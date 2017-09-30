import mongoose from 'mongoose';

/**
 * Artist Schema
 */
const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
    required: true
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
  }
});

/**
 * @typedef User
 */
export default mongoose.model('Artist', ArtistSchema);
