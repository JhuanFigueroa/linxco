const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')
const {Periodo} = require("../db/models/periodo.model");
const sequilize=require('../libs/sequelize') //Libreria para mysql


class PeriodoService {
  constructor() {}

  async create(data) { //Lleva un segundo parametro llamado file
    /*var filename = file.filename;
    filename = 'http://localhost:3000/storage/' + filename;
    data = {
      ...data,
      imagen: filename,
    };*/
    const newPeriodo=await models.Periodo.create(data);
    return newPeriodo;
  }

  async find() {
    const rta = await models.Periodo.findAll()
    return rta;
  }
  async verDatos(){
    const [datosPeriodo] = await sequilize.query("SELECT periodo.id_periodo,periodo.numero_periodo, periodo.descripcion_periodo from periodo where periodo.status_periodo=1")
    return datosPeriodo
  }
  async extraerDatos(idPe){
    const [datosExPer] = await sequilize.query("SELECT periodo.numero_periodo, periodo.descripcion_periodo from periodo where periodo.id_periodo= '"+idPe+"'")
    return datosExPer
  }


  async findOne(id) {
    const rta=await models.Periodo.findByPk(id);
    if (!rta) {
      throw boom.notFound('periodo1 not found'+id)
    }
    return rta;
  }

  async update(id, changes) {

    const periodo= await this.findOne(id);
    const rta=await periodo.update(changes);
    return rta;
  }

  async delete(id) {
    const changes={
      'status':0
    }
    const periodo= await this.findOne(id);
    const rta=await periodo.update(changes);
    return rta;
  }
}

module.exports = PeriodoService;
