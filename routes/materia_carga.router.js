const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const materia_cargaService = require('../services/materia_carga.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updatemateriaCargaSchema, createmateriaCargaSchema, getmateriaCargaSchema } = require('../schemas/materia_carga.schema');

const router = express.Router();
const service = new materia_cargaService();


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
  validatorHandler(getmateriaCargaSchema, 'params'),
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

router.post('/',
  passport.authenticate('jwt',{session:false}),
  validatorHandler(createmateriaCargaSchema, 'body'),
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
  validatorHandler(getmateriaCargaSchema, 'params'),
  validatorHandler(updatemateriaCargaSchema, 'body'),
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
