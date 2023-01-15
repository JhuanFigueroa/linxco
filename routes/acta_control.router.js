const express = require('express');
const passport = require('passport');


const ActaControlService = require('../services/acta_control.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {uploadActas} = require("../libs/storage");

const router = express.Router();
const service = new ActaControlService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const horario = await service.find();
      res.json(horario);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  uploadActas.single('ubicacion'),
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const file=req.file
      const body = req.body;
      const newhorario = await service.create(file,body);
      res.status(201).json(newhorario);
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
      const horario = await service.update(id, body);
      res.json(horario);
    } catch (error) {
      next(error);
    }
  }
);
/*
router.delete('/:id',
  validatorHandler(gethorarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);*/
module.exports = router;
