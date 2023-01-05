const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')
const sequelize=require('../libs/sequelize')


class razonf_facturaService {
  constructor() {}

  async create(data) {

    const newmateriaCarga=await models.RazonfFactura.create(data);


    return newmateriaCarga;
  }

  async find() {
    const rta = await models.RazonfFactura.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.RazonfFactura.findByPk(id);
    if (!rta) {
      throw boom.notFound('materia-carga not found')
    }
    return rta;
  }

  async findbyFactura(numero) {
    const [data]=await sequelize.query("SELECT\n" +
      "\trazon_factura.clave_razon_factura, \n" +
      "\tfactura.numero_comprobante, \n" +
      "\trazon_factura.nombre_razon_factura, \n" +
      "\trazon_factura.precio_unitario_factura\n" +
      "FROM\n" +
      "\trazon_factura\n" +
      "\tINNER JOIN\n" +
      "\trazonf_factura\n" +
      "\tON \n" +
      "\t\trazon_factura.clave_razon_factura = razonf_factura.clave_razon_factura\n" +
      "\tINNER JOIN\n" +
      "\tfactura\n" +
      "\tON \n" +
      "\t\tfactura.id_factura = razonf_factura.id_factura\n" +
      "WHERE\n" +
      "\tfactura.numero_comprobante = '"+numero+"'");

    return data;
  }

  async update(id, changes) {

    const materiaCarga= await this.findOne(id);
    const rta=await materiaCarga.update(changes);
    return rta;
  }

  async delete(id) {
    const changes= {
      'status':0
    }
    const materiaCarga= await this.findOne(id);
    const rta=await materiaCarga.update(changes);
    return rta;
  }
}

module.exports = razonf_facturaService;
