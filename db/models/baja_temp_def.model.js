
const { Model, DataTypes, Sequelize } = require('sequelize');

const BAJA_TABLE = 'baja_temp_def';

const BajaTempDefSchema = {
  id: {
    field:'id_baja',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement:true,
    unique:true
  },
  tipo: {
    field: 'tipo_baja',
    allowNull: false,
    type: DataTypes.STRING,

  },
  fecha:{
    field:'fecha_baja',
    allowNull:false,
    type:DataTypes.DATE,
    defaultValue: Sequelize.Now
  }
}

//Modelo
class BajaTenpDef extends Model {
  static associate(models) {
    // associate
    this.belongsToMany(models.RazonBaja,{
      as:'bajas',
      through:models.BajaRazon,
      foreignKey:'id_baja',
      otherKey:'clave_razon_baja'
    })
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: BAJA_TABLE,
      modelName: 'Baja',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { BAJA_TABLE, BajaTempDefSchema, BajaTenpDef }
