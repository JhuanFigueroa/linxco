'use strict';

const {ROL_TABLE, RolSchema} = require("../models/rol.model");
const {CARRERA_TABLE, CarreraSchema} = require("../models/carrera.model");
const {SEMESTRE_TABLE, SemestreSchema} = require("../models/semestre.model");
const {ALUMNO_TABLE, AlumnoSchema} = require("../models/alumno.model");

const {EMPLEADO_TABLE, EmpleadoSchema} = require("../models/empleado.model");
const {MAESTRO_TABLE, MaestroSchema} = require("../models/maestro.model");
const {MATERIA_TABLE, MateriaSchema} = require("../models/materia.model");
const {PERIODO_TABLE, PeriodoSchema} = require("../models/periodo.model");
const {RAZON_BAJA_TABLE, RazonBajaSchema} = require("../models/razon_baja.model");
const {RAZON_FACTURA_TABLE, RazonFacturaSchema} = require("../models/razon_factura.model");
const {RENUNCIA_SEGURO_TABLE, RenunciaSeguroSchema} = require("../models/renuncia_seguro.model");

const {BAJA_TABLE, BajaTempDefSchema} = require("../models/baja_temp_def.model");
const {CONSTANCIA_TABLE, ConstanciaSchema} = require("../models/constancia.model");
const {CURSO_TABLE, CursoSchema} = require("../models/curso.model");
const {TIPO_CONSTANCIA_TABLE, TipoConstanciaSchema} = require("../models/tipo_constanica.model");
const {FACTURA_TABLE, FacturaSchema} = require("../models/factura.model");
const {GRUPO_TABLE, GrupoSchema} = require("../models/grupo.model");



const {CARGA_TABLE, CargaSchema} = require("../models/carga_academica.model");
const {TIPO_CARGA_TABLE, TipoCargaSchema} = require("../models/tipo_carga.model");
const {TIPO_EVALUACION_TABLE, TipoEvaluacionSchema} = require("../models/tipo_evaluacion.model");

const {ACTA_TABLE, ActaSchema} = require("../models/acta_calificaciones.model");
const {ACTA_EVALUACION_TABLE, ActaEvaluacionSchema} = require("../models/acta_evaluacion.model");


const {ADMISION_TABLE, Admisionchema} = require("../models/admision.model");

const {ALUMNO_ACTA_TABLE, AlumnoActaSchema} = require("../models/alumno_acta.model");
const {BAJA_RAZONBAJA_TABLE, BajaRazonSchema} = require("../models/baja_razon.model");
const {BAJA_ALUMNO_TABLE, BajaAlumnoSchema} = require("../models/baja_alumno.model");

const {CONSTANCIA_TIPO_TABLE, ConstanciaTipoSchema} = require("../models/constancia_tipo.model");
const {CONSTANCIA_ALUMNO_TABLE, ConstanciaAlumnoSchema} = require("../models/constancia_alumnos.model");

const {CURSO_CARGA_TABLE, CursoCargaSchema} = require("../models/curso_carga.model");
const {GRUPO_ALUMNO_TABLE, GrupoAlumnoSchema} = require("../models/grupo_alumno.model");
const {MATERIA_CARGA_TABLE, MateriaCargaSchema} = require("../models/materia_carga.model");
const {MATERIA_CARRERA_TABLE, MateriaCarreraSchema} = require("../models/materia_carrera.model");
const {RAZONF_FACTURA_TABLE, RazonfFacturaSchema} = require("../models/razonf_factura.model");
const {RENUNCIA_SEGURO_ALUMNO_TABLE, RenunicaSeguroAlumnoSchema} = require("../models/renunciaseg_alumno.model");

const {HORARIO_TABLE, HorarioSchema} = require("../models/horario.model");
const {MAESTRO_HORARIO_TABLE, MaestroHorarioSchema} = require("../models/maestro_horario.model");
const {MATERIA_HORARIO_TABLE, MateriaHorarioSchema} = require("../models/materia_horario.model");

