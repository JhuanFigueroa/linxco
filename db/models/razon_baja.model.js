
const { Model, DataTypes, Sequelize } = require('sequelize');

const RAZON_BAJA_TABLE = 'razon_baja';

const RazonBajaSchema = {
  clave: {
    field:'clave_razon_baja',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    unique:true
  },
  nombre: {
    field: 'nombre_razon_baja',
    allowNull: false,
    type: DataTypes.STRING,

  },
  descripcion:{
    field:'descripcion_razon_baja',
    allowNull:false,
    type:DataTypes.STRING
  }
}

//Modelo
class RazonBaja extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: RAZON_BAJA_TABLE,
      modelName: 'RazonBaja',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { RAZON_BAJA_TABLE, RazonBajaSchema, RazonBaja }
