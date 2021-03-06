import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';

import app from '../../../../index';
import data from './data.me';

chai.config.includeStack = true;

describe('## [contract] ME APIs (UNAUTHORIZED tests)', () => {
  describe('# GET /api/me', () => {
    it('should return unauthorized (invalid token)', (done) => {
      request(app)
        .get('/api/me')
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

  describe('# GET /api/me', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .get('/api/me')
        .set('testing', data.common.token.testing)
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
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# PUT /api/me', () => {
    it('should return unauthorized (invalid token)', (done) => {
      request(app)
        .put('/api/me')
        .set('testing', data.common.token.testing)
        .set('x-auth', data.common.token.invalid)
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
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# PUT /api/me/password', () => {
    it('should return unauthorized (invalid token)', (done) => {
      request(app)
        .put('/api/me/password')
        .set('testing', data.common.token.testing)
        .set('x-auth', data.common.token.invalid)
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
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/me', () => {
    it('should return unauthorized (invalid token)', (done) => {
      request(app)
        .delete('/api/me')
        .set('testing', data.common.token.testing)
        .set('x-auth', data.common.token.invalid)
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
        .set('testing', data.common.token.testing)
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
        .set('testing', data.common.token.testing)
        .set('x-auth', data.common.token.invalid)
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
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/me/followers', () => {
    it('should return unauthorized (invalid token)', (done) => {
      request(app)
        .get('/api/me/media')
        .set('testing', data.common.token.testing)
        .set('x-auth', data.common.token.invalid)
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
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/me/following', () => {
    it('should return unauthorized (invalid token)', (done) => {
      request(app)
        .get('/api/me/media')
        .set('testing', data.common.token.testing)
        .set('x-auth', data.common.token.invalid)
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });
});
