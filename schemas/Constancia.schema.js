const Joi = require('joi');

const clave=Joi.string();
const fecha=Joi.string();



const createConstanciaSchema = Joi.object({

  clave:clave.required(),
  fecha:fecha.required(),


});

const updateConstanciaSchema = Joi.object({
    fecha:fecha,
});

const getConstanciaSchema = Joi.object({
    clave:clave.required(),
});

module.exports = { createConstanciaSchema,  updateConstanciaSchema,  getConstanciaSchema }
