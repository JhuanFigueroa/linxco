const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const BajaAlumnoService = require('../services/baja_alumno.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateBajaAlumnoSchema, createBajaAlumnoSchema, getBajaAlumnoSchema } = require('../schemas/baja_alumno.schema');

const router = express.Router();
const service = new BajaAlumnoService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const bajas = await service.find();
      res.json(bajas);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getBajaAlumnoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const acta = await service.findOne(id);
      res.json(acta);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  validatorHandler(createBajaAlumnoSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newBajaAlum = await service.create(body);
      res.status(201).json(newBajaAlum);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getBajaAlumnoSchema, 'params'),
  validatorHandler(updateBajaAlumnoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const baja = await service.update(id, body);
      res.json(baja);
    } catch (error) {
      next(error);
    }
  }
);



module.exports = router;

