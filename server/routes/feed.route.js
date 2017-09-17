import express from 'express';
import feedCtrl from '../controllers/feed.controller';

const router = express.Router(); // eslint-disable-line new-cap

/**
  * GET /api/feed
  * Get the user feed
  */
router.route('/').get(feedCtrl.index);

/**
  * GET /api/feed/search/:term
  * Get the results of user search
  */
router.route('/search/:term').get(feedCtrl.search);


export default router;
