const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')
const sequilize=require('../libs/sequelize')


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

  async findForSetCalif(materia,grupo) {
    const [data]=await sequilize.query("SELECT\n" +
      "\talumno.matricula_alumno AS matricula,\n" +
      "\t\"upper\" ( concat ( alumno.nombre_alumno, ' ', alumno.apellido_paterno_alumno, ' ', apellido_materno_alumno ) ) AS nombre \n" +
      "FROM\n" +
      "\talumno\n" +
      "\tINNER JOIN carga_academica ON alumno.matricula_alumno = carga_academica.matricula_alumno\n" +
      "\tINNER JOIN materia_carga ON carga_academica.id_carga_academica = materia_carga.id_carga_academica \n" +
      "WHERE\n" +
      "\tmateria_carga.clave_materia = '"+materia+"' \n" +
      "\tAND materia_carga.id_grupo = '"+grupo+"'");

    return data
  }

  async update(folio, changes) {

    const acta= await this.findOne(folio);
    const rta=await acta.update(changes);
    return rta;
  }

}

module.exports = ActaCalifService;
