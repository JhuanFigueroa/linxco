
const { Model, DataTypes, Sequelize } = require('sequelize');
const {CARRERA_TABLE}=require('./carrera.model')
const ADMISION_TABLE = 'admision';

const Admisionchema = {
  numero: {
    field:'numero_ficha_admision',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    unique:true
  },
  nombre: {
    field: 'nombre_admision',
    allowNull: false,
    type: DataTypes.STRING,

  },
  apellido_paterno: {
    field:'apellido_paterno_admision',
    allowNull: false,
    type: DataTypes.STRING
  },
  apellido_materno: {
    field:'apellido_materno_admision',
    allowNull: false,
    type: DataTypes.STRING
  },
  telefono: {
    field:'telefono_admision',
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  telefono_emergencia: {
    field:'telefono_emegencia_admision',
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  correo: {
    field:'correo_admision',
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  promedio:{
    field:'promedio_admision',
    allowNull:false,
    type:DataTypes.FLOAT
  },
  curp: {
    field:'curp_admision',
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  domicilio: {
    field:'domicilio_alumno',
    allowNull: false,
    type: DataTypes.STRING
  },
  escuela: {
    field:'escuela_procedencia_admision',
    allowNull: false,
    type: DataTypes.STRING
  },
  sangre: {
    field:'tipo_sangre_admision',
    allowNull: false,
    type: DataTypes.STRING
  },
  genero: {
    field:'genero_admision',
    allowNull: false,
    type: DataTypes.CHAR
  },
  lugar_nacimiento: {
    field:'lugar_nacimineto_admision',
    allowNull: false,
    type: DataTypes.STRING
  },
  lugar_aplicacion: {
    field:'lugar_aplicaion_admision',
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'TESJI'
  },
  persona_emergencia: {
    field:'persona_emergencia_admision',
    allowNull: false,
    type: DataTypes.STRING
  },
  fecha:{
    field:'fecha_admision',
    allowNull:false,
    type:DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  claveCarrera: {
    field: 'clave_carrera',
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: CARRERA_TABLE,
      key: 'clave_carrera'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

//Modelo
class Admision extends Model {
  static associate(models) {
    // associate
  this.belongsTo(models.Carrera,{
    as:'carrera'
  });
  this.hasOne(models.UsuarioAdmision,{
    as:'usuario'
  });
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: ADMISION_TABLE,
      modelName: 'Admision',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { ADMISION_TABLE, Admisionchema, Admision }
