const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const materia_horarioService = require('../services/materia_horario.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updatemateriaHorarioSchema, createmateriaHorarioSchema, getmateriaHorarioSchema } = require('../schemas/materia_horario.schema');

const router = express.Router();
const service = new materia_horarioService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const materiaHorario = await service.find();
      res.json(materiaHorario);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getmateriaHorarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const materiaHorario = await service.findOne(id);
      res.json(materiaHorario);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  validatorHandler(createmateriaHorarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newmateriaHorario = await service.create(body);
      res.status(201).json(newmateriaHorario);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getmateriaHorarioSchema, 'params'),
  validatorHandler(updatemateriaHorarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const materiaHorario = await service.update(id, body);
      res.json(materiaHorario);
    } catch (error) {
      next(error);
    }
  }
);
/*
router.delete('/:id',
  validatorHandler(getmateriaHorarioSchema, 'params'),
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
