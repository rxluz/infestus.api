import User from '../models/user.model';

const ObjectId = require('mongoose').Types.ObjectId;

const checkUserID = (req, res, next) => {
  return User.find({ _id: req.params.userID })
    .then(user => (user
      ? next()
      : res.status(404).send()
    ))
    .catch(() => res.status(404).send());
};

const checkAlreadyFollowed = (req, res, next) => {
  return (
    !req.user.following
      ? next()
      : (
          (req.user.following
            .filter(c => c.toString() === req.params.userID)
          ).length > 0
            ? res.status(412).send()
            : next()
      )
  );
};

const checkAlreadyUnfollowed = (req, res, next) => {
  return (
    !req.user.following
      ? next()
      : (
          (req.user.following
            .filter(c => c.toString() === req.params.userID)
          ).length > 0
            ? next()
            : res.status(412).send()
      )
  );
};

export default { checkUserID, checkAlreadyUnfollowed, checkAlreadyFollowed };
