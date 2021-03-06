import Joi from 'joi';

export default {
  // POST /api/user
  create: {
    body: {
      nickname: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }
  },

  // UPDATE /api/user
  update: {
    body: {
      nickname: Joi.string(),
      email: Joi.string().email(),
      bio: Joi.string()
    }
  },

  // UPDATE PASSWORD /api/user/password
  updatePassword: {
    body: {
      current_password: Joi.string().required(),
      new_password: Joi.string().email().required()
    }
  },


  // DELETE /api/user
  disable: {
    body: {
      password: Joi.string().required()
    }
  }
};
