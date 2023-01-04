const { Model, DataTypes, Sequelize } = require('sequelize');

const { RENUNCIA_SEGURO_TABLE } = require('./renuncia_seguro.model');
const { ALUMNO_TABLE } = require('./alumno.model');

const RENUNCIA_SEGURO_ALUMNO_TABLE = 'renuncia_seguro_alumno';

const RenunicaSeguroAlumnoSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  idRenuncia: {
    field:'id_renuncia_seguro',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.INTEGER,
    references: {
      model: RENUNCIA_SEGURO_TABLE,
      key: 'id_renuncia_seguro'
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

class RenunciaSeguroAlumno extends Model {

  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RENUNCIA_SEGURO_ALUMNO_TABLE,
      modelName: 'RenunciaSegAlumno',
      timestamps: false
    }
  }
}

module.exports = { RENUNCIA_SEGURO_ALUMNO_TABLE,RenunicaSeguroAlumnoSchema,RenunciaSeguroAlumno };
