const Joi = require('joi');

const id_horario = Joi.number();
const clave_carrera = Joi.string();
const id_periodo = Joi.number();
const id_grupo = Joi.number();


const createhorarioSchema = Joi.object({
  id_horario:id_horario.required(),
  clave_carrera:clave_carrera.require(),
  id_periodo:id_periodo.required(),
  id_grupo:id_grupo.require()
});

const updatehorarioSchema = Joi.object({
    id_periodo:id_periodo.require(),
    id_grupo:id_grupo.require()
});

const gethorarioSchema = Joi.object({
    id_horario: id_horario.required()
});

module.exports = { createhorarioSchema,  updatehorarioSchema,  gethorarioSchema}
