const Joi = require('joi');

const id_materiaCarga = Joi.number();
const clave_materia = Joi.string();
const id_carga_academica = Joi.number();


const createmateriaCargaSchema = Joi.object({
  id_materiaCarga:id_materiaCarga.required(),
  clave_materia:clave_materia.require(),
  id_carga_academica:id_carga_academica.require()
});

const updatemateriaCargaSchema = Joi.object({
    clave_materia:clave_materia.require(),
    id_carga_academica:id_carga_academica.require()
});

const getmateriaCargaSchema = Joi.object({
    id_materiaCarga: id_materiaCarga.required()
});

module.exports = { createmateriaCargaSchema,  updatemateriaCargaSchema,  getmateriaCargaSchema}
