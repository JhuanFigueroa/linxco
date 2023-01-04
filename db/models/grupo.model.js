
const { Model, DataTypes, Sequelize } = require('sequelize');

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
    type:DataTypes.INTEGER
  }
}

//Modelo
class Grupo extends Model {
  static associate(models) {
    // associate
    this.belongsToMany(models.Alumno,{
      as:'alumnos',
      through:models.GrupoAlumno,
      foreignKey:'matricula_alumno',
      otherKey:'id_grupo'
    });

    is.belongsTo(models.Horario,{
      as:'horaio',
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
