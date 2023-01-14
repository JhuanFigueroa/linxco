const express = require('express');
const passport = require('passport');
const {checkAdminRole} =require('./../middlewares/auth.handler')

const FacturaService = require('../services/Factura.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateFacturaSchema, createFacturaSchema, getFacturaSchema } = require('../schemas/Factura.schema');

const router = express.Router();
const service = new FacturaService();


router.get('/',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
  try {
    const Factura = await service.find();
    res.json(Factura);
  } catch (error) {
    next(error);
  }
});

router.get('/tipos',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const factura = await service.findTiposFactura();
      res.json(factura);
    } catch (error) {
      next(error);
    }
  });

router.get('/tipos/:clave',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const{clave}=req.params
      const factura = await service.findTiposFacturaId(clave);
      res.json(factura);
    } catch (error) {
      next(error);
    }
  });
router.get('/reinscripcion/:matricula',
  async (req, res, next) => {
    try {
      const { matricula } = req.params;
      const Factura = await service.finbyAlumno(matricula);
      res.json(Factura);
    } catch (error) {
      next(error);
    }
  }
);





router.get('/constancias/:matricula',
  async (req, res, next) => {
    try {
      const { matricula } = req.params;
      const Factura = await service.finbyAlumnoConst(matricula);
      res.json(Factura);
    } catch (error) {
      next(error);
    }
  }
);
router.post('/',
  passport.authenticate('jwt',{session:false}),
  validatorHandler(createFacturaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCurso = await service.create(body);
      res.status(201).json(newCurso);
    } catch (error) {
      next(error);
    }
  }
);
router.post('/pagar',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCurso = await service.updateFactConst(body);
      res.status(201).json(newCurso);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getFacturaSchema, 'params'),
  validatorHandler(updateFacturaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const curso = await service.update(id, body);
      res.json(curso);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getFacturaSchema, 'params'),
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
