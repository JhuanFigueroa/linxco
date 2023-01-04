const { Model, DataTypes, Sequelize } = require('sequelize');

const { CONSTANCIA_TABLE } = require('./constancia.model');
const { ALUMNO_TABLE } = require('./alumno.model');

const CONSTANCIA_ALUMNO_TABLE = 'constancia_alumno';

const ConstanciaAlumnoSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  claveConstancia: {
    field:'clave_constancia',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.STRING,
    references: {
      model: CONSTANCIA_TABLE,
      key: 'clave_constancia'
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

class ConstanciaAlumno extends Model {

  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CONSTANCIA_ALUMNO_TABLE,
      modelName: 'ConstanciaAlumno',
      timestamps: false
    }
  }
}

module.exports = { CONSTANCIA_ALUMNO_TABLE,ConstanciaAlumnoSchema,ConstanciaAlumno };
