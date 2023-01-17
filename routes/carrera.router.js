const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const CarreraService = require('../services/carrera.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateCarreraSchema, createCarreraSchema, getCarreraSchema } = require('../schemas/carrera.schema');
const upload = require("../libs/storage");

const router = express.Router();
const service = new CarreraService();


router.get('/',
  // passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const carreras = await service.find();
      const vercarreras = await service.verDatos();
      res.json({carreras,vercarreras}); //En caso de usar mas de 2 servicios
    } catch (error) {
      next(error);
    }
  });

router.get('/:clave',
  validatorHandler(getCarreraSchema, 'params'),
  async (req, res, next) => {
    try {
      const { clave } = req.params;
      const carrera = await service.findOne(clave);
      res.json(carrera);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  //upload.single('imagen'),
  //passport.authenticate('jwt',{session:false}),
  //checkAdminRole,
  validatorHandler(createCarreraSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      //const file=req.file;
      const newCarrera = await service.create(body);
      res.status(201).json(newCarrera);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:clave',
  validatorHandler(getCarreraSchema, 'params'),
  validatorHandler(updateCarreraSchema, 'body'),
  async (req, res, next) => {
    try {
      const { clave } = req.params;
      const body = req.body;
      const carrera = await service.update(clave, body);
      res.json(carrera);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:clave',
  validatorHandler(getCarreraSchema, 'params'),
  async (req, res, next) => {
    try {
      const { clave } = req.params;
      await service.delete(clave);
      res.status(200).json({clave});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

