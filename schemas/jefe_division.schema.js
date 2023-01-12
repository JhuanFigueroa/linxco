const Joi = require('joi');

const clave = Joi.string();
const nombre=Joi.string();
const apellido_paterno=Joi.string();
const apellido_materno=Joi.string();
const correo = Joi.string().email();
const username=Joi.string();
const password = Joi.string().min(8);
const idRol=Joi.number();
const claveCarrera=Joi.string()

const createJefeSchema = Joi.object({
  clave:clave.required(),
  nombre:nombre.required(),
  apellido_paterno:apellido_paterno.required(),
  apellido_materno:apellido_materno.required(),
  correo:correo.required(),
  username:username.required(),
  password:password.required(),
  claveCarrera:claveCarrera.required(),
  idRol:idRol.required()

});

const updateJefeSchema = Joi.object({
  correo: correo,

});

const getJefeSchema = Joi.object({
  clave: clave.required(),
});

module.exports = { createJefeSchema,  updateJefeSchema,  getJefeSchema }
