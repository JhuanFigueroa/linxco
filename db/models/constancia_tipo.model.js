const { Model, DataTypes, Sequelize } = require('sequelize');

const { CONSTANCIA_TABLE } = require('./constancia.model');
const { TIPO_CONSTANCIA_TABLE } = require('./tipo_constanica.model');

const CONSTANCIA_TIPO_TABLE = 'constancia_tipo';

const ConstanciaTipoSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  idTipo: {
    field:'id_tipo_constancia',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.INTEGER,
    references: {
      model: TIPO_CONSTANCIA_TABLE,
      key: 'id_tipo_constancia'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  claveConstancia: {
    field:'clave_constancia',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    references: {
      model: CONSTANCIA_TABLE,
      key: 'clave_constancia'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class ConstanciaTipo extends Model {

  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CONSTANCIA_TIPO_TABLE,
      modelName: 'ConstanciaTipo',
      timestamps: false
    }
  }
}

module.exports = { CONSTANCIA_TIPO_TABLE,ConstanciaTipoSchema,ConstanciaTipo };
