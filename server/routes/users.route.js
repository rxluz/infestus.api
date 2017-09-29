import express from 'express';
import usersCtrl from '../controllers/users.controller';
import usersIDRoutes from './users.id.route';

const router = express.Router(); // eslint-disable-line new-cap

/**
  * GET /api/users/recent
  * Get a list of recent users
  */
router.route('/recent').get(usersCtrl.recent);

/**
  * GET /api/users/featured
  * Get a list of featured users
  */
router.route('/featured').get(usersCtrl.featured);


// mount user routes at /users
router.use('/:userID', usersIDRoutes);


export default router;
