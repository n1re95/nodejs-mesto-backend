import express from 'express';
import { initDb } from './database';
import { init as initEnv } from './environment';

initEnv();
initDb();

const app = express();
app.listen(process.env.PORT);
