import express from 'express';
import { connect as connectToDb } from './database';
import { init as initEnv } from './environment';

initEnv();
connectToDb().then(() => {
  const app = express();
  app.listen(process.env.PORT);
});
