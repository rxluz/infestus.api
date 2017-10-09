import _ from 'lodash';
import cloudinary from 'cloudinary';
import bcrypt from 'bcrypt';
import User from '../models/user.model';
import Media from '../models/media.model';

/**
 * Get current user infos
 * @returns {User}
 */
function get(req, res) {
  req.user.likesReceveid = 0;
  return res.json(req.user);
}

/**
 * Get current user medias
 * @returns {User}
 */
function getMedia(req, res) {
  return Media
    .findByUser(req.user._id)
    .populate('owner', 'nickname picture _id about')
    .populate('comments.owner', 'nickname picture _id about')
    .populate('artist', 'name')
    .sort('-createdAt')
    .then(media => (
      (media && media.length > 0)
        ? res.json(getMediaResponse(media))
        : res.status(404).send({})
    ));
}

function getMediaResponse(media) {
  return media.map((m) => {
    m.likesTotal = m.likes ? m.likes.length : 0;
    m.commentsTotal = m.comments ? m.comments.length : 0;

    m.picture = (m.picture !== ''
      ? cloudinary.url(m.picture, { width: 500, height: 500 })
      : m.picture);

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
 * Get current user followers
 * @returns {User}
 */
function getFollowers(req, res) {
  return User.find({ following: req.user._id })
    .select('_id nickname picture')
    .then(a =>
      (a
        ? res.send(
          (
            aa => ({
              total: aa.length,
              followers: aa
            })
          )(a))
        : res.status(404).send()
      )
    )
    .catch(e => res.status(500).send(e));
}

/**
 * Get current user following users
 * @returns {User}
 */
function getFollowing(req, res) {
  return User.findOne({ _id: req.user._id })
    .select('following')
    .populate('following', 'nickname picture _id')
    .then(a =>
      (a
        ? res.send((
          aa => ({
            total: aa.following.length,
            following: aa.following
          })
        )(a))
        : res.status(404).send()
      )
    )
    .catch(e => res.status(500).send(e));
}

/**
 * Create new user
 * @property {string} req.body.nickname - The username of user.
 * @property {string} req.body.email - The email of user.
 * @property {string} req.body.password - The password of user.
 * @returns {User}
 */
function create(req, res) {
  const body = _.pick(req.body, ['nickname', 'email', 'password']);
  const user = new User(body);

  user
    .save()
    .then(() => user.generateAuthToken())
    .then(token => res.header('x-auth', token).send({ token, user }))
    .catch(e => res.status(400).send(e));
}

/**
 * Update existing user
 * @property {string} req.body.nickname - The username of user.
 * @property {string} req.body.email - The email of user.
 * @property {string} req.body.password - The password of user.
 * @returns {User}
 */
function update(req, res) {
  const body = _.pick(req.body, ['nickname', 'email', 'bio', 'picture']);

  req.user
    .set(body)
    .save((err, doc) => (err ? res.status(400).send(err) : res.send(doc)));
}

/**
 * Update existing user password
 * @property {string} req.body.current_password - The current password.
 * @property {string} req.body.new_password - The new password.
 * @returns {User}
 */
function updatePassword(req, res) {
  return bcrypt.compare(req.body.current_password, req.user.password, (err, rs) => {
    if (!rs) return res.status(401).send(err);

    return req.user.set({ password: req.body.new_password }).save((errr, doc) => {
      if (errr) return res.status(400).send(errr);

      return res.send(doc);
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
  return bcrypt.compare(req.body.password, req.user.password,
    (err, rs) => (
      rs
        ? req.user.set({ active: false })
          .save((errr, doc) => (
            errr
              ? res.status(400).send(errr)
              : res.send(doc)
          ))
        : res.status(401).send(err)
    )
  );
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
