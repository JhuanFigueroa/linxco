const { Model, DataTypes, Sequelize } = require('sequelize');

const { HORARIO_TABLE } = require('./horario.model');
const { MATERIA_TABLE } = require('./materia.model');

const MATERIA_HORARIO_TABLE = 'materia_horario';

const MateriaHorarioSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  idHorario: {
    field:'id_horario',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.INTEGER,
    references: {
      model: HORARIO_TABLE,
      key: 'id_horario'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  claveMateria: {
    field:'clave_materia',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    references: {
      model: MATERIA_TABLE,
      key: 'clave_materia'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class MateriaHorario extends Model {

  static associate(models) {
    //

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MATERIA_HORARIO_TABLE,
      modelName: 'MateriaHorario',
      timestamps: false
    }
  }
}

module.exports = { MATERIA_HORARIO_TABLE,MateriaHorarioSchema,MateriaHorario };
