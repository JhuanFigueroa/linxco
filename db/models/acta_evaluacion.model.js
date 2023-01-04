const { Model, DataTypes, Sequelize } = require('sequelize');

const { ACTA_TABLE } = require('./acta_calificaciones.model');
const { TIPO_EVALUACION_TABLE } = require('./tipo_evaluacion.model');

const ACTA_EVALUACION_TABLE = 'acta_evaluacion';

const ActaEvaluacionSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  folioActa: {
    field:'folio_acta',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.STRING,
    references: {
      model: ACTA_TABLE,
      key: 'folio_acta'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idEvaluacion: {
    field:'id_tipo_evaluacion',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: TIPO_EVALUACION_TABLE,
      key: 'id_tipo_evaluacion'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class ActaEvaluacion extends Model {

  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ACTA_EVALUACION_TABLE,
      modelName: 'ActaEvaluacion',
      timestamps: false
    }
  }
}

module.exports = { ACTA_EVALUACION_TABLE,ActaEvaluacionSchema,ActaEvaluacion };
