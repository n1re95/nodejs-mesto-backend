import type { Request, Response } from 'express';
import { Card } from '../../models/card';

export const like = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      throw new Error('no user id');
    }
    const card = await Card.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likes: userId } }, // добавить _id в массив, если его там нет
      { new: true },
    );
    res.status(200);
    res.send({ response: card });
  } catch (error) {
    res.status(500);
    res.json({ error });
  }
};
