const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')


class ConstanciaTipoService {
  constructor() {}

  async create(data) {

    const newConstanciaTipo=await models.ConstanciaTipo.create(data);


    return newConstanciaTipo;
  }

  async find() {
    const rta = await models.ConstanciaTipo.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.ConstanciaTipo.findByPk(id);
    if (!rta) {
      throw boom.notFound('ConstanciaTipo not found')
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
module.exports = ConstanciaTipoService;
