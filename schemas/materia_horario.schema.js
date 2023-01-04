const Joi = require('joi');

const id_materiaHorario = Joi.number();
const id_horario = Joi.number();
const clave_materia = Joi.string();


const createmateriaHorarioSchema = Joi.object({
  id_materiaHorario:id_materiaHorario.required(),
  id_horario:id_horario.require(),
  clave_materia:clave_materia.require()
});

const updatemateriaHorarioSchema = Joi.object({
    id_horario:id_horario.require(),
    clave_materia:clave_materia.require()
});

const getmateriaHorarioSchema = Joi.object({
    id_materiaHorario: id_materiaHorario.required()
});

module.exports = { createmateriaHorarioSchema,  updatemateriaHorarioSchema,  getmateriaHorarioSchema}
