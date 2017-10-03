/**
 * Get the list of recent users
 * @returns {Users}
 */
function recent(req, res) {
  return res.json({ hello: 'recent' });
}

/**
 * Get the list of featured users
 * @returns {Users}
 */
function featured(req, res) {
  return res.json({ hello: 'featured' });
}

/**
 * Get the selected user about infos
 * @returns {User}
 */
function about(req, res) {
  // return User.find({_id: req.params})
  return res.json({ hello: 'about' });
}

/**
 * Get the selected user medias
 * @returns {User}
 */
function medias(req, res) {
  return res.json({ hello: 'medias' });
}

/**
 * Follow the selected user
 * @returns {User}
 */
function follow(req, res) {
  return res.json({ hello: 'follow' });
}

/**
 * Unfollow the selected user
 * @returns {User}
 */
function followDelete(req, res) {
  return res.json({ hello: 'followDelete' });
}


export default { recent, featured, about, medias, follow, followDelete };
