const Joi = require('joi');

const folio=Joi.string();
const calificacion=Joi.number();
const fecha=Joi.date();


const createActaCalifSchema = Joi.object({

  folio:folio.required(),
  calificacion:calificacion.required(),
  fecha:fecha


});

const updateActaCalifSchema = Joi.object({
  calificacion:calificacion,
  fecha:fecha
});

const getActaCalifSchema = Joi.object({
  folio:folio.required(),
});

module.exports = { createActaCalifSchema,  updateActaCalifSchema,  getActaCalifSchema }
