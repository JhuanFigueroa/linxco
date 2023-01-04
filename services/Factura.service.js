const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')
const sequelize=require('../libs/sequelize')

class FacturaService {
  constructor() {}

  async create(data) {

    const newFactura=await models.Factura.create(data);


    return newFactura.id;
  }

  async find() {
    const rta = await models.Factura.findAll()

    return rta;
  }

  async findTiposFactura() {
    const [data] = await sequelize.query("select clave_razon_factura as clave, nombre_razon_factura as nombre, precio_unitario_factura as precio  from razon_factura where status_razon_factura ='1'")

    return data;
  }

  async findTiposFacturaId(clave) {
    const [data] = await sequelize.query("select * from razon_factura where clave_razon_factura='"+clave+"'")

    return data;
  }

  async findOne(id) {
    const rta=await models.Factura.findByPk(id);
    if (!rta) {
      throw boom.notFound('Factura not found')
    }
    return rta;
  }

  async finbyAlumno(clave) {
    const [data]=await sequelize.query("SELECT\n" +
      "\tfactura.numero_comprobante as numero, \n" +
      "\tfactura.monto_total_factura as monto\n" +
      "FROM\n" +
      "\talumno\n" +
      "\tINNER JOIN\n" +
      "\tfactura\n" +
      "\tON \n" +
      "\t\talumno.matricula_alumno = factura.matricula_alumno\n" +
      "WHERE\n" +
      "\tfactura.status_factura = '1' AND\n" +
      "\talumno.matricula_alumno = '"+clave+"'");
    return data;
  }

  async update(id, changes) {

    const curso= await this.findOne(id);
    const rta=await curso.update(changes);
    return rta;
  }

  async delete(id) {
    const user= await this.findOne(id);
    await user.destroy();

    return {id};
  }
}
module.exports = FacturaService;
