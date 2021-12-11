// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './projota/db.sqlite',
    },

  migrations: {
    directory:"./projota/migrations",
  },

  useNullAsDefault: true,
  pool:{
    afterCreate: function(conn, done){
      conn.run("PRAGMA foreign_keys = ON",done);
    }

  },
  seeds:{
    directory: "./projota/seeds",

    },
  },
  production:{
client: "pg",
connection:{
  connectionString: process.env.PROJOTA_URL,
  ssl:{ rejectUnauthorized: false},
},


migrations: {
  directory:"./projota/migrations",
},

eeds:{
  directory: "./projota/seeds",

  },
  },
 };
