const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')
const {log} = require("debug");
const sequelize=require('../libs/sequelize')

class ConstanciaService {
  constructor() {}

  async create(datos) {

    const matricula=datos.matriculaAlumno
    const newConstancia=await models.Constancia.create(datos);

    const [data]=await sequelize.query("UPDATE peticion \n" +
      "SET status_peticion = 0 \n" +
      "WHERE\n" +
      "\tmatricula_alumno = '"+matricula+"'")

    return newConstancia;
  }

  async createConstanciaTipo(data) {

    const newConstancia=await models.ConstanciaTipo.create(data);


    return newConstancia;
  }

  async createConstanciaAlumno(data) {

    const newConstancia=await models.ConstanciaAlumno.create(data);


    return newConstancia;
  }

  async find() {
    const rta = await models.Constancia.findAll()

    return rta;
  }

  async findTipos() {
    const rta = await models.TipoConstancia.findAll()

    return rta;
  }

  async findTipoByAlumno(matricula) {
    const rta = await models.Peticion.findAll({where: {matriculaAlumno: matricula} && {status:1}})
    return rta;
  }
  async getTipoByDescrip(descrip){
    const res=await  models.TipoConstancia.findOne({where:{descripcion:descrip}})
    return res;
  }

  async findOne(id) {
    const rta=await models.Constancia.findByPk(id);
    if (!rta) {
      throw boom.notFound('Constancia not found')
    }
    return rta;
  }

  async update(id, changes) {

    const curso= await this.findOne(id);
    const rta=await curso.update(changes);
    return rta;
  }

  async delete(id) {
    const user= await this.findOne(id);
    await user.destroy();

    return {id};
  }
}
module.exports = ConstanciaService;
