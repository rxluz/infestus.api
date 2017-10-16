import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';

import app from '../../../../index';
import data from './data.media';

chai.config.includeStack = true;

describe('## [contract] MEDIAS APIs (NOT_FOUND tests)', () => {
  describe('# GET /api/media/{media-id}', () => {
    it('should return not found', (done) => {
      request(app)
        .get(`/api/media/${data.media.invalid.id}`)
        .set('x-auth', data.common.token.valid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.NOT_FOUND)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# POST /api/media/{media-id}/comments', () => {
    it('should return not found', (done) => {
      request(app)
        .post(`/api/media/${data.media.invalid.id}/comments`)
        .set('x-auth', data.common.token.valid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.NOT_FOUND)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/media/{media-id}/comment/{comment-id}', () => {
    it('should return not found', (done) => {
      request(app)
        .delete(`/api/media/${data.media.invalid.id}/comments/${data.media.valid.comment_id}`)
        .set('x-auth', data.common.token.valid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.NOT_FOUND)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# POST /api/media/{media-id}/comment/{comment-id}/flag', () => {
    it('should return not found', (done) => {
      request(app)
        .post(`/api/media/${data.media.invalid.id}/comments/${data.media.valid.comment_id}/flag`)
        .set('x-auth', data.common.token.valid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.NOT_FOUND)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/media/{media-id}/comment/{comment-id}/flag', () => {
    it('should return not found', (done) => {
      request(app)
        .delete(`/api/media/${data.media.invalid.id}/comments/${data.media.valid.comment_id}/flag`)
        .set('x-auth', data.common.token.valid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.NOT_FOUND)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# PUT /api/media/{media-id}', () => {
    it('should return not found', (done) => {
      request(app)
        .put(`/api/media/${data.media.invalid.id}`)
        .set('x-auth', data.common.token.valid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.NOT_FOUND)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/media/{media-id}', () => {
    it('should return not found', (done) => {
      request(app)
        .delete(`/api/media/${data.media.invalid.id}`)
        .set('x-auth', data.common.token.valid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.NOT_FOUND)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# POST /api/media/{media-id}/like', () => {
    it('should return not found', (done) => {
      request(app)
        .post(`/api/media/${data.media.invalid.id}/like`)
        .set('x-auth', data.common.token.valid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.NOT_FOUND)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/media/{media-id}/like', () => {
    it('should return not found', (done) => {
      request(app)
        .delete(`/api/media/${data.media.invalid.id}/like`)
        .set('x-auth', data.common.token.valid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.NOT_FOUND)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# POST /api/media/{media-id}/flag', () => {
    it('should return not found', (done) => {
      request(app)
        .post(`/api/media/${data.media.invalid.id}/flag`)
        .set('x-auth', data.common.token.valid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.NOT_FOUND)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/media/{media-id}/flag', () => {
    it('should return not found', (done) => {
      request(app)
        .delete(`/api/media/${data.media.invalid.id}/flag`)
        .set('x-auth', data.common.token.valid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.NOT_FOUND)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });
});
