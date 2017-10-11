import _ from 'lodash';
import cloudinary from 'cloudinary';

const auxs =
  {
    getRandomInt: (min, max) =>
      Math.floor(
        Math.random() * (Math.floor(max) - Math.ceil(min))
      ) + Math.ceil(min),

    getMediaResponse: media =>
      media.map(mm =>
        _.pick(
          ((m) => {
            m.likesTotal =
              m.likes
                ? m.likes.length
                : 0;

            m.commentsTotal =
              m.comments
                ? m.comments.length
                : 0;

            m.picture =
              m.picture !== ''
                ? cloudinary.url(m.picture, { width: 500, height: 500 })
                : m.picture;

            if (m.comments) {
              m.comments =
                m.comments.slice(0, 2).map((mmm) => {
                  mmm.id = undefined;
                  mmm.flags = undefined;
                  return mm;
                });
            }

            m.likes = undefined;
            return m;
          })(mm),
          [
            '_id', 'picture', 'owner', 'artist',
            'title', 'createdAt', 'place', 'comments',
            'commentsTotal', 'likes', 'likesTotal',
            'isLiked', 'isFlagged'
          ]
        )
      )
  };

export { auxs as default };
