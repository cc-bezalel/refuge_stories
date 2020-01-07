const knexConfig = require("../knexfile");

const dbEnv = process.env.DB_ENV || "production";

module.exports = require("knex")(knexConfig[dbEnv]);
