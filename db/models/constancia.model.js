
const { Model, DataTypes, Sequelize } = require('sequelize');

const CONSTANCIA_TABLE = 'contsancia_table';

const ConstanciaSchema = {
  clave: {
    field:'clave_constancia',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
    unique:true
  },
  fecha: {
    field: 'fecha_constancia',
    allowNull: false,
    type: DataTypes.DATE,

  }
}

//Modelo
class Constancia extends Model {
  static associate(models) {
    // associate
    this.belongsToMany(models.TipoConstancia,{
      as:'tipos',
      through:models.ConstanciaTipo,
      foreignKey:'clave_constancia',
      otherKey:'id_tipo_constancia'
    })
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: CONSTANCIA_TABLE,
      modelName: 'Constancia',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { CONSTANCIA_TABLE, ConstanciaSchema, Constancia }
