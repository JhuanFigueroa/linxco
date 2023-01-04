
const { Model, DataTypes, Sequelize } = require('sequelize');

const CURSO_TABLE = 'curso';

const CursoSchema = {
  id: {
    field:'id_curso',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement:true,
    unique:true
  },
  nombre: {
    field: 'nombre_curso',
    allowNull: false,
    type: DataTypes.STRING,

  },
  descripcion:{
    field:'descripcion_curso',
    allowNull:false,
    type:DataTypes.STRING
  },
  status:{
    field:'status_curso',
    allowNull:false,
    type:DataTypes.INTEGER
  }
}

//Modelo
class Curso extends Model {
  static associate() {
    // associate
    this.hasMany(models.MateriaCarga,{
      as: 'materia_carga',
      foreignKey: 'id_curso'
    });
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: CURSO_TABLE,
      modelName: 'Curso',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { CURSO_TABLE, CursoSchema, Curso}
