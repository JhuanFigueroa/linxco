const { Model, DataTypes, Sequelize } = require('sequelize');

const { HORARIO_TABLE } = require('./horario.model');
const { MAESTRO_TABLE } = require('./maestro.model');

const MAESTRO_HORARIO_TABLE = 'maestro_horario';

const MaestroHorarioSchema =  {
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
  claveMaestro: {
    field:'clave_maestro',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    references: {
      model: MAESTRO_TABLE,
      key: 'clave_maestro'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class MaestroHorario extends Model {

  static associate(models) {
    //

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MAESTRO_HORARIO_TABLE,
      modelName: 'MaestroHorario',
      timestamps: false
    }
  }
}

module.exports = { MAESTRO_HORARIO_TABLE,MaestroHorarioSchema,MaestroHorario };
