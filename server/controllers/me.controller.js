import _ from 'lodash';
import bcrypt from 'bcrypt';

import User from '../models/user.model';


/**
 * Get current user infos
 * @returns {User}
 */
function get(req, res) {
  return res.json(req.user);
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
  //console.log(req.body);
  var body = _.pick( req.body, ['nickname', 'email', 'password'] );

  var user = new User (body);

  user
  .save()
  .then(() => { return user.generateAuthToken(); })
  .then((token) => { res.header('x-auth', token).send(user); })
  .catch((e) => { res.status(400).send(e); });
}

/**
 * Update existing user
 * @property {string} req.body.nickname - The username of user.
 * @property {string} req.body.email - The email of user.
 * @property {string} req.body.password - The password of user.
 * @returns {User}
 */
function update(req, res) {
  var body = _.pick( req.body, ['nickname', 'email', 'bio'] );

  req.user.set(body).save((err, doc) => {
    if(err) res.status(400).send(err);

    res.send(doc);
  });
}

/**
 * Update existing user password
 * @property {string} req.body.current_password - The current password.
 * @property {string} req.body.new_password - The new password.
 * @returns {User}
 */
function updatePassword(req, res) {
  bcrypt.compare(req.body.current_password, req.user.password, function(err, rs) {
      if(!rs) return res.status(401).send(err);

      req.user.set({password:req.body.new_password}).save((err, doc) => {
        if(err) res.status(400).send(err);

        res.send(doc);
      });
  });
}


/**
 * Disable current user.
 * @property {string} req.body.reason - The user reason to cancel the account.
 * @property {string} req.body.password - The user password.

 * @returns {User}
 */
function disable(req, res) {
  bcrypt.compare(req.body.password, req.user.password, function(err, rs) {
      if(!rs) return res.status(401).send(err);

      req.user.set({active:false}).save((err, doc) => {
        if(err) res.status(400).send(err);

        res.send(doc);
      });
  });
}


export default {
  get,
  getMedia,
  getFollowers,
  getFollowing,
  create,
  update,
  updatePassword,
  disable
};
