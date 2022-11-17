const Joi = require('joi');

const nombre=Joi.string();
const apellido_paterno=Joi.string();
const apellido_materno=Joi.string();
const telefono = Joi.string();
const correo = Joi.string().email();
const status=Joi.number();
const username=Joi.string();
const password = Joi.string().min(8);
const idRol=Joi.number();


const createAlumnoSchema = Joi.object({
  nombre:nombre.required(),
  apellido_paterno:apellido_paterno.required(),
  apellido_materno:apellido_materno.required(),
  correo:correo.required(),
  telefono:telefono,
  username:username.required(),
  password:password.required(),
  idRol:idRol.required(),

});

const updateAlumnoSchema = Joi.object({
  nombre:nombre,
  apellido_paterno:apellido_paterno,
  apellido_materno:apellido_materno,
  correo:correo,
  telefono:telefono,

});

const getAlumnoSchema = Joi.object({
  matricula: matricula.required(),
});

module.exports = { createAlumnoSchema,  updateAlumnoSchema,  getAlumnoSchema }
