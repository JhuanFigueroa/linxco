const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const ConstanciaService = require('../services/Constancia.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateConstanciaSchema, createConstanciaSchema, getConstanciaSchema } = require('../schemas/Constancia.schema');

const router = express.Router();
const service = new ConstanciaService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
  try {
    const Constancia = await service.find();
    res.json(Constancia);
  } catch (error) {
    next(error);
  }
});

router.get('/tipos',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const Constancia = await service.findTipos();
      res.json(Constancia);
    } catch (error) {
      next(error);
    }
  });

router.get('/tipos/:matriculaAlumno',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const Constancia = await service.findTipoByAlumno();
      res.json(Constancia);
    } catch (error) {
      next(error);
    }
  });

router.get('/tipo/:descripcion',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const {descripcion}=req.params
      const Constancia = await service.getTipoByDescrip(descripcion);
      res.json(Constancia);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getConstanciaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const Constancia = await service.findOne(id);
      res.json(Constancia);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  validatorHandler(createConstanciaSchema, 'body'),
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

router.post('/cons-tipo',
  passport.authenticate('jwt',{session:false}),

  async (req, res, next) => {
    try {
      const body = req.body;
      const newCurso = await service.createConstanciaTipo(body);
      res.status(201).json(newCurso);
    } catch (error) {
      next(error);
    }
  }
);
router.post('/cons-alumno',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCurso = await service.createConstanciaAlumno(body);
      res.status(201).json(newCurso);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getConstanciaSchema, 'params'),
  validatorHandler(updateConstanciaSchema, 'body'),
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
  validatorHandler(getConstanciaSchema, 'params'),
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
