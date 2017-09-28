import express from 'express';
import validate from 'express-validation';

import otherCtrl from '../controllers/other.controller';
import otherRequest from '../requests/other.request';

const router = express.Router(); // eslint-disable-line new-cap

/**
 * POST /api/other/feedback
 * Post the user feedback
 */
router.route('/feedback')
  .post(validate(otherRequest.createFeedback), otherCtrl.createFeedback);


export default router;
