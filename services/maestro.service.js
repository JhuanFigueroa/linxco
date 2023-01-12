const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')
const sequilize=require('../libs/sequelize')


class MaestroService {
  constructor() {}

  async create(data) {
    //const hash=await bcrypt.hash(data.password,10);

    const newMaestro=await models.Maestro.create(data);
    

    //delete newMaestro.dataValues.password;

    return newMaestro;
  }

  async find() {
    const rta = await models.Maestro.findAll()

    return rta;
  }
  async findMtro(){
    const [datosMtro]=await sequilize.query('SELECT maestro.clave_maestro, maestro.nombre_maestro, maestro.apellido_paterno_maestro, maestro.apellido_materno_maestro, maestro.correo_maestro, rol.nombre_rol FROM maestro INNER JOIN rol ON rol.id_rol = maestro.id_rol WHERE maestro.status_maestro=1')
    return datosMtro
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

    const maestro= await this.findOne(id);
    const rta=await maestro.update(changes);
    return rta;
  }

  async delete(id) {
    const changes={
      'status':0
    }
    const maestro= await this.findOne(id);
    //await user.destroy();
    const rta=await maestro.update(changes);

    return rta;
  }
}

module.exports = MaestroService;
