import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;

interface ICard {
  name: string;
  link: string;
  owner: mongoose.Types.ObjectId;
  likes?: mongoose.Types.ObjectId[];
  createdAt: string;
  updatedAt: string;
}

const cardSchema = new Schema<ICard>({
  name: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  /**
   * ссылка на картинку
   */
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
}, {
  timestamps: true,
});

export const Card = mongoose.model<ICard>('card', cardSchema);
