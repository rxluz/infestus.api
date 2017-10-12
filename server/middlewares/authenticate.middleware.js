import User from '../models/user.model';

const authenticate = (req, res, next) => {
  const token = req.header('x-auth');

  return !global.userID
    ? User.findByToken(token)
      .then((user) => {

        if (!user) {
          return res.status(401).send();
        }

        global.userID = user._id;
        req.user = user;
        req.token = token;
        return next();
      })
      .catch(() => res.status(401).send())
    : next();
};

export { authenticate as default };
