
const { Model, DataTypes, Sequelize } = require('sequelize');
const {ALUMNO_TABLE} = require("./alumno.model");

const CREDENCIAL_TABLE = 'credencial';

const CredencialSchema = {
  id: {
    field:'id_credencial',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement:true,
    unique:true
  },
  matriculaAlumno: {
    field:'matricula_alumno',
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: ALUMNO_TABLE,
      key: 'matricula_alumno'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }

}

//Modelo
class Credencial extends Model {
  static associate(models) {
    this.belongsTo(models.Alumno,{as:'alumno'});
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: CREDENCIAL_TABLE,
      modelName: 'Credencial',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { CREDENCIAL_TABLE, CredencialSchema, Credencial }
