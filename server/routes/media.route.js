import express from 'express';
import mediaCtrl from '../controllers/media.controller';
import mediaIDRoutes from './media.id.route';
import validate from 'express-validation';
import paramMediaValidation from '../requests/media-param-validation';

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
  .post(validate(paramMediaValidation.create), mediaCtrl.create);

// mount user routes at /artists
router.use('/:mediaID', mediaIDRoutes);

export default router;
