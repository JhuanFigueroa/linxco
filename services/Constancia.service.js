const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')


class ConstanciaService {
  constructor() {}

  async create(data) {

    const newConstancia=await models.Constancia.create(data);


    return newConstancia;
  }

  async find() {
    const rta = await models.Constancia.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.Constancia.findByPk(id);
    if (!rta) {
      throw boom.notFound('Constancia not found')
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
module.exports = ConstanciaService;
