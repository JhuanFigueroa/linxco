
const { Model, DataTypes, Sequelize } = require('sequelize');
const {ROL_TABLE} = require("./rol.model");
const {CARRERA_TABLE} = require("./carrera.model");

const JEFE_TABLE = 'jefe_division';

const JefeSchema = {
  clave: {
    field:'clave_jefe',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    unique:true
  },
  nombre: {
    field: 'nombre_jefe',
    allowNull: false,
    type: DataTypes.STRING,

  },
  apellido_paterno: {
    field:'apellido_paterno_jefe',
    allowNull: false,
    type: DataTypes.STRING
  },
  apellido_materno: {
    field:'apellido_materno_jefe',
    allowNull: false,
    type: DataTypes.STRING
  },
  correo: {
    field:'correo_jefe',
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  status:{
    field:'status_jefe',
    allowNull:false,
    type:DataTypes.INTEGER,
    defaultValue:1
  },
  username:{
    field:'username_maestro',
    allowNull:false,
    type:DataTypes.STRING,
    unique:true
  },
  password:{
    field:'password_maestro',
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
    defaultValue: 3,
    references: {
      model: ROL_TABLE,
      key: 'id_rol'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
}

//Modelo
class Jefe extends Model {
  static associate(models) {
    this.belongsToMany(models.Horario,{
      as:'maestros',
      through:models.MaestroHorario,
      foreignKey:'clave_maestro',
      otherKey:'id_horario'
    });
    this.belongsTo(models.Carrera,{as:'carrera'});
    // associate
    this.belongsTo(models.Rol,{as:'rol'});

  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: JEFE_TABLE,
      modelName: 'JefeDivision',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { JEFE_TABLE, JefeSchema, Jefe }
