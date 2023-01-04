
const { Model, DataTypes, Sequelize } = require('sequelize');

const RENUNCIA_SEGURO_TABLE = 'renuncia_seguro';

const RenunciaSeguroSchema = {
  id: {
    field:'id_renuncia_seguro',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement:true,
    unique:true
  },

  fecha: {
    field:'fecha_renuncia_seguro',
    allowNull: false,
    type: DataTypes.DATE
  }
}

//Modelo
class RenunciaSeguro extends Model {
  static associate(models) {
    // associate
    this.belongsToMany(models.Alumno,{
      as:'alumnos',
      through:models.RenunciaSeguroAlumno,
      foreignKey:'id_renuncia_seguro',
      otherKey:'matricula_alumno'
    })
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: RENUNCIA_SEGURO_TABLE,
      modelName: 'RenunciaSeguro',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { RENUNCIA_SEGURO_TABLE, RenunciaSeguroSchema, RenunciaSeguro }
