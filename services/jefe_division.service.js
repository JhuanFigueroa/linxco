const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')


class JefeDivisionService {
  constructor() {}

  async create(data) {
    const hash=await bcrypt.hash(data.password,10);

    const newMaestro=await models.JefeDivision.create({
      ...data,
      password:hash
    });

    delete newMaestro.dataValues.password;

    return newMaestro;
  }

  async subirHorario(file,data){
    var filename = file.filename;
    filename = 'http://localhost:3000/storage/horarios/' + filename;

    data = {
      ...data,
      ubicacion: filename,
    };
    const newHorario=await models.Horarios.create(data)
    return newHorario
  }



  async find() {
    const rta = await models.JefeDivision.findAll()

    return rta;
  }

  async findByUser(username){
    const rta = await models.JefeDivision.findOne({
      where: { username }
    });
    return rta;
  }

  async findOne(id) {
    const rta=await models.JefeDivision.findByPk(id);
    if (!rta) {
      throw boom.notFound('user not found')
    }
    return rta;
  }

  async update(id, changes) {

    const user= await this.findOne(id);
    const rta=await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user= await this.findOne(id);
    await user.destroy();

    return {id};
  }
}

module.exports = JefeDivisionService;
