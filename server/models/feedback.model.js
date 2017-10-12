import mongoose from 'mongoose';

/**
 * Artist Schema
 */
const FeedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String
  },
  message: {
    type: String
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

/**
 * @typedef User
 */
export default mongoose.model('Feedback', FeedbackSchema);
