/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("resoluciones", (table) => {
    table.bigIncrements("id").primary();
    table.bigInteger("proyecto_id").unsigned();
    table.foreign("proyecto_id").references("proyectos.id");
    table.string("numero", 45);
    table.date("fecha");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("resoluciones");
};
