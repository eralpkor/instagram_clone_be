// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/instagram.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './src/database/migrations',
      tableName: 'dbinsta',
    },
    seeds: {
      directory: './src/database/seeds',
    },
    poop: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  },

  // test database config
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 100
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'dbinsta'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  }

};
