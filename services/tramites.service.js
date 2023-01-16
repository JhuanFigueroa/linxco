const boom = require('@hapi/boom');
const bcrypt=require('bcrypt');
const sequilize=require('../libs/sequelize')
const {models}=require('../libs/sequelize')

class TramitesService {

  async generateBoleta(clave,periodo){
    const query="SELECT\n" +
      "\tmateria.clave_materia as clave,\n" +
      "\tmateria.nombre_materia as materia,\n" +
      "\tacta_calificaciones.calificacion_acta as calificacion\n" +
      "FROM\n" +
      "\tmateria\n" +
      "\tINNER JOIN acta_calificaciones ON materia.clave_materia = acta_calificaciones.clave_materia\n" +
      "\tINNER JOIN materia_carga ON materia.clave_materia = materia_carga.clave_materia\n" +
      "\tINNER JOIN carga_academica ON materia_carga.id_carga_academica = carga_academica.id_carga_academica\n" +
      "\tINNER JOIN alumno ON acta_calificaciones.matricula_alumno = alumno.matricula_alumno \n" +
      "\tAND carga_academica.matricula_alumno = alumno.matricula_alumno \n" +
      "WHERE\n" +
      "\tcarga_academica.matricula_alumno = '"+clave+"' \n" +
      "\tAND carga_academica.id_periodo = '"+periodo+"'";

    const [data]=await sequilize.query(query);

    return data;
  }

  async obtnerPeriodo(){

    const query="select id_periodo as id, numero_periodo as numero\n" +
      "from periodo where\n" +
      "status_periodo='1'";

    const [data]= await sequilize.query(query);

    return data;
}


  async asignarReinscripcion(dta){

    const matricula=dta.matricula
    const query="UPDATE alumno SET status_alumno=2 WHERE matricula_alumno='"+matricula+"'";

    const [data]= await sequilize.query(query);
    return data;
  }

  async reinscribirAlumno(dta){

    const matricula=dta.matricula
    const folio=dta.folio
    const query="UPDATE factura \n" +
      "SET status_factura = '0' \n" +
      "WHERE\n" +
      "\tnumero_comprobante = '"+folio+"'; UPDATE alumno \n" +
      "\tSET status_alumno = '1' \n" +
      "WHERE\n" +
      "\tmatricula_alumno = '"+matricula+"'\n";

    const [data]= await sequilize.query(query);
    return data;
  }

  async obtenerCargaAlumno(matricula,periodo){

    const query="SELECT\n" +
      "\tmateria.clave_materia AS clave,\n" +
      "\tmateria.nombre_materia AS nombre,\n" +
      "\tmateria.creditos_materia AS creditos,\n" +
      "\tgrupo.numero_grupo,\n" +
      "\tmateria_carga.id_curso \n" +
      "FROM\n" +
      "\tmateria\n" +
      "\tINNER JOIN materia_carga ON materia.clave_materia = materia_carga.clave_materia\n" +
      "\tINNER JOIN carga_academica ON materia_carga.id_carga_academica = carga_academica.id_carga_academica\n" +
      "\tINNER JOIN alumno ON carga_academica.matricula_alumno = alumno.matricula_alumno\n" +
      "\tINNER JOIN periodo ON carga_academica.id_periodo = periodo.id_periodo\n" +
      "\tINNER JOIN grupo ON materia_carga.id_grupo = grupo.id_grupo \n" +
      "WHERE\n" +
      "\talumno.matricula_alumno = '"+matricula+"' \n" +
      "\tAND periodo.id_periodo = '"+periodo+"'";

    const [data]= await sequilize.query(query);
    return data;
  }

  async obtnerTipoCarga(matricula,periodo){
    const query="SELECT\n" +
      "\tcarga_academica.clave_tipo_carga AS tipo_carga \n" +
      "FROM\n" +
      "\tcarga_academica\n" +
      "\tINNER JOIN alumno ON carga_academica.matricula_alumno = alumno.matricula_alumno\n" +
      "\tINNER JOIN periodo ON carga_academica.id_periodo = periodo.id_periodo \n" +
      "WHERE\n" +
      "\talumno.matricula_alumno = '"+matricula+"' \n" +
      "\tAND periodo.id_periodo = '"+periodo+"';"

    const [data]=await sequilize.query(query)
    return data
  }

  async getAlumnosReinscripcion(clave){

    const query="SELECT\n" +
      "\talumno.matricula_alumno AS matricula, \n" +
      "\tconcat ( alumno.nombre_alumno, ' ', alumno.apellido_paterno_alumno, ' ', alumno.apellido_materno_alumno ) AS nombre, \n" +
      "\tcarrera.nombre_carrera AS carrera, \n" +
      "\tsemestre.numero_semestre AS semestre\n" +
      "FROM\n" +
      "\talumno\n" +
      "\tINNER JOIN\n" +
      "\tcarrera\n" +
      "\tON \n" +
      "\t\talumno.clave_carrera = carrera.clave_carrera\n" +
      "\tINNER JOIN\n" +
      "\tsemestre\n" +
      "\tON \n" +
      "\t\talumno.id_semestre = semestre.id_semestre\n" +
      "WHERE\n" +
      "\talumno.status_alumno = 2 AND\n" +
      "\tcarrera.clave_carrera = '"+clave+"'";

    const [data]= await sequilize.query(query);
    return data;
  }

  async credencial(dta){

    const rta =await models.Credencial.create(dta)

    return rta.id;
  }

  async subirActa(file){
    var filename = file.filename;
    filename = 'http://localhost:3000/storage/horarios/' + filename;


    return "subido"
  }

  async getCredenciales(){

    const [data] =await sequilize.query("SELECT\n" +
      "\talumno.matricula_alumno AS matricula,\n" +
      "\tconcat ( alumno.nombre_alumno, ' ', alumno.apellido_paterno_alumno, ' ', alumno.apellido_materno_alumno ) AS nombre,\n" +
      "\tcarrera.nombre_carrera AS carrera,\n" +
      "\tsemestre.numero_semestre AS semestre \n" +
      "FROM\n" +
      "\talumno\n" +
      "\tINNER JOIN carrera ON alumno.clave_carrera = carrera.clave_carrera\n" +
      "\tINNER JOIN semestre ON alumno.id_semestre = semestre.id_semestre\n" +
      "\tINNER JOIN credencial ON alumno.matricula_alumno = credencial.matricula_alumno")

    return data;
  }

  async getFacturaCredencial(matricula){

    const [data] =await sequilize.query("SELECT\n" +
      "\tfactura.id_factura,\n" +
      "\tfactura.numero_comprobante \n" +
      "FROM\n" +
      "\tfactura\n" +
      "\tINNER JOIN razonf_factura ON factura.id_factura = razonf_factura.id_factura\n" +
      "\tINNER JOIN razon_factura ON razonf_factura.clave_razon_factura = razon_factura.clave_razon_factura \n" +
      "WHERE\n" +
      "\tfactura.matricula_alumno = '"+matricula+"' \n" +
      "\tAND factura.status_factura = '1' \n" +
      "\tAND razon_factura.clave_razon_factura = 'CR323'")

    return data;
  }

  async renunciaSeguro(dta){

    const rta =await models.RenunciaSegAlumno.create(dta)

    return rta.id;
  }

  async createPeticion(dta){

    const rta =await models.Peticion.create(dta)

    return rta.id;
  }
}
module.exports=TramitesService;
