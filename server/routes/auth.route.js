import express from 'express';
import validate from 'express-validation';
import authRequest from '../requests/auth.request';
import authCtrl from '../controllers/auth.controller';
import authenticate from '../middlewares/authenticate.middleware';

const router = express.Router(); // eslint-disable-line new-cap

/**
  * POST /api/auth/login
  * Returns token if correct username and password is provided
  */
router.route('/login')
  .post(validate(authRequest.login), authCtrl.login);

/**
  * DELETE /api/auth/logout
  * Returns token if correct username and password is provided
  */
router.route('/logout')
  .delete(authenticate, authCtrl.logout);

/**
  * POST /api/auth/recover/request
  */
router.route('/recover/request')
  .post(validate(authRequest.recoverRequest), authCtrl.recoverRequest);

/**
  * GET /api/auth/recover/restore/:code
  * Return a valid token if the code is valid
  */
router.route('/recover/restore/:code')
  .put(validate(authRequest.recoverRestore), authCtrl.recoverRestore);


/**
  * POST /api/auth/recover/check/:code
  * Check if the code is valid
  */
router.route('/recover/check/:code')
  .post(validate(authRequest.recoverCheck), authCtrl.recoverCheck);

/** GET /api/auth/random-number - Protected route,
 * needs token returned by the above as header. Authorization: Bearer {token} */
// router.route('/random-number')
//   .get(expressJwt({ secret: config.jwtSecret }), authCtrl.getRandomNumber);

export default router;
