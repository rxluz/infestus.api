import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';
import Joi from 'joi';
import joiAssert from 'joi-assert';

import app from '../../../../index';
import data from './data.me';

chai.config.includeStack = true;

describe('## [contract] ME APIs (BAD_REQUEST tests)', () => {
  describe('# POST /api/me', () => {
    it('should block the user creation - no data sended', (done) => {
      request(app)
        .post('/api/me')
        .set('testing', data.common.token.testing)
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
        .set('testing', data.common.token.testing)
        .send(data.user.withInvalidEmail)
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
        .set('testing', data.common.token.testing)
        .send(data.user.withoutPassword)
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
        .set('testing', data.common.token.testing)
        .send(data.user.withoutNickname)
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
