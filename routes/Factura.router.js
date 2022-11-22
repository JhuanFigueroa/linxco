const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const FacturaService = require('../services/Factura.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateFacturaSchema, createFacturaSchema, getFacturaSchema } = require('../schemas/Factura.schema');

const router = express.Router();
const service = new FacturaService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
  try {
    const Factura = await service.find();
    res.json(Factura);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getFacturaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const Factura = await service.findOne(id);
      res.json(Factura);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  checkAdminRole,
  validatorHandler(createFacturaSchema, 'body'),
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
  validatorHandler(getFacturaSchema, 'params'),
  validatorHandler(updateFacturaSchema, 'body'),
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
  validatorHandler(getFacturaSchema, 'params'),
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
