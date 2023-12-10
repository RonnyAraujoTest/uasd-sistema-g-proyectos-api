/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("proyectos", (table) => {
    table.bigIncrements("id").primary();
    table.string("nombre", 50);
    table.string("codigo", 45);
    table.string("facultad", 70);
    table.string("instituto", 80);
    table.string("linea_investicacion", 245);
    table.integer("horas_semanales_contratadas");
    table.date("fecha_inicio");
    table.integer("duracion_semestres");
    table.date("fecha_final");
    table.text("intitutos_participantes", 200);
    table.string("entidad_financiera_n", 100);
    table.string("entidad_financiera_i", 100);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("proyectos");
};
