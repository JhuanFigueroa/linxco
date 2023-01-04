const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')

class materia_cargaService {
  constructor() {}

  async create(data) {

    const grupo=data.grupo
    const idcurso=await models.Grupo.findOne({where:{numero:grupo}})
    delete  data['grupo']
    data={
      ...data,
      idGrupo:""+idcurso.id+""
    }
    const newmateriaCarga=await models.MateriaCarga.create(data);


    return newmateriaCarga;
  }

  async find() {
    const rta = await models.MateriaCarga.findAll()

    return rta;
  }

  async findOne(id) {
    const rta=await models.MateriaCarga.findByPk(id);
    if (!rta) {
      throw boom.notFound('materia-carga not found')
    }
    return rta;
  }

  async update(id, changes) {

    const materiaCarga= await this.findOne(id);
    const rta=await materiaCarga.update(changes);
    return rta;
  }

  async delete(id) {
    const changes= {
      'status':0
    }
    const materiaCarga= await this.findOne(id);
    const rta=await materiaCarga.update(changes);
    return rta;
  }
}

module.exports = materia_cargaService;
