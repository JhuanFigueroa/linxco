const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const CursoCargaService = require('../services/CursoCarga.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateCursoCargaSchema, createCursoCargaSchema, getCursoCargaSchema } = require('../schemas/CursoCarga.schema');

const router = express.Router();
const service = new CursoCargaService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
  try {
    const CursoCarga = await service.find();
    res.json(CursoCarga);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getCursoCargaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const CursoCarga = await service.findOne(id);
      res.json(CursoCarga);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  checkAdminRole,
  validatorHandler(createCursoCargaSchema, 'body'),
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
  validatorHandler(getCursoCargaSchema, 'params'),
  validatorHandler(updateCursoCargaSchema, 'body'),
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
  validatorHandler(getCursoCargaSchema, 'params'),
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
