const Joi = require('joi');

const id_grupo=Joi.number();
const numero=Joi.string();
const status=Joi.number();
const claveCarrera=Joi.string()

const createGrupoSchema = Joi.object({

  // id_grupo:id_grupo.required(),
  numero:numero.required(),
  claveCarrera:claveCarrera.required(),
  status:status.required(),

});

const updateGrupoSchema = Joi.object({
  status:status,
});

const getGrupoSchema = Joi.object({
  id_grupo:id_grupo.required(),
});

module.exports = { createGrupoSchema,  updateGrupoSchema,  getGrupoSchema }
