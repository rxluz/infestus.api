// import mongoose from 'mongoose';
import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';
import app from '../../index';
import auxs from '../helpers/auxs.helper';

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

describe('## ME APIs', () => {
  const nickname = `KK123${auxs.getRandomInt(1, 1000)}`;
  const email = `${auxs.getRandomInt(1, 1000)}@email.com`;
  const user = {
    nickname,
    email,
    password: '1234567890'
  };

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

  describe('# POST /api/me', () => {
    it('should block the user creation', (done) => {
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

  //
  // describe('# PUT /api/me/password', () => {
  //   it('should block the user update password', (done) => {
  //     request(app)
  //       .put('/api/me/password')
  //       .send({})
  //       .expect(httpStatus.BAD_REQUEST)
  //       .then(() => {
  //         done();
  //       })
  //       .catch(done);
  //   });
  // });
  //
  // describe('# DELETE /api/me', () => {
  //   it('should block the user disable account', (done) => {
  //     request(app)
  //       .delete('/api/me')
  //       .send({})
  //       .expect(httpStatus.BAD_REQUEST)
  //       .then(() => {
  //         done();
  //       })
  //       .catch(done);
  //   });
  // });
});
