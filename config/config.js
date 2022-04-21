require('dotenv').config()
module.exports = {
  development: {
    database: 'neighbourhood',
    dialect: 'postgres'
  },
  test: {
    database: 'neighbourhood_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}