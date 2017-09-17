import Joi from 'joi';

export default {
  // POST /api/other/feedback
  createFeedback: {
    body: {
      name: Joi.string().required(),
      email: Joi.string().email(),
      message: Joi.string().required()
    }
  }
};
