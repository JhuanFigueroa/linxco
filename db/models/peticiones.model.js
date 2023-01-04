
const { Model, DataTypes, Sequelize } = require('sequelize');
const {ALUMNO_TABLE} = require("./alumno.model");
const {CARRERA_TABLE} = require("./carrera.model");

const PETICION_TABLE = 'peticion';

const PeticionSchema = {
  id: {
    field:'id_peticion',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement:true,
    unique:true
  },
  tipo: {
    field:'tipo_peticion',
    allowNull: false,
    type: DataTypes.STRING,
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
  },status:{
    field:'status_peticion',
    allowNull:false,
    type:DataTypes.INTEGER,
    defaultValue:1
  }

}

//Modelo
class Peticion extends Model {
  static associate(models) {
    this.belongsTo(models.Alumno,{as:'alumno'});
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: PETICION_TABLE,
      modelName: 'Peticion',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { PETICION_TABLE, PeticionSchema, Peticion }
