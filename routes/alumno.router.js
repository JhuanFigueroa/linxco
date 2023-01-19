const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const AlumnoService = require('../services/alumno.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateAlumnoSchema, createAlumnoSchema, getAlumnoSchema } = require('../schemas/alumno.schema');

const router = express.Router();
const service = new AlumnoService();


router.get('/',
  // passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const users = await service.find();
      res.json(users);
    } catch (error) {
      next(error);
    }
  });

router.get('/:matricula',
  validatorHandler(getAlumnoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { matricula } = req.params;
      const alumno = await service.findOne(matricula);
      res.json(alumno);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/datosCarga/:clave',
  async (req, res, next) => {
    try {
      const { clave } = req.params;
      const alumno = await service.findForCarga(clave);
      res.json(alumno);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/constancia/:matricula',
  async (req, res, next) => {
    try {
      const { matricula } = req.params;
      const alumno = await service.findForConstancia(matricula);
      res.json(alumno);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  // passport.authenticate('jwt',{session:false}),
  // checkAdminRole,
  // validatorHandler(createAlumnoSchema, 'body'),
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
  validatorHandler(getAlumnoSchema, 'params'),
  validatorHandler(updateAlumnoSchema, 'body'),
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
  validatorHandler(getAlumnoSchema, 'params'),
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

