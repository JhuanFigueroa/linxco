const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')



class BajaService {
  constructor() {}

  async create(data) {
    const newBaja=await models.Baja.create(data);

    return newBaja;
  }

  async find() {
    const rta = await models.Baja.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.Acta.findByPk(id);
    if (!rta) {
      throw boom.notFound('baja not found')
    }
    return rta;
  }

  async update(id, changes) {

    const baja= await this.findOne(id);
    const rta=await baja.update(changes);
    return rta;
  }

}

module.exports = BajaService;
