import express from 'express';
import userRoutes from './user.route';
import usersRoutes from './users.route';
import artistsRoutes from './artists.route';
import tagsRoutes from './tags.route';
import feedRoutes from './feed.route';
import otherRoutes from './other.route';
import mediaRoutes from './media.route';
import authRoutes from './auth.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /user
router.use('/user', userRoutes);

// mount users routes at /users
router.use('/users', usersRoutes);

// mount artists routes at /artists
router.use('/artists', artistsRoutes);

// mount tags routes at /tags
router.use('/tags', tagsRoutes);

// mount feed routes at /feed
router.use('/feed', feedRoutes);

// mount other routes at /other
router.use('/other', otherRoutes);


// mount media routes at /media
router.use('/media', mediaRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

export default router;
