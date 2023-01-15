const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')

class ActaControlService {
  constructor() {}

  async create(file,data) {

    var filename = file.filename;
    filename = 'http://localhost:3000/storage/actas/' + filename;

    data = {
      ...data,
      ubicacion: filename,
    };
    const newHorario=await models.ActaControl.create(data)
    return newHorario
  }

  async find() {
    const rta = await models.ActaControl.findAll()

    return rta;
  }

  async findByCarrera(clave){
    const horario=await models.ActaControl.findOne({where:{claveCarrera:clave}});

    return horario
  }


  async findOne(id) {
    const rta=await models.ActaControl.findByPk(id);
    if (!rta) {
      throw boom.notFound('horario not found')
    }
    return rta;
  }

  async update(id, changes) {

    const horario= await this.findOne(id);
    const rta=await horario.update(changes);
    return rta;
  }

  /* async delete(id) {
     const changes= {
       'status':0
     }
     const horario= await this.findOne(id);
     const rta=await horario.update(changes);
     return rta;
   }*/
}

module.exports = ActaControlService;
