/**
 * Get the list of recent artists
 * @returns {artists}
 */
function recent(req, res) {
  return res.json({ hello: 'artists_recent' });
}

/**
 * Get the list of featured artists
 * @returns {artists}
 */
function featured(req, res) {
  return res.json({ hello: 'artists_featured' });
}

/**
 * Get the selected user about infos
 * @returns {User}
 */
function about(req, res) {
  return res.json({ hello: 'artists_about' });
}

/**
 * Get the selected user medias
 * @returns {User}
 */
function medias(req, res) {
  return res.json({ hello: 'artists_medias' });
}

/**
 * Follow the selected user
 * @returns {User}
 */
function follow(req, res) {
  return res.json({ hello: 'artists_follow' });
}

/**
 * Unfollow the selected user
 * @returns {User}
 */
function followDelete(req, res) {
  return res.json({ hello: 'artists_followDelete' });
}


export default { recent, featured, about, medias, follow, followDelete };
