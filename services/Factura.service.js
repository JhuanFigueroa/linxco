const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')


class FacturaService {
  constructor() {}

  async create(data) {

    const newFactura=await models.Factura.create(data);

    delete newFactura.dataValues.password;

    return newFactura;
  }

  async find() {
    const rta = await models.Factura.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.Factura.findByPk(id);
    if (!rta) {
      throw boom.notFound('Factura not found')
    }
    return rta;
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
