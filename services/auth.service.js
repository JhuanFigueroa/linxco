const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const {models}=require('../libs/sequelize')


class AuthService {
  constructor() {}


  async findByUser(username){

    var rta;
    const alumno = await models.Alumno.findOne({
      where: { username }
    });
    rta=alumno;

    if (!alumno){
      const maestro = await models.Maestro.findOne({
        where: { username }
      });
      rta=maestro;
      if (!maestro){
        const empleado = await models.Empleado.findOne({
          where: { username }
        });
        rta=empleado;
        if (!empleado){
          const jefe=await models.JefeDivision.findOne({
            where:{username}
          });
          rta=jefe
        }
      }
    }
  return rta;

  }

  a
}

module.exports = AuthService;
