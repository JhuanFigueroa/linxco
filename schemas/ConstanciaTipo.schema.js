const Joi = require('joi');

const id=Joi.number();
const idTipo=Joi.number();
const clave_ConstanciaTipo=Joi.string();


const createConstanciaTipoSchema = Joi.object({
  id:id.required(),
  idTipo: idTipo.required(),
  clave_ConstanciaTipo:clave_ConstanciaTipo.required(),
 
});

const updateConstanciaTipoSchema = Joi.object({
    
});

const getConstanciaTipoSchema = Joi.object({
    id:id.required(),
});

module.exports = { createConstanciaTipoSchema,  updateConstanciaTipoSchema,  getConstanciaTipoSchema }