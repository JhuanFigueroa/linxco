const Joi = require('joi');

const id=Joi.number()
const idFactura = Joi.number();
const claveRazon = Joi.string();

const createrazonf_facturaSchema = Joi.object({
  idFactura:idFactura.required(),
  claveRazon:claveRazon.required()
});

const updaterazonf_facturaSchema = Joi.object({
  idFactura:idFactura,
  claveRazon:claveRazon
});

const getrazonf_facturaSchema = Joi.object({
  id: id.required()
});

module.exports = { createrazonf_facturaSchema,  updaterazonf_facturaSchema,  getrazonf_facturaSchema}
