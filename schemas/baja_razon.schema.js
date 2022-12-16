const Joi = require('joi');

const id=Joi.number();
const idBaja=Joi.number();
const claveRazon=Joi.string();



const createBajaRazonSchema = Joi.object({
  idBaja:idBaja.required(),
  claveRazon:claveRazon.required()


});

const updateBajaRazonSchema =Joi.object({
  claveRazon:claveRazon
});

const getBajaRazonSchema = Joi.object({
  id: id.required(),
});

module.exports = { createBajaRazonSchema,  updateBajaRazonSchema,  getBajaRazonSchema }
