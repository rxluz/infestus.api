import express from 'express';
import usersCtrl from '../controllers/users.controller';
import {authenticate} from '../middlewares/authenticate.middleware';


const router = express.Router(); // eslint-disable-line new-cap

/**
  * GET /api/users/{user-id}/about
  * Get the selected user about
  */
router.route('/about')
  .get(usersCtrl.about);

/**
  * GET /api/users/{user-id}/medias
  * Get the selected user medias
  */
router.route('/medias')
  .get(usersCtrl.medias);


router.route('/follow')
  /**
    * POST /api/users/{user-id}/follow
    * Follow the selected user
    */
  .post(authenticate, usersCtrl.follow)
  /**
    * DELETE /api/users/{user-id}/follow
    * Unfollow the selected user
    */
  .delete(authenticate, usersCtrl.followDelete);


export default router;
