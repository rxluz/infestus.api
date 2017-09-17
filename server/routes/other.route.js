import express from 'express';
import otherCtrl from '../controllers/other.controller';
import validate from 'express-validation';
import paramOtherValidation from '../requests/other-param-validation';

const router = express.Router(); // eslint-disable-line new-cap

/**
 * POST /api/other/feedback
 * Post the user feedback
 */
router.route('/feedback')
  .post(validate(paramOtherValidation.createFeedback), otherCtrl.createFeedback);


export default router;
