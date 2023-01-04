const { Model, DataTypes, Sequelize } = require('sequelize');

const { GRUPO_TABLE } = require('./grupo.model');
const { ALUMNO_TABLE } = require('./alumno.model');

const GRUPO_ALUMNO_TABLE = 'grupo_alumno';

const GrupoAlumnoSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  idGrupo: {
    field:'id_grupo',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.INTEGER,
    references: {
      model: GRUPO_TABLE,
      key: 'id_grupo'
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

class GrupoAlumno extends Model {

  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: GRUPO_ALUMNO_TABLE,
      modelName: 'GrupoAlumno',
      timestamps: false
    }
  }
}

module.exports = { GRUPO_ALUMNO_TABLE,GrupoAlumnoSchema,GrupoAlumno };
