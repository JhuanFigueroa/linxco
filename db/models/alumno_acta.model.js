const { Model, DataTypes, Sequelize } = require('sequelize');

const { ACTA_TABLE } = require('./acta_calificaciones.model');
const { ALUMNO_TABLE } = require('./alumno.model');

const ALUMNO_ACTA_TABLE = 'alumno_acta';

const AlumnoActaSchema =  {
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
  matriculaAlumno: {
    field:'matricula_alumno',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    references: {
      model: ALUMNO_TABLE,
      key: 'matricula_alumno'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class AlumnoActa extends Model {

  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ALUMNO_ACTA_TABLE,
      modelName: 'AlumnoActa',
      timestamps: false
    }
  }
}

module.exports = { ALUMNO_ACTA_TABLE,AlumnoActaSchema,AlumnoActa };
