const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')


class ConstanciaAlumnoService {
  constructor() {}

  async create(data) {

    const newConstanciaAlumno=await models.ConstanciaAlumno.create(data);


    return newConstanciaAlumno;
  }

  async find() {
    const rta = await models.ConstanciaAlumno.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.ConstanciaAlumno.findByPk(id);
    if (!rta) {
      throw boom.notFound('ConstanciaAlumno not found')
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
module.exports = ConstanciaAlumnoService;
