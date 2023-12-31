const dotenv = require("dotenv");
dotenv.config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  production: {
    client: "mysql2",
    connection: {
      host: process.env.PROD_HOST,
      port: process.env.PROD_PORT,
      user: process.env.PROD_USER,
      password: process.env.PROD_PASSWORD,
      database: process.env.PROD_DATABASE,
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },

  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
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
