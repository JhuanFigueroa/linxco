const Joi = require('joi');

const numero = Joi.string();
const nombre=Joi.string();
const apellido_paterno=Joi.string();
const apellido_materno=Joi.string();
const telefono = Joi.string();
const telefono_emergencia= Joi.string();
const correo = Joi.string().email();
const curp = Joi.string();
const domicilio = Joi.string();
const escuela = Joi.string();
const sangre = Joi.string();
const genero = Joi.string();
const lugar_nacimineto = Joi.string();
const lugar_aplicacion = Joi.string();
const persona_emergencia = Joi.string();
const fecha=Joi.date()
const claveCarrera=Joi.string();


const createAdmisionSchema = Joi.object({
  numero:numero.required(),
  nombre:nombre.required(),
  apellido_paterno:apellido_paterno.required(),
  apellido_materno:apellido_materno.required(),
  correo:correo.required(),
  curp:curp.required(),
  domicilio:domicilio.required(),
  telefono:telefono,
  telefono_emergencia:telefono_emergencia,
  escuela:escuela.required(),
  sangre:sangre.required(),
  genero:genero.required(),
  lugar_nacimineto:lugar_nacimineto.required(),
  lugar_aplicacion:lugar_aplicacion.required(),
  persona_emergencia:persona_emergencia,
  fecha:fecha,
  claveCarrera:claveCarrera.required()

});

const updateAdmisionSchema = Joi.object({
  nombre:nombre,
  apellido_paterno:apellido_paterno,
  apellido_materno:apellido_materno,
  correo:correo,
  curp:curp,
  domicilio:domicilio,
  telefono:telefono,
  telefono_emergencia:telefono_emergencia,
  escuela:escuela,
  sangre:sangre,
  genero:genero,
  lugar_nacimineto:lugar_nacimineto,
  lugar_aplicacion:lugar_aplicacion,
  persona_emergencia:persona_emergencia,
  fecha:fecha,

});

const getAdmisionSchema = Joi.object({
  numero: numero.required(),
});

module.exports = { createAdmisionSchema,  updateAdmisionSchema,  getAdmisionSchema }
