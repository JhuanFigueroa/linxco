const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')

class maestro_horarioService {
  constructor() {}

  async create(data) {

    const newmaestroHorario=await models.maestroHorario.create(data);

    return newmaestroHorario;
  }

  async find() {
    const rta = await models.maestroHorario.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.maestroHorario.findByPk(id);
    if (!rta) {
      throw boom.notFound('maestro-horario not found')
    }
    return rta;
  }

  async update(id, changes) {

    const maestroHorario= await this.findOne(id);
    const rta=await maestroHorario.update(changes);
    return rta;
  }

  async delete(id) {
    const changes= {
      'status':0
    }
    const maestroHorario= await this.findOne(id);
    const rta=await maestroHorario.update(changes);
    return rta;
  }
}

module.exports = maestro_horarioService;
