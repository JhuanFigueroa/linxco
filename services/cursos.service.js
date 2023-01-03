const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')


class CursosService {
  constructor() {}

  async create(data) {

    const newCursos=await models.Curso.create(data);

    delete newCursos.dataValues.password;

    return newCursos;
  }

  async find() {
    const rta = await models.Curso.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.Curso.findByPk(id);
    if (!rta) {
      throw boom.notFound('Cursos not found')
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
module.exports = CursosService;
