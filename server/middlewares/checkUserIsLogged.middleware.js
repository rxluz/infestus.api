import User from '../models/user.model';

const checkUserIsLogged = (req, res, next) => {
  if (req.header('x-auth')) {
    const token = req.header('x-auth');

    return User
      .findByToken(token)
      .then((err, user) => {
        if (!user) return next();
        global.userID = user._id;
        req.user = user;
        req.token = token;
        return next();
      })
      .catch(() => res.status(401).send());
  }

  return next();
};

export { checkUserIsLogged as default };
