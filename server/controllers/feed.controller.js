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
    .slice('comments', [0, 2])
    .limit(20)
    .then(data => res.send(data));
}

/**
 * Get the result of user search
 * @returns {results}
 */
function search(req, res) {
  return res.json({ hello: 'feed_search' });
}

export default { index, search };
