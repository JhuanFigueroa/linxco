const Joi = require('joi');

const clave_materia = Joi.string();
const nombre_materia = Joi.string();
const creditos_materia = Joi.number();

const createMateriaSchema = Joi.object({
  clave_materia:clave_materia.required(),
  nombre_materia:nombre_materia .required(),
  creditos_materia:creditos_materia.required(),
});

const updateMateriaSchema = Joi.object({
    nombre_materia: nombre_materia,

});

const getMateriaSchema = Joi.object({
  clave_materia: clave_materia.required(),
});

module.exports = { createMateriaSchema,  updateMateriaSchema,  getMateriaSchema }
