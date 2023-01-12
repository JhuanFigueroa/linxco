const express = require('express');
const passport = require('passport');


const horariosService = require('../services/horarios.service');
const validatorHandler = require('./../middlewares/validator.handler');

const router = express.Router();
const service = new horariosService();


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

router.get('/carrera/:claveCarrera',
  async (req, res, next) => {
    try {
      const { claveCarrera } = req.params;
      const horario = await service.findByCarrera(claveCarrera);
      res.json(horario);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/descargar/:id', function(req,res){
  res.download(__dirname+'/storage/horarios/'+ req.params.id,
    req.params.id,function(err){
      if(err){
        console.log(err);
      }else{
        console.log("LISTO");
      }

    })
});

router.post('/',
  passport.authenticate('jwt',{session:false}),

  async (req, res, next) => {
    try {
      const body = req.body;
      const newhorario = await service.create(body);
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
