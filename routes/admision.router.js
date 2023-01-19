const express = require('express');
const passport = require('passport');
const upload = require('../libs/storage');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const AdmisionService = require('../services/admision.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateAdmisionSchema, createAdmisionSchema, getAdmisionSchema } = require('../schemas/admision.schema');

const router = express.Router();
const service = new AdmisionService();


router.get('/aspiranteB',
  //passport.authenticate('jwt',{session:false}),//Esta sirve va validar que se haya iniciado sesion
  async (req, res, next) => {
    try {
      const users = await service.findAspitante();//Aqui se ejecuta el metodo que ete en service
      res.json(users);
    } catch (error) {
      next(error);
    }
  });
  router.get('/aspiranteB/:claveCarrera',
  //passport.authenticate('jwt',{session:false}),//Esta sirve va validar que se haya iniciado sesion
  async (req, res, next) => {
    try {
      const {claveCarrera} = req.params;
      const users = await service.findAspitanteCarrera(claveCarrera);//Aqui se ejecuta el metodo que ete en service
      res.json(users);
    } catch (error) {
      next(error);
    }
  });
router.get('/',
  //passport.authenticate('jwt',{session:false}),//Esta sirve va validar que se haya iniciado sesion
  async (req, res, next) => {
    try {
      const users = await service.find();//Aqui se ejecuta el metodo que ete en service
      res.json(users);
    } catch (error) {
      next(error);
    }
  });

router.get('/:numero',
  validatorHandler(getAdmisionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { numero } = req.params;
      const admision = await service.findOne(numero);
      res.json(admision);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  //upload.single('curp'),//para subir la curp solo un archivo
  //passport.authenticate('jwt',{session:false}),
  //checkAdminRole,
  //validatorHandler(createAdmisionSchema, 'body'),//valida que todos los datos se esten enviando
  async (req, res, next) => {
    try {
      const file=req.file
      const body = req.body;
      //const newAdmision = await service.create(file,body);
      const newAdmision = await service.create(body);
      res.status(201).json(newAdmision);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:numero',
  validatorHandler(getAdmisionSchema, 'params'),
  validatorHandler(updateAdmisionSchema, 'body'),
  async (req, res, next) => {
    try {
      const { numero } = req.params;
      const body = req.body;
      const admision = await service.update(numero, body);
      res.json(admision);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:numero',
  validatorHandler(getAdmisionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { numero } = req.params;
      await service.delete(numero);
      res.status(201).json({numero});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

