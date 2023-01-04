const Joi = require('joi');

const id_grupo=Joi.number();
const numero_grupo=Joi.string();
const status_grupo=Joi.number();
const claveCarrera=Joi.string()

const createGrupoSchema = Joi.object({

  id_grupo:id_grupo.required(),
  numero_grupo:numero_grupo.required(),
  claveCarrera:claveCarrera.required()

});

const updateGrupoSchema = Joi.object({
  status_grupo:status_grupo,
});

const getGrupoSchema = Joi.object({
  id_grupo:id_grupo.required(),
});

module.exports = { createGrupoSchema,  updateGrupoSchema,  getGrupoSchema }
