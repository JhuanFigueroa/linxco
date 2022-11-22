const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const maestro_horarioService = require('../services/maestro_horario.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updatemaestroHorarioSchema, createmaestroHorarioSchema, getmaestroHorarioSchema } = require('../schemas/maestro_horario.schema');

const router = express.Router();
const service = new maestro_horarioService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const maestroHorario = await service.find();
      res.json(maestroHorario);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getmaestroHorarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const maestroHorario = await service.findOne(id);
      res.json(maestroHorario);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  validatorHandler(createmaestroHorarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newmaestroHorario = await service.create(body);
      res.status(201).json(newmaestroHorario);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getmaestroHorarioSchema, 'params'),
  validatorHandler(updatemaestroHorarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const maestroHorario = await service.update(id, body);
      res.json(maestroHorario);
    } catch (error) {
      next(error);
    }
  }
);
/*
router.delete('/:id',
  validatorHandler(getmaestroHorarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);*/
module.exports = router;
