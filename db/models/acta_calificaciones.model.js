
const { Model, DataTypes, Sequelize } = require('sequelize');

const ACTA_TABLE = 'acta_calificaciones';

const ActaSchema = {
  folio: {
    field:'folio_acta',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.STRING,
    unique:true
  },
  calificacion: {
    field: 'calificacion_acta',
    allowNull: false,
    type: DataTypes.FLOAT,

  },
  fecha:{
    field:'fecha_acta',
    allowNull:false,
    type:DataTypes.DATE,
    defaultValue: Sequelize.Now
  }
}

//Modelo
class Acta extends Model {
  static associate(models) {
    // associate
    this.belongsToMany(models.TipoEvaluacion, {
      as: 'evaluaciones',
      through: models.ActaEvaluacion,
      foreignKey: 'folio_acta',
      otherKey: 'id_tipo_evaluacion'
    });
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: ACTA_TABLE,
      modelName: 'Acta',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { ACTA_TABLE, ActaSchema, Acta }
