const Joi = require('joi');

const numero = Joi.string();
const nombre=Joi.string();
const apellido_paterno=Joi.string();
const apellido_materno=Joi.string();
const telefono = Joi.string();
const telefono_emergencia= Joi.string();
const correo = Joi.string().email();
const promedio = Joi.number();
const curp = Joi.string();
const domicilio = Joi.string();
const escuela = Joi.string();
const sangre = Joi.string();
const genero = Joi.string();
const lugar_nacimineto = Joi.string();
const lugar_aplicacion = Joi.string();
const persona_emergencia = Joi.string();
const claveCarrera=Joi.string();
const fecha=Joi.date();
const certificado=Joi.string();
const actaNac = Joi.string();
const identificacion = Joi.string()
const foto = Joi.string()
const curpfi=Joi.string()



const createAdmisionSchema = Joi.object({
  numero:numero.required(),
  nombre:nombre.required(),
  apellido_paterno:apellido_paterno.required(),
  apellido_materno:apellido_materno.required(),
  telefono:telefono,
  telefono_emergencia:telefono_emergencia,
  correo:correo.required(),
  promedio:promedio,
  curp:curp.required(),
  domicilio:domicilio.required(),
  escuela:escuela.required(),
  sangre:sangre.required(),
  genero:genero.required(),
  lugar_nacimineto:lugar_nacimineto.required(),
  lugar_aplicacion:lugar_aplicacion.required(),
  persona_emergencia:persona_emergencia,
  claveCarrera:claveCarrera.required(),
  fecha:fecha,
  certificado:certificado,
  actaNac:actaNac,
  identificacion:identificacion,
  foto:foto,
  curpfi:curpfi
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
  certificado:certificado,
  actaNac:actaNac,
  identificacion:identificacion,
  foto:foto,
  curpfi:curpfi
});

const getAdmisionSchema = Joi.object({
  numero: numero.required(),
});

module.exports = { createAdmisionSchema,  updateAdmisionSchema,  getAdmisionSchema }
