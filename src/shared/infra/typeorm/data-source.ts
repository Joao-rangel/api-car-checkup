import {DataSource} from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'car_checkup',
  synchronize: true,
  logging: false,
  entities: [],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  subscribers: [],
});
