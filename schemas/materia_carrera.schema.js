const Joi = require('joi');

const id_materiaCarrera = Joi.number();
const clave_materia = Joi.string();
const clave_carrera = Joi.string();


const createmateriaCarreraSchema = Joi.object({
  id_materiaCarrrera:id_materiaCarrera.required(),
  clave_materia:clave_materia.require(),
  clave_carrera:clave_carrera.require()
});

const updatemateriaCarreraSchema = Joi.object({
    clave_materia:clave_materia.require(),
    clave_carrera:clave_carrera.require()
});

const getmateriaCarreraSchema = Joi.object({
    id_materiaCarrera: id_materiaCarrera.required()
});

module.exports = { createmateriaCarreraSchema,  updatemateriaCarreraSchema,  getmateriaCarreraSchema}
