//enviar conexion hacia los modelos
const {Maestro,MaestroSchema}=require('./maestro.model')
const {Alumno,AlumnoSchema}=require('./alumno.model')
const {Carrera,CarreraSchema}=require('./carrera.model')
const {Rol,RolSchema}=require('./rol.model')

function setupModels(sequelize) {
  Maestro.init(MaestroSchema, Maestro.config(sequelize));//enviamos el esquema al modelo
  Alumno.init(AlumnoSchema,Alumno.config(sequelize));
  Carrera.init(CarreraSchema,Carrera.config(sequelize));
  Rol.init(RolSchema,Rol.config(sequelize));
}

module.exports = setupModels;
