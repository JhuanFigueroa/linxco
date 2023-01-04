
const { Model, DataTypes, Sequelize } = require('sequelize');
const {ALUMNO_TABLE} = require("./alumno.model");

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
  },
  matriculaAlumno: {
    field: 'matricula_alumno',
    allowNull: false,
    type: DataTypes.STRING,

    references: {
      model: ALUMNO_TABLE,
      key: 'matricula_alumno'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'

  },
  status:{
    field:'status_factura',
    allowNull:false,
    type:DataTypes.INTEGER
  }
}

//Modelo
class Factura extends Model {
  static associate(models) {
    // associate
    this.belongsTo(models.Alumno, {as: 'alumno'});

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
