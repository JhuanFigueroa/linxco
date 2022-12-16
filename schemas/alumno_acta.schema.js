const Joi = require('joi');

const id=Joi.number();
const folioActa=Joi.string();
const matriculaAlumno=Joi.string();



const createAlumnoActaSchema = Joi.object({
  folioActa:folioActa.required(),
  matriculaAlumno:matriculaAlumno.required()


});

const updateAlumnoActaSchema =Joi.object({
  matriculaAlumno:matriculaAlumno
});

const getAlumnoActaSchema = Joi.object({
  id: id.required(),
});

module.exports = { createAlumnoActaSchema,  updateAlumnoActaSchema,  getAlumnoActaSchema }
