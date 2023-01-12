const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')

class horariosService {
  constructor() {}

  async create(data) {

    const newhorario=await models.Horarios.create(data);

    return newhorario;
  }

  async find() {
    const rta = await models.Horarios.findAll()

    return rta;
  }

  async findByCarrera(clave){
      const horario=await models.Horarios.findOne({where:{claveCarrera:clave}});

      return horario
  }


  async findOne(id) {
    const rta=await models.Horarios.findByPk(id);
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

module.exports = horariosService;
