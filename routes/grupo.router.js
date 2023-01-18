const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const Grupoervice = require('../services/grupo.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateGrupoSchema, createGrupochema, getGrupochema } = require('../schemas/grupo.schema');

const router = express.Router();
const service = new Grupoervice();


router.get('/',
  // passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const Grupo = await service.find();
      res.json(Grupo);
    } catch (error) {
      next(error);
    }
  });

router.get('/nombre/:grupo',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const{grupo}=req.params
      const Grupo = await service.findByNombre(grupo);
      res.json(Grupo);
    } catch (error) {
      next(error);
    }
  });

router.get('/carrera/:clave',
 // passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const {clave}=req.params
      const Grupo = await service.findByCarrera(clave);
      res.json(Grupo);
    } catch (error) {
      next(error);
    }
  });

  router.get('/maestro/:clave/:carrera',
  //validatorHandler(getSemestrechema, 'params'),
  async (req, res, next) => {
    try {
      const { clave } = req.params;
      const { carrera } = req.params
      const Grupo = await service.findByMaestro(clave, carrera);
      res.json(Grupo);
    } catch (error) {
      next(error);
    }
  }
);
router.get('/:id',
  // validatorHandler(getGrupochema, 'params'),
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
  // passport.authenticate('jwt',{session:false}),
  // checkAdminRole,
  // validatorHandler(createGrupochema, 'body'),
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
  // validatorHandler(getGrupochema, 'params'),
  // validatorHandler(updateGrupoSchema, 'body'),
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
  // validatorHandler(getGrupochema, 'params'),
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

