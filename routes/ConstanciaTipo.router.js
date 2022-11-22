const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const ConstanciaTipoService = require('../services/ConstanciaTipo.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateConstanciaTipoSchema, createConstanciaTipoSchema, getConstanciaTipoSchema } = require('../schemas/ConstanciaTipo.schema');

const router = express.Router();
const service = new ConstanciaTipoService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
  try {
    const ConstanciaTipo = await service.find();
    res.json(ConstanciaTipo);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getConstanciaTipoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const ConstanciaTipo = await service.findOne(id);
      res.json(ConstanciaTipo);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  checkAdminRole,
  validatorHandler(createConstanciaTipoSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCurso = await service.create(body);
      res.status(201).json(newCurso);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getConstanciaTipoSchema, 'params'),
  validatorHandler(updateConstanciaTipoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const curso = await service.update(id, body);
      res.json(curso);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getConstanciaTipoSchema, 'params'),
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
