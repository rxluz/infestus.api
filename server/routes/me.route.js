import express from 'express';
import validate from 'express-validation';
import meRequest from '../requests/me.request';
import meCtrl from '../controllers/me.controller';
import authenticate from '../middlewares/authenticate.middleware';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /**
    * GET /api/user
    * Get personal user of current user
    */
  .get(authenticate, meCtrl.get)

  /**
   * POST /api/user
   * Create new user
   */
  .post(validate(meRequest.create), meCtrl.create)

  /**
    * PUT /api/user
    * Update the current user infos
    */
  .put(authenticate, validate(meRequest.update), meCtrl.update)

  /**
    * DELETE /api/user
    * Disable the current user infos
    */
  .delete(authenticate, validate(meRequest.disable), meCtrl.disable);


router.route('/password')
  /**
    * PUT /api/user/password
    * Change the current user password
    */
  .put(authenticate, validate(meRequest.updatePassword), meCtrl.updatePassword);


router.route('/media')
  /**
    * GET /api/user/media
    * Retrieves the current user media
    */
  .get(authenticate, meCtrl.getMedia);

router.route('/followers')
  /**
    * GET /api/user/followers
    * Retrieves the current user followers
    */
  .get(authenticate, meCtrl.getFollowers);

router.route('/following')
  /**
    * GET /api/user/following
    * Retrieves the current user following users
    */
  .get(authenticate, meCtrl.getFollowing);

export default router;
