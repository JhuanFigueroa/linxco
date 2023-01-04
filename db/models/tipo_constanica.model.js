
const { Model, DataTypes, Sequelize } = require('sequelize');

const TIPO_CONSTANCIA_TABLE = 'tipo_constancia';

const TipoConstanciaSchema = {
  id: {
    field:'id_tipo_constancia',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement:true,
    unique:true
  },
  nombre: {
    field: 'nombre_tipo_constancia',
    allowNull: false,
    type: DataTypes.STRING,

  },
  descripcion:{
    field:'descripcion_tipo_constancia',
    allowNull:false,
    type:DataTypes.STRING
  }
}

//Modelo
class TipoConstancia extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: TIPO_CONSTANCIA_TABLE,
      modelName: 'TipoConstancia',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { TIPO_CONSTANCIA_TABLE, TipoConstanciaSchema, TipoConstancia }
