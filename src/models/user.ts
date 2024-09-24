import mongoose, { Schema } from 'mongoose';

export interface IUser {
  name: string;
  about: string;
  avatar: string;
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  about: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 200,
  },
  avatar: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model<IUser>('user', userSchema);
