import express from 'express';
import validate from 'express-validation';
import paramUserValidation from '../requests/user-param-validation';
import userCtrl from '../controllers/user.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/user - Get personal user of current user */
  .get(userCtrl.get)

  /** POST /api/user - Create new user */
  .post(validate(paramUserValidation.create), userCtrl.create)

  /** PUT /api/user - Update the current user infos */
  .put(validate(paramUserValidation.update), userCtrl.update)

  /** DELETE /api/user - Disable the current user infos */
  .delete(validate(paramUserValidation.disable), userCtrl.disable);


router.route('/password')
  /** PUT /api/user/password - Change the current user password */
  .put(validate(paramUserValidation.updatePassword), userCtrl.updatePassword);


router.route('/media')
  /** GET /api/user/media - Retrieves the current user media */
  .get(userCtrl.getMedia);

router.route('/followers')
  /** GET /api/user/followers - Retrieves the current user followers */
  .get(userCtrl.getFollowers);

router.route('/following')
  /** GET /api/user/following - Retrieves the current user following users */
  .get(userCtrl.getFollowing);



export default router;
