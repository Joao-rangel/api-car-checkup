import 'reflect-metadata';
import express from 'express';

import {appDataSource} from '../typeorm/data-source';
import {router} from './routes';

AppDataSource.setOptions({host: 'database'});
AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.use(express.json());
    app.use(router);

    app.listen(3333, () => console.info('Server started on port: 3333'));
  })
  .catch((error) => console.log(error));
