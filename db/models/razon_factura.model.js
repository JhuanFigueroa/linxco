
const { Model, DataTypes, Sequelize } = require('sequelize');

const RAZON_FACTURA_TABLE = 'razon_factura';

const RazonFacturaSchema = {
  clave: {
    field:'clave_razon_factura',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    unique:true
  },
  nombre: {
    field: 'nombre_razon_factura',
    allowNull: false,
    type: DataTypes.STRING,

  },
  status: {
    field:'status_razon_factura',
    allowNull: false,
    type: DataTypes.INTEGER
  },
  precioUnitario:{
    field:'precio_unitario_factura',
    allowNull:false,
    type:DataTypes.FLOAT
  }
}

//Modelo
class RazonFactura extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: RAZON_FACTURA_TABLE,
      modelName: 'RazonFactura',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { RAZON_FACTURA_TABLE, RazonFacturaSchema, RazonFactura }
