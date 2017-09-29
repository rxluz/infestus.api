import mailgun from 'mailgun-js';
import Handlebars from 'handlebars';
import fs from 'fs';

import User from '../models/user.model';
import config from '../../config/config';

/**
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
// function login(req, res, next) {
function login(req, res) {
  User
    .findByCredentials(req.body.nickname, req.body.password)
    .then(user => user.generateAuthToken().then(token => res.header('x-auth', token).send(user)))
    .catch(() => res.status(401).send());
}


/**
 * Delete the user token
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function logout(req, res) {
  User.removeByToken(req.token)
    .then(u => res.status(200).send(u))
    .catch(() => res.status(400).send());
}

/**
 * Send to user email a code to recover the password
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function recoverRequest(req, res) {
  const mg = mailgun({ apiKey: config.mailgun.secret, domain: config.mailgun.domain });
  const recoverEmailTemplate = fs.readFileSync('server/views/emails/auth.recover.request.html', 'utf-8');
  const template = Handlebars.compile(recoverEmailTemplate);

  User
    .generateRecoverToken(req.body.email)
    .then((token) => {
      const data = {
        from: 'Infestus Team <hello@appock.co>',
        to: req.body.email,
        subject: `Utilize ${token} para restaurar sua senha no Infestus`,
        html: template({ token })
      };

      mg.messages().send(data, (error) => {
        if (error) return res.status(400).send(error);

        return res.status(200).send();
      });
    })
    .catch(() => {
      res.status(401).send();
    });
}

/**
 * Check the code, if the code is right generates a valid jwt to user
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function recoverRestore(req, res) {
  User
    .setRecoverPassword(req.params.code, req.body.email, req.body.password)
    .then(token => res.header('x-auth', token).status(200).send())
    .catch(() => res.status(401).send());
}

/**
 * Check the code
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function recoverCheck(req, res) {
  User
    .checkRecoverToken(req.params.code, req.body.email)
    .then(() => {
      res.status(200).send();
    })
    .catch(() => {
      res.status(401).send();
    });
}

/**
 * This is a protected route. Will return random number only if jwt token is provided in header.
 * @param req
 * @param res
 * @returns {*}
 */
function getRandomNumber(req, res) {
  return res.json({
    user: req.user,
    num: Math.random() * 100
  });
}

export default { login, logout, getRandomNumber, recoverRequest, recoverRestore, recoverCheck };
