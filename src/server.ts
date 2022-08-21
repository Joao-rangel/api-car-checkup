import 'reflect-metadata';
import express from 'express';
import {AppDataSource} from './data-source';

AppDataSource.setOptions({host: 'database'});
AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.use(express.json());

    app.get('/', (request, response) =>
      response.json({message: 'Hello World!'}),
    );
    app.listen(3333, () => console.info('Server started on port: 3333'));
  })
  .catch((error) => console.log(error));
