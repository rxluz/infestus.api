import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';
import joiAssert from 'joi-assert';

import app from '../../../../index';
import data from './data.artist';
import response from './response.artist';

chai.config.includeStack = true;

describe('## [contract] ARTISTS APIs (OK tests)', () => {
  describe('# GET /api/artists/recent', () => {
    it('should return the recently added artists', (done) => {
      request(app)
        .get('/api/artists/recent')
        .set('testing', data.common.token.testing)
        .expect(httpStatus.OK)
        .then((res) => {
          joiAssert(res.body, response.artists.recent);
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/artists/complete/{term}', () => {
    it('should return the artists related with the searched term', (done) => {
      request(app)
        .get('/api/artists/complete/a')
        .set('testing', data.common.token.testing)
        .expect(httpStatus.OK)
        .then((res) => {
          joiAssert(res.body, response.artists.complete);
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/artists/featured', () => {
    it('should return the featured artists', (done) => {
      request(app)
        .get('/api/artists/featured')
        .set('testing', data.common.token.testing)
        .expect(httpStatus.OK)
        .then((res) => {
          joiAssert(res.body, response.artists.featured);
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/artists/{artist-id}/about', () => {
    it('should return the featured artists', (done) => {
      request(app)
        .get(`/api/artists/${data.artist.valid.id}/about`)
        .set('testing', data.common.token.testing)
        .expect(httpStatus.OK)
        .then((res) => {
          joiAssert(res.body, response.artists.about);
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/artists/{artist-id}/medias', () => {
    it('should return artist media', (done) => {
      request(app)
        .get(`/api/artists/${data.artist.valid.id}/medias`)
        .set('testing', data.common.token.testing)
        .expect(httpStatus.OK)
        .then((res) => {
          joiAssert(res.body, response.artists.medias);
          done();
        })
        .catch(done);
    });
  });
});
