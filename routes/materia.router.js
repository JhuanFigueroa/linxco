const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const MateriaService = require('../services/Materia.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateMateriaSchema, createMateriaSchema, getMateriaSchema } = require('../schemas/Materia.schema');

const router = express.Router();
const service = new MateriaService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const materia = await service.find();
      res.json(materia);
    } catch (error) {
      next(error);
    }
  });

router.get('/:clave',
  validatorHandler(getMateriaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { clave } = req.params;
      const Materia = await service.findOne(clave);
      res.json(Materia);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  checkAdminRole,
  validatorHandler(createMateriaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:clave',
  validatorHandler(getMateriaSchema, 'params'),
  validatorHandler(updateMateriaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { clave } = req.params;
      const body = req.body;
      const category = await service.update(clave, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:clave',
  validatorHandler(getMateriaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { clave } = req.params;
      await service.delete(clave);
      res.status(201).json({clave});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

