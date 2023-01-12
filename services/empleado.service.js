const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')
const sequilize=require('../libs/sequelize') //Libreria para mysql


class EmpleadoService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);

    const newEmpleado = await models.Empleado.create({
      ...data,
      password: hash
    });

    delete newEmpleado.dataValues.password;
    //const newEmpleado=await models.Empleado.create(data)
    return newEmpleado;
  }

  async find() {
    //const rta = await models.Empleado.findAll()
    const [data]=await sequilize.query("SELECT rol.id_rol, rol.nombre_rol FROM rol where rol.nombre_rol='jefa control' or rol.nombre_rol='empleado'")
    return data;
  }

  async findEmp(){
    const [datosEmple]=await sequilize.query('Select empleado.id_empleado, empleado.nombre_empleado, empleado.apellido_paterno_empleado, empleado.apellido_materno_empleado, empleado.telefono_empleado, empleado.correo_empleado, rol.nombre_rol from empleado INNER JOIN rol on rol.id_rol=empleado.id_rol WHERE empleado.status_empleado=1')
    return datosEmple
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
    const changes={
      'status':0
    }
    const user= await this.findOne(id);
    //await user.destroy();
    const rta=await user.update(changes);

    return rta;
  }
}

module.exports = EmpleadoService;
