// import mongoose from 'mongoose';
import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';
import Joi from 'joi';
import joiAssert from 'joi-assert';

import app from '../../../../index';
import auxs from '../../../helpers/auxs.helper';

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
    ok: {
      nickname,
      email,
      password: '1234567890'
    },

    withoutNickname: {
      email,
      password: '1234567890'
    },

    withInvalidEmail: {
      nickname,
      email: 'invalidemail',
      password: '1234567890'
    },

    withoutPassword: {
      nickname,
      email
    }
  };


  describe('# POST /api/me', () => {
    it('should block the user creation - no data sended', (done) => {
      request(app)
        .post('/api/me')
        .send({})
        .expect(httpStatus.BAD_REQUEST)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# POST /api/me', () => {
    it('should block the user creation - invalid email', (done) => {
      request(app)
        .post('/api/me')
        .send(user.withInvalidEmail)
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          const mePostResponse = Joi.object().keys({
            message: Joi.string().required().valid('"email" must be a valid email'),
            stack: Joi.any().required()
          });

          joiAssert(res.body, mePostResponse);

          done();
        })
        .catch(done);
    });
  });

  describe('# POST /api/me', () => {
    it('should block the user creation - password required', (done) => {
      request(app)
        .post('/api/me')
        .send(user.withoutPassword)
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          const mePostResponse = Joi.object().keys({
            message: Joi.string().required().valid('"password" is required'),
            stack: Joi.any().required()
          });

          joiAssert(res.body, mePostResponse);

          done();
        })
        .catch(done);
    });
  });

  describe('# POST /api/me', () => {
    it('should block the user creation - nickname required', (done) => {
      request(app)
        .post('/api/me')
        .send(user.withoutNickname)
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          const mePostResponse = Joi.object().keys({
            message: Joi.string().required().valid('"nickname" is required'),
            stack: Joi.any().required()
          });

          joiAssert(res.body, mePostResponse);

          done();
        })
        .catch(done);
    });
  });

});
