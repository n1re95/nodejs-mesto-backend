import {
  MongoClient,
  type Db,
} from "mongodb";

export const connect = async (): Promise<Db> => {
  const connectionString = process.env.MONGODB_CONNSTRING ?? null;

  if (!connectionString) {
    throw new Error('no MONGODB_CONNSTRING');
  }

  const client = new MongoClient(connectionString);
  const conn = await client.connect();

  return conn.db('mestodb');
};
