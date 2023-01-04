const {Model, DataTypes, Sequelize} = require('sequelize');

const {CURSO_TABLE} = require('./curso.model');
const {CARGA_TABLE} = require('./carga_academica.model');

const CURSO_CARGA_TABLE = 'curso_carga';

const CursoCargaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  idCarga: {
    field: 'id_carga_academica',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: CARGA_TABLE,
      key: 'id_carga_academica'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idCurso: {
    field: 'id_curso',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: CURSO_TABLE,
      key: 'id_curso'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class CursoCarga extends Model {

  static associate(models) {
    //

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CURSO_CARGA_TABLE,
      modelName: 'CursoCarga',
      timestamps: false
    }
  }
}

module.exports = {CURSO_CARGA_TABLE, CursoCargaSchema, CursoCarga};
