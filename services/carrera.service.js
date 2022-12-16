const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')
const {Carrera} = require("../db/models/carrera.model");


class CarreraService {
  constructor() {}

  async create(data,file) {
    var filename = file.filename;
    filename = 'http://localhost:3000/storage/' + filename;
    data = {
      ...data,
      imagen: filename,
    };

    const newCarrera=await models.Carrera.create(data);

    return newCarrera;
  }

  async find() {
    const rta = await models.Carrera.findAll({where: {status : 1}})

    return rta;
  }

  async findOne(id) {
    const rta=await models.Carrera.findByPk(id);
    if (!rta) {
      throw boom.notFound('carrera not found')
    }
    return rta;
  }

  async update(id, changes) {

    const carrera= await this.findOne(id);
    const rta=await carrera.update(changes);
    return rta;
  }

  async delete(id) {
    const changes={
      'status':0
    }
    const carrera= await this.findOne(id);
    const rta=await carrera.update(changes);
    return rta;
  }
}

module.exports = CarreraService;
