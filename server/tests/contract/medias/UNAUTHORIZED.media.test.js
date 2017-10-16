import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';

import app from '../../../../index';
import data from './data.media';

chai.config.includeStack = true;

describe('## [contract] MEDIAS APIs (UNAUTHORIZED tests)', () => {
  describe('# GET /api/media/featured', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .get('/api/media/featured')
        .set('x-auth', data.common.token.invalid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# POST /api/media', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .post('/api/media')
        .set('x-auth', data.common.token.invalid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# PUT /api/media', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .put(`/api/media/${data.media.valid.id}`)
        .set('x-auth', data.common.token.invalid)
        .set('testing', data.common.token.testing)
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
        .delete(`/api/media/${data.media.valid.id}`)
        .set('x-auth', data.common.token.invalid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/media/{media-id}', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .get(`/api/media/${data.media.valid.id}`)
        .set('x-auth', data.common.token.invalid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/media/{media-id}/comments', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .get(`/api/media/${data.media.valid.id}/comments`)
        .set('x-auth', data.common.token.invalid)
        .set('testing', data.common.token.testing)
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
        .post(`/api/media/${data.media.valid.id}/comments`)
        .set('x-auth', data.common.token.invalid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/media/{media-id}/comments', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .delete(`/api/media/${data.media.valid.id}/comments`)
        .set('x-auth', data.common.token.invalid)
        .set('testing', data.common.token.testing)
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
        .post(`/api/media/${data.media.valid.id}/comments/${data.media.valid.comment_id}/flag`)
        .set('x-auth', data.common.token.invalid)
        .set('testing', data.common.token.testing)
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
        .delete(`/api/media/${data.media.valid.id}/comments/${data.media.valid.comment_id}/flag`)
        .set('x-auth', data.common.token.invalid)
        .set('testing', data.common.token.testing)
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
        .post(`/api/media/${data.media.valid.id}/like`)
        .set('x-auth', data.common.token.invalid)
        .set('testing', data.common.token.testing)
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
        .delete(`/api/media/${data.media.valid.id}/like`)
        .set('x-auth', data.common.token.invalid)
        .set('testing', data.common.token.testing)
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
        .post(`/api/media/${data.media.valid.id}/flag`)
        .set('x-auth', data.common.token.invalid)
        .set('testing', data.common.token.testing)
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
        .delete(`/api/media/${data.media.valid.id}/flag`)
        .set('x-auth', data.common.token.invalid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });
});
