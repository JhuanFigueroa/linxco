const boom = require('@hapi/boom');
const {models}=require('../libs/sequelize')



class BajaRazonService {
  constructor() {}

  async create(data) {
    const newBaja=await models.BajaRazonBaja.create(data);

    return newBaja;
  }

  async find() {
    const rta = await models.BajaRazonBaja.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.BajaRazonBaja.findByPk(id);
    if (!rta) {
      throw boom.notFound('acta not found')
    }
    return rta;
  }

  async update(id, changes) {

    const baja= await this.findOne(id);
    const rta=await baja.update(changes);
    return rta;
  }

}

module.exports = BajaRazonService;
