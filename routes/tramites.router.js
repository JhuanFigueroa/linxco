const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const { config } = require('./../config/config');
const {checkAdminRole} = require("../middlewares/auth.handler");
const validatorHandler = require("../middlewares/validator.handler");
const {createAdmisionSchema} = require("../schemas/admision.schema");
const BoletaService = require("../services/tramites.service");
const service = new BoletaService();

const router = express.Router();

router.get('/boleta/:clave/:periodo',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const {clave} = req.params;
      const {periodo} = req.params;
      const newAdmision = await service.generateBoleta(clave,periodo);
      res.status(201).json(newAdmision);
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;
