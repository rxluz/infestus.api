import express from 'express';
import usersCtrl from '../controllers/users.controller';
import authenticate from '../middlewares/authenticate.middleware';
import usersMdwr from '../middlewares/users.middleware';

const router = express.Router({ mergeParams: true }); // eslint-disable-line new-cap

/**
  * GET /api/users/{user-id}/about
  * isFlagged, isOwner, isLiked, LikesAmounts
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
  .post(authenticate, usersMdwr.checkAlreadyFollowed, usersCtrl.follow)
  /**
    * DELETE /api/users/{user-id}/follow
    * Unfollow the selected user
    */
  .delete(authenticate, usersMdwr.checkAlreadyUnfollowed, usersCtrl.followDelete);


export default router;
