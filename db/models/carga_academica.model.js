const {Model, DataTypes, Sequelize} = require('sequelize');
const {ALUMNO_TABLE} = require("./alumno.model");
const {PERIODO_TABLE} = require("./periodo.model");
const {TIPO_CARGA_TABLE} = require("./tipo_carga.model");

const CARGA_TABLE = 'carga_academica';

const CargaSchema = {
  id: {
    field: 'id_carga_academica',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true
  },
  fecha: {
    field: 'fecha_carga_academica',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.Now
  },
  claveTipoCarga: {
    field: 'clave_tipo_carga',
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: TIPO_CARGA_TABLE,
      key: 'clave_tipo_carga'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  matriculaAlumno: {
    field: 'matricula_alumno',
    allowNull: false,
    type: DataTypes.STRING,

    references: {
      model: ALUMNO_TABLE,
      key: 'matricula_alumno'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'

  },
  idPeriodo: {
    field: 'id_periodo',
    allowNull: false,
    type: DataTypes.INTEGER,

    references: {
      model: PERIODO_TABLE,
      key: 'id_periodo'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'

  },

}

//Modelo
class CargaAcademica extends Model {
  static associate(models) {
    // associate
    this.belongsTo(models.Alumno, {as: 'alumno'});
    this.belongsTo(models.TipoCarga, {as: 'tipoCarga'});
    this.belongsTo(models.Periodo, {as: 'periodo'});

    this.belongsToMany(models.Curso, {
      as: 'cursos',
      through: models.CursoCarga,
      foreignKey: 'id_carga_academica',
      otherKey: 'id_curso'
    });
    this.belongsToMany(models.Materia, {
      as: 'materias',
      through: models.MateriaCarga,
      foreignKey: 'id_carga_academica',
      otherKey: 'clave_materia'
    });
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: CARGA_TABLE,
      modelName: 'CargaAcademica',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = {CARGA_TABLE, CargaSchema, CargaAcademica}
