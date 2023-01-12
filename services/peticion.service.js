const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')
const {Carrera} = require("../db/models/carrera.model");
const sequelize=require('../libs/sequelize')
const {Peticion} = require("../db/models/peticiones.model");

class PeticionService {
  constructor() {}

  async create(data) {

    const newCarrera=await models.Peticion.create(data);

    return newCarrera;
  }

  async find() {
    const rta = await models.Peticion.findAll({where: {status : 1}})

    return rta;
  }

  async findByCarrera(clave) {

    const [data]=await sequelize.query("SELECT\n" +
      "\talumno.matricula_alumno AS matricula,\n" +
      "\tconcat ( alumno.nombre_alumno, ' ', alumno.apellido_paterno_alumno, ' ', alumno.apellido_materno_alumno ) AS nombre,\n" +
      "\tsemestre.numero_semestre AS semestre,\n" +
      "\tpeticion.tipo_peticion AS tipo \n" +
      "FROM\n" +
      "\talumno\n" +
      "\tINNER JOIN carrera ON alumno.clave_carrera = carrera.clave_carrera\n" +
      "\tINNER JOIN semestre ON alumno.id_semestre = semestre.id_semestre\n" +
      "\tINNER JOIN peticion ON alumno.matricula_alumno = peticion.matricula_alumno \n" +
      "WHERE\n" +
      "\tcarrera.clave_carrera = '"+clave+"' \n" +
      "\tAND peticion.status_peticion = '1'")

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

module.exports = PeticionService;
