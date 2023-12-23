/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("investigadores", (table) => {
        table.bigIncrements("id").primary();
        table.string("nombre", 100).nullable();
        table.string("apellido", 100).nullable();
        table.string("cedula", 100).nullable();
        table.string("telefono", 100).nullable();
        table.string("direccion", 100).nullable();
        table.string("email", 100).nullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("investigadores");
};
