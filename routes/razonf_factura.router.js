const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const razonf_facturaService = require('../services/razonf_factura.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updaterazonf_facturaSchema, createrazonf_facturaSchema, getrazonf_facturaSchema } = require('../schemas/razonf_factura.schema');

const router = express.Router();
const service = new razonf_facturaService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const materiaCarga = await service.find();
      res.json(materiaCarga);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getrazonf_facturaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const materiaCarga = await service.findOne(id);
      res.json(materiaCarga);
    } catch (error) {
      next(error);
    }
  }
);
router.get('/factura/:numero',
  async (req, res, next) => {
    try {
      const { numero } = req.params;
      const materiaCarga = await service.findbyFactura(numero);
      res.json(materiaCarga);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  validatorHandler(createrazonf_facturaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newmateriaCarga = await service.create(body);
      res.status(201).json(newmateriaCarga);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getrazonf_facturaSchema, 'params'),
  validatorHandler(updaterazonf_facturaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const materiaCarga = await service.update(id, body);
      res.json(materiaCarga);
    } catch (error) {
      next(error);
    }
  }
);
/*
router.delete('/:id',
  validatorHandler(getmateriaCargaSchema, 'params'),
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
