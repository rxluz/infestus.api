import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai from 'chai';
import joiAssert from 'joi-assert';

import app from '../../../../index';
import data from './data.me';
import response from './response.me';

chai.config.includeStack = true;

describe('## [contract] ME APIs (OK tests)', () => {
  describe('# POST /api/me', () => {
    it('should allow the user creation', (done) => {
      request(app)
        .post('/api/me')
        .send(data.user.ok.post)
        .set('testing', data.common.token.testing)
        .expect(httpStatus.OK)
        .then((res) => {
          joiAssert(res.body, response.user.post);
          done();
        })
        .catch(done);
    });
  });

  describe('# PUT /api/me', () => {
    it('should allow the user update infos', (done) => {
      request(app)
        .put('/api/me')
        .set('x-auth', data.common.token.valid)
        .set('testing', data.common.token.testing)
        .send(data.user.ok.put)
        .expect(httpStatus.OK)
        .then((res) => {
          joiAssert(res.body, response.user.put);
          done();
        })
        .catch(done);
    });
  });

  describe('# PUT /api/me/password', () => {
    it('should allow the user update password', (done) => {
      request(app)
        .put('/api/me')
        .set('x-auth', data.common.token.valid)
        .set('testing', data.common.token.testing)
        .send(data.user.ok.password)
        .expect(httpStatus.OK)
        .then((res) => {
          joiAssert(res.body, response.user.password);
          done();
        })
        .catch(done);
    }).timeout(6000);
  });

  describe('# GET /api/me', () => {
    it('should allow retrieves the current user infos', (done) => {
      request(app)
        .get('/api/me')
        .set('testing', data.common.token.testing)
        .set('x-auth', data.common.token.valid)
        .expect(httpStatus.OK)
        .then((res) => {
          joiAssert(res.body, response.user.get);
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/me/media', () => {
    it('should allow retrieves the current user medias', (done) => {
      request(app)
        .get('/api/me/media')
        .set('testing', data.common.token.testing)
        .set('x-auth', data.common.token.valid)
        .expect(httpStatus.OK)
        .then((res) => {
          joiAssert(res.body, response.user.medias);
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/me/followers', () => {
    it('should allow retrieves the current user followers', (done) => {
      request(app)
        .get('/api/me/followers')
        .set('testing', data.common.token.testing)
        .set('x-auth', data.common.token.valid)
        .expect(httpStatus.OK)
        .then((res) => {
          joiAssert(res.body, response.user.followers);
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/me/following', () => {
    it('should allow retrieves the current user following', (done) => {
      request(app)
        .get('/api/me/following')
        .set('testing', data.common.token.testing)
        .set('x-auth', data.common.token.valid)
        .expect(httpStatus.OK)
        .then((res) => {
          joiAssert(res.body, response.user.following);
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/me', () => {
    it('should allow disable the current user', (done) => {
      request(app)
        .delete('/api/me')
        .set('x-auth', data.common.token.valid)
        .set('testing', data.common.token.testing)
        .send(data.user.ok.del)
        .expect(httpStatus.OK)
        .then(() => done())
        .catch(done);
    });
  });
});
