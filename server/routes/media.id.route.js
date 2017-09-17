import express from 'express';
import validate from 'express-validation';
import paramMediaValidation from '../requests/media-param-validation';
import mediaCtrl from '../controllers/media.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /**
   * GET /api/media/{media-id}
   * Get selected media infos
   */
  .get(mediaCtrl.get)
  /**
    * PUT /api/media/{media-id}
    * Update selected media
    */
  .put(validate(paramMediaValidation.update), mediaCtrl.update)
  /**
    * DELETE /api/media/{media-id}
    * Delete selected media
    */
  .delete(mediaCtrl.remove);

router.route('/comments')
  /**
    * GET /api/media/{media-id}/comments
    * Get selected media commments
    */
  .get(mediaCtrl.getComments)
  /**
   * POST /api/media/{media-id}/commments
   * Post a commment in selected media
   */
  .post(validate(paramMediaValidation.createComment), mediaCtrl.createComment);

/**
  * DELETE /api/media/{media-id}/comments
  * Removes a comment from selected media
  */
router.route('/comments/:commentID').delete(mediaCtrl.removeComment);

router.route('/comments/:commentID/flag')
  /**
   * POST /api/media/{media-id}/comments/{comment-id}/flag
   * Flag a comment from selected media
   */
  .post(mediaCtrl.createCommentFlag)
  /**
   * DELETE /api/media/{media-id}/comments/{comment-id}/flag
   * Removes flag a comment from selected media
   */
  .delete(mediaCtrl.removeCommentFlag);

router.route('/like')
  /**
   * GET /api/media/{media-id}/comments/{comment-id}/like -
   * List the likes from selected media
   */
  .get(mediaCtrl.getLike)
  /**
   * POST /api/media/{media-id}/comments/{comment-id}/like
   * Like a comment from selected media
   */
  .post(mediaCtrl.createLike)
  /**
   * DELETE /api/media/{media-id}/comments/{comment-id}/like
   * Removes a like in a comment from selected media
   */
  .delete(mediaCtrl.removeLike);

router.route('/flag')
  /**
    * POST /api/media/{media-id}/flag
    * Post a flag in selected media
    */
  .post(mediaCtrl.createFlag)
  /**
   * DELETE /api/media/{media-id}/flag
   * Post a flag in selected media
   */
  .delete(mediaCtrl.removeFlag);

export default router;