const {USUARIO_ADMISION_TABLE,UsuarioAdmisionSchema}=require('../models/usuario_admision.model');
const {PETICION_TABLE,PeticionSchema}=require('../models/peticiones.model');
const {CREDENCIAL_TABLE,CredencialSchema}=require('../models/credencial.model');
const {JEFE_TABLE,JefeSchema}=require('../models/jefe_division.model');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ROL_TABLE,RolSchema);
    await queryInterface.createTable(CARRERA_TABLE,CarreraSchema);
    await queryInterface.createTable(SEMESTRE_TABLE,SemestreSchema);
    await queryInterface.createTable(ALUMNO_TABLE,AlumnoSchema);

    await queryInterface.createTable(EMPLEADO_TABLE,EmpleadoSchema);
    await queryInterface.createTable(MAESTRO_TABLE,MaestroSchema);
    await queryInterface.createTable(MATERIA_TABLE,MateriaSchema);
    await queryInterface.createTable(PERIODO_TABLE,PeriodoSchema);
    await queryInterface.createTable(RAZON_BAJA_TABLE,RazonBajaSchema);
    await queryInterface.createTable(RAZON_FACTURA_TABLE,RazonFacturaSchema);
    await queryInterface.createTable(RENUNCIA_SEGURO_TABLE,RenunciaSeguroSchema);

    await queryInterface.createTable(BAJA_TABLE,BajaTempDefSchema);
    await queryInterface.createTable(CONSTANCIA_TABLE,ConstanciaSchema);
    await queryInterface.createTable(TIPO_CONSTANCIA_TABLE,TipoConstanciaSchema);
    await queryInterface.createTable(CURSO_TABLE,CursoSchema);
    await queryInterface.createTable(FACTURA_TABLE,FacturaSchema);
    await queryInterface.createTable(GRUPO_TABLE,GrupoSchema);


    await queryInterface.createTable(TIPO_CARGA_TABLE,TipoCargaSchema);
    await queryInterface.createTable(TIPO_EVALUACION_TABLE,TipoEvaluacionSchema);


    await queryInterface.createTable(ACTA_TABLE,ActaSchema);
    await queryInterface.createTable(ACTA_EVALUACION_TABLE,ActaEvaluacionSchema);

    await queryInterface.createTable(ADMISION_TABLE,Admisionchema);

    await queryInterface.createTable(ALUMNO_ACTA_TABLE,AlumnoActaSchema);
    await queryInterface.createTable(BAJA_RAZONBAJA_TABLE,BajaRazonSchema);
    await queryInterface.createTable(BAJA_ALUMNO_TABLE,BajaAlumnoSchema);

    await queryInterface.createTable(CONSTANCIA_TIPO_TABLE,ConstanciaTipoSchema);
    await queryInterface.createTable(CONSTANCIA_ALUMNO_TABLE,ConstanciaAlumnoSchema);


    await queryInterface.createTable(GRUPO_ALUMNO_TABLE,GrupoAlumnoSchema);

    await queryInterface.createTable(MATERIA_CARRERA_TABLE,MateriaCarreraSchema);
    await queryInterface.createTable(RAZONF_FACTURA_TABLE,RazonfFacturaSchema);
    await queryInterface.createTable(RENUNCIA_SEGURO_ALUMNO_TABLE,RenunicaSeguroAlumnoSchema);

    await queryInterface.createTable(HORARIO_TABLE,HorarioSchema);
    await queryInterface.createTable(MAESTRO_HORARIO_TABLE,MaestroHorarioSchema);
    await queryInterface.createTable(MATERIA_HORARIO_TABLE,MateriaHorarioSchema);

    await queryInterface.createTable(CARGA_TABLE,CargaSchema);
    await queryInterface.createTable(CURSO_CARGA_TABLE,CursoCargaSchema);
    await queryInterface.createTable(MATERIA_CARGA_TABLE,MateriaCargaSchema);

    await queryInterface.createTable(PETICION_TABLE,PeticionSchema);
    await queryInterface.createTable(CREDENCIAL_TABLE,CredencialSchema);
    await queryInterface.createTable(USUARIO_ADMISION_TABLE,UsuarioAdmisionSchema);
    await queryInterface.createTable(JEFE_TABLE,JefeSchema);



  },

  async down (queryInterface) {
    await queryInterface.dropTable(ACTA_TABLE);
    await queryInterface.dropTable(TIPO_EVALUACION_TABLE);
    await queryInterface.dropTable(ACTA_EVALUACION_TABLE);
  }
};
