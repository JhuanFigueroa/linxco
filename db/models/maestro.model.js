
const { Model, DataTypes, Sequelize } = require('sequelize');
const {ROL_TABLE} = require("./rol.model");

const MAESTRO_TABLE = 'maestro';

const MaestroSchema = {
  clave: {
    field:'clave_maestro',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    unique:true
  },
  nombre: {
    field: 'nombre_maestro',
    allowNull: false,
    type: DataTypes.STRING,

  },
  apellido_paterno: {
    field:'apellido_paterno_maestro',
    allowNull: false,
    type: DataTypes.STRING
  },
  apellido_materno: {
    field:'apellido_materno_maestro',
    allowNull: false,
    type: DataTypes.STRING
  },
  correo: {
    field:'correo_maestro',
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  status:{
    field:'status_maestro',
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
}

//Modelo
class Maestro extends Model {
  static associate(models) {
    this.belongsToMany(models.Horario,{
      as:'maestros',
      through:models.MaestroHorario,
      foreignKey:'clave_maestro',
      otherKey:'id_horario'
    });
    // associate
    this.belongsTo(models.Rol,{as:'rol'});

  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: MAESTRO_TABLE,
      modelName: 'Maestro',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { MAESTRO_TABLE, MaestroSchema, Maestro }
