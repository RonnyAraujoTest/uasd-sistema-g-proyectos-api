const { Router } = require("express");
const conn = require("../db/conn.js");
const route = Router();
const { validationResult } = require("express-validator");
const { searcherCheck } = require("../request_v/validaciones.js");

// interfas para manejar el modelo 'investigadores'
const Investigador = () => conn("investigadores");

route.get("/investigadores", async (req, res) => {
    let todos = await Investigador();

    return res.json(todos);
});

route.post("/investigadores", searcherCheck(), async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    let data = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cedula: req.body.cedula,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        email: req.body.email
    };

    try {
        let insert = await Investigador().insert(data);

        return res.json({ status: "success", message: "registrado con exito!" });
    } catch (error) {
        return resres.status(400).json({ error: error });
    }
});

route.get("/investigadores/:id", async (req, res) => {
    let registo = await Investigador().where({ id: req.params.id });

    return registo.length != 0
        ? res.json(registo)
        : res
            .status(404)
            .json({ status: "Not Found", message: "registro no entontrado" });
});

route.put("/investigadores/:id", searcherCheck(), async (req, res) => {
    let data = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cedula: req.body.cedula,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        email: req.body.email
    };

    try {
        let isUpdated = await Investigador().update(data).where({ id: req.params.id });
        console.log(isUpdated);

        return res.json({ status: "success", message: "registro actualizado" });
    } catch (error) {
        return res.status(400).json({ error: error });
    }
});

route.delete("/investigadores/:id", async (req, res) => {
    try {
        let isDeleted = await Investigador().where({ id: req.params.id }).del();
        console.log(isDeleted);

        return res.json({ status: "success", message: "registro eliminado" });
    } catch (error) {
        return res.status(400).json({ error: error });
    }
});

module.exports = route;
