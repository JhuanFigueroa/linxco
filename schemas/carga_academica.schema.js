const Joi = require('joi');

const id_carga_academica = Joi.number();
const fecha = Joi.string();
const claveTipoCarga=Joi.string()
const matriculaAlumno=Joi.string()
const idPeriodo=Joi.number()


const createcarga_academicaSchema = Joi.object({
  fecha:fecha.required(),
  claveTipoCarga:claveTipoCarga.required(),
  matriculaAlumno:matriculaAlumno.required(),
  idPeriodo:idPeriodo.required()
});

const updatecarga_academicaSchema = Joi.object({
    fecha:fecha

});

const getcarga_academicaSchema = Joi.object({
    id_carga_academica: id_carga_academica.required(),
});

module.exports = { createcarga_academicaSchema,  updatecarga_academicaSchema,  getcarga_academicaSchema }
