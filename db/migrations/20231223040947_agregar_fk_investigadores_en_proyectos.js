/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.alterTable("proyectos", (table) => {
        table.bigInteger("investigador_id").unsigned().after("id").notNullable();
        table.foreign("investigador_id").references("investigadores.id");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.alterTable("proyectos", (table) => {
        table.dropForeign("investigador_id");
        table.dropColumn("investigador_id");
    })
};
