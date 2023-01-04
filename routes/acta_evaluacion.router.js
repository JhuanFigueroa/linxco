const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const ActaEvaluaService = require('../services/acta_evaluacion.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateActaEvaluaSchema, createActaEvaluaSchema, getActaEvaluachema } = require('../schemas/acta_evaluacion.schema');

const router = express.Router();
const service = new ActaEvaluaService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const actas = await service.find();
      res.json(actas);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getActaEvaluachema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const acta = await service.findOne(id);
      res.json(acta);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  checkAdminRole,
  validatorHandler(createActaEvaluaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newActaEvalua = await service.create(body);
      res.status(201).json(newActaEvalua);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getActaEvaluachema, 'params'),
  validatorHandler(updateActaEvaluaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const acta = await service.update(id, body);
      res.json(acta);
    } catch (error) {
      next(error);
    }
  }
);



module.exports = router;

