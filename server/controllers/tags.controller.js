/**
 * Get the list of recent tags
 * @returns {tags}
 */
function recent(req, res) {
  return res.json({ hello: 'tags_recent' });
}

/**
 * Get the list of featured tags
 * @returns {tags}
 */
function featured(req, res) {
  return res.json({ hello: 'tags_featured' });
}

/**
 * Get the selected tags medias
 * @returns {medias}
 */
function medias(req, res) {
  return res.json({ hello: 'tags_medias' });
}

export default { recent, featured, medias };
