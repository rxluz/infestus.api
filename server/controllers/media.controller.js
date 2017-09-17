/**
 * Get the featured medias
 * @returns {medias}
 */
function featured(req, res) {
  return res.json({ hello: 'media_featured' });
}

/**
 * Creates a new media
 * @returns {media}
 */
function create(req, res) {
  return res.json({ hello: 'media_create' });
}

/**
 * Update the selected media
 * @returns {media}
 */
function update(req, res) {
  return res.json({ hello: 'media_update' });
}

/**
 * Delete the selected media
 * @returns {media}
 */
function remove(req, res) {
  return res.json({ hello: 'media_remove' });
}

/**
 * Get the selected media infos
 * @returns {media}
 */
function get(req, res) {
  return res.json({ hello: 'media_get' });
}

/**
 * Get the selected media comments
 * @returns {comments}
 */
function getComments(req, res) {
  return res.json({ hello: 'media_getComments' });
}

/**
 * Post a comment in selected media
 * @returns {*}
 */
function createComment(req, res) {
  return res.json({ hello: 'media_createComment' });
}

/**
 * Remove a comment in selected media
 * @returns {*}
 */
function removeComment(req, res) {
  return res.json({ hello: 'media_removeComment' });
}

/**
 * Post a flag in selected media
 * @returns {*}
 */
function createFlag(req, res) {
  return res.json({ hello: 'media_flag' });
}

/**
 * Remove flag in selected media
 * @returns {*}
 */
function removeFlag(req, res) {
  return res.json({ hello: 'media_removeFlag' });
}

/**
 * Post a flag in comment in selected media
 * @returns {*}
 */
function createCommentFlag(req, res) {
  return res.json({ hello: 'media_Commentflag' });
}

/**
 * Remove flag in a comment in selected media
 * @returns {*}
 */
function removeCommentFlag(req, res) {
  return res.json({ hello: 'media_CommentremoveFlag' });
}

/**
 * Get likes list in selected media
 * @returns {*}
 */
function getLike(req, res) {
  return res.json({ hello: 'media_getLike' });
}

/**
 * Post a like in selected media
 * @returns {*}
 */
function createLike(req, res) {
  return res.json({ hello: 'media_createLike' });
}

/**
 * Remove a like in selected media
 * @returns {*}
 */
function removeLike(req, res) {
  return res.json({ hello: 'media_removeLike' });
}

export default {
  featured,
  create,
  update,
  remove,
  get,
  getComments,
  createComment,
  removeComment,
  createFlag,
  removeFlag,
  createCommentFlag,
  removeCommentFlag,
  getLike,
  createLike,
  removeLike
};
