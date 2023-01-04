
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
