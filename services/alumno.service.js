const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')


class AlumnoService {
  constructor() {}

  async create(data) {
    const hash=await bcrypt.hash(data.password,10);

    const newAlumno=await models.Alumno.create({
      ...data,
      password:hash
    });

    delete newAlumno.dataValues.password;

    return newAlumno;
  }

  async find() {
    const rta = await models.Alumno.findAll()

    return rta;
  }

  async findByUser(username){
    const rta = await models.Alumno.findOne({
      where: { username }
    });
    return rta;
  }

  async findOne(id) {
    const rta=await models.Alumno.findByPk(id);
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

module.exports = AlumnoService;
