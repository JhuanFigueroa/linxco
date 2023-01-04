const Joi = require('joi');

const id_grupoAlumno = Joi.number();
const id_grupo = Joi.number();
const matricula_alumno = Joi.string();


const creategrupo_AlumnoSchema = Joi.object({
  id_grupoAlumno:id_grupoAlumno.required(),
  id_grupo:id_grupo.required(),
  matricula_alumno:matricula_alumno.require()
});

const updategrupo_AlumnoSchema = Joi.object({
    id_grupo:id_grupo.require(),
    matricula_alumno:matricula_alumno.require()
});

const getgrupo_AlumnoSchema = Joi.object({
    id_grupoAlumno: id_grupoAlumno.required()
});

module.exports = { creategrupo_AlumnoSchema,  updategrupo_AlumnoSchema,  getgrupo_AlumnoSchema}
