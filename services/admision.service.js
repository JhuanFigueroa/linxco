const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize')


class AdmisionService {
  constructor() {
  }

  async create(file, data) {
    var filename = file.filename;
    filename = 'http://localhost:3000/storage/' + filename;
    data = {
      ...data,
      curp: filename,
    };


    const newAdmision = await models.Admision.create(data);


    return newAdmision;
  }

  async find() {
    const rta = await models.Admision.findAll()

    return rta;
  }

  async findOne(numero) {
    const rta = await models.Admision.findByPk(numero);
    if (!rta) {
      throw boom.notFound('user not found')
    }
    return rta;
  }

  async update(numero, changes) {

    const user = await this.findOne(numero);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(numero) {
    const user = await this.findOne(numero);
    await user.destroy();

    return {numero};
  }
}

module.exports = AdmisionService;
