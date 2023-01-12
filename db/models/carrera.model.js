
const { Model, DataTypes, Sequelize } = require('sequelize');

const CARRERA_TABLE = 'carrera';

const CarreraSchema = {
  clave: {
    field:'clave_carrera',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.STRING,
    unique:true
  },
  nombre: {
    field: 'nombre_carrera',
    allowNull: false,
    type: DataTypes.STRING,

  },
  especialidad:{
    field:'especialidad_carrera',
    allowNull:false,
    type:DataTypes.STRING
  },
  plan_estudios:{
    field:'planestudio_carrera',
    allowNull:false,
    type:DataTypes.STRING
  },
  imagen:{
    field:'imagen_carrera',
    allowNull:true,
    type:DataTypes.STRING
  },
  status:{
    field:'status_carrera',
    allowNull:false,
    type:DataTypes.INTEGER,
    defaultValue:1
  }
}

//Modelo
class Carrera extends Model {
  static associate(models) {
    // associate
    this.hasMany(models.Admision,{
      as: 'admisiones',
      foreignKey: 'clave_carrera'
    });
    this.hasMany(models.Alumno,{
      as: 'alumnos',
      foreignKey: 'clave_carrera'
    });

    this.hasMany(models.Grupo,{
      as: 'alumnos',
      foreignKey: 'clave_carrera'
    });
    this.belongsTo(models.Horarios,{
      as:'horarios',
    });

    this.belongsToMany(models.Materia,{
      as: 'materias',
      through:models.MateriaCarrera,
      foreignKey: 'clave_carrera',
      otherKey:'clave_materia'
    });

    this.hasOne(models.JefeDivision,{
      as:'jefe'
    })
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: CARRERA_TABLE,
      modelName: 'Carrera',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { CARRERA_TABLE, CarreraSchema, Carrera }
