import express from 'express';
import artistsCtrl from '../controllers/artists.controller';

import artistsIDRoutes from './artists.id.route';

const router = express.Router(); // eslint-disable-line new-cap

/**
  * GET /api/artists/recent
  * Get a list of recent artists
  */
router.route('/recent')
  .get(artistsCtrl.recent);

/**
  * GET /api/artists/featured
  * Get a list of featured artists
  */
router.route('/featured')
  .get(artistsCtrl.featured);


// mount user routes at /artists
router.use('/:artistID', artistsIDRoutes);


export default router;
