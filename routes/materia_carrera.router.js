const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const materia_carreraService = require('../services/materia_carrera.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updatemateriaCarreraSchema, createmateriaCarreraSchema, getmateriaCarreraSchema } = require('../schemas/materia_carrera.schema');

const router = express.Router();
const service = new materia_carreraService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const materiaCarrera = await service.find();
      res.json(materiaCarrera);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getmateriaCarreraSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const materiaCarrera = await service.findOne(id);
      res.json(materiaCarrera);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  validatorHandler(createmateriaCarreraSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newmateriaCarrera = await service.create(body);
      res.status(201).json(newmateriaCarrera);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getmateriaCarreraSchema, 'params'),
  validatorHandler(updatemateriaCarreraSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const materiaCarrera = await service.update(id, body);
      res.json(materiaCarrera);
    } catch (error) {
      next(error);
    }
  }
);
/*
router.delete('/:id',
  validatorHandler(getmateriaCarreraSchema, 'params'),
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
