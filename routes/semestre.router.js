const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const Semestreervice = require('../services/semestre.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateSemestreSchema, createSemestrechema, getSemestrechema } = require('../schemas/semestre.schema');

const router = express.Router();
const service = new Semestreervice();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const Semestre = await service.find();
      res.json(Semestre);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getSemestrechema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const Semestre = await service.findOne(id);
      res.json(Semestre);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/maestro/:clave',
  //validatorHandler(getSemestrechema, 'params'),
  async (req, res, next) => {
    try {
      const { clave } = req.params;
      const Semestre = await service.findByMaestro(clave);
      res.json(Semestre);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  checkAdminRole,
  validatorHandler(createSemestrechema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newSemestre = await service.create(body);
      res.status(201).json(newSemestre);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getSemestrechema, 'params'),
  validatorHandler(updateSemestreSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const Semestre = await service.update(id, body);
      res.json(Semestre);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getSemestrechema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(200).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

