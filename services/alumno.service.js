const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')
const sequilize=require('../libs/sequelize')

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

  async findForCarga(matricula){
    const query="SELECT concat(nombre_alumno,' ',apellido_paterno_alumno,' ', apellido_materno_alumno) as nombre\n" +
      ",telefono_alumno as telefono,correo_alumno as correo,nombre_carrera as carrera\n" +
      "from alumno,carrera\n" +
      "where carrera.clave_carrera=alumno.clave_carrera\n" +
      "and matricula_alumno='"+matricula+"'";

    const [data]=await sequilize.query(query);

    return data;
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
