import express from 'express';
import validate from 'express-validation';
import expressJwt from 'express-jwt';
import paramAuthValidation from '../requests/auth-param-validation';
import authCtrl from '../controllers/auth.controller';
import config from '../../config/config';

const router = express.Router(); // eslint-disable-line new-cap

/** POST /api/auth/login - Returns token if correct username and password is provided */
router.route('/')
  .post(validate(paramAuthValidation.login), authCtrl.login);

/** POST /api/auth/recover/request */
router.route('/recover/request')
  .post(validate(paramAuthValidation.recoverRequest), authCtrl.recoverRequest);

/** POST /api/auth/recover/restore/:code - Return a valid token if the code is valid */
router.route('/recover/restore/:code')
  .get(validate(paramAuthValidation.recoverRestore), authCtrl.recoverRestore);

/** GET /api/auth/random-number - Protected route,
 * needs token returned by the above as header. Authorization: Bearer {token} */
// router.route('/random-number')
//   .get(expressJwt({ secret: config.jwtSecret }), authCtrl.getRandomNumber);

export default router;
