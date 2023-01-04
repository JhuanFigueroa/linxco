const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')
const sequelize=require('../libs/sequelize')



class BajaService {
  constructor() {}

  async create(data) {
    const newBaja=await models.Baja.create(data);

    return newBaja.id;
  }

  async find(carrera) {
    const [data] = await sequelize.query("SELECT\n" +
      "\talumno.matricula_alumno AS matricula,\n" +
      "\tconcat ( alumno.nombre_alumno, ' ', alumno.apellido_paterno_alumno, ' ', alumno.apellido_materno_alumno ) AS nombre,\n" +
      "\tcarrera.nombre_carrera AS carrera,\n" +
      "\tsemestre.numero_semestre AS semestre \n" +
      "FROM\n" +
      "\talumno\n" +
      "\tINNER JOIN carrera ON alumno.clave_carrera = carrera.clave_carrera\n" +
      "\tINNER JOIN semestre ON alumno.id_semestre = semestre.id_semestre \n" +
      "WHERE\n" +
      "\talumno.status_alumno = 0 \n" +
      "\tAND carrera.clave_carrera = '"+carrera+"'")

    return data;
  }

  async findRazones() {
    const rta = await models.RazonBaja.findAll()

    return rta;
  }

  async createRazones(data) {
    const newRazon = await models.BajaRazonBaja.create(data)

    return newRazon;
  }

  async findOne(id) {
    const rta=await models.Acta.findByPk(id);
    if (!rta) {
      throw boom.notFound('baja not found')
    }
    return rta;
  }

  async update(id, changes) {

    const baja= await this.findOne(id);
    const rta=await baja.update(changes);
    return rta;
  }

}

module.exports = BajaService;
