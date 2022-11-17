const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const Grupoervice = require('../services/Grupo.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateGrupoSchema, createGrupochema, getGrupochema } = require('../schemas/Grupo.schema');

const router = express.Router();
const service = new Grupoervice();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const Grupo = await service.find();
      res.json(Grupo);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getGrupochema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const Grupo = await service.findOne(id);
      res.json(Grupo);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  checkAdminRole,
  validatorHandler(createGrupochema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newGrupo = await service.create(body);
      res.status(201).json(newGrupo);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getGrupochema, 'params'),
  validatorHandler(updateGrupochema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const Grupo = await service.update(id, body);
      res.json(Grupo);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getGrupochema, 'params'),
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

