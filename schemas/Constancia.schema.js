const Joi = require('joi');

const clave_constancia=Joi.string();
const fecha_constancia=Joi.string();



const createConstanciaSchema = Joi.object({

  clave_constancia:clave_constancia.required(),
  fecha_constancia:fecha_constancia.required(),


});

const updateConstanciaSchema = Joi.object({
    fecha_constancia:fecha_constancia,
});

const getConstanciaSchema = Joi.object({
    clave_constancia:clave_constancia.required(),
});

module.exports = { createConstanciaSchema,  updateConstanciaSchema,  getConstanciaSchema }