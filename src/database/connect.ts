import mongoose from 'mongoose';

export const connect = async (): Promise<void> => {
  const connectionString = process.env.MONGODB_CONNSTRING ?? null;

  if (!connectionString) {
    throw new Error('no MONGODB_CONNSTRING');
  }

  mongoose.connect(connectionString);
};
