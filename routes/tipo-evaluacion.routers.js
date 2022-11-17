const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const tipoEvaluacionService = require('../services/tipoEvaluacion.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updatetipoEvaluacionSchema, createtipoEvaluacionSchema, gettipoEvaluacionSchema } = require('../schemas/tipoEvaluacion.schema');

const router = express.Router();
const service = new tipoEvaluacionService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const evaluaciones = await service.find();
      res.json(evaluaciones);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(gettipoEvaluacionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const tipoEvaluacion = await service.findOne(id);
      res.json(tipoEvaluacion);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  checkAdminRole,
  validatorHandler(createtipoEvaluacionSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(gettipoEvaluacionSchema, 'params'),
  validatorHandler(updatetipoEvaluacionSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(gettipoEvaluacionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

