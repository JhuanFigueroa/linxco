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

  async findForConstancia(matricula){
    const [data]=await sequilize.query("SELECT\n" +
      "\t\"upper\" ( concat ( alumno.nombre_alumno, ' ', alumno.apellido_paterno_alumno, ' ', alumno.apellido_materno_alumno ) ) AS nombre,\n" +
      "\talumno.matricula_alumno AS matricula,\n" +
      "\tsemestre.numero_semestre AS semestre,\n" +
      "\tcarrera.nombre_carrera AS carrera,\n" +
      "\tcarrera.planestudio_carrera AS plan \n" +
      "FROM\n" +
      "\talumno\n" +
      "\tINNER JOIN carrera ON alumno.clave_carrera = carrera.clave_carrera\n" +
      "\tINNER JOIN semestre ON alumno.id_semestre = semestre.id_semestre \n" +
      "WHERE\n" +
      "\talumno.matricula_alumno = '"+matricula+"'")

    return data
  }

  async findForCarga(matricula){
    const query="SELECT concat(nombre_alumno,' ',apellido_paterno_alumno,' ', apellido_materno_alumno) as nombre\n" +
      ",telefono_alumno as telefono,correo_alumno as correo,nombre_carrera as carrera\n" +
      "from alumno,carrera\n" +
      "where carrera.clave_carrera=alumno.clave_carrera\n" +
      "and matricula_alumno='"+matricula+"'";

    const [data]=await sequilize.query(query);

    return data[0];
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
