import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';

import app from '../../../../index';
import data from './data.media';

chai.config.includeStack = true;

describe('## [contract] MEDIAS APIs (BAD_REQUEST tests)', () => {
  describe('# POST /api/media/{media-id}/comments', () => {
    it('should return bad request', (done) => {
      request(app)
        .post(`/api/media/${data.media.valid.id}/comments`)
        .set('x-auth', data.common.token.valid)
        .set('testing', data.common.token.testing)
        .send({})
        .expect(httpStatus.BAD_REQUEST)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  describe('# POST /api/media', () => {
    it('should return bad request', (done) => {
      request(app)
        .post('/api/media')
        .set('x-auth', data.common.token.valid)
        .set('testing', data.common.token.testing)
        .send()
        .expect(httpStatus.BAD_REQUEST)
        .then(() => {
          done();
        })
        .catch(done);
    });
  });

  // describe('# PUT /api/media/{media-id}', () => {
  //   it('should return bad request', (done) => {
  //     request(app)
  //       .put(`/api/media/${data.media.valid.id}`)
  //       .set('x-auth', data.common.token.valid)
  //       .set('testing', data.common.token.testing)
  //       .send({ place_lat: 'text' })
  //       .expect(httpStatus.BAD_REQUEST)
  //       .then(() => {
  //         done();
  //       })
  //       .catch(done);
  //   });
  // });
});
