const Joi = require('joi');

const id_tipo_evaluacion = Joi.number();
const nombre_tipo_evaluacion = Joi.string();
const descripcion_tipo_evaluacion = Joi.string();

const createtipoEvaluacionSchema = Joi.object({
  id_tipo_evaluacion:id_tipo_evaluacion.required(),
  nombre_tipo_evaluacion:nombre_tipo_evaluacion .required(),
  descripcion_tipo_evaluacion:descripcion_tipo_evaluacion.required(),
});

const updatetipoEvaluacionSchema = Joi.object({
    descripcion_tipo_evaluacion:  descripcion_tipo_evaluacion,

});

const gettipoEvaluacionSchema = Joi.object({
    id_tipo_evaluacion: id_tipo_evaluacion.required(),
});

module.exports = { createtipoEvaluacionSchema,  updatetipoEvaluacionSchema,  gettipoEvaluacionSchema }
