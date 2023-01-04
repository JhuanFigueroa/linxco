
const { Model, DataTypes, Sequelize } = require('sequelize');

const  SEMESTRE_TABLE = 'semestre';

const SemestreSchema = {
  id: {
    field:'id_semestre',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.INTEGER,
    unique:true,
    autoIncrement:true
  },
  numero: {
    field: 'numero_semestre',
    allowNull: false,
    type: DataTypes.STRING,

  },
  status:{
    field:'status_semestre',
    allowNull:false,
    type:DataTypes.INTEGER,
    defaultValue:1
  }
}

//Modelo
class Semestre extends Model {
  static associate(models) {
    // associate
    this.hasMany(models.Alumno,{
      as: 'alumnos',
      foreignKey: 'clave_carrera'
    });
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: SEMESTRE_TABLE,
      modelName: 'Semestre',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { SEMESTRE_TABLE, SemestreSchema, Semestre }
