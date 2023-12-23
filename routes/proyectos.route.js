const { Router } = require("express");
const conn = require("../db/conn.js");
const route = Router();
const { validationResult } = require("express-validator");
const { reportCheck } = require("../request_v/validaciones.js");

// interfas para manejar el modelo 'proyecto'
const Proyecto = () => conn("proyectos");

route.get("/proyectos", async (req, res) => {
  let todos = await Proyecto();

  return res.json(todos);
});

route.post("/proyectos", reportCheck(), async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  let data = {
    investigador_id: req.body.investigador_id,
    nombre: req.body.nombre,
    codigo: req.body.codigo,
    facultad: req.body.facultad,
    instituto: req.body.instituto,
    linea_investicacion: req.body.linea_investicacion,
    horas_semanales_contratadas: req.body.horas_semanales_contratadas,
    fecha_inicio: req.body.fecha_inicio,
    duracion_semestres: req.body.duracion_semestres,
    fecha_final: req.body.fecha_final,
    intitutos_participantes: req.body.intitutos_participantes ?? null,
    entidad_financiera_n: req.body.entidad_financiera_n,
    entidad_financiera_i: req.body.entidad_financiera_i,
  };

  try {
    let insert = await Proyecto().insert(data);

    return res.json({ status: "success", message: "registrado con exito!" });
  } catch (error) {
    return resres.status(400).json({ error: error });
  }
});

route.get("/proyectos/:id", async (req, res) => {
  let registo = await Proyecto().where({ id: req.params.id });

  return registo.length != 0
    ? res.json(registo)
    : res
      .status(404)
      .json({ status: "Not Found", message: "registro no entontrado" });
});

route.put("/proyectos/:id", reportCheck(), async (req, res) => {
  let data = {
    nombre: req.body.nombre,
    codigo: req.body.codigo,
    facultad: req.body.facultad,
    instituto: req.body.instituto,
    linea_investicacion: req.body.linea_investicacion,
    horas_semanales_contratadas: req.body.horas_semanales_contratadas,
    fecha_inicio: req.body.fecha_inicio,
    duracion_semestres: req.body.duracion_semestres,
    fecha_final: req.body.fecha_final,
    intitutos_participantes: req.body.intitutos_participantes ?? null,
    entidad_financiera_n: req.body.entidad_financiera_n,
    entidad_financiera_i: req.body.entidad_financiera_i,
  };

  try {
    let isUpdated = await Proyecto().update(data).where({ id: req.params.id });
    console.log(isUpdated);

    return res.json({ status: "success", message: "registro actualizado" });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
});

route.delete("/proyectos/:id", async (req, res) => {
  try {
    let isDeleted = await Proyecto().where({ id: req.params.id }).del();
    console.log(isDeleted);

    return res.json({ status: "success", message: "registro eliminado" });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
});

module.exports = route;
