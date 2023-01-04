const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')


class CursoCargaService {
  constructor() {}

  async create(data) {

    const newCursoCarga=await models.CursoCarga.create(data);


    return newCursoCarga;
  }

  async find() {
    const rta = await models.CursoCarga.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.CursoCarga.findByPk(id);
    if (!rta) {
      throw boom.notFound('CursoCarga not found')
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
module.exports = CursoCargaService;
