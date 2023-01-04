const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')

class materia_carreraService {
  constructor() {}

  async create(data) {

    const newmateriaCarrera=await models.materiaCarrera.create(data);

    return newmateriaCarrera;
  }

  async find() {
    const rta = await models.materiaCarrera.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.materiaCarrera.findByPk(id);
    if (!rta) {
      throw boom.notFound('materia-carrera not found')
    }
    return rta;
  }

  async update(id, changes) {

    const materiaCarrera= await this.findOne(id);
    const rta=await materiaCarrera.update(changes);
    return rta;
  }

  async delete(id) {
    const changes= {
      'status':0
    }
    const materiaCarrera= await this.findOne(id);
    const rta=await materiaCarrera.update(changes);
    return rta;
  }
}

module.exports = materia_carreraService;
