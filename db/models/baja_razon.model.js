const { Model, DataTypes, Sequelize } = require('sequelize');

const { BAJA_TABLE } = require('./baja_temp_def.model');
const { RAZON_BAJA_TABLE } = require('./razon_baja.model');

const BAJA_RAZONBAJA_TABLE = 'baja_razon_baja';

const BajaRazonSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  idBaja: {
    field:'id_baja',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.INTEGER,
    references: {
      model: BAJA_TABLE,
      key: 'id_baja'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  claveRazon: {
    field:'clave_razon_baja',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    references: {
      model: RAZON_BAJA_TABLE,
      key: 'clave_razon_baja'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class BajaRazon extends Model {

  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: BAJA_RAZONBAJA_TABLE,
      modelName: 'BajaRazonBaja',
      timestamps: false
    }
  }
}

module.exports = { BAJA_RAZONBAJA_TABLE,BajaRazonSchema,BajaRazon };
