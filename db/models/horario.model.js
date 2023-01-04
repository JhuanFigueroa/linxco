
const { Model, DataTypes, Sequelize } = require('sequelize');

const {CARRERA_TABLE} = require("./carrera.model");
const {GRUPO_TABLE} = require("./grupo.model");
const {PERIODO_TABLE} = require("./periodo.model");

const  HORARIO_TABLE = 'horario';

const HorarioSchema = {
  id: {
    field:'id_horario',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.INTEGER,
    unique:true,
    autoIncrement:true
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
  idGrupo:{
    field: 'id_grupo',
    allowNull: false,
    type:DataTypes.INTEGER,
    references: {
      model: GRUPO_TABLE,
      key: 'id_grupo'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}


//Modelo
class Horario extends Model {
  static associate(models) {
    // associate

    this.hasMany(models.Grupo,{
      as: 'grupos',
      foreignKey: 'id_grupo'
    });
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
      tableName: HORARIO_TABLE,
      modelName: 'Horario',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { HORARIO_TABLE, HorarioSchema, Horario }
