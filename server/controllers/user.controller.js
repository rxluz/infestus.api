// import User from '../models/user.model';

/**
 * Get current user infos
 * @returns {User}
 */
function get(req, res) {
  return res.json({ hello: 'getinfo' });
}

/**
 * Get current user medias
 * @returns {User}
 */
function getMedia(req, res) {
  return res.json({ hello: 'getMedia' });
}

/**
 * Get current user followers
 * @returns {User}
 */
function getFollowers(req, res) {
  return res.json({ hello: 'getFollowers' });
}

/**
 * Get current user following users
 * @returns {User}
 */
function getFollowing(req, res) {
  return res.json({ hello: 'getFollowing' });
}

/**
 * Create new user
 * @property {string} req.body.nickname - The username of user.
 * @property {string} req.body.email - The email of user.
 * @property {string} req.body.password - The password of user.
 * @returns {User}
 */
function create(req, res) {
  return res.json({ hello: 'create' });
}

/**
 * Update existing user
 * @property {string} req.body.nickname - The username of user.
 * @property {string} req.body.email - The email of user.
 * @property {string} req.body.password - The password of user.
 * @returns {User}
 */
function update(req, res) {
  return res.json({ hello: 'update' });
}

/**
 * Update existing user password
 * @property {string} req.body.current_password - The current password.
 * @property {string} req.body.new_password - The new password.
 * @returns {User}
 */
function updatePassword(req, res) {
  return res.json({ hello: 'updatePassword' });
}


/**
 * Disable current user.
 * @property {string} req.body.reason - The user reason to cancel the account.
 * @property {string} req.body.password - The user password.

 * @returns {User}
 */
function disable(req, res) {
  return res.json({ hello: 'disable' });
}


export default { get, getMedia, getFollowers, getFollowing, create, update, updatePassword, disable };
