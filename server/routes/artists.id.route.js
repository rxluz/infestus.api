import express from 'express';
import artistsCtrl from '../controllers/artists.controller';
import authenticate from '../middlewares/authenticate.middleware';

const router = express.Router(); // eslint-disable-line new-cap

/**
  * GET /api/artists/{user-id}/about
  * Get the selected user about
  */
router.route('/about')
  .get(artistsCtrl.about);

/**
  * GET /api/artists/{user-id}/medias
  * Get the selected user medias
  */
router.route('/medias')
  .get(artistsCtrl.medias);


router.route('/follow')
  /**
    * POST /api/artists/{user-id}/follow
    * Follow the selected user
    */
  .post(authenticate, artistsCtrl.follow)
  /**
    * DELETE /api/artists/{user-id}/follow
    * Unfollow the selected user
    */
  .delete(authenticate, artistsCtrl.followDelete);


export default router;
