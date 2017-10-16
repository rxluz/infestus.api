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

  describe('# GET /api/me', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .get('/api/me')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# PUT /api/me', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .put('/api/me')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });


  describe('# PUT /api/me/password', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .put('/api/me/password')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/me', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .delete('/api/me')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/me/media', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .get('/api/me/media')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/me/followers', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .get('/api/me/media')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/me/following', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .get('/api/me/media')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

});
