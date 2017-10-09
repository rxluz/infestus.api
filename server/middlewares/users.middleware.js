import User from '../models/user.model';

const checkUserID = (req, res, next) =>
  User.find({ _id: req.params.userID })
    .then(user => (user
      ? next()
      : res.status(404).send()
    ))
    .catch(() => res.status(404).send());

const checkAlreadyFollowed = (req, res, next) => (
  !req.user.following ||
  (req.user.following.filter(c => c.toString() === req.params.userID)).length === 0
    ? next()
    : res.status(412).send()
);

const checkAlreadyUnfollowed = (req, res, next) => (
  req.user.following &&
  (req.user.following.filter(c => c.toString() === req.params.userID)).length > 0
    ? next()
    : res.status(412).send()
);

export default { checkUserID, checkAlreadyUnfollowed, checkAlreadyFollowed };
