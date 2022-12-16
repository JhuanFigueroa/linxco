const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const AlumnoActaService = require('../services/alumno_acta.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateAlumnoActaSchema, createAlumnoActaSchema, getAlumnoActaSchema } = require('../schemas/alumno_acta.schema');

const router = express.Router();
const service = new ActaEvaluaService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const actas = await service.find();
      res.json(actas);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getAlumnoActaSchema, 'params'),
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
  checkAdminRole,
  validatorHandler(createAlumnoActaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newActaEvalua = await service.create(body);
      res.status(201).json(newActaEvalua);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getAlumnoActaSchema, 'params'),
  validatorHandler(updateAlumnoActaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const acta = await service.update(id, body);
      res.json(acta);
    } catch (error) {
      next(error);
    }
  }
);



module.exports = router;

