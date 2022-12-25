/*
 Navicat Premium Data Transfer

 Source Server         : control
 Source Server Type    : PostgreSQL
 Source Server Version : 140005
 Source Host           : localhost:5432
 Source Catalog        : control_escolar
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 140005
 File Encoding         : 65001

 Date: 06/12/2022 11:27:21
*/


-- ----------------------------
-- Sequence structure for acta_evaluacion_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."acta_evaluacion_id_seq";
CREATE SEQUENCE "public"."acta_evaluacion_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for alumno_acta_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."alumno_acta_id_seq";
CREATE SEQUENCE "public"."alumno_acta_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for baja_alumno_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."baja_alumno_id_seq";
CREATE SEQUENCE "public"."baja_alumno_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for baja_razon_baja_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."baja_razon_baja_id_seq";
CREATE SEQUENCE "public"."baja_razon_baja_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for baja_temp_def_id_baja_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."baja_temp_def_id_baja_seq";
CREATE SEQUENCE "public"."baja_temp_def_id_baja_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for carga_academica_id_carga_academica_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."carga_academica_id_carga_academica_seq";
CREATE SEQUENCE "public"."carga_academica_id_carga_academica_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for constancia_alumno_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."constancia_alumno_id_seq";
CREATE SEQUENCE "public"."constancia_alumno_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for curso_carga_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."curso_carga_id_seq";
CREATE SEQUENCE "public"."curso_carga_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for curso_id_curso_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."curso_id_curso_seq";
CREATE SEQUENCE "public"."curso_id_curso_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for empleado_id_empleado_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."empleado_id_empleado_seq";
CREATE SEQUENCE "public"."empleado_id_empleado_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for factura_id_factura_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."factura_id_factura_seq";
CREATE SEQUENCE "public"."factura_id_factura_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for grupo_alumno_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."grupo_alumno_id_seq";
CREATE SEQUENCE "public"."grupo_alumno_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for grupo_id_grupo_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."grupo_id_grupo_seq";
CREATE SEQUENCE "public"."grupo_id_grupo_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for horario_id_horario_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."horario_id_horario_seq";
CREATE SEQUENCE "public"."horario_id_horario_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for maestro_horario_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."maestro_horario_id_seq";
CREATE SEQUENCE "public"."maestro_horario_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for materia_carga_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."materia_carga_id_seq";
CREATE SEQUENCE "public"."materia_carga_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for materia_carrera_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."materia_carrera_id_seq";
CREATE SEQUENCE "public"."materia_carrera_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for materia_horario_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."materia_horario_id_seq";
CREATE SEQUENCE "public"."materia_horario_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for periodo_id_periodo_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."periodo_id_periodo_seq";
CREATE SEQUENCE "public"."periodo_id_periodo_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for razonf_factura_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."razonf_factura_id_seq";
CREATE SEQUENCE "public"."razonf_factura_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for renuncia_seguro_alumno_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."renuncia_seguro_alumno_id_seq";
CREATE SEQUENCE "public"."renuncia_seguro_alumno_id_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for renuncia_seguro_id_renuncia_seguro_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."renuncia_seguro_id_renuncia_seguro_seq";
CREATE SEQUENCE "public"."renuncia_seguro_id_renuncia_seguro_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for rol_id_rol_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."rol_id_rol_seq";
CREATE SEQUENCE "public"."rol_id_rol_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for semestre_id_semestre_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."semestre_id_semestre_seq";
CREATE SEQUENCE "public"."semestre_id_semestre_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tipo_constancia_id_tipo_constancia_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tipo_constancia_id_tipo_constancia_seq";
CREATE SEQUENCE "public"."tipo_constancia_id_tipo_constancia_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tipo_evaluacion_id_tipo_evaluacion_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tipo_evaluacion_id_tipo_evaluacion_seq";
CREATE SEQUENCE "public"."tipo_evaluacion_id_tipo_evaluacion_seq"
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for SequelizeMeta
-- ----------------------------
DROP TABLE IF EXISTS "public"."SequelizeMeta";
CREATE TABLE "public"."SequelizeMeta" (
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of SequelizeMeta
-- ----------------------------

-- ----------------------------
-- Table structure for acta_calificaciones
-- ----------------------------
DROP TABLE IF EXISTS "public"."acta_calificaciones";
CREATE TABLE "public"."acta_calificaciones" (
  "folio_acta" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "calificacion_acta" float8 NOT NULL,
  "fecha_acta" timestamptz(6) NOT NULL
)
;

-- ----------------------------
-- Records of acta_calificaciones
-- ----------------------------
INSERT INTO "public"."acta_calificaciones" VALUES ('DS12S1D6', 85, '2021-01-20 14:39:59.849-06');
INSERT INTO "public"."acta_calificaciones" VALUES ('DGFGWWE6', 93, '2022-06-23 15:40:45.937-05');
INSERT INTO "public"."acta_calificaciones" VALUES ('TB72WH55', 80, '2022-01-20 14:41:41.001-06');

-- ----------------------------
-- Table structure for acta_evaluacion
-- ----------------------------
DROP TABLE IF EXISTS "public"."acta_evaluacion";
CREATE TABLE "public"."acta_evaluacion" (
  "id" int4 NOT NULL DEFAULT nextval('acta_evaluacion_id_seq'::regclass),
  "folio_acta" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "id_tipo_evaluacion" int4 NOT NULL
)
;

-- ----------------------------
-- Records of acta_evaluacion
-- ----------------------------
INSERT INTO "public"."acta_evaluacion" VALUES (1, 'DGFGWWE6', 1);
INSERT INTO "public"."acta_evaluacion" VALUES (2, 'TB72WH55', 2);
INSERT INTO "public"."acta_evaluacion" VALUES (3, 'DS12S1D6', 2);

-- ----------------------------
-- Table structure for admision
-- ----------------------------
DROP TABLE IF EXISTS "public"."admision";
CREATE TABLE "public"."admision" (
  "numero_ficha_admision" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre_admision" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "apellido_paterno_admision" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "apellido_materno_admision" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "telefono_admision" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "telefono_emegencia_admision" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "correo_admision" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "curp_admision" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "domicilio_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "escuela_procedencia_admision" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "tipo_sangre_admision" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "genero_admision" char(255) COLLATE "pg_catalog"."default" NOT NULL,
  "lugar_nacimineto_admision" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "lugar_aplicaion_admision" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "persona_emergencia_admision" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "fecha_admision" timestamptz(6) NOT NULL,
  "clave_carrera" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of admision
-- ----------------------------
INSERT INTO "public"."admision" VALUES ('201923178', 'Luis', 'Martinez', 'Ortega', '7731458967', '7778974510', 'luisM@mail.com', 'LUIHJH445', 'Buena Vista', 'Cbtis 180', 'O-postivo', 'M                                                                                                                                                                                                                                                              ', 'Hidalgo', 'Tesji', 'Jose Martinez', '2022-11-23 14:29:44.214-06', 'MACA-4');
INSERT INTO "public"."admision" VALUES ('201578993', 'Octavio', 'Gonzalez', 'Moreno', '7852412369', '5998823985', 'OG@mail.com', 'OG6565656', 'La pasadita', 'Cecytem', 'B-negativo', 'M                                                                                                                                                                                                                                                              ', 'Estado de Mexico', 'Tesji', 'Luis Gonzalez', '2022-06-23 15:35:39.902-05', 'ISIC-1');
INSERT INTO "public"."admision" VALUES ('201974863', 'Samatha', 'Gomez', 'Lopez', '8742178945', '9687411203', 'samG@mail.com', 'GOLS64646', 'Tepeji', 'Cbtis 200', 'O-negativo', 'F                                                                                                                                                                                                                                                              ', 'Hidalgo', 'Tesji', 'Maria Lopez', '2020-11-23 14:39:02.32-06', 'ADMON-3');

-- ----------------------------
-- Table structure for alumno
-- ----------------------------
DROP TABLE IF EXISTS "public"."alumno";
CREATE TABLE "public"."alumno" (
  "matricula_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "apellido_paterno_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "apellido_materno_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "telefono_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "correo_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "curp_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "domicilio_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "status_alumno" int4 NOT NULL DEFAULT 1,
  "username_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "password_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "clave_carrera" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "id_rol" int4 NOT NULL,
  "id_semestre" int4 NOT NULL
)
;

-- ----------------------------
-- Records of alumno
-- ----------------------------
INSERT INTO "public"."alumno" VALUES ('201923158', 'Juan', 'Figueroa', 'Trejo', '7731271279', 'juanF@mail.com', 'FITJ010106HHGGRNA9', 'Cañada de Madero Hidalgo', 1, '201923158', '$2b$10$rGKH7zsdv/BEpxKQuT9dFu4/sCdH/s0Ok934.B/7C8.MKKKbLi6Uy', 'ISIC-1', 4, 7);
INSERT INTO "public"."alumno" VALUES ('201923596', 'Carlos', 'Arce', 'Hernandez', '7784569874', 'carlosH@mail.com', 'AEHC001121HMCRRRA0', 'La colonia', 1, '201923596', '$2b$10$9tTI8Wt5zi6mHmKH3LSumu6LVZYW3okweJz.THNP.i2xKhz7xULS6', 'ISIC-1', 4, 7);
INSERT INTO "public"."alumno" VALUES ('201823203', 'Diana', 'Osornio', 'De Jesus', '75421655', 'dianaO@mail.com', 'OOJD00722MMCSNA9', 'Las Huertas', 1, '201823203', '$2b$10$wmWhKeXvHU6B1FduGRhof.S0mk7Qpx1WGi7iAHzROcsLmAv1fSp9e', 'INDU-5', 4, 9);

-- ----------------------------
-- Table structure for alumno_acta
-- ----------------------------
DROP TABLE IF EXISTS "public"."alumno_acta";
CREATE TABLE "public"."alumno_acta" (
  "id" int4 NOT NULL DEFAULT nextval('alumno_acta_id_seq'::regclass),
  "folio_acta" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "matricula_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of alumno_acta
-- ----------------------------
INSERT INTO "public"."alumno_acta" VALUES (2, 'DGFGWWE6', '201923158');
INSERT INTO "public"."alumno_acta" VALUES (3, 'DGFGWWE6', '201923596');
INSERT INTO "public"."alumno_acta" VALUES (4, 'DS12S1D6', '201823203');

-- ----------------------------
-- Table structure for baja_alumno
-- ----------------------------
DROP TABLE IF EXISTS "public"."baja_alumno";
CREATE TABLE "public"."baja_alumno" (
  "id" int4 NOT NULL DEFAULT nextval('baja_alumno_id_seq'::regclass),
  "id_baja" int4 NOT NULL,
  "matricula_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of baja_alumno
-- ----------------------------
INSERT INTO "public"."baja_alumno" VALUES (2, 1, '201923596');
INSERT INTO "public"."baja_alumno" VALUES (3, 2, '201823203');

-- ----------------------------
-- Table structure for baja_razon_baja
-- ----------------------------
DROP TABLE IF EXISTS "public"."baja_razon_baja";
CREATE TABLE "public"."baja_razon_baja" (
  "id" int4 NOT NULL DEFAULT nextval('baja_razon_baja_id_seq'::regclass),
  "id_baja" int4 NOT NULL,
  "clave_razon_baja" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of baja_razon_baja
-- ----------------------------
INSERT INTO "public"."baja_razon_baja" VALUES (2, 1, 'RB1');
INSERT INTO "public"."baja_razon_baja" VALUES (4, 1, 'RB2');

-- ----------------------------
-- Table structure for baja_temp_def
-- ----------------------------
DROP TABLE IF EXISTS "public"."baja_temp_def";
CREATE TABLE "public"."baja_temp_def" (
  "id_baja" int4 NOT NULL DEFAULT nextval('baja_temp_def_id_baja_seq'::regclass),
  "tipo_baja" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "fecha_baja" timestamptz(6) NOT NULL
)
;

-- ----------------------------
-- Records of baja_temp_def
-- ----------------------------
INSERT INTO "public"."baja_temp_def" VALUES (1, 'Temporal', '2021-11-24 03:20:36.309-06');
INSERT INTO "public"."baja_temp_def" VALUES (2, 'Definitiva', '2021-01-03 03:21:12.167-06');

-- ----------------------------
-- Table structure for carga_academica
-- ----------------------------
DROP TABLE IF EXISTS "public"."carga_academica";
CREATE TABLE "public"."carga_academica" (
  "id_carga_academica" int4 NOT NULL DEFAULT nextval('carga_academica_id_carga_academica_seq'::regclass),
  "fecha_carga_academica" timestamptz(6) NOT NULL,
  "clave_tipo_carga" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "matricula_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "id_periodo" int4 NOT NULL
)
;

-- ----------------------------
-- Records of carga_academica
-- ----------------------------
INSERT INTO "public"."carga_academica" VALUES (4, '2022-11-17 21:53:51-06', 'INS-1', '201923158', 5);
INSERT INTO "public"."carga_academica" VALUES (6, '2022-11-17 21:56:05-06', 'RES-2', '201923158', 9);
INSERT INTO "public"."carga_academica" VALUES (7, '2022-11-14 21:56:32-06', 'CUR-3', '201923158', 2);
INSERT INTO "public"."carga_academica" VALUES (8, '2022-11-24 21:59:29-06', 'RES-2', '201923158', 7);
INSERT INTO "public"."carga_academica" VALUES (9, '2022-11-10 20:00:51-06', 'RES-2', '201923158', 4);
INSERT INTO "public"."carga_academica" VALUES (10, '2022-02-25 22:19:09-06', 'CUR-3', '201923158', 6);
INSERT INTO "public"."carga_academica" VALUES (11, '2022-11-01 22:19:54-06', 'CUR-3', '201923158', 8);
INSERT INTO "public"."carga_academica" VALUES (12, '2022-11-24 22:20:17-06', 'INS-1', '201923158', 6);
INSERT INTO "public"."carga_academica" VALUES (13, '2022-12-10 22:20:47-06', 'INS-1', '201923158', 2);
INSERT INTO "public"."carga_academica" VALUES (14, '2022-11-17 22:21:12-06', 'RES-2', '201923158', 3);

-- ----------------------------
-- Table structure for carrera
-- ----------------------------
DROP TABLE IF EXISTS "public"."carrera";
CREATE TABLE "public"."carrera" (
  "clave_carrera" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre_carrera" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "especialidad_carrera" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "planestudio_carrera" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "status_carrera" int4 NOT NULL DEFAULT 1
)
;

-- ----------------------------
-- Records of carrera
-- ----------------------------
INSERT INTO "public"."carrera" VALUES ('ADMON-3', 'ADMINISTRACION ', 'NEGOCIO FINANCIERO', 'FIDAMIN', 1);
INSERT INTO "public"."carrera" VALUES ('CIVIL-6', 'CIVIL', 'CONSTRUCCION', 'CONCIAO', 1);
INSERT INTO "public"."carrera" VALUES ('ELE-9', 'ELECTRICA', 'CORREIENTES', 'CORELEC', 1);
INSERT INTO "public"."carrera" VALUES ('INDU-5', 'INDUSTRIAL', 'MERCADOR', 'MINDUCA', 1);
INSERT INTO "public"."carrera" VALUES ('ISIC-1', 'SISTEMAS', 'CLOUD COMPUTING', 'CLUOD', 1);
INSERT INTO "public"."carrera" VALUES ('LOG-8', 'LOGISTICA', 'LOGISTICA', 'LOFIS', 1);
INSERT INTO "public"."carrera" VALUES ('MACA-4', 'MECATRONICA', 'HEREAMIENTAS UTILIES', 'HEMEC8', 1);
INSERT INTO "public"."carrera" VALUES ('QUIM-7', 'QUIMICA', 'REAACCIONES', 'QRAIC', 1);
INSERT INTO "public"."carrera" VALUES ('TICS-2', 'TECNOLOGIAS DE LA INFORMACION Y LA COMUNICACION', 'ESPECIALIDAS DE TICS', 'TICOLIN', 1);
INSERT INTO "public"."carrera" VALUES ('CARR-PRUE', 'Carrera de prueba', 'prueba chida', 'plan prueba', 0);

-- ----------------------------
-- Table structure for constancia_alumno
-- ----------------------------
DROP TABLE IF EXISTS "public"."constancia_alumno";
CREATE TABLE "public"."constancia_alumno" (
  "id" int4 NOT NULL DEFAULT nextval('constancia_alumno_id_seq'::regclass),
  "clave_constancia" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "matricula_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of constancia_alumno
-- ----------------------------
INSERT INTO "public"."constancia_alumno" VALUES (3, 'hjkshfdjkh', '201923158');
INSERT INTO "public"."constancia_alumno" VALUES (4, 'slkdjf', '201923158');
INSERT INTO "public"."constancia_alumno" VALUES (5, 'wklerjwj', '201923158');
INSERT INTO "public"."constancia_alumno" VALUES (6, 'jhwjekrwkje', '201923158');
INSERT INTO "public"."constancia_alumno" VALUES (7, 'wklerjwj', '201923158');
INSERT INTO "public"."constancia_alumno" VALUES (8, 'lkjfskljer', '201923158');
INSERT INTO "public"."constancia_alumno" VALUES (9, 'wklerjwj', '201923158');
INSERT INTO "public"."constancia_alumno" VALUES (10, 'lksjdfklsdj', '201923158');
INSERT INTO "public"."constancia_alumno" VALUES (11, 'oiuoiu', '201923158');

-- ----------------------------
-- Table structure for contsancia_table
-- ----------------------------
DROP TABLE IF EXISTS "public"."contsancia_table";
CREATE TABLE "public"."contsancia_table" (
  "clave_constancia" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "fecha_constancia" timestamptz(6) NOT NULL,
  "id_tipo_constancia" int4 NOT NULL
)
;

-- ----------------------------
-- Records of contsancia_table
-- ----------------------------
INSERT INTO "public"."contsancia_table" VALUES ('kjhsfjkh', '2022-11-02 22:22:12-06', 1);
INSERT INTO "public"."contsancia_table" VALUES ('oiuoiu', '2022-02-22 22:22:20-06', 1);
INSERT INTO "public"."contsancia_table" VALUES ('hjkshfdjkh', '2022-02-25 22:22:29-06', 2);
INSERT INTO "public"."contsancia_table" VALUES ('sdfjkshf', '2022-10-04 22:22:38-05', 1);
INSERT INTO "public"."contsancia_table" VALUES ('jhwjekrwkje', '2022-12-10 22:22:49-06', 3);
INSERT INTO "public"."contsancia_table" VALUES ('lksjdfklsdj', '2022-01-23 22:22:57-06', 2);
INSERT INTO "public"."contsancia_table" VALUES ('slkdjf', '2022-11-11 22:23:15-06', 1);
INSERT INTO "public"."contsancia_table" VALUES ('sjdfdskjfhs', '2022-11-26 22:23:23-06', 3);
INSERT INTO "public"."contsancia_table" VALUES ('wklerjwj', '2022-11-02 22:23:31-06', 2);
INSERT INTO "public"."contsancia_table" VALUES ('lkjfskljer', '2022-11-11 22:23:38-06', 1);

-- ----------------------------
-- Table structure for credencial
-- ----------------------------
DROP TABLE IF EXISTS "public"."credencial";
CREATE TABLE "public"."credencial" (
  "idCredencial" int4 NOT NULL,
  "statusCredencial" char(1) COLLATE "pg_catalog"."default",
  "matricula_alumno" varchar COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of credencial
-- ----------------------------

-- ----------------------------
-- Table structure for curso
-- ----------------------------
DROP TABLE IF EXISTS "public"."curso";
CREATE TABLE "public"."curso" (
  "id_curso" int4 NOT NULL DEFAULT nextval('curso_id_curso_seq'::regclass),
  "nombre_curso" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "descripcion_curso" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "status_curso" int4 NOT NULL
)
;

-- ----------------------------
-- Records of curso
-- ----------------------------
INSERT INTO "public"."curso" VALUES (2, 'CURSO ORDINARIO', 'EVALUACIÓN ORDINARIA', 1);
INSERT INTO "public"."curso" VALUES (3, 'CURSO DE REPETICION', 'CUSO DE REPETICION', 1);
INSERT INTO "public"."curso" VALUES (4, 'CURSO ESPECIAL', 'CURSO ESPECIAL', 1);

-- ----------------------------
-- Table structure for curso_carga
-- ----------------------------
DROP TABLE IF EXISTS "public"."curso_carga";
CREATE TABLE "public"."curso_carga" (
  "id" int4 NOT NULL DEFAULT nextval('curso_carga_id_seq'::regclass),
  "id_carga_academica" int4 NOT NULL,
  "id_curso" int4 NOT NULL
)
;

-- ----------------------------
-- Records of curso_carga
-- ----------------------------
INSERT INTO "public"."curso_carga" VALUES (3, 13, 4);
INSERT INTO "public"."curso_carga" VALUES (4, 11, 2);
INSERT INTO "public"."curso_carga" VALUES (5, 14, 4);
INSERT INTO "public"."curso_carga" VALUES (6, 7, 3);
INSERT INTO "public"."curso_carga" VALUES (7, 9, 2);
INSERT INTO "public"."curso_carga" VALUES (8, 8, 4);
INSERT INTO "public"."curso_carga" VALUES (9, 10, 3);
INSERT INTO "public"."curso_carga" VALUES (10, 11, 4);
INSERT INTO "public"."curso_carga" VALUES (11, 8, 4);
INSERT INTO "public"."curso_carga" VALUES (12, 13, 2);

-- ----------------------------
-- Table structure for empleado
-- ----------------------------
DROP TABLE IF EXISTS "public"."empleado";
CREATE TABLE "public"."empleado" (
  "id_empleado" int4 NOT NULL DEFAULT nextval('empleado_id_empleado_seq'::regclass),
  "nombre_empleado" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "apellido_paterno_empleado" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "apellido_materno_empleado" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "telefono_empleado" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "correo_empleado" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "status_empleado" int4 NOT NULL DEFAULT 1,
  "username_empleado" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "password_empleado" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "id_rol" int4 NOT NULL
)
;

-- ----------------------------
-- Records of empleado
-- ----------------------------
INSERT INTO "public"."empleado" VALUES (1, 'Omar', 'Aranda', 'Almaraz', '7731271279', 'omarA@mail.com', 1, '201923197', '$2b$10$OmKYSxch2V8wFVHJP2T1fuj2cTSvmCtWPrZ.JVZCEJ0Xut/mnlvGy', 5);

-- ----------------------------
-- Table structure for factura
-- ----------------------------
DROP TABLE IF EXISTS "public"."factura";
CREATE TABLE "public"."factura" (
  "id_factura" int4 NOT NULL DEFAULT nextval('factura_id_factura_seq'::regclass),
  "numero_comprobante" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "monto_total_factura" float8 NOT NULL
)
;

-- ----------------------------
-- Records of factura
-- ----------------------------
INSERT INTO "public"."factura" VALUES (3, 'SOF-300', 200);
INSERT INTO "public"."factura" VALUES (4, 'ODN-301', 22);
INSERT INTO "public"."factura" VALUES (5, 'ORM-302', 399);
INSERT INTO "public"."factura" VALUES (6, 'JDO-303', 40);
INSERT INTO "public"."factura" VALUES (7, 'JDI-304', 160);
INSERT INTO "public"."factura" VALUES (8, 'ODK-305', 1500);
INSERT INTO "public"."factura" VALUES (9, 'ELD-306', 2000);
INSERT INTO "public"."factura" VALUES (10, 'MFO-307', 100);
INSERT INTO "public"."factura" VALUES (11, 'PEK-308', 80);
INSERT INTO "public"."factura" VALUES (12, 'DOM-309', 50);

-- ----------------------------
-- Table structure for grupo
-- ----------------------------
DROP TABLE IF EXISTS "public"."grupo";
CREATE TABLE "public"."grupo" (
  "id_grupo" int4 NOT NULL DEFAULT nextval('grupo_id_grupo_seq'::regclass),
  "numero_grupo" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "status_grupo" int4 NOT NULL DEFAULT 1
)
;

-- ----------------------------
-- Records of grupo
-- ----------------------------
INSERT INTO "public"."grupo" VALUES (2, '3101', 1);
INSERT INTO "public"."grupo" VALUES (3, '3102', 1);
INSERT INTO "public"."grupo" VALUES (4, '3201', 0);
INSERT INTO "public"."grupo" VALUES (5, '3202', 0);
INSERT INTO "public"."grupo" VALUES (6, '3301', 1);
INSERT INTO "public"."grupo" VALUES (7, '3302', 1);
INSERT INTO "public"."grupo" VALUES (8, '3401', 0);
INSERT INTO "public"."grupo" VALUES (9, '3402', 0);
INSERT INTO "public"."grupo" VALUES (10, '3501', 1);
INSERT INTO "public"."grupo" VALUES (11, '3502', 1);
INSERT INTO "public"."grupo" VALUES (12, '3601', 0);
INSERT INTO "public"."grupo" VALUES (13, '3602', 0);
INSERT INTO "public"."grupo" VALUES (14, '3701', 1);
INSERT INTO "public"."grupo" VALUES (15, '3702', 1);
INSERT INTO "public"."grupo" VALUES (16, '3801', 0);
INSERT INTO "public"."grupo" VALUES (17, '3802', 0);
INSERT INTO "public"."grupo" VALUES (18, '3901', 1);
INSERT INTO "public"."grupo" VALUES (19, '3902', 1);

-- ----------------------------
-- Table structure for grupo_alumno
-- ----------------------------
DROP TABLE IF EXISTS "public"."grupo_alumno";
CREATE TABLE "public"."grupo_alumno" (
  "id" int4 NOT NULL DEFAULT nextval('grupo_alumno_id_seq'::regclass),
  "id_grupo" int4 NOT NULL,
  "matricula_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of grupo_alumno
-- ----------------------------
INSERT INTO "public"."grupo_alumno" VALUES (2, 2, '201923158');
INSERT INTO "public"."grupo_alumno" VALUES (3, 3, '201923158');
INSERT INTO "public"."grupo_alumno" VALUES (4, 4, '201923158');
INSERT INTO "public"."grupo_alumno" VALUES (5, 5, '201923158');
INSERT INTO "public"."grupo_alumno" VALUES (6, 6, '201923158');
INSERT INTO "public"."grupo_alumno" VALUES (7, 7, '201923158');
INSERT INTO "public"."grupo_alumno" VALUES (8, 8, '201923158');

-- ----------------------------
-- Table structure for horario
-- ----------------------------
DROP TABLE IF EXISTS "public"."horario";
CREATE TABLE "public"."horario" (
  "id_horario" int4 NOT NULL DEFAULT nextval('horario_id_horario_seq'::regclass),
  "clave_carrera" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "id_periodo" int4 NOT NULL,
  "id_grupo" int4 NOT NULL
)
;

-- ----------------------------
-- Records of horario
-- ----------------------------
INSERT INTO "public"."horario" VALUES (1, 'ISIC-1', 2, 2);
INSERT INTO "public"."horario" VALUES (3, 'ISIC-1', 3, 2);
INSERT INTO "public"."horario" VALUES (5, 'ISIC-1', 2, 3);
INSERT INTO "public"."horario" VALUES (6, 'ISIC-1', 2, 6);
INSERT INTO "public"."horario" VALUES (8, 'ISIC-1', 2, 7);

-- ----------------------------
-- Table structure for maestro
-- ----------------------------
DROP TABLE IF EXISTS "public"."maestro";
CREATE TABLE "public"."maestro" (
  "clave_maestro" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre_maestro" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "apellido_paterno_maestro" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "apellido_materno_maestro" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "correo_maestro" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "status_maestro" int4 NOT NULL DEFAULT 1,
  "username_maestro" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "password_maestro" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "id_rol" int4 NOT NULL
)
;

-- ----------------------------
-- Records of maestro
-- ----------------------------
INSERT INTO "public"."maestro" VALUES ('201923158', 'Alexis', 'Antonio', 'Martinez', 'alex@mail.com', 1, '201923158', '$2b$10$9cNjkOVkCC8ngnqnDh5wyOgDeQ6XGG3vna8onDkTzRLLaaRvSn0sG', 1);
INSERT INTO "public"."maestro" VALUES ('201923789', 'Angel', 'Rosas', 'Flores', 'angelR@mail.com', 1, '201923789', '$2b$10$f388WqTyy25KwbHcpdIkh.jR0IVEhU39F2n0kky1vbKfF.W1RUe4a', 3);
INSERT INTO "public"."maestro" VALUES ('201923321', 'Brandon', 'Lee', 'Flores', 'brandonLF@mail.com', 1, '201923321', '$2b$10$yzWdaJ4TYHjeGDUXMCE31OCAy4nYX22qRUYxs8UwgcPnBHS8l7Pla', 1);

-- ----------------------------
-- Table structure for maestro_horario
-- ----------------------------
DROP TABLE IF EXISTS "public"."maestro_horario";
CREATE TABLE "public"."maestro_horario" (
  "id" int4 NOT NULL DEFAULT nextval('maestro_horario_id_seq'::regclass),
  "id_horario" int4 NOT NULL,
  "clave_maestro" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of maestro_horario
-- ----------------------------
INSERT INTO "public"."maestro_horario" VALUES (2, 1, '201923789');
INSERT INTO "public"."maestro_horario" VALUES (3, 1, '201923321');
INSERT INTO "public"."maestro_horario" VALUES (4, 1, '201923158');
INSERT INTO "public"."maestro_horario" VALUES (5, 3, '201923158');
INSERT INTO "public"."maestro_horario" VALUES (6, 3, '201923789');

-- ----------------------------
-- Table structure for materia
-- ----------------------------
DROP TABLE IF EXISTS "public"."materia";
CREATE TABLE "public"."materia" (
  "clave_materia" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre_materia" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "creditos_materia" int4 NOT NULL,
  "status_materia" int4 NOT NULL DEFAULT 1
)
;

-- ----------------------------
-- Records of materia
-- ----------------------------
INSERT INTO "public"."materia" VALUES ('ACA-0907', 'TALLER DE ETICA', 4, 1);
INSERT INTO "public"."materia" VALUES ('ACA-0909', 'TALLER DE INVESTIGACION I', 4, 1);
INSERT INTO "public"."materia" VALUES ('ACC-0906', 'FUNDAMENTOS DE INVESTIGACION', 4, 1);
INSERT INTO "public"."materia" VALUES ('ACD-0908', 'DESARROLLO SUSTENTABLE', 5, 1);
INSERT INTO "public"."materia" VALUES ('ACF-0901', 'CALCULO DIFERENCIAL', 5, 1);
INSERT INTO "public"."materia" VALUES ('ACF-0902', 'CALCULO INTEGRAL', 5, 1);
INSERT INTO "public"."materia" VALUES ('ACF-0903', 'ALGEBRA LINEAL', 5, 1);
INSERT INTO "public"."materia" VALUES ('ACF-0904', 'CALCULO VECTORIAL', 5, 1);
INSERT INTO "public"."materia" VALUES ('ACF-0905', 'ECUACIONES DIFERENCIALES', 5, 1);
INSERT INTO "public"."materia" VALUES ('AEB-1055', 'PROGRAMACION WEB', 5, 1);
INSERT INTO "public"."materia" VALUES ('AEC-1008', 'CONTABILIDAD FINANCIERA', 4, 1);
INSERT INTO "public"."materia" VALUES ('AEC-1034', 'FUNDAMENTOS DE TELECOMUNICACIONES', 4, 1);
INSERT INTO "public"."materia" VALUES ('AEC-1061', 'SISTEMAS OPERATIVOS', 4, 1);
INSERT INTO "public"."materia" VALUES ('AED-1026', 'ESTRUCTURA DE DATOS', 5, 1);
INSERT INTO "public"."materia" VALUES ('AED-1286', 'PROGRAMACION ORIENTADA A OBJETOS', 5, 1);
INSERT INTO "public"."materia" VALUES ('AEF-1031', 'FUNDAMENTOS DE BASES DE DATOS', 5, 1);
INSERT INTO "public"."materia" VALUES ('AEF-1041', 'MATEMATICAS DISCRETAS', 5, 1);
INSERT INTO "public"."materia" VALUES ('AEF-1052', 'PROBABILIDAD Y ESTADISTICA', 5, 1);
INSERT INTO "public"."materia" VALUES ('AEF-1058', 'QUIMICA', 4, 1);
INSERT INTO "public"."materia" VALUES ('CLB-2001', 'INTERNET DE LAS COSAS', 5, 1);
INSERT INTO "public"."materia" VALUES ('CLB-2002', 'DESARROLLO DE APLICACIONES PARA DISPOSITIVOS MOVILES', 5, 1);
INSERT INTO "public"."materia" VALUES ('CLB-2003', 'CIBERSEGURIDAD', 5, 1);
INSERT INTO "public"."materia" VALUES ('SCA-1002', 'ADMINISTRACION DE REDES', 4, 1);
INSERT INTO "public"."materia" VALUES ('SCA-1025', 'TALLER DE BASE DE DATOS', 4, 1);
INSERT INTO "public"."materia" VALUES ('SCA-1026', 'TALLER DE SISTEMAS OPERATIVOS', 4, 1);
INSERT INTO "public"."materia" VALUES ('SCB-1001', 'ADMINISTRACION DE BASE DE DATOS', 5, 1);
INSERT INTO "public"."materia" VALUES ('SCC-1007', 'FUNDAMENTOS DE INGENIERIA DE SOFTWARE', 5, 1);
INSERT INTO "public"."materia" VALUES ('SCC-1010', 'GRAFICACION', 4, 1);
INSERT INTO "public"."materia" VALUES ('SCC-1012', 'INTELIGENCIA ARTIFICIAL', 4, 1);
INSERT INTO "public"."materia" VALUES ('SCC-1013', 'INVESTIGACION DE OPERACIONES', 4, 1);
INSERT INTO "public"."materia" VALUES ('SCC-1014', 'LENGUAJES DE INTERFAZ', 4, 1);
INSERT INTO "public"."materia" VALUES ('SCC-1017', 'METODOS NUMERICOS', 4, 1);
INSERT INTO "public"."materia" VALUES ('SCC-1019', 'PROGRAMACION LOGICA Y FUNCIONAL', 4, 1);
INSERT INTO "public"."materia" VALUES ('SCC-1023', 'SISTEMAS PROGRAMABLES', 4, 1);
INSERT INTO "public"."materia" VALUES ('SCD-1003', 'ARQUITECTURA DE COMPUTADORAS', 5, 1);
INSERT INTO "public"."materia" VALUES ('SCD-1004', 'CONMUTACION Y ENRUTAMIENTO DE REDES DE DATOS', 5, 1);
INSERT INTO "public"."materia" VALUES ('SCD-1008', 'FUNDAMENTOS DE PROGRAMACION', 5, 1);
INSERT INTO "public"."materia" VALUES ('SCD-1011', 'INGENIERIA DE SOFTWARE', 5, 1);
INSERT INTO "public"."materia" VALUES ('SCD-1015', 'LENGUAJES Y AUTOMATAS I', 5, 1);
INSERT INTO "public"."materia" VALUES ('SCD-1016', 'LENGUAJES Y AUTOMATAS II', 5, 1);
INSERT INTO "public"."materia" VALUES ('SCD-1018', 'PRINCIPIOS ELECTRICOS Y APLICACIONES DIGITALES', 5, 1);
INSERT INTO "public"."materia" VALUES ('SCD-1021', 'REDES DE COMPUTADORAS', 5, 1);
INSERT INTO "public"."materia" VALUES ('SCD-1022', 'SIMULACION', 5, 1);
INSERT INTO "public"."materia" VALUES ('SCD-1027', 'TOPICOS AVANZADOS DE PROGRAMACION', 5, 1);
INSERT INTO "public"."materia" VALUES ('SCF-1006', 'FISICA GENERAL', 5, 1);
INSERT INTO "public"."materia" VALUES ('SCG-1009', 'GESTION DE PROYECTOS DE SOFTWARE', 6, 1);
INSERT INTO "public"."materia" VALUES ('SCH-102', 'TALLER DE ADMINISTRACION', 4, 1);

-- ----------------------------
-- Table structure for materia_carga
-- ----------------------------
DROP TABLE IF EXISTS "public"."materia_carga";
CREATE TABLE "public"."materia_carga" (
  "id" int4 NOT NULL DEFAULT nextval('materia_carga_id_seq'::regclass),
  "clave_materia" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "id_carga_academica" int4 NOT NULL
)
;

-- ----------------------------
-- Records of materia_carga
-- ----------------------------
INSERT INTO "public"."materia_carga" VALUES (2, 'ACA-0907', 4);
INSERT INTO "public"."materia_carga" VALUES (3, 'ACA-0909', 6);
INSERT INTO "public"."materia_carga" VALUES (4, 'ACD-0908', 4);
INSERT INTO "public"."materia_carga" VALUES (5, 'AEB-1055', 13);
INSERT INTO "public"."materia_carga" VALUES (6, 'ACA-0907', 10);

-- ----------------------------
-- Table structure for materia_carrera
-- ----------------------------
DROP TABLE IF EXISTS "public"."materia_carrera";
CREATE TABLE "public"."materia_carrera" (
  "id" int4 NOT NULL DEFAULT nextval('materia_carrera_id_seq'::regclass),
  "clave_materia" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "clave_carrera" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of materia_carrera
-- ----------------------------
INSERT INTO "public"."materia_carrera" VALUES (2, 'ACA-0907', 'ADMON-3');
INSERT INTO "public"."materia_carrera" VALUES (3, 'ACA-0907', 'CIVIL-6');
INSERT INTO "public"."materia_carrera" VALUES (5, 'ACA-0907', 'ADMON-3');
INSERT INTO "public"."materia_carrera" VALUES (7, 'ACF-0902', 'ISIC-1');

-- ----------------------------
-- Table structure for materia_horario
-- ----------------------------
DROP TABLE IF EXISTS "public"."materia_horario";
CREATE TABLE "public"."materia_horario" (
  "id" int4 NOT NULL DEFAULT nextval('materia_horario_id_seq'::regclass),
  "id_horario" int4 NOT NULL,
  "clave_materia" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of materia_horario
-- ----------------------------
INSERT INTO "public"."materia_horario" VALUES (2, 1, 'ACA-0907');
INSERT INTO "public"."materia_horario" VALUES (3, 1, 'ACA-0907');
INSERT INTO "public"."materia_horario" VALUES (4, 1, 'ACA-0909');
INSERT INTO "public"."materia_horario" VALUES (6, 3, 'ACA-0909');
INSERT INTO "public"."materia_horario" VALUES (7, 3, 'ACC-0906');

-- ----------------------------
-- Table structure for periodo
-- ----------------------------
DROP TABLE IF EXISTS "public"."periodo";
CREATE TABLE "public"."periodo" (
  "id_periodo" int4 NOT NULL DEFAULT nextval('periodo_id_periodo_seq'::regclass),
  "numero_periodo" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "descripcion_periodo" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "status_periodo" int4 NOT NULL
)
;

-- ----------------------------
-- Records of periodo
-- ----------------------------
INSERT INTO "public"."periodo" VALUES ( '2022-1', 'Primer periodo 2022', 0);
INSERT INTO "public"."periodo" VALUES ( '2022-2', 'Segundo periodo 2022', 1);
INSERT INTO "public"."periodo" VALUES ( '2023-1', 'Primer periodo 2023', 0);
INSERT INTO "public"."periodo" VALUES ( '2023-2', 'Segundo periodo 2023', 0);
INSERT INTO "public"."periodo" VALUES ( '2024-1', 'Primer periodo 2024', 0);
INSERT INTO "public"."periodo" VALUES ( '2024-2', 'Segundo periodo 2024', 0);
INSERT INTO "public"."periodo" VALUES ( '2025-1', 'Primer periodo 2025', 0);
INSERT INTO "public"."periodo" VALUES ( '2025-2', 'Segundo periodo 2025', 0);

-- ----------------------------
-- Table structure for peticiones
-- ----------------------------
DROP TABLE IF EXISTS "public"."peticiones";
CREATE TABLE "public"."peticiones" (
  "idPeticion" int8 NOT NULL,
  "tipoPeticion" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "clave_carrera" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "matricula_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "statusPetcion" char(1) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of peticiones
-- ----------------------------

-- ----------------------------
-- Table structure for razon_baja
-- ----------------------------
DROP TABLE IF EXISTS "public"."razon_baja";
CREATE TABLE "public"."razon_baja" (
  "clave_razon_baja" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre_razon_baja" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "descripcion_razon_baja" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of razon_baja
-- ----------------------------
INSERT INTO "public"."razon_baja" VALUES ('RB1', 'BAJA VOLUNTARIA', 'BAJA DEL ALUMNO DE MANERA INDEFINIDA');
INSERT INTO "public"."razon_baja" VALUES ('RB2', 'BAJA DEFINITIVA', 'EL ALUMNO NO CUBRE LOS CREDITOS SUFICIENTES PARA CONTINUAR EN LA CARRERA');
INSERT INTO "public"."razon_baja" VALUES ('RB3', 'ENFERMEDAD', 'CONDICION DE SALUD DELICADA');
INSERT INTO "public"."razon_baja" VALUES ('RB4', 'PROBLEMAS ECONOMICOS', 'NO PUEDE CUBRIR LOS COSTOS EDUCATIVOS');
INSERT INTO "public"."razon_baja" VALUES ('RB5', 'SITUACIONES FAMILIARES', 'PRESENTA PROBLEMAS EN EL HOGAR');

-- ----------------------------
-- Table structure for razon_factura
-- ----------------------------
DROP TABLE IF EXISTS "public"."razon_factura";
CREATE TABLE "public"."razon_factura" (
  "clave_razon_factura" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre_razon_factura" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "status_razon_factura" int4 NOT NULL,
  "precio_unitario" float4 NOT NULL
)
;

-- ----------------------------
-- Records of razon_factura
-- ----------------------------
INSERT INTO "public"."razon_factura" VALUES ('RZF-000001', 'INSCRIPCION', 1, 2400);
INSERT INTO "public"."razon_factura" VALUES ('RZF-000002', 'REINSCRIPCION', 1, 2400);
INSERT INTO "public"."razon_factura" VALUES ('RZF-000003', 'CREDENCIAL', 1, 70);
INSERT INTO "public"."razon_factura" VALUES ('RZF-000004', 'RECURSE', 1, 90);
INSERT INTO "public"."razon_factura" VALUES ('RZF-000005', 'CONSTANCIA', 1, 120);
INSERT INTO "public"."razon_factura" VALUES ('RZF-000006', 'INSCRIPCION(DUAL)', 1, 1800);
INSERT INTO "public"."razon_factura" VALUES ('RZF-000007', 'SEGURO', 1, 105);
INSERT INTO "public"."razon_factura" VALUES ('RZF-000008', 'CURSO DE VERANO', 1, 80);

-- ----------------------------
-- Table structure for razonf_factura
-- ----------------------------
DROP TABLE IF EXISTS "public"."razonf_factura";
CREATE TABLE "public"."razonf_factura" (
  "id" int4 NOT NULL DEFAULT nextval('razonf_factura_id_seq'::regclass),
  "id_factura" int4 NOT NULL,
  "clave_razon_factura" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of razonf_factura
-- ----------------------------
INSERT INTO "public"."razonf_factura" VALUES (3, 3, 'RZF-000001');
INSERT INTO "public"."razonf_factura" VALUES (4, 7, 'RZF-000008');
INSERT INTO "public"."razonf_factura" VALUES (5, 8, 'RZF-000008');
INSERT INTO "public"."razonf_factura" VALUES (6, 4, 'RZF-000003');
INSERT INTO "public"."razonf_factura" VALUES (7, 11, 'RZF-000005');

-- ----------------------------
-- Table structure for renuncia_seguro
-- ----------------------------
DROP TABLE IF EXISTS "public"."renuncia_seguro";
CREATE TABLE "public"."renuncia_seguro" (
  "id_renuncia_seguro" int4 NOT NULL DEFAULT nextval('renuncia_seguro_id_renuncia_seguro_seq'::regclass),
  "fecha_renuncia_seguro" timestamptz(6) NOT NULL
)
;

-- ----------------------------
-- Records of renuncia_seguro
-- ----------------------------
INSERT INTO "public"."renuncia_seguro" VALUES (3, '2022-11-12 00:00:00-06');
INSERT INTO "public"."renuncia_seguro" VALUES (4, '2022-01-25 00:00:00-06');
INSERT INTO "public"."renuncia_seguro" VALUES (5, '2022-07-04 00:00:00-05');
INSERT INTO "public"."renuncia_seguro" VALUES (6, '2021-08-25 00:00:00-05');
INSERT INTO "public"."renuncia_seguro" VALUES (7, '2021-09-01 00:00:00-05');

-- ----------------------------
-- Table structure for renuncia_seguro_alumno
-- ----------------------------
DROP TABLE IF EXISTS "public"."renuncia_seguro_alumno";
CREATE TABLE "public"."renuncia_seguro_alumno" (
  "id" int4 NOT NULL DEFAULT nextval('renuncia_seguro_alumno_id_seq'::regclass),
  "id_renuncia_seguro" int4 NOT NULL,
  "matricula_alumno" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of renuncia_seguro_alumno
-- ----------------------------
INSERT INTO "public"."renuncia_seguro_alumno" VALUES (3, 3, '201923158');
INSERT INTO "public"."renuncia_seguro_alumno" VALUES (4, 7, '201923596');
INSERT INTO "public"."renuncia_seguro_alumno" VALUES (5, 5, '201823203');
INSERT INTO "public"."renuncia_seguro_alumno" VALUES (6, 4, '201923158');

-- ----------------------------
-- Table structure for rol
-- ----------------------------
DROP TABLE IF EXISTS "public"."rol";
CREATE TABLE "public"."rol" (
  "id_rol" int4 NOT NULL DEFAULT nextval('rol_id_rol_seq'::regclass),
  "nombre_rol" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "status_rol" int4 NOT NULL DEFAULT 1
)
;

-- ----------------------------
-- Records of rol
-- ----------------------------
INSERT INTO "public"."rol" VALUES (1, 'maestro', 1);
INSERT INTO "public"."rol" VALUES (2, 'empleado', 1);
INSERT INTO "public"."rol" VALUES (3, 'jefe division', 1);
INSERT INTO "public"."rol" VALUES (4, 'alumno', 1);
INSERT INTO "public"."rol" VALUES (5, 'jefa control', 1);

-- ----------------------------
-- Table structure for semestre
-- ----------------------------
DROP TABLE IF EXISTS "public"."semestre";
CREATE TABLE "public"."semestre" (
  "id_semestre" int4 NOT NULL DEFAULT nextval('semestre_id_semestre_seq'::regclass),
  "numero_semestre" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "status_semestre" int4 NOT NULL DEFAULT 1
)
;

-- ----------------------------
-- Records of semestre
-- ----------------------------
INSERT INTO "public"."semestre" VALUES (1, '1', 1);
INSERT INTO "public"."semestre" VALUES (2, '2', 1);
INSERT INTO "public"."semestre" VALUES (3, '3', 1);
INSERT INTO "public"."semestre" VALUES (4, '4', 1);
INSERT INTO "public"."semestre" VALUES (5, '5', 1);
INSERT INTO "public"."semestre" VALUES (6, '6', 1);
INSERT INTO "public"."semestre" VALUES (7, '7', 1);
INSERT INTO "public"."semestre" VALUES (8, '8', 1);
INSERT INTO "public"."semestre" VALUES (9, '9', 1);
INSERT INTO "public"."semestre" VALUES (10, '10', 1);
INSERT INTO "public"."semestre" VALUES (11, '11', 1);
INSERT INTO "public"."semestre" VALUES (12, '12', 1);

-- ----------------------------
-- Table structure for tipo_carga
-- ----------------------------
DROP TABLE IF EXISTS "public"."tipo_carga";
CREATE TABLE "public"."tipo_carga" (
  "clave_tipo_carga" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre_tipo_carga" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "descripcion_carga" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "status_tipo_carga" int4 NOT NULL
)
;

-- ----------------------------
-- Records of tipo_carga
-- ----------------------------
INSERT INTO "public"."tipo_carga" VALUES ('INS-1', 'INSCRIPCION', 'ES EL PRIMER PASO PARA SER ESTUDIANTE', 1);
INSERT INTO "public"."tipo_carga" VALUES ('RES-2', 'REINSCRIPCION', 'CUANDO TE INTEGRAS A UN NUEVO SEMESTRE', 1);
INSERT INTO "public"."tipo_carga" VALUES ('CUR-3', 'CURSO DE VERANO', 'TIEMPO EXTRA PARA TOMAR UNA MATERIA', 1);

-- ----------------------------
-- Table structure for tipo_constancia
-- ----------------------------
DROP TABLE IF EXISTS "public"."tipo_constancia";
CREATE TABLE "public"."tipo_constancia" (
  "id_tipo_constancia" int4 NOT NULL DEFAULT nextval('tipo_constancia_id_tipo_constancia_seq'::regclass),
  "nombre_tipo_constancia" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "descripcion_tipo_constancia" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of tipo_constancia
-- ----------------------------
INSERT INTO "public"."tipo_constancia" VALUES (1, 'ESTUDIOS', 'CONSTANCIA DE ESTUDIOS');
INSERT INTO "public"."tipo_constancia" VALUES (2, 'SEMESTRE', 'CONSTANCIA ENTREGADA CADA SEMESTRE');
INSERT INTO "public"."tipo_constancia" VALUES (3, 'MATERIAS CURSANDO', 'AVALA MATERIAS CURSANDO EN EL SEMESTRE');
INSERT INTO "public"."tipo_constancia" VALUES (4, 'BUENA CONDUCTA', 'CONSTANCIA DE BUENA CONDUCTA');
INSERT INTO "public"."tipo_constancia" VALUES (5, 'EGRESADO SIMPLE', 'ALUMNO EGRESADO');

-- ----------------------------
-- Table structure for tipo_evaluacion
-- ----------------------------
DROP TABLE IF EXISTS "public"."tipo_evaluacion";
CREATE TABLE "public"."tipo_evaluacion" (
  "id_tipo_evaluacion" int4 NOT NULL DEFAULT nextval('tipo_evaluacion_id_tipo_evaluacion_seq'::regclass),
  "nombre_tipo_evaluacion" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "descripcion_tipo_evaluacion" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of tipo_evaluacion
-- ----------------------------
INSERT INTO "public"."tipo_evaluacion" VALUES (1, 'ORDINARIO', 'PRIMERA OPORTUNIDAD PARA PASAR UNA UNIDAD');
INSERT INTO "public"."tipo_evaluacion" VALUES (2, 'RECUPERACION', 'SEGUNDA OPORTUNIDAD PARA PASAR UNA UNIDAD');

-- ----------------------------
-- Table structure for usuario_admision
-- ----------------------------
DROP TABLE IF EXISTS "public"."usuario_admision";
CREATE TABLE "public"."usuario_admision" (
  "id_usAs" int8 NOT NULL,
  "usuari_usAs" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "pasword_usAs" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "numero_ficha_admision" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of usuario_admision
-- ----------------------------
INSERT INTO "public"."usuario_admision" VALUES (1, '201923178', '1234', '201923178');

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."acta_evaluacion_id_seq"
OWNED BY "public"."acta_evaluacion"."id";
SELECT setval('"public"."acta_evaluacion_id_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."alumno_acta_id_seq"
OWNED BY "public"."alumno_acta"."id";
SELECT setval('"public"."alumno_acta_id_seq"', 5, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."baja_alumno_id_seq"
OWNED BY "public"."baja_alumno"."id";
SELECT setval('"public"."baja_alumno_id_seq"', 4, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."baja_razon_baja_id_seq"
OWNED BY "public"."baja_razon_baja"."id";
SELECT setval('"public"."baja_razon_baja_id_seq"', 5, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."baja_temp_def_id_baja_seq"
OWNED BY "public"."baja_temp_def"."id_baja";
SELECT setval('"public"."baja_temp_def_id_baja_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."carga_academica_id_carga_academica_seq"
OWNED BY "public"."carga_academica"."id_carga_academica";
SELECT setval('"public"."carga_academica_id_carga_academica_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."constancia_alumno_id_seq"
OWNED BY "public"."constancia_alumno"."id";
SELECT setval('"public"."constancia_alumno_id_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."curso_carga_id_seq"
OWNED BY "public"."curso_carga"."id";
SELECT setval('"public"."curso_carga_id_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."curso_id_curso_seq"
OWNED BY "public"."curso"."id_curso";
SELECT setval('"public"."curso_id_curso_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."empleado_id_empleado_seq"
OWNED BY "public"."empleado"."id_empleado";
SELECT setval('"public"."empleado_id_empleado_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."factura_id_factura_seq"
OWNED BY "public"."factura"."id_factura";
SELECT setval('"public"."factura_id_factura_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."grupo_alumno_id_seq"
OWNED BY "public"."grupo_alumno"."id";
SELECT setval('"public"."grupo_alumno_id_seq"', 8, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."grupo_id_grupo_seq"
OWNED BY "public"."grupo"."id_grupo";
SELECT setval('"public"."grupo_id_grupo_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."horario_id_horario_seq"
OWNED BY "public"."horario"."id_horario";
SELECT setval('"public"."horario_id_horario_seq"', 9, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."maestro_horario_id_seq"
OWNED BY "public"."maestro_horario"."id";
SELECT setval('"public"."maestro_horario_id_seq"', 7, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."materia_carga_id_seq"
OWNED BY "public"."materia_carga"."id";
SELECT setval('"public"."materia_carga_id_seq"', 7, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."materia_carrera_id_seq"
OWNED BY "public"."materia_carrera"."id";
SELECT setval('"public"."materia_carrera_id_seq"', 8, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."materia_horario_id_seq"
OWNED BY "public"."materia_horario"."id";
SELECT setval('"public"."materia_horario_id_seq"', 8, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."periodo_id_periodo_seq"
OWNED BY "public"."periodo"."id_periodo";
SELECT setval('"public"."periodo_id_periodo_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."razonf_factura_id_seq"
OWNED BY "public"."razonf_factura"."id";
SELECT setval('"public"."razonf_factura_id_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."renuncia_seguro_alumno_id_seq"
OWNED BY "public"."renuncia_seguro_alumno"."id";
SELECT setval('"public"."renuncia_seguro_alumno_id_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."renuncia_seguro_id_renuncia_seguro_seq"
OWNED BY "public"."renuncia_seguro"."id_renuncia_seguro";
SELECT setval('"public"."renuncia_seguro_id_renuncia_seguro_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."rol_id_rol_seq"
OWNED BY "public"."rol"."id_rol";
SELECT setval('"public"."rol_id_rol_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."semestre_id_semestre_seq"
OWNED BY "public"."semestre"."id_semestre";
SELECT setval('"public"."semestre_id_semestre_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tipo_constancia_id_tipo_constancia_seq"
OWNED BY "public"."tipo_constancia"."id_tipo_constancia";
SELECT setval('"public"."tipo_constancia_id_tipo_constancia_seq"', 3, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tipo_evaluacion_id_tipo_evaluacion_seq"
OWNED BY "public"."tipo_evaluacion"."id_tipo_evaluacion";
SELECT setval('"public"."tipo_evaluacion_id_tipo_evaluacion_seq"', 3, false);

-- ----------------------------
-- Primary Key structure for table SequelizeMeta
-- ----------------------------
ALTER TABLE "public"."SequelizeMeta" ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY ("name");

-- ----------------------------
-- Primary Key structure for table acta_calificaciones
-- ----------------------------
ALTER TABLE "public"."acta_calificaciones" ADD CONSTRAINT "acta_calificaciones_pkey" PRIMARY KEY ("folio_acta");

-- ----------------------------
-- Primary Key structure for table acta_evaluacion
-- ----------------------------
ALTER TABLE "public"."acta_evaluacion" ADD CONSTRAINT "acta_evaluacion_pkey" PRIMARY KEY ("id", "folio_acta", "id_tipo_evaluacion");

-- ----------------------------
-- Uniques structure for table admision
-- ----------------------------
ALTER TABLE "public"."admision" ADD CONSTRAINT "admision_telefono_admision_key" UNIQUE ("telefono_admision");
ALTER TABLE "public"."admision" ADD CONSTRAINT "admision_telefono_emegencia_admision_key" UNIQUE ("telefono_emegencia_admision");
ALTER TABLE "public"."admision" ADD CONSTRAINT "admision_correo_admision_key" UNIQUE ("correo_admision");
ALTER TABLE "public"."admision" ADD CONSTRAINT "admision_curp_admision_key" UNIQUE ("curp_admision");

-- ----------------------------
-- Primary Key structure for table admision
-- ----------------------------
ALTER TABLE "public"."admision" ADD CONSTRAINT "admision_pkey" PRIMARY KEY ("numero_ficha_admision");

-- ----------------------------
-- Uniques structure for table alumno
-- ----------------------------
ALTER TABLE "public"."alumno" ADD CONSTRAINT "alumno_telefono_alumno_key" UNIQUE ("telefono_alumno");
ALTER TABLE "public"."alumno" ADD CONSTRAINT "alumno_correo_alumno_key" UNIQUE ("correo_alumno");
ALTER TABLE "public"."alumno" ADD CONSTRAINT "alumno_curp_alumno_key" UNIQUE ("curp_alumno");
ALTER TABLE "public"."alumno" ADD CONSTRAINT "alumno_username_alumno_key" UNIQUE ("username_alumno");

-- ----------------------------
-- Primary Key structure for table alumno
-- ----------------------------
ALTER TABLE "public"."alumno" ADD CONSTRAINT "alumno_pkey" PRIMARY KEY ("matricula_alumno");

-- ----------------------------
-- Primary Key structure for table alumno_acta
-- ----------------------------
ALTER TABLE "public"."alumno_acta" ADD CONSTRAINT "alumno_acta_pkey" PRIMARY KEY ("id", "folio_acta", "matricula_alumno");

-- ----------------------------
-- Primary Key structure for table baja_alumno
-- ----------------------------
ALTER TABLE "public"."baja_alumno" ADD CONSTRAINT "baja_alumno_pkey" PRIMARY KEY ("id", "id_baja", "matricula_alumno");

-- ----------------------------
-- Primary Key structure for table baja_razon_baja
-- ----------------------------
ALTER TABLE "public"."baja_razon_baja" ADD CONSTRAINT "baja_razon_baja_pkey" PRIMARY KEY ("id", "id_baja", "clave_razon_baja");

-- ----------------------------
-- Primary Key structure for table baja_temp_def
-- ----------------------------
ALTER TABLE "public"."baja_temp_def" ADD CONSTRAINT "baja_temp_def_pkey" PRIMARY KEY ("id_baja");

-- ----------------------------
-- Primary Key structure for table carga_academica
-- ----------------------------
ALTER TABLE "public"."carga_academica" ADD CONSTRAINT "carga_academica_pkey" PRIMARY KEY ("id_carga_academica");

-- ----------------------------
-- Primary Key structure for table carrera
-- ----------------------------
ALTER TABLE "public"."carrera" ADD CONSTRAINT "carrera_pkey" PRIMARY KEY ("clave_carrera");

-- ----------------------------
-- Primary Key structure for table constancia_alumno
-- ----------------------------
ALTER TABLE "public"."constancia_alumno" ADD CONSTRAINT "constancia_alumno_pkey" PRIMARY KEY ("id", "clave_constancia", "matricula_alumno");

-- ----------------------------
-- Primary Key structure for table contsancia_table
-- ----------------------------
ALTER TABLE "public"."contsancia_table" ADD CONSTRAINT "contsancia_table_pkey" PRIMARY KEY ("clave_constancia");

-- ----------------------------
-- Primary Key structure for table credencial
-- ----------------------------
ALTER TABLE "public"."credencial" ADD CONSTRAINT "Credenciales_pkey" PRIMARY KEY ("idCredencial");

-- ----------------------------
-- Primary Key structure for table curso
-- ----------------------------
ALTER TABLE "public"."curso" ADD CONSTRAINT "curso_pkey" PRIMARY KEY ("id_curso");

-- ----------------------------
-- Primary Key structure for table curso_carga
-- ----------------------------
ALTER TABLE "public"."curso_carga" ADD CONSTRAINT "curso_carga_pkey" PRIMARY KEY ("id", "id_carga_academica", "id_curso");

-- ----------------------------
-- Uniques structure for table empleado
-- ----------------------------
ALTER TABLE "public"."empleado" ADD CONSTRAINT "empleado_telefono_empleado_key" UNIQUE ("telefono_empleado");
ALTER TABLE "public"."empleado" ADD CONSTRAINT "empleado_correo_empleado_key" UNIQUE ("correo_empleado");
ALTER TABLE "public"."empleado" ADD CONSTRAINT "empleado_username_empleado_key" UNIQUE ("username_empleado");

-- ----------------------------
-- Primary Key structure for table empleado
-- ----------------------------
ALTER TABLE "public"."empleado" ADD CONSTRAINT "empleado_pkey" PRIMARY KEY ("id_empleado");

-- ----------------------------
-- Uniques structure for table factura
-- ----------------------------
ALTER TABLE "public"."factura" ADD CONSTRAINT "factura_monto_total_factura_key" UNIQUE ("monto_total_factura");

-- ----------------------------
-- Primary Key structure for table factura
-- ----------------------------
ALTER TABLE "public"."factura" ADD CONSTRAINT "factura_pkey" PRIMARY KEY ("id_factura");

-- ----------------------------
-- Primary Key structure for table grupo
-- ----------------------------
ALTER TABLE "public"."grupo" ADD CONSTRAINT "grupo_pkey" PRIMARY KEY ("id_grupo");

-- ----------------------------
-- Primary Key structure for table grupo_alumno
-- ----------------------------
ALTER TABLE "public"."grupo_alumno" ADD CONSTRAINT "grupo_alumno_pkey" PRIMARY KEY ("id", "id_grupo", "matricula_alumno");

-- ----------------------------
-- Primary Key structure for table horario
-- ----------------------------
ALTER TABLE "public"."horario" ADD CONSTRAINT "horario_pkey" PRIMARY KEY ("id_horario");

-- ----------------------------
-- Uniques structure for table maestro
-- ----------------------------
ALTER TABLE "public"."maestro" ADD CONSTRAINT "maestro_correo_maestro_key" UNIQUE ("correo_maestro");
ALTER TABLE "public"."maestro" ADD CONSTRAINT "maestro_username_maestro_key" UNIQUE ("username_maestro");

-- ----------------------------
-- Primary Key structure for table maestro
-- ----------------------------
ALTER TABLE "public"."maestro" ADD CONSTRAINT "maestro_pkey" PRIMARY KEY ("clave_maestro");

-- ----------------------------
-- Primary Key structure for table maestro_horario
-- ----------------------------
ALTER TABLE "public"."maestro_horario" ADD CONSTRAINT "maestro_horario_pkey" PRIMARY KEY ("id", "id_horario", "clave_maestro");

-- ----------------------------
-- Primary Key structure for table materia
-- ----------------------------
ALTER TABLE "public"."materia" ADD CONSTRAINT "materia_pkey" PRIMARY KEY ("clave_materia");

-- ----------------------------
-- Primary Key structure for table materia_carga
-- ----------------------------
ALTER TABLE "public"."materia_carga" ADD CONSTRAINT "materia_carga_pkey" PRIMARY KEY ("id", "clave_materia", "id_carga_academica");

-- ----------------------------
-- Primary Key structure for table materia_carrera
-- ----------------------------
ALTER TABLE "public"."materia_carrera" ADD CONSTRAINT "materia_carrera_pkey" PRIMARY KEY ("id", "clave_materia", "clave_carrera");

-- ----------------------------
-- Primary Key structure for table materia_horario
-- ----------------------------
ALTER TABLE "public"."materia_horario" ADD CONSTRAINT "materia_horario_pkey" PRIMARY KEY ("id", "id_horario", "clave_materia");

-- ----------------------------
-- Primary Key structure for table periodo
-- ----------------------------
ALTER TABLE "public"."periodo" ADD CONSTRAINT "periodo_pkey" PRIMARY KEY ("id_periodo");

-- ----------------------------
-- Primary Key structure for table peticiones
-- ----------------------------
ALTER TABLE "public"."peticiones" ADD CONSTRAINT "peticiones_pkey" PRIMARY KEY ("idPeticion");

-- ----------------------------
-- Primary Key structure for table razon_baja
-- ----------------------------
ALTER TABLE "public"."razon_baja" ADD CONSTRAINT "razon_baja_pkey" PRIMARY KEY ("clave_razon_baja");

-- ----------------------------
-- Primary Key structure for table razon_factura
-- ----------------------------
ALTER TABLE "public"."razon_factura" ADD CONSTRAINT "razon_factura_pkey" PRIMARY KEY ("clave_razon_factura");

-- ----------------------------
-- Primary Key structure for table razonf_factura
-- ----------------------------
ALTER TABLE "public"."razonf_factura" ADD CONSTRAINT "razonf_factura_pkey" PRIMARY KEY ("id", "id_factura", "clave_razon_factura");

-- ----------------------------
-- Primary Key structure for table renuncia_seguro
-- ----------------------------
ALTER TABLE "public"."renuncia_seguro" ADD CONSTRAINT "renuncia_seguro_pkey" PRIMARY KEY ("id_renuncia_seguro");

-- ----------------------------
-- Primary Key structure for table renuncia_seguro_alumno
-- ----------------------------
ALTER TABLE "public"."renuncia_seguro_alumno" ADD CONSTRAINT "renuncia_seguro_alumno_pkey" PRIMARY KEY ("id", "id_renuncia_seguro", "matricula_alumno");

-- ----------------------------
-- Primary Key structure for table rol
-- ----------------------------
ALTER TABLE "public"."rol" ADD CONSTRAINT "rol_pkey" PRIMARY KEY ("id_rol");

-- ----------------------------
-- Primary Key structure for table semestre
-- ----------------------------
ALTER TABLE "public"."semestre" ADD CONSTRAINT "semestre_pkey" PRIMARY KEY ("id_semestre");

-- ----------------------------
-- Primary Key structure for table tipo_carga
-- ----------------------------
ALTER TABLE "public"."tipo_carga" ADD CONSTRAINT "tipo_carga_pkey" PRIMARY KEY ("clave_tipo_carga");

-- ----------------------------
-- Primary Key structure for table tipo_constancia
-- ----------------------------
ALTER TABLE "public"."tipo_constancia" ADD CONSTRAINT "tipo_constancia_pkey" PRIMARY KEY ("id_tipo_constancia");

-- ----------------------------
-- Primary Key structure for table tipo_evaluacion
-- ----------------------------
ALTER TABLE "public"."tipo_evaluacion" ADD CONSTRAINT "tipo_evaluacion_pkey" PRIMARY KEY ("id_tipo_evaluacion");

-- ----------------------------
-- Primary Key structure for table usuario_admision
-- ----------------------------
ALTER TABLE "public"."usuario_admision" ADD CONSTRAINT "usuario_admision_pkey" PRIMARY KEY ("id_usAs");

-- ----------------------------
-- Foreign Keys structure for table acta_evaluacion
-- ----------------------------
ALTER TABLE "public"."acta_evaluacion" ADD CONSTRAINT "acta_evaluacion_folio_acta_fkey" FOREIGN KEY ("folio_acta") REFERENCES "public"."acta_calificaciones" ("folio_acta") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."acta_evaluacion" ADD CONSTRAINT "acta_evaluacion_id_tipo_evaluacion_fkey" FOREIGN KEY ("id_tipo_evaluacion") REFERENCES "public"."tipo_evaluacion" ("id_tipo_evaluacion") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table admision
-- ----------------------------
ALTER TABLE "public"."admision" ADD CONSTRAINT "admision_clave_carrera_fkey" FOREIGN KEY ("clave_carrera") REFERENCES "public"."carrera" ("clave_carrera") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table alumno
-- ----------------------------
ALTER TABLE "public"."alumno" ADD CONSTRAINT "alumno_clave_carrera_fkey" FOREIGN KEY ("clave_carrera") REFERENCES "public"."carrera" ("clave_carrera") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."alumno" ADD CONSTRAINT "alumno_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "public"."rol" ("id_rol") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."alumno" ADD CONSTRAINT "alumno_id_semestre_fkey" FOREIGN KEY ("id_semestre") REFERENCES "public"."semestre" ("id_semestre") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table alumno_acta
-- ----------------------------
ALTER TABLE "public"."alumno_acta" ADD CONSTRAINT "alumno_acta_folio_acta_fkey" FOREIGN KEY ("folio_acta") REFERENCES "public"."acta_calificaciones" ("folio_acta") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."alumno_acta" ADD CONSTRAINT "alumno_acta_matricula_alumno_fkey" FOREIGN KEY ("matricula_alumno") REFERENCES "public"."alumno" ("matricula_alumno") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table baja_alumno
-- ----------------------------
ALTER TABLE "public"."baja_alumno" ADD CONSTRAINT "baja_alumno_id_baja_fkey" FOREIGN KEY ("id_baja") REFERENCES "public"."baja_temp_def" ("id_baja") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."baja_alumno" ADD CONSTRAINT "baja_alumno_matricula_alumno_fkey" FOREIGN KEY ("matricula_alumno") REFERENCES "public"."alumno" ("matricula_alumno") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table baja_razon_baja
-- ----------------------------
ALTER TABLE "public"."baja_razon_baja" ADD CONSTRAINT "baja_razon_baja_clave_razon_baja_fkey" FOREIGN KEY ("clave_razon_baja") REFERENCES "public"."razon_baja" ("clave_razon_baja") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."baja_razon_baja" ADD CONSTRAINT "baja_razon_baja_id_baja_fkey" FOREIGN KEY ("id_baja") REFERENCES "public"."baja_temp_def" ("id_baja") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table carga_academica
-- ----------------------------
ALTER TABLE "public"."carga_academica" ADD CONSTRAINT "carga_academica_clave_tipo_carga_fkey" FOREIGN KEY ("clave_tipo_carga") REFERENCES "public"."tipo_carga" ("clave_tipo_carga") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."carga_academica" ADD CONSTRAINT "carga_academica_id_periodo_fkey" FOREIGN KEY ("id_periodo") REFERENCES "public"."periodo" ("id_periodo") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."carga_academica" ADD CONSTRAINT "carga_academica_matricula_alumno_fkey" FOREIGN KEY ("matricula_alumno") REFERENCES "public"."alumno" ("matricula_alumno") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table constancia_alumno
-- ----------------------------
ALTER TABLE "public"."constancia_alumno" ADD CONSTRAINT "constancia_alumno_clave_constancia_fkey" FOREIGN KEY ("clave_constancia") REFERENCES "public"."contsancia_table" ("clave_constancia") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."constancia_alumno" ADD CONSTRAINT "constancia_alumno_matricula_alumno_fkey" FOREIGN KEY ("matricula_alumno") REFERENCES "public"."alumno" ("matricula_alumno") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table contsancia_table
-- ----------------------------
ALTER TABLE "public"."contsancia_table" ADD CONSTRAINT "id_tipo_constancia" FOREIGN KEY ("id_tipo_constancia") REFERENCES "public"."tipo_constancia" ("id_tipo_constancia") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table credencial
-- ----------------------------
ALTER TABLE "public"."credencial" ADD CONSTRAINT "matricula_alumno" FOREIGN KEY ("matricula_alumno") REFERENCES "public"."alumno" ("matricula_alumno") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table curso_carga
-- ----------------------------
ALTER TABLE "public"."curso_carga" ADD CONSTRAINT "curso_carga_id_carga_academica_fkey" FOREIGN KEY ("id_carga_academica") REFERENCES "public"."carga_academica" ("id_carga_academica") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."curso_carga" ADD CONSTRAINT "curso_carga_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "public"."curso" ("id_curso") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table empleado
-- ----------------------------
ALTER TABLE "public"."empleado" ADD CONSTRAINT "empleado_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "public"."rol" ("id_rol") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table grupo_alumno
-- ----------------------------
ALTER TABLE "public"."grupo_alumno" ADD CONSTRAINT "grupo_alumno_id_grupo_fkey" FOREIGN KEY ("id_grupo") REFERENCES "public"."grupo" ("id_grupo") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."grupo_alumno" ADD CONSTRAINT "grupo_alumno_matricula_alumno_fkey" FOREIGN KEY ("matricula_alumno") REFERENCES "public"."alumno" ("matricula_alumno") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table horario
-- ----------------------------
ALTER TABLE "public"."horario" ADD CONSTRAINT "horario_clave_carrera_fkey" FOREIGN KEY ("clave_carrera") REFERENCES "public"."carrera" ("clave_carrera") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."horario" ADD CONSTRAINT "horario_id_grupo_fkey" FOREIGN KEY ("id_grupo") REFERENCES "public"."grupo" ("id_grupo") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."horario" ADD CONSTRAINT "horario_id_periodo_fkey" FOREIGN KEY ("id_periodo") REFERENCES "public"."periodo" ("id_periodo") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table maestro
-- ----------------------------
ALTER TABLE "public"."maestro" ADD CONSTRAINT "maestro_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "public"."rol" ("id_rol") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table maestro_horario
-- ----------------------------
ALTER TABLE "public"."maestro_horario" ADD CONSTRAINT "maestro_horario_clave_maestro_fkey" FOREIGN KEY ("clave_maestro") REFERENCES "public"."maestro" ("clave_maestro") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."maestro_horario" ADD CONSTRAINT "maestro_horario_id_horario_fkey" FOREIGN KEY ("id_horario") REFERENCES "public"."horario" ("id_horario") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table materia_carga
-- ----------------------------
ALTER TABLE "public"."materia_carga" ADD CONSTRAINT "materia_carga_clave_materia_fkey" FOREIGN KEY ("clave_materia") REFERENCES "public"."materia" ("clave_materia") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."materia_carga" ADD CONSTRAINT "materia_carga_id_carga_academica_fkey" FOREIGN KEY ("id_carga_academica") REFERENCES "public"."carga_academica" ("id_carga_academica") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table materia_carrera
-- ----------------------------
ALTER TABLE "public"."materia_carrera" ADD CONSTRAINT "materia_carrera_clave_carrera_fkey" FOREIGN KEY ("clave_carrera") REFERENCES "public"."carrera" ("clave_carrera") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."materia_carrera" ADD CONSTRAINT "materia_carrera_clave_materia_fkey" FOREIGN KEY ("clave_materia") REFERENCES "public"."materia" ("clave_materia") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table materia_horario
-- ----------------------------
ALTER TABLE "public"."materia_horario" ADD CONSTRAINT "materia_horario_clave_materia_fkey" FOREIGN KEY ("clave_materia") REFERENCES "public"."materia" ("clave_materia") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."materia_horario" ADD CONSTRAINT "materia_horario_id_horario_fkey" FOREIGN KEY ("id_horario") REFERENCES "public"."horario" ("id_horario") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table peticiones
-- ----------------------------
ALTER TABLE "public"."peticiones" ADD CONSTRAINT "clave_carrera" FOREIGN KEY ("clave_carrera") REFERENCES "public"."carrera" ("clave_carrera") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."peticiones" ADD CONSTRAINT "matricula_alumno" FOREIGN KEY ("matricula_alumno") REFERENCES "public"."alumno" ("matricula_alumno") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table razonf_factura
-- ----------------------------
ALTER TABLE "public"."razonf_factura" ADD CONSTRAINT "razonf_factura_clave_razon_factura_fkey" FOREIGN KEY ("clave_razon_factura") REFERENCES "public"."razon_factura" ("clave_razon_factura") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."razonf_factura" ADD CONSTRAINT "razonf_factura_id_factura_fkey" FOREIGN KEY ("id_factura") REFERENCES "public"."factura" ("id_factura") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table renuncia_seguro_alumno
-- ----------------------------
ALTER TABLE "public"."renuncia_seguro_alumno" ADD CONSTRAINT "renuncia_seguro_alumno_id_renuncia_seguro_fkey" FOREIGN KEY ("id_renuncia_seguro") REFERENCES "public"."renuncia_seguro" ("id_renuncia_seguro") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "public"."renuncia_seguro_alumno" ADD CONSTRAINT "renuncia_seguro_alumno_matricula_alumno_fkey" FOREIGN KEY ("matricula_alumno") REFERENCES "public"."alumno" ("matricula_alumno") ON DELETE SET NULL ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table usuario_admision
-- ----------------------------
ALTER TABLE "public"."usuario_admision" ADD CONSTRAINT "numero_ficha_admision" FOREIGN KEY ("numero_ficha_admision") REFERENCES "public"."admision" ("numero_ficha_admision") ON DELETE SET NULL ON UPDATE NO ACTION;
