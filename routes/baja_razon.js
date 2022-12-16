const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const BajaRazonService = require('../services/baja_razon.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateBajaRazonSchema, createBajaRazonSchema, getBajaRazonSchema } = require('../schemas/baja_razon.schema');

const router = express.Router();
const service = new BajaRazonService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const bajas = await service.find();
      res.json(bajas);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getBajaRazonSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const acta = await service.findOne(id);
      res.json(acta);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  checkAdminRole,
  validatorHandler(createBajaRazonSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newBajaAlum = await service.create(body);
      res.status(201).json(newBajaAlum);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getBajaRazonSchema, 'params'),
  validatorHandler(updateBajaRazonSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const baja = await service.update(id, body);
      res.json(baja);
    } catch (error) {
      next(error);
    }
  }
);



module.exports = router;

