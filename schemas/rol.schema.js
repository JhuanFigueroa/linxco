const Joi = require('joi');

const id=Joi.number();
const nombre=Joi.string();
const status=Joi.number();


const createRolSchema = Joi.object({

  nombre:nombre.required(),

  status:status.required(),


});

const updateRolSchema = Joi.object({
  status:status.required(),
});

const getRolSchema = Joi.object({
  id: id.required(),
});

module.exports = { createRolSchema,  updateRolSchema,  getRolSchema }
