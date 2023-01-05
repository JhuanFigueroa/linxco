const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')
const sequilize=require('../libs/sequelize')

class SemestreService {
  constructor() {}

  async create(data) {
    const newSemestre=await models.Semestre.create(data
      );


    return newSemestre;
  }

  async find() {
    const rta = await models.Semestre.findAll()

    return rta;
  }

  async findOne(clave) {
    console.log(clave)
    const rta=await models.Semestre.findByPk(clave);
    if (!rta) {
      throw boom.notFound('materia not found')
    }
    return rta;
  }
  async findByMaestro(clave) {
    console.log(clave)
    const [data]=await sequilize.query("SELECT DISTINCT carrera.nombre_carrera as nombre, carrera.clave_carrera as clave, carrera.imagen_carrera as imagen FROM carrera INNER JOIN grupo ON carrera.clave_carrera = grupo.clave_carrera INNER JOIN maestro_grupo ON grupo.id_grupo = maestro_grupo.id_grupo INNER JOIN maestro ON maestro_grupo.clave_maestro = maestro.clave_maestro WHERE maestro.clave_maestro = '"+ clave+"'");
    if (!data) {
      throw boom.notFound('materia not found')
    }
    return data;
  }

  async update(id, changes) {

    const semestre= await this.findOne(id);
    const rta=await semestre.update(changes);
    return rta;
  }

  async delete(id) {
    const change ={
      'status': 0
    }
    const semestre = await this.findOne(id);
    const rta = await semestre.update(change);
    return rta;
  }
}

module.exports = SemestreService;
