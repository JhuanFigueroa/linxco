const Joi = require('joi');

const id=Joi.string();
const id_carga=Joi.string();
const id_curso=Joi.string();



const createCursoCargaSchema = Joi.object({

    id:id.required(),
    id_carga:id_carga.required(),
    id_curso:id_curso.required(),


});

const updateCursoCargaSchema = Joi.object({
    
});

const getCursoCargaSchema = Joi.object({
    id:id.required(),
});

module.exports = { createCursoCargaSchema,  updateCursoCargaSchema,  getCursoCargaSchema }