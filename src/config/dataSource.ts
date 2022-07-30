import { DataSource } from 'typeorm';

export const postgresDB = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 49153,
  username: 'postgres',
  password: 'postgrespw',
  database: 'postgres',
  entities: ['src/shared/entities/*.entity.{ts,js}'],
  migrations: ['src/shared/migrations/*.{ts,js}'],
  subscribers: [],
  synchronize: false,
  logging: false,
});
