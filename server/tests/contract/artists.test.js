// import mongoose from 'mongoose';
import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';
import app from '../../../index';

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

describe('## [contract] ARTISTS APIs', () => {
  describe('# POST /api/artists/{artist-id}/follow', () => {
    it('should return not found', (done) => {
      request(app)
        .post('/api/artists/1/follow')
        .send({})
        .expect(httpStatus.NOT_FOUND)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/artists/{artist-id}/follow', () => {
    it('should return NOT FOUND', (done) => {
      request(app)
        .delete('/api/artists/1/follow')
        .send({})
        .expect(httpStatus.NOT_FOUND)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });
});
