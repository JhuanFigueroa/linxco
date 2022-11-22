const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')

class materia_horarioService {
  constructor() {}

  async create(data) {

    const newmateriaHorario=await models.materiaHorario.create(data);

    return newmateriaHorario;
  }

  async find() {
    const rta = await models.materiaHorario.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.materiaHorario.findByPk(id);
    if (!rta) {
      throw boom.notFound('materia-horario not found')
    }
    return rta;
  }

  async update(id, changes) {

    const materiaHorario= await this.findOne(id);
    const rta=await materiaHorario.update(changes);
    return rta;
  }

  async delete(id) {
    const changes= {
      'status':0
    }
    const materiaHorario= await this.findOne(id);
    const rta=await materiaHorario.update(changes);
    return rta;
  }
}

module.exports = materia_horarioService;
