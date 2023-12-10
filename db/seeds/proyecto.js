/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("proyectos").del();
  await knex("proyectos").insert([
    {
      nombre: "Los Microbios Super Dotados",
      codigo: "ADR-524",
      facultad: "Medicina",
      instituto: "Ninguno",
      linea_investicacion: "Micro Biologia",
      fecha_inicio: "2023-07-05",
      fecha_final: "2023-11-30",
    },
  ]);
};
