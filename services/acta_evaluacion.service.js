const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')



class ActaEvaluaService {
  constructor() {}

  async create(data) {
    const newActa=await models.ActaEvaluacion.create(data);

    return newActa;
  }

  async find() {
    const rta = await models.ActaEvaluacion.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.ActaEvaluacion.findByPk(id);
    if (!rta) {
      throw boom.notFound('acta not found')
    }
    return rta;
  }

  async update(id, changes) {

    const acta= await this.findOne(id);
    const rta=await acta.update(changes);
    return rta;
  }

}

module.exports = ActaEvaluaService;
