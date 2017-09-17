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

describe('## OTHER APIs', () => {

  describe('# POST /api/other/feedback', () => {
    it('should block the feedback creation', (done) => {
      request(app)
        .post('/api/other/feedback')
        .send({})
        .expect(httpStatus.BAD_REQUEST)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

});
