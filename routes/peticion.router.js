const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const PeticionService = require('../services/peticion.service');
const validatorHandler = require('./../middlewares/validator.handler');

const router = express.Router();
const service = new PeticionService();


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

router.get('/:id',

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

