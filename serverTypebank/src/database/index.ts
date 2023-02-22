import path from 'path'

import { DataSource } from 'typeorm'

const migrationPath = path.join(__dirname, 'src', 'database', 'migrations')

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/database/db.sqlite',
  migrations: [`${migrationPath}/*.ts`]
})
