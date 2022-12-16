const Joi = require('joi');

const id=Joi.number();
const folioActa=Joi.string();
const idEvaluacion=Joi.number();



const createActaEvaluaSchema = Joi.object({
  folioActa:folioActa.required(),
  idEvaluacion:idEvaluacion.required()


});

const updateActaEvaluaSchema =Joi.object({
  idEvaluacion:idEvaluacion
});

const getActaEvaluachema = Joi.object({
  id: id.required(),
});

module.exports = { createActaEvaluaSchema,  updateActaEvaluaSchema,  getActaEvaluachema }
