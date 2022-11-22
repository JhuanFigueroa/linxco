const Joi = require('joi');

const id=Joi.number();
const numero_comprobante=Joi.string();
const cantidad=Joi.number();
const monto=Joi.number();
const monto_total=Joi.number();



const createFacturaSchema = Joi.object({

    id:id.required(),
    numero_comprobante:numero_comprobante.required(),
    cantidad:cantidad.required(),
    monto:monto.required(),
    monto_total:monto_total.required(),


});

const updateFacturaSchema = Joi.object({
    cantidad:cantidad,
    monto:monto,
    monto_total:monto_total,
});

const getFacturaSchema = Joi.object({
    id:id.required(),
});

module.exports = { createFacturaSchema,  updateFacturaSchema,  getFacturaSchema }