const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const conn = require("../db/conn.js");

const proyectosRoutes = require("../routes/proyectos.route.js");
const investigadoresRoutes = require("../routes/investigadores.route.js");

//midelware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//rutas
app.use("/api", proyectosRoutes);
app.use("/api", investigadoresRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
