
const { Model, DataTypes, Sequelize } = require('sequelize');

const {CARRERA_TABLE}=require('./carrera.model');
const {SEMESTRE_TABLE}=require('./semestre.model');
const {ROL_TABLE}=require('./rol.model');

const ALUMNO_TABLE = 'alumno';

const AlumnoSchema = {
  matricula: {
    field:'matricula_alumno',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    unique:true
  },
  nombre: {
    field: 'nombre_alumno',
    allowNull: false,
    type: DataTypes.STRING,

  },
  apellido_paterno: {
    field:'apellido_paterno_alumno',
    allowNull: false,
    type: DataTypes.STRING
  },
  apellido_materno: {
    field:'apellido_materno_alumno',
    allowNull: false,
    type: DataTypes.STRING
  },
  telefono: {
    field:'telefono_alumno',
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  correo: {
    field:'correo_alumno',
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  curp: {
    field:'curp_alumno',
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  domicilio: {
    field:'domicilio_alumno',
    allowNull: false,
    type: DataTypes.STRING
  },
  num_seguro:{
    field:'numero_seguro_alumno',
    allowNull:false,
    type:DataTypes.STRING,
    unique:true
  },
  status:{
    field:'status_alumno',
    allowNull:false,
    type:DataTypes.INTEGER,
    defaultValue:1
  },
  username:{
    field:'username_alumno',
    allowNull:false,
    type:DataTypes.STRING,
    unique:true
  },
  password:{
    field:'password_alumno',
    allowNull:false,
    type:DataTypes.STRING
  },
  claveCarrera:{
    field:'clave_carrera',
    allowNull:false,
    type:DataTypes.STRING,
    references: {
      model: CARRERA_TABLE,
      key: 'clave_carrera'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idRol:{
    field:'id_rol',
    allowNull:false,
    type:DataTypes.INTEGER,
    references: {
      model: ROL_TABLE,
      key: 'id_rol'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idSemestre:{
    field:'id_semestre',
    allowNull:false,
    type:DataTypes.INTEGER,
    references: {
      model: SEMESTRE_TABLE,
      key: 'id_semestre'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

//Modelo
class Alumno extends Model {
  static associate(models) {
    // associate
    this.belongsTo(models.Carrera,{as:'carrera'});
    this.belongsTo(models.Semestre,{as:'semstre'});
    this.belongsTo(models.Rol,{as:'rol'});

    this.belongsToMany(models.Acta,{
      as: 'califiaciones',
      through: models.AlumnoActa,
      foreignKey: 'matricula_alumno',
      otherKey: 'folio_acta'
    });
    this.belongsToMany(models.BajaTenpDef,{
      as: 'bajas',
      through: models.BajaAlumno,
      foreignKey: 'matricula_alumno',
      otherKey: 'id_baja'
    });
    this.belongsToMany(models.Constancia,{
      as: 'constancias',
      through: models.ConstanciaAlumno,
      foreignKey: 'matricula_alumno',
      otherKey: 'clave_constancia'
    });
    this.hasMany(models.CargaAcademica,{
      as:'cargas',
      foreignKey:'matricula_alumno'
    });
    this.hasMany(models.Factura,{
      as:'facturas',
      foreignKey:'matricula_alumno'
    });
    this.hasMany(models.Credencial,{
      as: 'credencial',
      foreignKey: 'id_credencial'
    });
    this.hasMany(models.Peticion,{
      as: 'peticiones',
      foreignKey: 'id_peticion'
    });
    this.hasMany(models.Acta, {
      as: 'actas',
      foreignKey: 'matricula_alumno'
    });
  }


  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: ALUMNO_TABLE,
      modelName: 'Alumno',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { ALUMNO_TABLE, AlumnoSchema, Alumno }
