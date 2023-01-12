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
      "\tfactura.numero_comprobante AS numero, \n" +
      "\tfactura.monto_total_factura AS monto\n" +
      "FROM\n" +
      "\talumno\n" +
      "\tINNER JOIN\n" +
      "\tfactura\n" +
      "\tON \n" +
      "\t\talumno.matricula_alumno = factura.matricula_alumno\n" +
      "\tINNER JOIN\n" +
      "\trazonf_factura\n" +
      "\tON \n" +
      "\t\tfactura.id_factura = razonf_factura.id_factura\n" +
      "WHERE\n" +
      "\tfactura.status_factura = '1' AND\n" +
      "\talumno.matricula_alumno = '"+clave+"' AND\n" +
      "\trazonf_factura.clave_razon_factura = 'IN454'");
    return data;
  }

  async finbyAlumnoConst(clave) {
    const [data]=await sequelize.query("SELECT\n" +
      "\tfactura.numero_comprobante AS numero, \n" +
      "\tfactura.monto_total_factura AS monto\n" +
      "FROM\n" +
      "\talumno\n" +
      "\tINNER JOIN\n" +
      "\tfactura\n" +
      "\tON \n" +
      "\t\talumno.matricula_alumno = factura.matricula_alumno\n" +
      "\tINNER JOIN\n" +
      "\trazonf_factura\n" +
      "\tON \n" +
      "\t\tfactura.id_factura = razonf_factura.id_factura\n" +
      "WHERE\n" +
      "\tfactura.status_factura = '1' AND\n" +
      "\talumno.matricula_alumno = '"+clave+"' AND\n" +
      "\trazonf_factura.clave_razon_factura = 'FFD64'");
    return data;
  }
  async updateFactConst(data){
    const numero=data.numero
    const matricula=data.matricula
    const res=await sequelize.query("UPDATE factura \n" +
      "SET status_factura = 0 \n" +
      "WHERE\n" +
      "\tnumero_comprobante = '"+numero+"';UPDATE peticion \n" +
      "SET status_peticion = 0 \n" +
      "WHERE\n" +
      "\tmatricula_alumno = '"+matricula+"'");
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
