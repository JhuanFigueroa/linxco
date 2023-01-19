const boom = require('@hapi/boom');
const {models} = require('../libs/sequelize')
const sequilize=require('../libs/sequelize') //Libreria para mysql

class AdmisionService {
  constructor() {
  }

  /*async create(file, data) {
    var filename = file.filename;
    filename = 'http://localhost:3000/storage/' + filename;
    data = {
      ...data,
      curp: filename,
    };


    const newAdmision = await models.Admision.create(data);


    return newAdmision;
  }*/
  async create(data) {
    const newAdmision = await models.Admision.create(data);

    return newAdmision;
  }

  /*async find() {
    const rta = await models.Admision.findAll()

    return rta;
  }*/
  async find() {
    //const [data] = await sequilize.query('insert into admision values ('+data.numFicha+')')
    const [data] = await sequilize.query('select carrera.clave_carrera, carrera.nombre_carrera from carrera;')
    return data;
  }
   async findAspitante() {
    //const [data] = await sequilize.query('insert into admision values ('+data.numFicha+')')
    const [data] = await sequilize.query('SELECT * FROM "admision";')
    return data;
  }
  async findAspitanteCarrera(carrera) {
    //const [data] = await sequilize.query('insert into admision values ('+data.numFicha+')')
    const [data] = await sequilize.query(`SELECT * FROM admision WHERE clave_carrera = '${carrera}'`)
    return data;
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
