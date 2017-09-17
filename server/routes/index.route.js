import express from 'express';
import userRoutes from './user.route';
import usersRoutes from './users.route';
import authRoutes from './auth.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /user
router.use('/user', userRoutes);

// mount user routes at /users
router.use('/users', usersRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

export default router;
