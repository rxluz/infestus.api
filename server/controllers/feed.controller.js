import _ from 'lodash';
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
    .populate('artist', 'name')
    .sort('-createdAt')
    .limit(20)
    .then(data => res.send(getMediaResponse(data)));
}

function getMediaResponse(media) {
  return media.map((m) => {
    m.likesTotal = m.likes ? m.likes.length : 0;
    m.commentsTotal = m.comments ? m.comments.length : 0;

    if (m.comments) {
      m.comments = m.comments.slice(0, 2).map((mm) => {
        mm.id = undefined;
        mm.flags = undefined;
        return mm;
      });
    }
    m.likes = undefined;

    return _.pick(m, ['_id', 'picture', 'owner', 'artist', 'title', 'createdAt', 'place', 'comments', 'commentsTotal', 'likes', 'likesTotal', 'isLiked', 'isFlagged']);
  });
}

/**
 * Get the result of user search
 * @returns {results}
 */
function search(req, res) {
  return res.json({ hello: 'feed_search' });
}

export default { index, search };
