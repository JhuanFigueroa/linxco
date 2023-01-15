
const { Model, DataTypes, Sequelize } = require('sequelize');

const {CARRERA_TABLE} = require("./carrera.model");
const {GRUPO_TABLE} = require("./grupo.model");
const {PERIODO_TABLE} = require("./periodo.model");
const {MATERIA_TABLE} = require("./materia.model");

const  ACTA_CONTROL_TABLE = 'acta_control';

const ActaControlSchema = {
  id: {
    field:'id_acta_control',
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
  idGrupo: {
    field:'id_grupo',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: GRUPO_TABLE,
      key: 'id_grupo'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
}


//Modelo
class ActaControl extends Model {
  static associate(models) {
    // associate
    this.belongsTo(models.Grupo,{as:'grupo'});

    this.hasMany(models.Periodo,{
      as: 'periodos',
      foreignKey: 'id_periodo'
    });
   this.belongsTo(models.Materia,{as:'materia'});

  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: ACTA_CONTROL_TABLE,
      modelName: 'ActaControl',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { ACTA_CONTROL_TABLE, ActaControlSchema, ActaControl }
