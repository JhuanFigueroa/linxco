const Joi = require('joi');

const clave_tipo_carga = Joi.string();
const nombre_tipo_carga=Joi.string();
const descripcion_tipo_carga=Joi.string();
const status_tipo_carga=Joi.number();


const createTipoCargaSchema = Joi.object({
  clave_tipo_carga:clave_tipo_carga.required(),
  nombre_tipo_carga:nombre_tipo_carga.required(),
  descripcion_tipo_carga:descripcion_tipo_carga.required(),
  status_tipo_carga:status_tipo_carga.required()
});

const updateTipoCargaSchema = Joi.object({
  status_tipo_carga:status_tipo_carga

});

const getTipoCargaSchema = Joi.object({
  clave_tipo_carga: clave_tipo_carga.required(),
});

module.exports = { createTipoCargaSchema,  updateTipoCargaSchema,  getTipoCargaSchema }
