const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const BajaService = require('../services/baja_temp_def.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateBajaSchema, createBajaSchema, getBajachema } = require('../schemas/baja_temp_def.schema');

const router = express.Router();
const service = new BajaService();

router.get('/razones',
  async (req, res, next) => {
    try {
      const baja = await service.findRazones();
      res.json(baja);
    } catch (error) {
      next(error);
    }
  });

router.get('/:carrera',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const {carrera}=req.params
      const baja = await service.find(carrera);
      res.json(baja);
    } catch (error) {
      next(error);
    }
  });


router.get('/:id',
  validatorHandler(getBajachema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const baja = await service.findOne(id);
      res.json(baja);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newBaja = await service.create(body);
      res.status(201).json(newBaja);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/razones',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newBaja = await service. createRazones(body);
      res.status(201).json(newBaja);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getBajachema, 'params'),
  validatorHandler(updateBajaSchema, 'body'),
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

