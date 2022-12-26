const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const carga_academicaService = require('../services/carga_academica.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updatecarga_academicaSchema, createcarga_academicaSchema, getcarga_academicaSchema } = require('../schemas/carga_academica.schema');

const router = express.Router();
const service = new carga_academicaService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const carga_academicas = await service.find();
      res.json(carga_academicas);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getcarga_academicaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const carga_academica = await service.findOne(id);
      res.json(carga_academica);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  validatorHandler(createcarga_academicaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCarga = await service.create(body);
      res.status(201).json(newCarga);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getcarga_academicaSchema, 'params'),
  validatorHandler(updatecarga_academicaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getcarga_academicaSchema, 'params'),
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

