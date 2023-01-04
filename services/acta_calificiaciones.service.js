const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')



class ActaCalifService {
  constructor() {}

  async create(data) {
    const newActa=await models.Acta.create(data);

    return newActa;
  }

  async find() {
    const rta = await models.Acta.findAll()

    return rta;
  }

  async findOne(folio) {
    const rta=await models.Acta.findByPk(folio);
    if (!rta) {
      throw boom.notFound('acta not found')
    }
    return rta;
  }

  async update(folio, changes) {

    const acta= await this.findOne(folio);
    const rta=await acta.update(changes);
    return rta;
  }
  
}

module.exports = ActaCalifService;
