const { Model, DataTypes, Sequelize } = require('sequelize');

const { MATERIA_TABLE } = require('./materia.model');
const { CARGA_TABLE } = require('./carga_academica.model');

const MATERIA_CARGA_TABLE = 'materia_carga';

const MateriaCargaSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  claveMateria: {
    field:'clave_materia',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.STRING,
    references: {
      model: MATERIA_TABLE,
      key: 'clave_materia'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idCarga: {
    field:'id_carga_academica',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: CARGA_TABLE,
      key: 'id_carga_academica'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class MateriaCarga extends Model {

  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MATERIA_CARGA_TABLE,
      modelName: 'MateriaCarga',
      timestamps: false
    }
  }
}

module.exports = { MATERIA_CARGA_TABLE,MateriaCargaSchema,MateriaCarga };
