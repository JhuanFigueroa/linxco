const express = require('express');

const alumnosRouter=require('../routes/alumno.router');
const admisionRouter=require('../routes/admision.router');
const maestrosRouter=require('../routes/maestros.router');
const authRouter=require('../routes/auth.router');
const rolRouter=require('../routes/rol.router');
const carreraRouter=require('../routes/carrera.router');
const empleadoRouter=require('../routes/empleado.router');
const tramiteRouter=require('../routes/tramites.router')


function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/alumnos', alumnosRouter);
  router.use('/admision', admisionRouter);
  router.use('/maestros', maestrosRouter);
  router.use('/auth', authRouter);
  router.use('/roles', rolRouter);
  router.use('/carreras', carreraRouter);
  router.use('/empleados', empleadoRouter);
  router.use('/tramites', tramiteRouter);


}

module.exports = routerApi;
