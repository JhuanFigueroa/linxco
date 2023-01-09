const Joi = require('joi');

const id=Joi.number();
const numero_comprobante=Joi.string();
const monto_total=Joi.number();
const matriculaAlumno=Joi.string()
const status=Joi.number()


const createFacturaSchema = Joi.object({
    numero_comprobante:numero_comprobante.required(),
    monto_total:monto_total.required(),
  matriculaAlumno:matriculaAlumno.required(),
  status:status.required()
});

const updateFacturaSchema = Joi.object({
  numero_comprobante:numero_comprobante
});

const getFacturaSchema = Joi.object({
    id:id.required(),
});

module.exports = { createFacturaSchema,  updateFacturaSchema,  getFacturaSchema }
