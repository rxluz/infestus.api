import express from 'express';
import meRoutes from './me.route';
import usersRoutes from './users.route';
import artistsRoutes from './artists.route';
import tagsRoutes from './tags.route';
import feedRoutes from './feed.route';
import otherRoutes from './other.route';
import mediaRoutes from './media.route';
import authRoutes from './auth.route';
import checkUserIsLogged from '../middlewares/checkUserIsLogged.middleware';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /user
router.use('/me', checkUserIsLogged, meRoutes);

// mount users routes at /users
router.use('/users', checkUserIsLogged, usersRoutes);

// mount artists routes at /artists
router.use('/artists', checkUserIsLogged, artistsRoutes);

// mount tags routes at /tags
router.use('/tags', checkUserIsLogged, tagsRoutes);

// mount feed routes at /feed
router.use('/feed', checkUserIsLogged, feedRoutes);

// mount other routes at /other
router.use('/other', checkUserIsLogged, otherRoutes);


// mount media routes at /media
router.use('/media', checkUserIsLogged, mediaRoutes);

// mount auth routes at /auth
router.use('/auth', checkUserIsLogged, authRoutes);

export default router;
