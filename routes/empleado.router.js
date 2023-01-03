const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const EmpleadoService = require('../services/empleado.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateEmpleadoSchema, createEmpleadoSchema, getEmpleadoSchema } = require('../schemas/empleado.schema');

const router = express.Router();
const service = new EmpleadoService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const empleados = await service.find();
      const empleados1 = await service.findEmp();
      res.json({empleados,empleados1});
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getEmpleadoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const empleado = await service.findOne(id);
      res.json(empleado);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  //passport.authenticate('jwt',{session:false}),
  //validatorHandler(createEmpleadoSchema, 'body'),
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

router.patch('/:id',
  validatorHandler(getEmpleadoSchema, 'params'),
  validatorHandler(updateEmpleadoSchema, 'body'),
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
  validatorHandler(getEmpleadoSchema, 'params'),
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

