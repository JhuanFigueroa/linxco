const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const UserService = require('../services/maestro.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateMaestroSchema, createMaestroSchema, getMaestroSchema } = require('../schemas/maestro.schema');

const router = express.Router();
const service = new UserService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
  try {
    const maestros1 = await service.findMtro();
    const users = await service.find();
    res.json({users,maestros1});
  } catch (error) {
    next(error);
  }
});

router.get('/:clave',
  validatorHandler(getMaestroSchema, 'params'),
  async (req, res, next) => {
    try {
      const { clave } = req.params;
      const category = await service.findOne(clave);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  checkAdminRole,
  validatorHandler(createMaestroSchema, 'body'),
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
  validatorHandler(getMaestroSchema, 'params'),
  validatorHandler(updateMaestroSchema, 'body'),
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
  validatorHandler(getMaestroSchema, 'params'),
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

