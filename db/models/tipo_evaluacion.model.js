
const { Model, DataTypes, Sequelize } = require('sequelize');

const TIPO_EVALUACION_TABLE = 'tipo_evaluacion';

const TipoEvaluacionSchema = {
  id: {
    field:'id_tipo_evaluacion',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement:true,
    unique:true
  },
  nombre: {
    field: 'nombre_tipo_evaluacion',
    allowNull: false,
    type: DataTypes.STRING,

  },
  descripcion:{
    field:'descripcion_tipo_evaluacion',
    allowNull:false,
    type:DataTypes.STRING
  }
}

//Modelo
class TipoEvaluacion extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: TIPO_EVALUACION_TABLE,
      modelName: 'TipoEvaluacion',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { TIPO_EVALUACION_TABLE, TipoEvaluacionSchema, TipoEvaluacion }
