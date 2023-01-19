const Joi = require('joi');

const matricula = Joi.string();
const nombre=Joi.string();
const apellido_paterno=Joi.string();
const apellido_materno=Joi.string();
const telefono = Joi.string();
const correo = Joi.string().email();
const curp = Joi.string();
const domicilio = Joi.string();
const numeroSeguro = Joi.string();
const status=Joi.number();
const username=Joi.string();
const password = Joi.string().min(8);
const claveCarrera=Joi.string();
const idRol=Joi.number();
const idSemestre=Joi.number();

const createAlumnoSchema = Joi.object({
  matricula:matricula.required(),
  nombre:nombre.required(),
  apellido_paterno:apellido_paterno.required(),
  apellido_materno:apellido_materno.required(),
  correo:correo.required(),
  curp:curp.required(),
  domicilio:domicilio.required(),
  numeroSeguro:numeroSeguro.required(),
  status:status.required(),
  telefono:telefono.required(),
  username:username.required(),
  password:password.required(),
  idRol:idRol.required(),
  claveCarrera:claveCarrera.required(),
  idSemestre:idSemestre.required()
});

const updateAlumnoSchema = Joi.object({
  correo: correo,

});

const getAlumnoSchema = Joi.object({
  matricula: matricula.required(),
});

module.exports = { createAlumnoSchema,  updateAlumnoSchema,  getAlumnoSchema }
