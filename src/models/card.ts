import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

interface ICard {
  name: string;
  about: string;
  avatar: string;
}

const cardSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  link: {
    type: String,
    required: true,
  },
  owner: {
    type: ObjectId,
    ref: 'user',
    required: true,
  },
  likes: {
    type: [ObjectId],
    ref: 'user',
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const UserSchema = mongoose.model<ICard>('card', cardSchema);
