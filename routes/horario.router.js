const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const horarioService = require('../services/horario.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updatehorarioSchema, createhorarioSchema, gethorarioSchema } = require('../schemas/horario.schema');

const router = express.Router();
const service = new horarioService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const horario = await service.find();
      res.json(horario);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(gethorarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const horario = await service.findOne(id);
      res.json(horario);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  validatorHandler(createhorarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newhorario = await service.create(body);
      res.status(201).json(newhorario);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(gethorarioSchema, 'params'),
  validatorHandler(updatehorarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const horario = await service.update(id, body);
      res.json(horario);
    } catch (error) {
      next(error);
    }
  }
);
/*
router.delete('/:id',
  validatorHandler(gethorarioSchema, 'params'),
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
