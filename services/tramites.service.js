const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const sequilize=require('../libs/sequelize')
const {models}=require('../libs/sequelize')

class TramitesService {

  async generateBoleta(clave,periodo){
    const query="select materia.clave_materia as clave\n" +
      "from materia,carga_academica,materia_carga\n" +
      "\n" +
      "where materia_carga.id_carga_academica=carga_academica.id_carga_academica\n" +
      "and materia.clave_materia= materia_carga.clave_materia\n" +
      "and carga_academica.matricula_alumno='"+clave+"'\n" +
      "and carga_academica.id_periodo='"+periodo+"'";

    const [data]=await sequilize.query(query);
    const claves=data.map(materia=>{
      return materia.clave
    });

    var calificaciones=[]
    for (var i=0;i<claves.length;i++){
      const calificacion="select materia.clave_materia,materia.nombre_materia,acta_calificaciones.calificacion_acta\n" +
        "from materia,acta_calificaciones,alumno_acta\n" +
        "\n" +
        "where materia.clave_materia=acta_calificaciones.clave_materia\n" +
        "and acta_calificaciones.folio_acta=alumno_acta.folio_acta\n" +
        "and alumno_acta.matricula_alumno='"+clave+"'\n" +
        "and materia.clave_materia='"+claves[i]+"'";
      const [data]=await sequilize.query(calificacion);
      calificaciones.push(data[0]);
    }

    return calificaciones
  }

  async obtnerPeriodo(){

    const query="select id_periodo as id, numero_periodo as numero\n" +
      "from periodo where\n" +
      "status_periodo='1'";

    const [data]= await sequilize.query(query);

    return data;
}

}
module.exports=TramitesService;
