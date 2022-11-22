const Joi = require('joi');

const id_maestroHorario = Joi.number();
const id_horario = Joi.number();
const clave_materia = Joi.string();


const createmaestroHorarioSchema = Joi.object({
  id_maestroHorario:id_maestroHorario.required(),
  id_horario:id_horario.require(),
  clave_materia:clave_materia.require()
});

const updatemaestroHorarioSchema = Joi.object({
    id_horario:id_horario.require(),
    clave_materia:clave_materia.require()
});

const getmaestroHorarioSchema = Joi.object({
    id_maestroHorario: id_maestroHorario.required()
});

module.exports = { createmaestroHorarioSchema,  updatemaestroHorarioSchema,  getmaestroHorarioSchema}
