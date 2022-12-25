const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')
const sequilize=require('../libs/sequelize')

class MateriaService {
  constructor() {}

  async create(data) {
    const newMateria=await models.Materia.create(data
      );

    delete newMateria.dataValues.password;

    return newMateria;
  }

  async find() {
    const rta = await models.Materia.findAll()

    return rta;
  }

  async findOne(clave) {
    console.log(clave)
    const rta=await models.Materia.findByPk(clave);
    if (!rta) {
      throw boom.notFound('materia not found')
    }
    return rta;
  }

  async update(id, changes) {

    const materia= await this.findOne(id);
    const rta=await materia.update(changes);
    return rta;
  }

  async delete(id) {
    const change ={
      'status': 0
    }
    const materia = await this.findOne(id);
    const rta = await materia.update(change);
    return rta;
  }
}

module.exports = MateriaService;
