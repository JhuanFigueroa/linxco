const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const { config } = require('./../config/config');


const router = express.Router();

router.post('/login',
  passport.authenticate('local', {session: false}),
  async (req, res, next) => {
    try {
      const user = req.user;
      console.log(user)
      const payload = {
        sub: user.clave,
        role: user.idRol
      }
      const token = jwt.sign(payload, config.jwtSecret);
      res.json({
        user,
        token
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
