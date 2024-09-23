import express from 'express';
import { initDb } from './database';
import { init as initEnv } from './environment';

initEnv();
initDb();

const app = express();
const PORT = 3000;

app.listen(PORT, () => {});
