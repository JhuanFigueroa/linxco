const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const RolService = require('../services/rol.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateRolSchema, createRolSchema, getRolSchema } = require('../schemas/rol.schema');

const router = express.Router();
const service = new RolService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const roles = await service.find();
      res.json(roles);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getRolSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rol = await service.findOne(id);
      res.json(rol);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  checkAdminRole,
  validatorHandler(createRolSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newRol = await service.create(body);
      res.status(201).json(newRol);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getRolSchema, 'params'),
  validatorHandler(updateRolSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const rol = await service.update(id, body);
      res.json(rol);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getRolSchema, 'params'),
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

