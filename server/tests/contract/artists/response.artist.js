import Joi from 'joi';
import mediaResponse from '../medias/response.media';


const artists = {
  // recent artists response contract model
  recent: Joi.array().items({
    _id: Joi.string().required(),
    name: Joi.string().required()
  }),

  // complete artists response contract model
  complete: Joi.array().items({
    _id: Joi.string().required(),
    name: Joi.string().required()
  }),

  // complete artists response contract model
  featured: Joi.array().items({
    _id: Joi.string().required(),
    name: Joi.string().required()
  }),

  // complete artists response contract model
  about: Joi.object().keys({
    _id: Joi.string().required(),
    name: Joi.string().required(),
    createdAt: Joi.date().required()
  }),

  medias: mediaResponse.media.medias
};

export default { artists };
