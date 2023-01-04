const Joi = require('joi');

const id=Joi.number();
const idBaja=Joi.number();
const matriculaAlumno=Joi.string();



const createBajaAlumnoSchema = Joi.object({
  idBaja:idBaja.required(),
  matriculaAlumno:matriculaAlumno.required()


});

const updateBajaAlumnoSchema =Joi.object({
  matriculaAlumno:matriculaAlumno
});

const getBajaAlumnoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createBajaAlumnoSchema,  updateBajaAlumnoSchema,  getBajaAlumnoSchema }
