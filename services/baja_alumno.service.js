const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')
const sequelize=require('../libs/sequelize')



class BajaAlumnoService {
  constructor() {}

  async create(data) {
    const newBaja=await models.BajaAlumno.create(data);

    const rta=await sequelize.query("UPDATE alumno \n" +
      "SET status_alumno = 0 \n" +
      "WHERE\n" +
      "\tmatricula_alumno = '"+data.matriculaAlumno+"'");

    return newBaja;
  }

  async find() {
    const rta = await models.BajaAlumno.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.BajaAlumno.findByPk(id);
    if (!rta) {
      throw boom.notFound('acta not found')
    }
    return rta;
  }

  async update(id, changes) {

    const baja= await this.findOne(id);
    const rta=await baja.update(changes);
    return rta;
  }

}

module.exports = BajaAlumnoService;
