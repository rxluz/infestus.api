// import mongoose from 'mongoose';
import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';
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

describe('## Media APIs', () => {

  describe('# POST /api/media', () => {
    it('should block the media creation', (done) => {
      request(app)
        .post('/api/media')
        .send({})
        .expect(httpStatus.BAD_REQUEST)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# POST /api/media', () => {
    it('should block the comment media creation', (done) => {
      request(app)
        .post('/api/media/123/comments')
        .send({})
        .expect(httpStatus.BAD_REQUEST)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

});
