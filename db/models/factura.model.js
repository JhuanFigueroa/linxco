
const { Model, DataTypes, Sequelize } = require('sequelize');

const FACTURA_TABLE = 'factura';

const FacturaSchema = {
  id: {
    field:'id_factura',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement:true,
    unique:true
  },
  numero_comprobante: {
    field: 'numero_comprobante',
    allowNull: false,
    type: DataTypes.STRING,

  },

  monto_total: {
    field:'monto_total_factura',
    allowNull: false,
    type: DataTypes.FLOAT
  }
}

//Modelo
class Factura extends Model {
  static associate(models) {
    // associate
    this.belongsToMany(models.RazonFactura,{
      as:'razones',
      through:models.RazonfFactura,
      foreignKey:'clave_razon_factura',
      otherKey:'id_factura'
    })
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: FACTURA_TABLE,
      modelName: 'Factura',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { FACTURA_TABLE, FacturaSchema, Factura }
