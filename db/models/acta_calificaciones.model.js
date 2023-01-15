
const { Model, DataTypes, Sequelize } = require('sequelize');
const {MATERIA_TABLE} = require("./materia.model");
const {ALUMNO_TABLE} = require("./alumno.model");
const {PERIODO_TABLE} = require("./periodo.model");

const ACTA_TABLE = 'acta_calificaciones';

const ActaSchema = {
  folio: {
    field:'folio_acta',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.STRING,
    unique:true
  },
  calificacion: {
    field: 'calificacion_acta',
    allowNull: false,
    type: DataTypes.FLOAT,

  },
  fecha:{
    field:'fecha_acta',
    allowNull:true,
    type:DataTypes.DATE,
    defaultValue: Sequelize.Now
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
class Acta extends Model {
  static associate(models) {
    // associate
    this.belongsToMany(models.TipoEvaluacion, {
      as: 'evaluaciones',
      through: models.ActaEvaluacion,
      foreignKey: 'folio_acta',
      otherKey: 'id_tipo_evaluacion'
    });

    this.belongsTo(models.Materia, { as: 'materia' });
    this.belongsTo(models.Alumno, { as: 'alumno' });
    this.belongsTo(models.Periodo, { as: 'periodo' });
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: ACTA_TABLE,
      modelName: 'Acta',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { ACTA_TABLE, ActaSchema, Acta }
