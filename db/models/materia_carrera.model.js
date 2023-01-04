const { Model, DataTypes, Sequelize } = require('sequelize');

const { MATERIA_TABLE } = require('./materia.model');
const { CARRERA_TABLE } = require('./carrera.model');

const MATERIA_CARRERA_TABLE = 'materia_carrera';

const MateriaCarreraSchema =  {
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
  claveCarrera: {
    field:'clave_carrera',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    references: {
      model: CARRERA_TABLE,
      key: 'clave_carrera'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class MateriaCarrera extends Model {

  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MATERIA_CARRERA_TABLE,
      modelName: 'MateriaCarrera',
      timestamps: false
    }
  }
}

module.exports = { MATERIA_CARRERA_TABLE,MateriaCarreraSchema,MateriaCarrera };
