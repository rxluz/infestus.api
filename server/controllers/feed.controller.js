import _ from 'lodash';
import cloudinary from 'cloudinary';

import Media from '../models/media.model';

/**
 * Get the user feed
 * inicialmente busca uma lista simples de street arts,
 * futuramente irá buscar somente as streetarts que o user segue
 * @returns {feed}
 */
function index(req, res) {
  return Media
    .find({ active: true })
    .populate('owner', 'nickname picture _id about')
    .populate('comments.owner', 'nickname picture _id about')
    .populate('artist', 'name')
    .sort('-createdAt')
    .limit(20)
    .then(data => res.send(getMediaResponse(data)));
}

function getMediaResponse(media) {
  return media.map(mm => _.pick(
    ((m) => {
      m.likesTotal =
        m.likes
          ? m.likes.length
          : 0;

      m.commentsTotal =
        m.comments
          ? m.comments.length
          : 0;

      m.picture = (m.picture !== ''
        ? cloudinary.url(m.picture, { width: 500, height: 500 })
        : m.picture);


      if (m.comments) {
        m.comments = m.comments.slice(0, 2).map((mm_) => {
          mm_.id = undefined;
          mm_.flags = undefined;
          return mm_;
        });
      }

      return m;
    })(mm),
    ['_id', 'picture', 'owner', 'artist', 'title',
      'createdAt', 'place', 'comments', 'commentsTotal',
      'likesTotal', 'isLiked', 'isFlagged']
  ));
}

/**
 * Get the result of user search
 * @returns {results}
 */
function search(req, res) {
  return Media
    .find({ active: true, $text: { $search: req.params.term } })
    .populate('owner', 'nickname picture _id about')
    .populate('comments.owner', 'nickname picture _id about')
    .populate('artist', 'name')
    .sort('-createdAt')
    .limit(20)
    .then(data => res.send(getMediaResponse(data)));
}

export default { index, search };
