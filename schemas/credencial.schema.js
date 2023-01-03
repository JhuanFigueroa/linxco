const Joi = require('joi');

const id=Joi.number()
const matriculaAlumno=Joi.string();


const createConstanciaSchema = Joi.object({
  matriculaAlumno:matriculaAlumno.required()

});

const updateConstanciaSchema = Joi.object({
  matriculaAlumno:matriculaAlumno
});

const getConstanciaSchema = Joi.object({
 id:id.required()
});

module.exports = { createConstanciaSchema,  updateConstanciaSchema,  getConstanciaSchema }
