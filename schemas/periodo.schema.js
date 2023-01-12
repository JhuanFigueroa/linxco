const Joi = require('joi');

const id=Joi.number();
const numero=Joi.string();
const descripcion=Joi.string();
const status=Joi.number();
//const imagen=Joi.object();


const createPeriodoSchema = Joi.object({
  //id_periodo:id_periodo.required(),
  numero:numero.required(),
  descripcion:descripcion.required(),
  status:status.required()

});

const updatePeriodoSchema = Joi.object({
  numero:numero,
  descripcion:descripcion
});

const getPeriodoSchema = Joi.object({
  id:id.required()
});

module.exports = { createPeriodoSchema,  updatePeriodoSchema,  getPeriodoSchema}
