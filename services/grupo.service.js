const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')
const {Carrera} = require("../db/models/carrera.model");
const sequelize=require('../libs/sequelize')

class GrupoService {
  constructor() {}

  async create(data) {

    const newCarrera=await models.Grupo.create(data);
    return newCarrera;
  }

  async find() {
    const rta = await models.Grupo.findAll({where: {status : 1}})

    return rta;
  }

  async findByNombre(grupo){
    const idcurso=await models.Grupo.findOne({where:{numero:grupo}})
    return idcurso.id
  }


  async findByCarrera(clave) {

    const [data]=await sequelize.query("SELECT\n" +
      "\tgrupo.id_grupo as id,grupo.numero_grupo as grupo\n" +
      "FROM\n" +
      "\tgrupo\n" +
      "\tINNER JOIN\n" +
      "\tcarrera\n" +
      "\tON \n" +
      "\t\tgrupo.clave_carrera = carrera.clave_carrera\n" +
      "WHERE\n" +
      "\tcarrera.clave_carrera = '"+clave+"' and grupo.status_grupo='1'")

    return data;
  }

  async findByMaestro(clave, carrera) {
    console.log(clave)
    const [data]=await sequelize.query("SELECT DISTINCT grupo.numero_grupo as grupo FROM carrera INNER JOIN grupo ON carrera.clave_carrera = grupo.clave_carrera INNER JOIN maestro_grupo ON grupo.id_grupo = maestro_grupo.id_grupo INNER JOIN maestro ON maestro_grupo.clave_maestro = maestro.clave_maestro WHERE maestro.clave_maestro = '"+ clave+"' AND carrera.clave_carrera = '"+ carrera+"' ");
    if (!data) {
      throw boom.notFound('materia not found')
    }
    return data;
  }

  async findOne(id) {
    const rta=await models.Grupo.findByPk(id);
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

module.exports = GrupoService;
