const { Router } = require("express");
const conn = require("../db/conn.js");
const route = Router();
// interfas para manejar el modelo 'proyecto'
const Proyecto = () => conn("proyectos");

route.get("/proyectos", async (req, res) => {
  let todos = await Proyecto();

  return res.json(todos);
});

route.post("/proyectos", async (req, res) => {
  let todos = await Proyecto().where({ id: req.params.id });

  return todos.length != 0
    ? res.json(todos)
    : res.status(404).json({ message: "registro no entontrado" });
});

route.get("/proyectos/:id", async (req, res) => {
  let registo = await Proyecto().where({ id: req.params.id });

  return registo.length != 0
    ? res.json(registo)
    : res.status(404).json({ message: "registro no entontrado" });
});

route.put("/proyectos/:id", async (req, res) => {
  let isUpdated = await Proyecto().where({ id: req.params.id });

  return isUpdated.length != 0
    ? res.json(isUpdated)
    : res.status(404).json({ message: "registro no entontrado" });
});

route.delete("/proyectos/:id", async (req, res) => {
  let isDeleted = await Proyecto().del().where({ id: req.params.id }).del();

  console.log(isDeleted);
  return res.status(200);
});

module.exports = route;
