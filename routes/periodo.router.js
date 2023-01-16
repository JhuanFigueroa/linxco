const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('../middlewares/auth.handler')

const PeriodoService = require('../services/periodo.service');
const validatorHandler = require('../middlewares/validator.handler');
const { updatePeriodoSchema, createPeriodoSchema, getPeriodoSchema } = require('../schemas/periodo.schema');
const upload = require("../libs/storage");

const router = express.Router();
const service = new PeriodoService();


router.get('/',
  // passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      //const periodo = await service.find();
      const verperiodos = await service.verDatos();
      //const exDatos = await service.extraerDatos();
      res.json({verperiodos}); //En caso de usar mas de 2 servicios
    } catch (error) {
      next(error);
    }
  });

router.get('/all',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const periodos = await service.find();
      res.json(periodos); //En caso de usar mas de 2 servicios
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getPeriodoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const periodo = await service.findOne(id);
      res.json(periodo);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  //upload.single('imagen'),
  //passport.authenticate('jwt',{session:false}),
  //checkAdminRole,
  validatorHandler(createPeriodoSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      //const file=req.file;
      const newPeriodo = await service.create(body);
      res.status(201).json(newPeriodo);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getPeriodoSchema, 'params'),
  validatorHandler(updatePeriodoSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const periodo = await service.update(id, body);
      res.json(periodo);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getPeriodoSchema, 'params'),
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

