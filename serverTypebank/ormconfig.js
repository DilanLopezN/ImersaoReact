module.exports = {
  type: 'sqlite',
  databas: './src/database/db.sqlite',
  cli: {
    migrationsDir: './src/database/migrations'
  }
}
