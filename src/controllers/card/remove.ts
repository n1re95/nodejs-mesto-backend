import type { Request, Response, NextFunction } from 'express';
import { Card } from '../../models/card';

export const remove = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id } = req.params;
    const removed = await Card.findOneAndDelete({ _id: id });
    if (!removed) {
      throw new Error('not found');
    }
    res.status(200);
    res.send({ response: removed });
  } catch (error) {
    next(error);
  }
};
