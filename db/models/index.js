//enviar conexion hacia los modelos
const {Maestro,MaestroSchema}=require('./maestro.model')
const {Materia,MateriaSchema}=require('./materia.model')
const {Admision,Admisionchema}=require('./admision.model')
const {Alumno,AlumnoSchema}=require('./alumno.model')
const {Carrera,CarreraSchema}=require('./carrera.model')
const {Rol,RolSchema}=require('./rol.model')
const {Empleado,EmpleadoSchema}=require('./empleado.model')

function setupModels(sequelize) {
  Maestro.init(MaestroSchema, Maestro.config(sequelize));//enviamos el esquema al modelo
  Alumno.init(AlumnoSchema,Alumno.config(sequelize));
  Admision.init(Admisionchema,Admision.config(sequelize));
  Carrera.init(CarreraSchema,Carrera.config(sequelize));
  Empleado.init(EmpleadoSchema,Empleado.config(sequelize));
  Rol.init(RolSchema,Rol.config(sequelize));
  Materia.init(MateriaSchema,Materia.config(sequelize))
}

module.exports = setupModels;
