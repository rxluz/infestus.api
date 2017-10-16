import Joi from 'joi';

const media = {
  // medias user response contract model
  medias: Joi.array().items({
    _id: Joi.string().required(),
    picture: Joi.any().required(),

    owner: Joi.object().required().keys({
      _id: Joi.string().required(),
      nickname: Joi.string().required(),
      picture: Joi.any(),
      bio: Joi.any()
    }),

    place: Joi.object().keys({
      lng: Joi.number(),
      lat: Joi.number(),
      name: Joi.string()
    }),

    comments: Joi.array().items({
      owner: Joi.object().required(),
      content: Joi.string().required(),
      _id: Joi.string().required(),
      date: Joi.date().required(),
      isFlagged: Joi.boolean().required(),
      id: Joi.string()
    }),

    commentsTotal: Joi.number().required(),
    likesTotal: Joi.number().required(),
    isLiked: Joi.boolean().required(),
    isFlagged: Joi.boolean().required(),

    artist: Joi.object().keys({
      _id: Joi.string().required(),
      name: Joi.string().required()
    }),

    title: Joi.any(),
    createdAt: Joi.date().required(),
  })
};

export default { media };
