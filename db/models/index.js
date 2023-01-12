//enviar conexion hacia los modelos
const {Maestro,MaestroSchema}=require('./maestro.model')
const {Materia,MateriaSchema}=require('./materia.model')
const {Admision,Admisionchema}=require('./admision.model')
const {Alumno,AlumnoSchema}=require('./alumno.model')
const {BajaTenpDef,BajaTempDefSchema}=require('./baja_temp_def.model')
const {BajaAlumno,BajaAlumnoSchema}=require('./baja_alumno.model')
const {Carrera,CarreraSchema}=require('./carrera.model')
const {Credencial,CredencialSchema}=require('./credencial.model')
const {Curso,CursoSchema}=require('./curso.model')
const {CargaAcademica,CargaSchema}=require('./carga_academica.model')
const {Factura,FacturaSchema}=require('./factura.model')
const {Rol,RolSchema}=require('./rol.model')
const {Empleado,EmpleadoSchema}=require('./empleado.model')
const {MateriaCarga,MateriaCargaSchema}=require('./materia_carga.model')
const {RazonBaja,RazonBajaSchema}=require('./razon_baja.model')
const {RazonfFactura,RazonfFacturaSchema}=require('./razonf_factura.model')
const {TipoCarga,TipoCargaSchema}=require('./tipo_carga.model')
const {Periodo,PeriodoSchema}=require('./periodo.model')
const {Semestre,SemestreSchema}=require('./semestre.model')


function setupModels(sequelize) {
  Maestro.init(MaestroSchema, Maestro.config(sequelize));//enviamos el esquema al modelo
  Alumno.init(AlumnoSchema,Alumno.config(sequelize));
  Admision.init(Admisionchema,Admision.config(sequelize));
  BajaTenpDef.init(BajaTempDefSchema,BajaTenpDef.config(sequelize));
  BajaAlumno.init(BajaAlumnoSchema,BajaAlumno.config(sequelize));
  Carrera.init(CarreraSchema,Carrera.config(sequelize));
  Credencial.init(CredencialSchema,Credencial.config(sequelize));
  Curso.init(CursoSchema,Curso.config(sequelize));
  CargaAcademica.init(CargaSchema,CargaAcademica.config(sequelize));
  Empleado.init(EmpleadoSchema,Empleado.config(sequelize));
  Factura.init(FacturaSchema,Factura.config(sequelize));
  Rol.init(RolSchema,Rol.config(sequelize));
  Materia.init(MateriaSchema,Materia.config(sequelize))
  MateriaCarga.init(MateriaCargaSchema,MateriaCarga.config(sequelize))
  RazonBaja.init(RazonBajaSchema,RazonBaja.config(sequelize))
  RazonfFactura.init(RazonfFacturaSchema,RazonfFactura.config(sequelize))
  TipoCarga.init(TipoCargaSchema,TipoCarga.config(sequelize))
  Periodo.init(PeriodoSchema,Periodo.config(sequelize))
  Semestre.init(SemestreSchema,Semestre.config(sequelize))
}

module.exports = setupModels;
