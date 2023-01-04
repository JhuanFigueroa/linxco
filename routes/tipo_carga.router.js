const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const TipoCargaService = require('../services/tipo_carga.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateTipoCargaSchema, createTipoCargaSchema, getTipoCargaSchema } = require('../schemas/tipo_carga.schema');

const router = express.Router();
const service = new TipoCargaService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
  try {
    const tiposcargas = await service.find();
    res.json(tiposcargas);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getTipoCargaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const tipo_carga = await service.findOne(id);
      res.json(tipo_carga);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  checkAdminRole,
  validatorHandler(createTipoCargaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newTipoCarga = await service.create(body);
      res.status(201).json(newTipoCarga);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getTipoCargaSchema, 'params'),
  validatorHandler(updateTipoCargaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const tipo_carga = await service.update(id, body);
      res.json(tipo_carga);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getTipoCargaSchema, 'params'),
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
