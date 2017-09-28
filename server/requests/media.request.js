import Joi from 'joi';

export default {
  // POST /api/media
  create: {
    body: {
      picture: Joi.string().required(),
      lat: Joi.number(),
      lng: Joi.number(),
      place: Joi.string(),
      artist: Joi.string(),
      tite: Joi.string()
    }
  },

  // PUT /api/media/{media-id}
  update: {
    body: {
      lat: Joi.number(),
      lng: Joi.number(),
      place: Joi.string(),
      artist: Joi.string(),
      tite: Joi.string()
    }
  },

  // POST /api/media/{media-id}/comments
  createComment: {
    body: {
      content: Joi.string().required()
    }
  }
};
