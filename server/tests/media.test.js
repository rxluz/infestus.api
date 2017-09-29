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
    it('should return unauthorized', (done) => {
      request(app)
        .post('/api/media')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# PUT /api/media/{media-id}', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .put('/api/media/1')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/media/{media-id}', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .delete('/api/media/1')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# POST /api/media/{media-id}/comments', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .post('/api/media/1/comments')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/media/{media-id}/comments/{comment-id}', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .delete('/api/media/1/comments/1')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# POST /api/media/{media-id}/comments/{comment-id}/flag', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .post('/api/media/1/comments/1/flag')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/media/{media-id}/comments/{comment-id}/flag', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .delete('/api/media/1/comments/1/flag')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# POST /api/media/{media-id}/like', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .post('/api/media/1/like')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/media/{media-id}/like', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .delete('/api/media/1/like')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/media/{media-id}/like', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .get('/api/media/1/like')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# POST /api/media/{media-id}/flag', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .post('/api/media/1/flag')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/media/{media-id}/flag', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .delete('/api/media/1/flag')
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });
});
