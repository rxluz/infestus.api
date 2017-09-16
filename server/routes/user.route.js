import express from 'express';
import validate from 'express-validation';
import paramUserValidation from '../requests/user-param-validation';
import userCtrl from '../controllers/user.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/user - Get personal user of current user */
  .get(userCtrl.get)

  /** POST /api/user - Create new user */
  .post(validate(paramUserValidation.createUser), userCtrl.create)

  /** PUT /api/user - Update the current user infos */
  .put(validate(paramUserValidation.updateUser), userCtrl.update)

  /** DELETE /api/user - Disable the current user infos */
  .delete(validate(paramUserValidation.disableUser), userCtrl.disable);


export default router;
