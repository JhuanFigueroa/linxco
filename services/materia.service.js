const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')
const sequilize=require('../libs/sequelize')

class MateriaService {
  constructor() {}

  async create(data) {
    const newMateria=await models.Materia.create(data
    );

    delete newMateria.dataValues.password;

    return newMateria;
  }

  async find() {
    const rta = await models.Materia.findAll({where: {status : 1}})

    return rta;
  }

  async findMtro(grupo, mtro){
    const [datosMtro]=await sequilize.query("SELECT DISTINCT materia.clave_materia, materia.nombre_materia FROM materia INNER JOIN materia_carga ON materia.clave_materia = materia_carga.clave_materia, maestro_grupo, grupo WHERE grupo.id_grupo = "+grupo+" AND maestro_grupo.clave_maestro = '"+mtro+"'")
    return datosMtro
  }


  async findByGrupo(grupo){
    const [data] = await sequilize.query("SELECT DISTINCT\n" +
      "\tmateria.clave_materia as clave,\n" +
      "\tmateria.nombre_materia as nombre \n" +
      "FROM\n" +
      "\tmateria\n" +
      "\tINNER JOIN materia_carga ON materia.clave_materia = materia_carga.clave_materia\n" +
      "\tINNER JOIN grupo ON materia_carga.id_grupo = grupo.id_grupo \n" +
      "WHERE\n" +
      "\tgrupo.id_grupo = '"+grupo+"'")
    return data;
  }

  async findOne(clave) {
    console.log(clave)
    const rta=await models.Materia.findByPk(clave);
    if (!rta) {
      throw boom.notFound('materia not found')
    }
    return rta;
  }

  async update(id, changes) {

    const materia= await this.findOne(id);
    const rta=await materia.update(changes);
    return rta;
  }

  async delete(id) {
    const change ={
      'status_materia': 0
    }
    const materia = await this.findOne(id);
    const rta = await materia.update(change);
    return rta;
  }
}

module.exports = MateriaService;
