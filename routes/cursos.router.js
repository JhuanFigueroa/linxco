const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const CursosService = require('../services/cursos.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateCursosSchema, createCursosSchema, getCursosSchema } = require('../schemas/cursos.schema');

const router = express.Router();
const service = new CursosService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
  try {
    const cursos = await service.find();
    res.json(cursos);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getCursosSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const cursos = await service.findOne(id);
      res.json(cursos);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  checkAdminRole,
  validatorHandler(createCursosSchema, 'body'),
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
  validatorHandler(getCursosSchema, 'params'),
  validatorHandler(updateCursosSchema, 'body'),
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
  validatorHandler(getCursosSchema, 'params'),
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
