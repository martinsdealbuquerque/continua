const environment = process.env.DB_ENV || "development";

module.exports = knex(config[environment]);