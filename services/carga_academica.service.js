const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const sequilize=require('../libs/sequelize')
const {models}=require('../libs/sequelize')


class carga_academicaService {
  constructor() {}

  async create(data) {

    const newCargaAcademica=await models.CargaAcademica.create(data);

    return newCargaAcademica.id;
  }

  async find() {
    const rta = await models.CargaAcademica.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.CargaAcademica.findByPk(id);
    if (!rta) {
      throw boom.notFound('tipo carga not found')
    }
    return rta;
  }

  async update(id, changes) {

    const tipocurso= await this.findOne(id);
    const rta=await tipocurso.update(changes);
    return rta;
  }

  async delete(id) {
    const changes= {
      'status':0
    }
    const tipocurso= await this.findOne(id);
    const rta=await tipocurso.update(changes);
    return rta;
  }
}

module.exports = carga_academicaService;
