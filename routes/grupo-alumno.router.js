const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const grupo_AlumnoService = require('../services/grupo-alumno.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updategrupo_AlumnoSchema, creategrupo_AlumnoSchema, getgrupo_AlumnoSchema } = require('../schemas/grupo-alumno.schema');

const router = express.Router();
const service = new grupo_AlumnoService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const grupo_Alumno = await service.find();
      res.json(grupo_Alumno);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getgrupo_AlumnoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const grupo_Alumno = await service.findOne(id);
      res.json(grupo_Alumno);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  validatorHandler(creategrupo_AlumnoSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newgrupoAlumno = await service.create(body);
      res.status(201).json(newgrupoAlumno);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getgrupo_AlumnoSchema, 'params'),
  validatorHandler(updategrupo_AlumnoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const grupo_Alumno = await service.update(id, body);
      res.json(grupo_Alumno);
    } catch (error) {
      next(error);
    }
  }
);
/*
router.delete('/:id',
  validatorHandler(getgrupo_AlumnoSchema, 'params'),
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
