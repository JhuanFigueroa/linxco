const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')


class RolService {
  constructor() {}

  async create(data) {
    const newRol=await models.Rol.create(data);

    return newRol;
  }

  async find() {
    const rta = await models.Rol.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.Rol.findByPk(id);
    if (!rta) {
      throw boom.notFound('rol not found')
    }
    return rta;
  }

  async update(id, changes) {

    const rol= await this.findOne(id);
    const rta=await rol.update(changes);
    return rta;
  }

  async delete(id) {
    const changes={
      'status':0
    }
    const rol= await this.findOne(id);
    const rta=await rol.update(changes);
    return rta;
  }
}

module.exports = RolService;
