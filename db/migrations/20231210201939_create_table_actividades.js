/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("actividades", (table) => {
    table.bigIncrements("id").primary();
    table.bigInteger("proyecto_id").unsigned();
    table.foreign("proyecto_id").references("proyectos.id");
    table.string("descripcion", 100);
    table.string("actividad1", 100);
    table.string("actividad2", 100);
    table.string("actividad3", 100);
    table.string("actividad4", 100);
    table.string("actividad5", 100);
    table.string("actividad6", 100);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("actividades");
};
