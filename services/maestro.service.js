const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')


class MaestroService {
  constructor() {}

  async create(data) {
    const hash=await bcrypt.hash(data.password,10);

    const newMaestro=await models.Maestro.create({
      ...data,
      password:hash
    });

    delete newMaestro.dataValues.password;

    return newMaestro;
  }

  async find() {
    const rta = await models.Maestro.findAll()

    return rta;
  }

  async findByUser(username){
    const rta = await models.Maestro.findOne({
      where: { username }
    });
    return rta;
  }

  async findOne(id) {
    const rta=await models.Maestro.findByPk(id);
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

module.exports = MaestroService;
