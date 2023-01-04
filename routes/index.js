const express = require('express');

const alumnosRouter=require('../routes/alumno.router');
const maestrosRouter=require('../routes/maestros.router');
const authRouter=require('../routes/auth.router');
const rolRouter=require('../routes/rol.router');
const carreraRouter=require('../routes/carrera.router');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/alumnos', alumnosRouter);
  router.use('/maestros', maestrosRouter);
  router.use('/auth', authRouter);
  router.use('/roles', rolRouter);
  router.use('/carreras', carreraRouter);


}

module.exports = routerApi;
