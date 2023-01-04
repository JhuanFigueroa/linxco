const Joi = require('joi');

const clave=Joi.string();
const nombre=Joi.string();
const especialidad=Joi.string();
const plan_estudios=Joi.string();
const status=Joi.number();
//const imagen=Joi.object();


const createCarreraSchema = Joi.object({

  clave:clave.required(),
  nombre:nombre.required(),
  especialidad:especialidad.required(),
  plan_estudios:plan_estudios.required(),


});

const updateCarreraSchema = Joi.object({
  clave:clave,
  nombre:nombre,
  especialidad:especialidad,
  plan_estudios:plan_estudios
});

const getCarreraSchema = Joi.object({
  clave: clave.required(),
});

module.exports = { createCarreraSchema,  updateCarreraSchema,  getCarreraSchema }
