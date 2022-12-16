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
        clave: user.username,
        nombre:user.nombre+' '+user.apellido_paterno+' '+user.apellido_materno,
        rol: user.idRol
      }
      const token = jwt.sign(payload, config.jwtSecret);
      res.json(token);
    } catch (error) {
      next(error);
    }
  }
);
router.get(
  '/profile',
  async (req,res,next)=>{
    //obtenemos el token
    const token = req.headers.authorization.split(' ')[1]

    //desciframos el token
    const user=jwt.decode(token,config.jwtSecret);

    res.json(user);
  }
);

module.exports = router;
