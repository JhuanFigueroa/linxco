const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')


class tipoEvaluacionService {
  constructor() {}

  async create(data) {


    const newtipoEvaluacion=await models.TipoEvaluacion.create(data);

    delete newtipoEvaluacion.dataValues.password;

    return newtipoEvaluacion;
  }

  async find() {
    const rta = await models.TipoEvaluacion.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.TipoEvaluacion.findByPk(id);
    if (!rta) {
      throw boom.notFound('evaluacion not found')
    }
    return rta;
  }

  async update(id, changes) {

    const evaluacion= await this.findOne(id);
    const rta=await evaluacion.update(changes);
    return rta;
  }

  async delete(id) {
    const change ={
      'status': 0
    }
    const evaluacion = await this.findOne(id);
    const rta = await evaluacion.update(change);
    return rta;
  }
}

module.exports = tipoEvaluacionService;
