const express = require('express');
const passport = require('passport');
const {uploadHorarios} = require('../libs/storage');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const JefeDivisionService = require('../services/jefe_division.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateJefeSchema, createJefeSchema, getJefeSchema } = require('../schemas/jefe_division.schema');

const router = express.Router();
const service = new JefeDivisionService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const users = await service.find();
      res.json(users);
    } catch (error) {
      next(error);
    }
  });

router.get('/:clave',
  validatorHandler(getJefeSchema, 'params'),
  async (req, res, next) => {
    try {
      const { clave } = req.params;
      const category = await service.findOne(clave);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt',{session:false}),
  validatorHandler(createJefeSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/horarios',
  uploadHorarios.single('ubicacion'),
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const file=req.file;
      const body = req.body;
      const newCategory = await service.subirHorario(file,body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);


router.patch('/:id',
  validatorHandler(getJefeSchema, 'params'),
  validatorHandler(updateJefeSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getJefeSchema, 'params'),
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

