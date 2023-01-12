
const { Model, DataTypes, Sequelize } = require('sequelize');

const {CARRERA_TABLE} = require("./carrera.model");
const {GRUPO_TABLE} = require("./grupo.model");
const {PERIODO_TABLE} = require("./periodo.model");

const  HORARIOS_TABLE = 'horarios';

const HorariosSchema = {
  id: {
    field:'idHorario',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.INTEGER,
    unique:true,
    autoIncrement:true
  },
  ubicacion: {
    field:'ubicacion',
    allowNull:false,
    type:DataTypes.STRING
  },
  claveCarrera:{
    field: 'clave_carrera',
    allowNull: false,
    type:DataTypes.STRING,
    references: {
      model: CARRERA_TABLE,
      key: 'clave_carrera'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idPeriodo:{
    field: 'id_periodo',
    allowNull: false,
    type:DataTypes.INTEGER,
    references: {
      model: PERIODO_TABLE,
      key: 'id_periodo'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
}


//Modelo
class Horarios extends Model {
  static associate(models) {
    // associate
    this.hasMany(models.Periodo,{
      as: 'periodos',
      foreignKey: 'id_periodo'
    });
    this.hasMany(models.Carrera,{
      as: 'carreras',
      foreignKey: 'clave_carrera'
    });
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: HORARIOS_TABLE,
      modelName: 'Horarios',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { HORARIOS_TABLE, HorariosSchema, Horarios }
