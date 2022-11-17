const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')


class EmpleadoService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);

    const newEmpleado = await models.Empleado.create({
      ...data,
      password: hash
    });

    delete newEmpleado.dataValues.password;

    return newEmpleado;
  }

  async find() {
    const rta = await models.Empleado.findAll()

    return rta;
  }

  async findByUser(username){
    const rta = await models.Empleado.findOne({
      where: { username }
    });
    return rta;
  }

  async findOne(id) {
    const rta=await models.Empleado.findByPk(id);
    if (!rta) {
      throw boom.notFound('user not found')
    }
    return rta;
  }

  async update(id, changes) {

    const empleado= await this.findOne(id);
    const rta=await empleado.update(changes);
    return rta;
  }

  async delete(id) {
    const user= await this.findOne(id);
    await user.destroy();

    return {id};
  }
}

module.exports = EmpleadoService;
