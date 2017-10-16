import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';
import app from '../../../../index';
import data from './data.me';

chai.config.includeStack = true;

describe('## [contract] ME APIs', () => {
  describe('# GET /api/me', () => {
    it('should return unauthorized (invalid token)', (done) => {
      request(app)
        .get('/api/me')
        .set('x-auth', data.token.invalid)
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

  describe('# PUT /api/me', () => {
    it('should return unauthorized (invalid token)', (done) => {
      request(app)
        .put('/api/me')
        .set('x-auth', data.token.invalid)
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

  describe('# PUT /api/me/password', () => {
    it('should return unauthorized (invalid token)', (done) => {
      request(app)
        .put('/api/me/password')
        .set('x-auth', data.token.invalid)
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

  describe('# DELETE /api/me', () => {
    it('should return unauthorized (invalid token)', (done) => {
      request(app)
        .delete('/api/me')
        .set('x-auth', data.token.invalid)
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

  describe('# GET /api/me/media', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .get('/api/me/media')
        .set('x-auth', data.token.invalid)
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

  describe('# GET /api/me/followers', () => {
    it('should return unauthorized (invalid token)', (done) => {
      request(app)
        .get('/api/me/media')
        .set('x-auth', data.token.invalid)
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

  describe('# GET /api/me/following', () => {
    it('should return unauthorized (invalid token)', (done) => {
      request(app)
        .get('/api/me/media')
        .set('x-auth', data.token.invalid)
        .send({})
        .expect(httpStatus.UNAUTHORIZED)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });
});
