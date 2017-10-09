// import mongoose from 'mongoose';
import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';
import app from '../../../index';
import auxs from '../../helpers/auxs.helper';
// import Joi from 'joi';
// import joiAssert from 'joi-assert';

chai.config.includeStack = true;

/**
 * root level hooks
 */
// after((done) => {
//   // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
//   mongoose.models = {};
//   mongoose.modelSchemas = {};
//   mongoose.connection.close();
//   done();
// });

describe('## [contract] ME APIs', () => {
  const nickname = `KK123${auxs.getRandomInt(1, 1000)}`;
  const email = `${auxs.getRandomInt(1, 1000)}@email.com`;
  const user = {
    nickname,
    email,
    password: '1234567890'
  };

  describe('# POST /api/me', () => {
    it('should allow the user creation', (done) => {
      request(app)
        .post('/api/me')
        .send(user)
        .expect(httpStatus.OK)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });
});
