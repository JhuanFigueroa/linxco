const express = require('express');

const alumnosRouter=require('../routes/alumno.router');
const admisionRouter=require('../routes/admision.router');
const cargaAcademicaRouter=require('../routes/carga_academica.router')
const maestrosRouter=require('../routes/maestros.router');
const materiasRouter=require('../routes/materia.router');
const authRouter=require('../routes/auth.router');
const rolRouter=require('../routes/rol.router');
const carreraRouter=require('../routes/carrera.router');
const empleadoRouter=require('../routes/empleado.router');
const facturaRouter=require('../routes/Factura.router');
const materiaCarga=require('../routes/materia_carga.router');
const tramiteRouter=require('../routes/tramites.router')
const tipoCargaRoute=require('../routes/tipo_carga.router')


function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/alumnos', alumnosRouter);
  router.use('/admision', admisionRouter);
  router.use('/carga-academica', cargaAcademicaRouter);
  router.use('/maestros', maestrosRouter);
  router.use('/materias', materiasRouter);
  router.use('/auth', authRouter);
  router.use('/roles', rolRouter);
  router.use('/carreras', carreraRouter);
  router.use('/empleados', empleadoRouter);
  router.use('/factura', facturaRouter);
  router.use('/materia-carga', materiaCarga);
  router.use('/tramites', tramiteRouter);
  router.use('/tipoCarga', tipoCargaRoute);


}

module.exports = routerApi;
