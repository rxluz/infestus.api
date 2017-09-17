/**
 * Get the user feed
 * @returns {feed}
 */
function index(req, res) {
  return res.json({ hello: 'feed_index' });
}

/**
 * Get the result of user search
 * @returns {results}
 */
function search(req, res) {
  return res.json({ hello: 'feed_search' });
}

export default { index, search };
