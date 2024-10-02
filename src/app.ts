import express from 'express';
import { connect as connectToDb } from './database';
import { init as initEnv } from './environment';
import { userRouter } from './routes';

const run = async () => {
  initEnv();
  await connectToDb();
  const app = express();
  app.use(express.json());
  app.listen(process.env.PORT);
  app.use('/user', userRouter);
};

run();
