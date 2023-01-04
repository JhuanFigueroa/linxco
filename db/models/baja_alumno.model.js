const { Model, DataTypes, Sequelize } = require('sequelize');

const { BAJA_TABLE } = require('./baja_temp_def.model');
const { ALUMNO_TABLE } = require('./alumno.model');

const BAJA_ALUMNO_TABLE = 'baja_alumno';

const BajaAlumnoSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  idBaja: {
    field:'id_baja',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.INTEGER,
    references: {
      model: BAJA_TABLE,
      key: 'id_baja'
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

class BajaAlumno extends Model {

  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: BAJA_ALUMNO_TABLE,
      modelName: 'BajaAlumno',
      timestamps: false
    }
  }
}

module.exports = { BAJA_ALUMNO_TABLE,BajaAlumnoSchema,BajaAlumno };
