import _ from 'lodash';
import cloudinary from 'cloudinary';

import User from '../models/user.model';
import Media from '../models/media.model';

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
  return User
    .findOne({ _id: req.params.userID })
    .select('nickname bio picture createdAt')
    .then(user => (
      user
        ? res.send(
          (
            u => ({
              _id: u._id,
              nickname: u.nickname,
              bio: u.bio,
              picture: (u.picture !== ''
                ? cloudinary.url(u.picture, { width: 500, height: 500 })
                : u.picture),
              createdAt: u.createdAt,
              following: isFollowing(req, u._id.toString())
            })
          )(user)
        )
        : res.status(404).send()
    ))
    .catch(() => res.status(404).send());
}

function isFollowing(req, userID) {
  return (req.user && req.user.following)
    ? (req.user.following.filter(fl => fl.toString() === userID)).length > 0
    : false;
}

/**
 * Get the selected user medias
 * @returns {User}
 */
function medias(req, res) {
  return Media
    .findByUser(req.params.userID)
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
  return media.map((mm) => _.pick(
    (m => {
      m.likesTotal =
        m.likes
          ? m.likes.length
          : 0;

      m.commentsTotal =
        m.comments
          ? m.comments.length
          : 0;

      m.picture = (m.picture !== ''
        ? cloudinary.url(m.picture, { width: 500, height: 500 })
        : m.picture);


      if (m.comments) {
        m.comments = m.comments.slice(0, 2).map((mm_) => {
          mm_.id = undefined;
          mm_.flags = undefined;
          return mm;
        });
      }

      return m;
    })(mm),
    ['_id', 'picture', 'owner', 'artist', 'title',
    'createdAt', 'place', 'comments', 'commentsTotal',
    'likesTotal', 'isLiked', 'isFlagged']
  ));
}

/**
 * Follow the selected user
 * @returns {User}
 */
function follow(req, res) {
  req.user.following.push(req.params.userID);
  return req.user.save()
    .then(u => res.send(u))
    .catch(() => res.status(500).send());
}

/**
 * Unfollow the selected user
 * @returns {User}
 */
function followDelete(req, res) {
  req.user.following = req.user.following.filter(fl => fl.toString() !== req.params.userID);
  return req.user.save()
    .then(u => res.send(u))
    .catch(() => res.status(500).send());
}


export default { recent, featured, about, medias, follow, followDelete };
