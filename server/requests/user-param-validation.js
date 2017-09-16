import Joi from 'joi';

export default {
  // POST /api/user
  createUser: {
    body: {
      nickname: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }
  },

  // UPDATE /api/user
  updateUser: {
    body: {
      nickname: Joi.string(),
      email: Joi.string().email(),
      bio: Joi.string(),
      password: Joi.string()
    }
  },


  // DELETE /api/user
  disableUser: {
    body: {
      password: Joi.string().required()
    }
  }
};
