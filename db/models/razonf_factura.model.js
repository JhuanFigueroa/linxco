const { Model, DataTypes, Sequelize } = require('sequelize');

const { FACTURA_TABLE } = require('./factura.model');
const { RAZON_FACTURA_TABLE } = require('./razon_factura.model');

const RAZONF_FACTURA_TABLE = 'razonf_factura';

const RazonfFacturaSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  idFactura: {
    field:'id_factura',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.INTEGER,
    references: {
      model: FACTURA_TABLE,
      key: 'id_factura'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  claveRazon: {
    field:'clave_razon_factura',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    references: {
      model: RAZON_FACTURA_TABLE,
      key: 'clave_razon_factura'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class RazonfFactura extends Model {

  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RAZONF_FACTURA_TABLE,
      modelName: 'RazonfFactura',
      timestamps: false
    }
  }
}

module.exports = { RAZONF_FACTURA_TABLE,RazonfFacturaSchema,RazonfFactura };
