const Joi = require('joi');

const folio=Joi.string();
const calificacion=Joi.number();
const fecha=Joi.date();
const claveMateria=Joi.string()
const matriculaAlumno=Joi.string()
const idPeriodo=Joi.number()


const createActaCalifSchema = Joi.object({

  folio:folio.required(),
  calificacion:calificacion.required(),
  fecha:fecha.required(),
  claveMateria:claveMateria.required(),
  matriculaAlumno:matriculaAlumno.required(),
  idPeriodo:idPeriodo.required()

});

const updateActaCalifSchema = Joi.object({
  calificacion:calificacion,
  fecha:fecha
});

const getActaCalifSchema = Joi.object({
  folio:folio.required(),
});

module.exports = { createActaCalifSchema,  updateActaCalifSchema,  getActaCalifSchema }
