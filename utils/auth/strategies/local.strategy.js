const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const MaestroService = require('./../../../services/maestro.service');
const service = new MaestroService();

const LocalStrategy = new Strategy({
    usernameField: 'clave',
    passwordField: 'password'
  },
  async (username, password, done) => {
    try {
      const user = await service.findByUser(username);
      if (!user) {
        done(boom.unauthorized(), false);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        done(boom.unauthorized(), false);
      }
      delete user.dataValues.password;
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;
