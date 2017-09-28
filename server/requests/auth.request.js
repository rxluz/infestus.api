import Joi from 'joi';

export default {
  // POST /api/user
  login: {
    body: {
      nickname: Joi.string().required(),
      password: Joi.string().required()
    }
  },

  // POST /api/auth/recover/request
  recoverRequest: {
    body: {
      email: Joi.string().email().required()
    }
  },

  // PUT /api/auth/recover/restore/{code}
  recoverRestore: {
    params: {
      code: Joi.string().required()
    },
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }
  },

  // GET /api/auth/recover/restore/{code}
  recoverCheck: {
    params: {
      code: Joi.string().required()
    },
    body: {
      email: Joi.string().email().required()
    }
  }
};
