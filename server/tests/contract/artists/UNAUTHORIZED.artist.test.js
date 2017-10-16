import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';

import app from '../../../../index';
import data from './data.artist';

chai.config.includeStack = true;

describe('## [contract] ARTISTS APIs (UNAUTHORIZED tests)', () => {
  describe('# GET /api/artists/recent ', () => {
    it('should return unauthorized (invalid token)', (done) => {
      request(app)
        .get('/api/artists/recent')
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

  describe('# GET /api/artists/complete/any', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .get('/api/artists/complete/any')
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

  describe('# GET /api/artists/featured', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .get('/api/artists/featured')
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

  describe('# GET /api/artists/{artist-id}/about', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .get('/api/artists/ARTISTID/about')
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

  describe('# GET /api/artists/{artist-id}/medias', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .get('/api/artists/ARTISTID/medias')
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

  describe('# POST /api/artists/{artist-id}/follow', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .post('/api/artists/ARTISTID/follow')
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

  describe('# DELETE /api/artists/{artist-id}/follow', () => {
    it('should return unauthorized', (done) => {
      request(app)
        .delete('/api/artists/ARTISTID/follow')
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
