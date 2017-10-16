import express from 'express';
import validate from 'express-validation';
import mediaCtrl from '../controllers/media.controller';
import mediaIDRoutes from './media.id.route';
import mediaRequest from '../requests/media.request';
import authenticate from '../middlewares/authenticate.middleware';
import mediaMdwr from '../middlewares/medias.middleware';


const router = express.Router(); // eslint-disable-line new-cap

/**
 * GET /api/media
 * Get the featured medias list
 */
router.route('/featured').get(mediaCtrl.featured);

/**
 * POST /api/media
 * Post a new media
 */
router.route('/')
  .post(authenticate, validate(mediaRequest.create), mediaCtrl.create);

// mount user routes at /artists
router.use('/:mediaID', mediaMdwr.checkMediaID, mediaIDRoutes);

export default router;
