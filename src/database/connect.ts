import mongoose from 'mongoose';

export const connect = async (): Promise<void> => {
  const host = process.env.DATABASE_HOST;
  const port = process.env.DATABASE_PORT;
  const user = process.env.DATABASE_USER_NAME;
  const password = process.env.DATABASE_USER_PASWORD;
  const dbName = process.env.DATABASE_NAME;
  const url = `mongodb://${host}:${port}`;
  try {
    await mongoose.connect(url, {
      serverSelectionTimeoutMS: 1000,
      dbName,
      user,
      pass: password,
      authSource: 'admin',
    });
    // eslint-disable-next-line no-console
    console.log({ mongooseConnectionSuccess: { dbName, url } });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log({ mongooseConectionError: error, url });
  }
};
