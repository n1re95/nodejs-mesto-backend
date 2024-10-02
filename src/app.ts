import express from 'express';
import { connect as connectToDb } from './database';
import { init as initEnv } from './environment';
import { router } from './routes';

const run = async () => {
  initEnv();
  await connectToDb();
  const app = express();
  app.use(express.json());
  app.use(router);
  app.listen(process.env.PORT);
};

run();
