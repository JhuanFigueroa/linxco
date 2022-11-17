const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')


class TipoCargaService {
  constructor() {}

  async create(data) {

    const newTipoCarga=await models.TipoCarga.create(data);

    delete newTipoCarga.dataValues.password;

    return newTipoCarga;
  }

  async find() {
    const rta = await models.TipoCarga.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.TipoCarga.findByPk(id);
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

module.exports = TipoCargaService;
