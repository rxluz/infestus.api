import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';

import app from '../../../../index';
import data from './data.artist';

chai.config.includeStack = true;

describe('## [contract] ARTISTS APIs (NOT_FOUND tests)', () => {
  describe('# GET /api/artists/complete/{term}', () => {
    it('should return not found', (done) => {
      request(app)
        .get(`/api/artists/complete/${data.artist.invalid.name}`)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.NOT_FOUND)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/artists/{artist-id}/about', () => {
    it('should return not found', (done) => {
      request(app)
        .get(`/api/artists/${data.artist.invalid.id}/about`)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.NOT_FOUND)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/artists/{artist-id}/medias', () => {
    it('should return not found', (done) => {
      request(app)
        .get(`/api/artists/${data.artist.invalid.id}/medias`)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.NOT_FOUND)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# POST /api/artists/{artist-id}/follow', () => {
    it('should return not found', (done) => {
      request(app)
        .post(`/api/artists/${data.artist.invalid.id}/follow`)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.NOT_FOUND)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/artists/{artist-id}/follow', () => {
    it('should return not found', (done) => {
      request(app)
        .delete(`/api/artists/${data.artist.invalid.id}/follow`)
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
