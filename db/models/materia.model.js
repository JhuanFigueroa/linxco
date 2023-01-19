
const { Model, DataTypes, Sequelize } = require('sequelize');

const  MATERIA_TABLE = 'materia';

const MateriaSchema = {
  clave: {
    field:'clave_materia',
    allowNull: false,
    primaryKey: true,
    type:DataTypes.STRING,
    unique:true,
  },
  nombre: {
    field: 'nombre_materia',
    allowNull: false,
    type: DataTypes.STRING,

  },
  creditos:{
    field:'creditos_materia',
    allowNull:false,
    type:DataTypes.INTEGER
  },
  status:{
    field:'status_materia',
    allowNull:false,
    type:DataTypes.INTEGER,
    defaultValue:1
  }
}

//Modelo
class Materia extends Model {
  static associate(models) {
    // associate
    this.belongsToMany(models.Horario,{
      as:'materias',
      through:models.MateriaHorario,
      foreignKey:'clave_materia',
      otherKey:'id_horario'
    });
    this.hasMany(models.Acta, {
      as: 'actas',
      foreignKey: 'clave_materia'
    });
    this.hasMany(models.ActaControl,{
      as: 'actaControl',
      foreignKey: 'clave_materia'
    });
  }


  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: MATERIA_TABLE,
      modelName: 'Materia',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { MATERIA_TABLE, MateriaSchema, Materia }
