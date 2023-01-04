const Joi = require('joi');

const id=Joi.number();
const clave_ConstanciaAlumno=Joi.string();
const matriculaAlumno=Joi.string();



const createConstanciaAlumnoSchema = Joi.object({
  id:id.required(),
  clave_ConstanciaAlumno:clave_ConstanciaAlumno.required(),
  matriculaAlumno:matriculaAlumno.required(),
});

const updateConstanciaAlumnoSchema = Joi.object({
    
});

const getConstanciaAlumnoSchema = Joi.object({
    id:id.required(),
});

module.exports = { createConstanciaAlumnoSchema,  updateConstanciaAlumnoSchema,  getConstanciaAlumnoSchema }