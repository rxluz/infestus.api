import express from 'express';
import tagsCtrl from '../controllers/tags.controller';

const router = express.Router(); // eslint-disable-line new-cap

/**
 * GET /api/tags/recent
 * Get a list of recent tags
 */
router.route('/recent').get(tagsCtrl.recent);

/**
  * GET /api/tags/featured
  * Get a list of featured tags
  */
router.route('/featured').get(tagsCtrl.featured);

/**
  * GET /api/tags/{tag-id}/medias
  * Get medias by tag id
  */
router.route('/:tagID/medias').get(tagsCtrl.medias);


export default router;
