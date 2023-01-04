const Joi = require('joi');

const id_semestre=Joi.number();
const numero_semestre=Joi.string();
const status_semestre=Joi.number();


const createSemestreSchema = Joi.object({

  id_semestre:id_semestre.required(),
  numero_semestre:numero_semestre.required(),
  
});

const updateSemestreSchema = Joi.object({
  status_Semestre:status_Semestre,
});

const getSemestreSchema = Joi.object({
  id_Semestre:id_Semestre.required(),
});

module.exports = { createSemestreSchema,  updateSemestreSchema,  getSemestreSchema }