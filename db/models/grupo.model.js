
const { Model, DataTypes, Sequelize } = require('sequelize');
const {CARRERA_TABLE} = require("./carrera.model");

const  GRUPO_TABLE = 'grupo';

const GrupoSchema = {
  id: {
    field:'id_grupo',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.INTEGER,
    unique:true,
    autoIncrement:true
  },
  numero: {
    field: 'numero_grupo',
    allowNull: false,
    type: DataTypes.STRING,

  },
  status:{
    field:'status_grupo',
    allowNull:false,
    type:DataTypes.INTEGER,
    defaultValue:1
  },
  claveCarrera:{
    field:'clave_carrera',
    allowNull:false,
    type:DataTypes.STRING,
    references: {
      model: CARRERA_TABLE,
      key: 'clave_carrera'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

//Modelo
class Grupo extends Model {
  static associate(models) {
    // associate
    this.belongsTo(models.Carrera,{as:'carrera'});
    this.belongsToMany(models.Alumno,{
      as:'alumnos',
      through:models.GrupoAlumno,
      foreignKey:'matricula_alumno',
      otherKey:'id_grupo'
    });

    this.belongsTo(models.Horario,{
      as:'horaio',
    });

    this.hasMany(models.MateriaCarga,{
      as: 'materia_carga',
      foreignKey: 'id_curso'
    });

    this.hasMany(models.ActaControl,{
      as: 'acta_control',
      foreignKey: 'id_grupo'
    });
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: GRUPO_TABLE,
      modelName: 'Grupo',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { GRUPO_TABLE, GrupoSchema, Grupo }
