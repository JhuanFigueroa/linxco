const Joi = require('joi');

const clave=Joi.string();
const nombre=Joi.string();
const especialidad=Joi.string();
const plan_estudios=Joi.string();
const status=Joi.number();


const createCarreraSchema = Joi.object({

  clave:clave.required(),
  nombre:nombre.required(),
  especialidad:especialidad.required(),
  plan_estudios:plan_estudios.required(),
  status:status.required(),


});

const updateCarreraSchema = Joi.object({
  especialidad:especialidad,
  plan_estudios:plan_estudios,
  status:status,
});

const getCarreraSchema = Joi.object({
  clave: clave.required(),
});

module.exports = { createCarreraSchema,  updateCarreraSchema,  getCarreraSchema }
