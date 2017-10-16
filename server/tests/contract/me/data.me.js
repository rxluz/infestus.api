import auxs from '../../../helpers/auxs.helper';
import common from '../data.common';

const nickname = `KK123${auxs.getRandomInt(1, 1000)}`;
const newNickname = `KK123${auxs.getRandomInt(1, 1000)}`;
const email = `aaa${auxs.getRandomInt(1, 1000)}@email.com`;
const newEmail = `aaaa${auxs.getRandomInt(1, 1000)}@email.com`;

const user = {
  ok: {
    post: {
      nickname,
      email,
      password: '1234567890'
    },

    put: {
      email: newEmail,
      nickname: newNickname
    },

    del: {
      reason: 'some reason to cancel',
      password: '1234567890'
    },

    password: {
      current_password: '1234567890',
      new_password: '1234567890_'
    },

    password_restore: {
      current_password: '1234567890_',
      new_password: '1234567890'
    }
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

export default { user, common };
