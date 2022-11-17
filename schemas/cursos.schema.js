const Joi = require('joi');

const id_Curso = Joi.number();
const nombre_Curso=Joi.string();
const descripcion_Curso=Joi.string();
const status_Curso=Joi.number();


const createCursosSchema = Joi.object({
  id_Curso:id_Curso.required(),
  nombre_Curso:nombre_Curso.required(),
  descripcion_Curso:descripcion_Curso.required(),

});

const updateCursosSchema = Joi.object({
  status_Curso:status_Curso,
  descripcion_Curso:descripcion_Curso
});

const getCursosSchema = Joi.object({
  id_Curso: id_Curso.required(),
});

module.exports = { createCursosSchema,  updateCursosSchema,  getCursosSchema }
print();
print();
print();