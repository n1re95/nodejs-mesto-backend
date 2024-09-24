import express from 'express';
import { connect as connectToDb } from './database';
import { init as initEnv } from './environment';
import { userRouter } from './routes';

const main = async () => {
  initEnv();
  await connectToDb();
  const app = express();
  app.use(express.json());
  app.listen(3000);
  app.use('/user', userRouter);
};

main();
