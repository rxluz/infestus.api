import User from '../models/user.model';

/**
 * Get current user infos
 * @returns {User}
 */
function get(req, res) {
  return res.json({hello:'getinfo'});
  // return res.json(req.user);
}

/**
 * Create new user
 * @property {string} req.body.nickname - The username of user.
 * @property {string} req.body.email - The email of user.
 * @property {string} req.body.password - The password of user.
 * @returns {User}
 */
function create(req, res, next) {
  return res.json({hello:'create'});
  // const user = new User({
  //   username: req.body.username,
  //   mobileNumber: req.body.mobileNumber
  // });
  //
  // user.save()
  //   .then(savedUser => res.json(savedUser))
  //   .catch(e => next(e));
}

/**
 * Update existing user
 * @property {string} req.body.nickname - The username of user.
 * @property {string} req.body.email - The email of user.
 * @property {string} req.body.password - The password of user.
 * @returns {User}
 */
function update(req, res, next) {
  return res.json({hello:'update'});
  // const user = req.user;
  // user.username = req.body.username;
  // user.mobileNumber = req.body.mobileNumber;
  //
  // user.save()
  //   .then(savedUser => res.json(savedUser))
  //   .catch(e => next(e));
}



/**
 * Disable current user.
 * @property {string} req.body.reason - The user reason to cancel the account.
 * @property {string} req.body.password - The user password.

 * @returns {User}
 */
function disable(req, res, next) {
  return res.json({hello:'disable'});
  // const user = req.user;
  // user.remove()
  //   .then(deletedUser => res.json(deletedUser))
  //   .catch(e => next(e));
}

export default { get, create, update, disable };
