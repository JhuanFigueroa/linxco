
const { Model, DataTypes, Sequelize } = require('sequelize');

const TIPO_CARGA_TABLE = 'tipo_carga';

const TipoCargaSchema = {
  clave: {
    field:'clave_tipo_carga',
    allowNull: false,
    primaryKey: true,
   type:DataTypes.STRING,
    unique:true
  },
  nombre: {
    field: 'nombre_tipo_carga',
    allowNull: false,
    type: DataTypes.STRING,

  },
  descripcion:{
    field:'descripcion_carga',
    allowNull:false,
    type:DataTypes.STRING
  },
  status:{
    field:'status_tipo_carga',
    allowNull:false,
    type:DataTypes.INTEGER
  }
}

//Modelo
class TipoCarga extends Model {
  static associate(models) {
    // associate
    this.hasMany(models.CargaAcademica,{
      as:'cargas',
      foreignKey:'clave_tipo_carga'
    });
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: TIPO_CARGA_TABLE,
      modelName: 'TipoCarga',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { TIPO_CARGA_TABLE, TipoCargaSchema, TipoCarga }
