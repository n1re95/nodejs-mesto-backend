import express from 'express';
import { connect as connectToDb } from './database';
import { init as initEnv } from './environment';
import { router } from './routes';
import { errorHandler } from './middleware';

const run = async () => {
  initEnv();
  await connectToDb();
  const app = express();
  app.use(express.json());
  app.use(router);
  app.use(errorHandler);
  app.listen(process.env.PORT);
};

run();
