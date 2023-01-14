const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const ActaCalifService = require('../services/acta_calificiaciones.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateActaCalifSchema, createActaCalifSchema, getActaCalifSchema } = require('../schemas/acta_calificaciones.schema');

const router = express.Router();
const service = new ActaCalifService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const carreras = await service.find();
      res.json(carreras);
    } catch (error) {
      next(error);
    }
  });

router.get('/:folio',
  validatorHandler(getActaCalifSchema, 'params'),
  async (req, res, next) => {
    try {
      const { folio } = req.params;
      const acta = await service.findOne(folio);
      res.json(acta);
    } catch (error) {
      next(error);
    }
  }
);
router.get('/alumnos/:materia/:grupo',
  async (req, res, next) => {
    try {
      const { materia } = req.params;
      const { grupo } = req.params;
      const acta = await service.findForSetCalif(materia,grupo);
      res.json(acta);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  checkAdminRole,
  validatorHandler(createActaCalifSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCarrera = await service.create(body);
      res.status(201).json(newCarrera);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:folio',
  validatorHandler(getActaCalifSchema, 'params'),
  validatorHandler(updateActaCalifSchema, 'body'),
  async (req, res, next) => {
    try {
      const { folio } = req.params;
      const body = req.body;
      const acta = await service.update(folio, body);
      res.json(acta);
    } catch (error) {
      next(error);
    }
  }
);



module.exports = router;

