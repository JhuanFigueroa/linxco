const express = require('express');

const alumnosRouter=require('../routes/alumno.router');
const admisionRouter=require('../routes/admision.router');
const bajasRouter=require('../routes/baja_temp_def.router');
const bajaAlumnoRouter=require('../routes/baja_alumno.router');
const cargaAcademicaRouter=require('../routes/carga_academica.router')
const cursoRouter=require('../routes/cursos.router')
const maestrosRouter=require('../routes/maestros.router');
const materiasRouter=require('../routes/materia.router');
const authRouter=require('../routes/auth.router');
const rolRouter=require('../routes/rol.router');
const carreraRouter=require('../routes/carrera.router');
const empleadoRouter=require('../routes/empleado.router');
const grupoRouter=require('../routes/grupo.router');
const facturaRouter=require('../routes/Factura.router');
const materiaCarga=require('../routes/materia_carga.router');
const razonfFacturaRouter=require('../routes/razonf_factura.router')
const tramiteRouter=require('../routes/tramites.router')
const tipoCargaRoute=require('../routes/tipo_carga.router')
const tablaCarrera=require('../routes/carrera.router')
const tablaPeriodo=require('../routes/periodo.router')
const semestre=require('../routes/semestre.router')

const peticionRouter=require('../routes/peticion.router')

function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/alumnos', alumnosRouter);
  router.use('/bajas', bajasRouter);
  router.use('/baja-alumno', bajaAlumnoRouter);
  router.use('/admision', admisionRouter);
  router.use('/carga-academica', cargaAcademicaRouter);
  router.use('/cursos', cursoRouter);
  router.use('/maestros', maestrosRouter);
  router.use('/materias', materiasRouter);
  router.use('/auth', authRouter);
  router.use('/roles', rolRouter);
  router.use('/carreras', carreraRouter);
  router.use('/empleados', empleadoRouter);
  router.use('/grupos', grupoRouter);
  router.use('/factura', facturaRouter);
  router.use('/razonf-factura', razonfFacturaRouter);

  router.use('/materia-carga', materiaCarga);
  router.use('/tramites', tramiteRouter);
  router.use('/tipoCarga', tipoCargaRoute);
  router.use('/carrera',tablaCarrera);
  router.use('/periodo',tablaPeriodo);
  router.use('/peticiones',peticionRouter);
  router.use('/semestre',semestre);

}

module.exports = routerApi;
