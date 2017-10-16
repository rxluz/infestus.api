import Joi from 'joi';
import mediaResponse from '../medias/response.media';

const user = {
  // post user response contract model
  post: Joi.object().keys({
    token: Joi.string().required(),

    user: Joi.object().keys({
      _id: Joi.string().required(),
      email: Joi.string().email().required(),
      nickname: Joi.string().required(),
      createdAt: Joi.date().required(),
      following: Joi.array()
    })
  }),

  // put user response contract model
  put: Joi.object().keys({
    _id: Joi.string().required(),
    email: Joi.string().email().required(),
    nickname: Joi.string().required(),
    createdAt: Joi.date().required(),
    following: Joi.array(),
    bio: Joi.any(),
    picture: Joi.any()
  }),

  // get user response contract model
  get: Joi.object().keys({
    _id: Joi.string().required(),
    email: Joi.string().email().required(),
    nickname: Joi.string().required(),
    createdAt: Joi.date().required(),
    following: Joi.array(),
    bio: Joi.any(),
    picture: Joi.any(),
    likesReceveid: Joi.number()
  }),

  // get user followers response contract model
  followers: Joi.object().keys({
    total: Joi.number().required(),
    followers: Joi.array().items({
      _id: Joi.string().required(),
      nickname: Joi.string().required(),
      picture: Joi.any().required(),
    })
  }),

  // get user followers response contract model
  following: Joi.object().keys({
    total: Joi.number().required(),
    following: Joi.array().items({
      _id: Joi.string().required(),
      nickname: Joi.string().required(),
      picture: Joi.any().required(),
    })
  }),

  // medias user response contract model
  medias: mediaResponse.media.medias,

  // password user response contract model
  password: Joi.object().keys({
    _id: Joi.string().required(),
    email: Joi.string().email().required(),
    nickname: Joi.string().required(),
    createdAt: Joi.date().required(),
    following: Joi.array(),
    bio: Joi.any(),
    picture: Joi.any()
  }),

  // password user response contract model
  delete: Joi.object().keys({
    _id: Joi.string().required(),
    email: Joi.string().email().required(),
    nickname: Joi.string().required(),
    createdAt: Joi.date().required(),
    following: Joi.array(),
    bio: Joi.any(),
    picture: Joi.any()
  })
};

export default { user };
