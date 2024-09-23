import { connect } from './connect';
import type { Db } from 'mongodb';

export let db: Db;

export const initDb = async () => {
  db = await connect();
};
