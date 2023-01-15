
const { Model, DataTypes, Sequelize } = require('sequelize');

const PERIODO_TABLE = 'periodo';

const PeriodoSchema = {
  id: {
    field:'id_periodo',
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement:true,
    unique:true
  },
  numero: {
    field: 'numero_periodo',
    allowNull: false,
    type: DataTypes.STRING,

  },
  descripcion:{
    field:'descripcion_periodo',
    allowNull:false,
    type:DataTypes.STRING
  },
  status:{
    field:'status_periodo',
    allowNull:false,
    type:DataTypes.INTEGER
  }
}

//Modelo
class Periodo extends Model {
  static associate(models) {
    // associate
    this.belongsTo(models.Horarios,{
      as:'horario',
    });
    this.hasMany(models.CargaAcademica,{
      as:'cargas',
      foreignKey:'id_periodo'
    });
    this.hasMany(models.Acta, {
      as: 'actas',
      foreignKey: 'id_periodo'
    });
  }

  static config(sequelize) {
    return {
      sequelize,//conexion
      tableName: PERIODO_TABLE,
      modelName: 'Periodo',
      timestamps: false //campos por defecto
    }
  }
}


module.exports = { PERIODO_TABLE, PeriodoSchema, Periodo }
