const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const { config } = require('./../config/config');
const {checkAdminRole} = require("../middlewares/auth.handler");
const validatorHandler = require("../middlewares/validator.handler");
const {createAdmisionSchema} = require("../schemas/admision.schema");
const BoletaService = require("../services/tramites.service");
const service = new BoletaService();

const router = express.Router();

router.get('/boleta/:clave/:periodo',
  passport.authenticate('jwt',{session:false}),
  async (req, res, next) => {
    try {
      const {clave} = req.params;
      const {periodo} = req.params;
      const newAdmision = await service.generateBoleta(clave,periodo);
      res.status(201).json(newAdmision);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/periodo',
  async (req,res,next)=>{
      const periodo=await service.obtnerPeriodo();
    res.status(200).json(periodo);
  })

router.get('/reinscribir/estudiantes/:clave',
  async (req,res,next)=>{
    const{clave}=req.params
    const periodo=await service.getAlumnosReinscripcion(clave);
    res.status(200).json(periodo);
  })

router.post('/reinscribir',
  async (req,res,next)=>{
    const body=req.body
    const periodo=await service.asignarReinscripcion(body);
    res.status(200).json(periodo);
  })

router.get('/reinscribir/carga/:matricula/:periodo',
  async (req,res,next)=>{
    const {matricula}=req.params
    const {periodo}=req.params
    const tipoCarga=await service.obtnerTipoCarga(matricula,periodo);
    const carga=await service.obtenerCargaAlumno(matricula,periodo);
    res.status(200).json({tipoCarga, carga});
  })
router.post('/reinscribir-alumno',
  async (req,res,next)=>{
    const body=req.body
    const periodo=await service.reinscribirAlumno(body);
    res.status(200).json(periodo);
  })

router.post('/credencial',
  async (req,res,next)=>{
    const body=req.body
    const periodo=await service.credencial(body);
    res.status(200).json(periodo);
  })
router.post('/renuncia-seguro',
  async (req,res,next)=>{
    const body=req.body
    const periodo=await service.renunciaSeguro(body);
    res.status(200).json(periodo);
  })
module.exports = router;
