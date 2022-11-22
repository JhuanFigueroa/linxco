const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const ConstanciaAlumnoService = require('../services/ConstanciaAlumno.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateConstanciaAlumnoSchema, createConstanciaAlumnoSchema, getConstanciaAlumnoSchema } = require('../schemas/ConstanciaAlumno.schema');

const router = express.Router();
const service = new ConstanciaAlumnoService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
  try {
    const ConstanciaAlumno = await service.find();
    res.json(ConstanciaAlumno);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getConstanciaAlumnoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const ConstanciaAlumno = await service.findOne(id);
      res.json(ConstanciaAlumno);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  checkAdminRole,
  validatorHandler(createConstanciaAlumnoSchema, 'body'),
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
  validatorHandler(getConstanciaAlumnoSchema, 'params'),
  validatorHandler(updateConstanciaAlumnoSchema, 'body'),
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
  validatorHandler(getConstanciaAlumnoSchema, 'params'),
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
