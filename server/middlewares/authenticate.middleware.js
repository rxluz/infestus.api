import User from '../models/user.model';

const authenticate = (req, res, next) => {
  const token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();

    return true;
  }).catch(() => res.status(401).send());
};

export { authenticate as default };
