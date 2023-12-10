const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();

const app = express();
const port = process.env.PORT;
const conn = require("../db/conn.js");

const proyectosRoutes = require("../routes/proyectos.route.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//rutas
app.use("/api", proyectosRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
