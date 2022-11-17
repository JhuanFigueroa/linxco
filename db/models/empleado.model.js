
const { Model, DataTypes, Sequelize } = require('sequelize');
const {ROL_TABLE} = require("./rol.model");

const EMPLEADO_TABLE = 'empleado';

const EmpleadoSchema = {
  id: {
    field:'id_empleado',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement:true,
    unique:true
  },
  nombre: {
    field: 'nombre_empleado',
    allowNull: false,
    type: DataTypes.STRING,

  },
  apellido_paterno: {
    field:'apellido_paterno_empleado',
    allowNull: false,
    type: DataTypes.STRING
  },
  apellido_materno: {
    field:'apellido_materno_empleado',
    allowNull: false,
    type: DataTypes.STRING
  },
  telefono: {
    field:'telefono_empleado',
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  correo: {
    field:'correo_empleado',
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  status:{
    field:'status_empleado',
    allowNull:false,
    type:DataTypes.INTEGER,
    defaultValue:1
  },
  username:{
    field:'username_empleado',
    allowNull:false,
    type:DataTypes.STRING,
    unique:true
  },
  password:{
    field:'password_empleado',
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
  }
}

//Modelo
class Empleado extends Model {
  static associate(models) {
    // associate
    this.belongsTo(models.Rol,{as:'rol'});
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: EMPLEADO_TABLE,
      modelName: 'Empleado',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { EMPLEADO_TABLE, EmpleadoSchema, Empleado }
