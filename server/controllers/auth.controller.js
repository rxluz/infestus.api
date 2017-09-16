//import jwt from 'jsonwebtoken';
//import httpStatus from 'http-status';
//import APIError from '../helpers/APIError';
//import config from '../../config/config';

// // sample user, used for authentication
// const user = {
//   username: 'react',
//   password: 'express'
// };

/**
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function login(req, res, next) {
  // Ideally you'll fetch this from the db
  // Idea here was to show how jwt works with simplicity

  return res.json({hello:'login'});

  // if (req.body.username === user.username && req.body.password === user.password) {
  //   const token = jwt.sign({
  //     username: user.username
  //   }, config.jwtSecret);
  //   return res.json({
  //     token,
  //     username: user.username
  //   });
  // }
  //
  // const err = new APIError('Authentication error', httpStatus.UNAUTHORIZED, true);
  // return next(err);
}

/**
 * Send to user email a code to recover the password
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function recoverRequest(req, res, next) {
  // Ideally you'll fetch this from the db
  // Idea here was to show how jwt works with simplicity

  return res.json({hello:'recoverRequest'});

}

/**
 * Check the code, if the code is right generates a valid jwt to user
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function recoverRestore(req, res, next) {
  // Ideally you'll fetch this from the db
  // Idea here was to show how jwt works with simplicity

  return res.json({hello:'recoverRestore'});

}

/**
 * This is a protected route. Will return random number only if jwt token is provided in header.
 * @param req
 * @param res
 * @returns {*}
 */
function getRandomNumber(req, res) {
  // req.user is assigned by jwt middleware if valid token is provided
  return res.json({
    user: req.user,
    num: Math.random() * 100
  });
}

export default { login, getRandomNumber, recoverRequest, recoverRestore };
