const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')
const {Carrera} = require("../db/models/carrera.model");
const sequilize=require('../libs/sequelize') //Libreria para mysql


class CarreraService {
  constructor() {}

  async create(data) { //Lleva un segundo parametro llamado file
    /*var filename = file.filename;
    filename = 'http://localhost:3000/storage/' + filename;
    data = {
      ...data,
      imagen: filename,
    };*/

    const newCarrera=await models.Carrera.create(data);

    return newCarrera;
  }

  async find() {
    const rta = await models.Carrera.findAll({where: {status : 1}})

    return rta;
  }
  async verDatos(){
    const [datosCarrera] = await sequilize.query("Select carrera.clave_carrera,carrera.nombre_carrera, carrera.especialidad_carrera, carrera.planestudio_carrera from carrera where carrera.status_carrera=1")
    return datosCarrera
  }
  async extraerDatos(clvaveEx){
    const [datosExCar] = await sequilize.query("Select carrera.clave_carrera,carrera.nombre_carrera, carrera.especialidad_carrera, carrera.planestudio_carrera from carrera where carrera.clave_carrera = '"+clvaveEx+"'")
    return datosExCar
  }


  async findOne(id) {
    const rta=await models.Carrera.findByPk(id);
    if (!rta) {
      throw boom.notFound('carrera not found')
    }
    return rta;
  }

  async update(id, changes) {

    const carrera= await this.findOne(id);
    const rta=await carrera.update(changes);
    return rta;
  }

  async delete(id) {
    const changes={
      'status':0
    }
    const carrera= await this.findOne(id);
    const rta=await carrera.update(changes);
    return rta;
  }
}

module.exports = CarreraService;
