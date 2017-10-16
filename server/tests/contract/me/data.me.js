import auxs from '../../../helpers/auxs.helper';

const nickname = `KK123${auxs.getRandomInt(1, 1000)}`;
const email = `${auxs.getRandomInt(1, 1000)}@email.com`;

const user = {
  ok: {
    nickname,
    email,
    password: '1234567890'
  },

  withoutNickname: {
    email,
    password: '1234567890'
  },

  withInvalidEmail: {
    nickname,
    email: 'invalidemail',
    password: '1234567890'
  },

  withoutPassword: {
    nickname,
    email
  }
};

const token = {
  valid: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWRmNTkyODlmNTdiNjE2ODc0MmI1MDkiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTA3ODA5NTc2fQ.XfH9iAstgMrQ4q3ljJVEeCOTCuzCaZNmKPUi4BqV0Vk',
  invalid: 'invalid_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWRlNzNlYjcyYTA5MjljZjE5Yzg2MzgiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTA3NzUwODkxfQ.8IE8O2OC2E0WCGmziXh5JtnQMQ9b6NEVVvRa71oWgJE_invalid'
};

export default { user, token };
