import Joi from 'joi';

export default {
  // POST /api/media
  create: {
    body: {
      picture: Joi.string().required(),
      place_lat: Joi.number(),
      place_lng: Joi.number(),
      place: Joi.string(),
      artist: Joi.string(),
      title: Joi.string()
    }
  },

  // PUT /api/media/{media-id}
  update: {
    params: {
      mediaID: Joi.string().required()
    },
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
    params: {
      mediaID: Joi.string().required()
    },
    body: {
      content: Joi.string().required()
    }
  }
};
