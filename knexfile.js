const dotenv = require("dotenv");
dotenv.config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  production: {
    client: "pg", //mysql2
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },

  development: {
    client: "pg",
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
