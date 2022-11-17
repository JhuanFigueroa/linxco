
const { Model, DataTypes, Sequelize } = require('sequelize');

const ROL_TABLE = 'rol';

const RolSchema = {
  id: {
    field:'id_rol',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement:true,
    unique:true
  },
  nombre: {
    field: 'nombre_rol',
    allowNull: false,
    type: DataTypes.STRING,

  },

  status:{
    field:'status_rol',
    allowNull:false,
    type:DataTypes.INTEGER,
    defaultValue:1
  }
}

//Modelo
class Rol extends Model {
  static associate(models) {
    // associate
    this.hasMany(models.Alumno,{
      as: 'alumnos',
      foreignKey: 'id_rol'
    });
    this.hasMany(models.Maestro,{
      as: 'maestros',
      foreignKey: 'id_rol'
    });
    this.hasMany(models.Empleado,{
      as: 'empleados',
      foreignKey: 'id_rol'
    });
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: ROL_TABLE,
      modelName: 'Rol',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { ROL_TABLE, RolSchema, Rol }
