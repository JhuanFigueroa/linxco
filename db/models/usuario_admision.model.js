
const { Model, DataTypes, Sequelize } = require('sequelize');
const {ALUMNO_TABLE} = require("./alumno.model");
const {ADMISION_TABLE} = require("./admision.model");

const USUARIO_ADMISION_TABLE = 'usuario_admision';

const UsuarioAdmisionSchema = {
  id: {
    field:'id_usuario_admision',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement:true,
    unique:true
  },
  usuario: {
    field:'username_admision',
    allowNull:false,
    type:DataTypes.STRING,
    unique:true
  },
  password:{
    field:'password_admision',
    allowNull:false,
    type:DataTypes.STRING,
  },
  numFichaAdmision:{
    field:'numero_ficha_admision',
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: ADMISION_TABLE,
      key: 'numero_ficha_admision'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }

}

//Modelo
class UsuarioAdmision extends Model {
  static associate(models) {
    this.belongsTo(models.Admision,{as:'admision'});

    // associate
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: CREDENCIAL_TABLE,
      modelName: 'UsuarioAdmision',
      timestamps: false //campos por defecto
    }
  }
}
module.exports = { USUARIO_ADMISION_TABLE, UsuarioAdmisionSchema, UsuarioAdmision }
