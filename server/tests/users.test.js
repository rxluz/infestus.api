import mongoose from 'mongoose';
import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

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

describe('## User APIs', () => {
  let user = {
    username: 'KK123',
    mobileNumber: '1234567890'
  };

  describe('# POST /api/user', () => {
    it('should block the user creation', (done) => {
      request(app)
        .post('/api/user')
        .send(user)
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          done();
        })
        .catch(done);
    });
  });

  // cannot test user update in this moment

  describe('# PUT /api/user/password', () => {
    it('should block the user update password', (done) => {
      request(app)
        .put('/api/user/password')
        .send({})
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/user', () => {
    it('should block the user disable account', (done) => {
      request(app)
        .delete('/api/user')
        .send({})
        .expect(httpStatus.BAD_REQUEST)
        .then((res) => {
          done();
        })
        .catch(done);
    });
  });

});
