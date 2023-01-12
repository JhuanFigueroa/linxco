const Joi = require('joi');

const clave = Joi.string();
const nombre=Joi.string();
const apellido_paterno=Joi.string();
const apellido_materno=Joi.string();
const correo = Joi.string().email();
const username=Joi.string();
const password = Joi.string().min(8);
const status=Joi.number();
const idRol=Joi.number();

const createMaestroSchema = Joi.object({
  clave:clave.required(),
  nombre:nombre.required(),
  apellido_paterno:apellido_paterno.required(),
  apellido_materno:apellido_materno.required(),
  correo:correo.required(),
  username:username.required(),
  password:password.required(),
  idRol:idRol.required()

});

const updateMaestroSchema = Joi.object({
  clave:clave,
  nombre:nombre,
  apellido_paterno:apellido_paterno,
  apellido_materno:apellido_materno,
  correo:correo,

});

const getMaestroSchema = Joi.object({
  clave: clave.required(),
});

module.exports = { createMaestroSchema,  updateMaestroSchema,  getMaestroSchema }
