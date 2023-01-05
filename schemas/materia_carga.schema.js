const Joi = require('joi');

const id_materiaCarga = Joi.number();
const claveMateria = Joi.string();
const idCarga = Joi.number();
const idCurso=Joi.number()
const grupo=Joi.string()

const createmateriaCargaSchema = Joi.object({
  claveMateria:claveMateria.required(),
  idCarga:idCarga.required(),
  idCurso:idCurso.required(),
  grupo:grupo.required()
});

const updatemateriaCargaSchema = Joi.object({
    claveMateria:claveMateria.required(),
    idCarga:idCarga.required()
});

const getmateriaCargaSchema = Joi.object({
    id_materiaCarga: id_materiaCarga.required()
});

module.exports = { createmateriaCargaSchema,  updatemateriaCargaSchema,  getmateriaCargaSchema}
