const Joi = require('joi');

const id_carga_academica = Joi.number();
const fecha_carga_academica = Joi.string();


const createcarga_academicaSchema = Joi.object({
  id_carga_academica:id_carga_academica.required(),
  fecha_carga_academica:fecha_carga_academica.required(),
});

const updatecarga_academicaSchema = Joi.object({
    fecha_carga_academica:fecha_carga_academica

});

const getcarga_academicaSchema = Joi.object({
    id_carga_academica: id_carga_academica.required(),
});

module.exports = { createcarga_academicaSchema,  updatecarga_academicaSchema,  getcarga_academicaSchema }
