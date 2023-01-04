const Joi = require('joi');

const id_periodo=Joi.number();
const numero_periodo=Joi.string();
const descripcion_periodo=Joi.string();
const status_periodo=Joi.number();
//const imagen=Joi.object();


const createPeriodoSchema = Joi.object({
  //id_periodo:id_periodo.required(),
  numero_periodo:numero_periodo.required(),
  descripcion_periodo:descripcion_periodo.required()

});

const updatePeriodoSchema = Joi.object({
  numero_periodo:numero_periodo,
  descripcion_periodo:descripcion_periodo
});

const getPeriodoSchema = Joi.object({
  id_periodo: id_periodo.required(),
});

module.exports = { createPeriodoSchema,  updatePeriodoSchema,  getPeriodoSchema}
