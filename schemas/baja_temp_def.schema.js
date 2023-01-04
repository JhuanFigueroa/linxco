const Joi = require('joi');

const id=Joi.number();
const tipo=Joi.string();
const fecha=Joi.date();



const createBajaSchema = Joi.object({
  tipo:tipo.required(),
  fecha:fecha



});

const updateBajaSchema =Joi.object({
  tipo:tipo,
  fecha:fecha
});

const getBajachema = Joi.object({
  id: id.required(),
});

module.exports = { createBajaSchema,  updateBajaSchema,  getBajachema }
