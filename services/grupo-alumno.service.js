const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')

class grupo_AlumnoService {
  constructor() {}

  async create(data) {

    const newgrupoAlumno=await models.grupo_Alumno.create(data);

    return newgrupoAlumno;
  }

  async find() {
    const rta = await models.grupoAlumno.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.grupoAlumno.findByPk(id);
    if (!rta) {
      throw boom.notFound('grupo-alumno not found')
    }
    return rta;
  }

  async update(id, changes) {

    const grupoAlumno= await this.findOne(id);
    const rta=await grupoAlumno.update(changes);
    return rta;
  }

  async delete(id) {
    const changes= {
      'status':0
    }
    const grupoAlumno= await this.findOne(id);
    const rta=await grupoAlumno.update(changes);
    return rta;
  }
}

module.exports = grupo_AlumnoService;
