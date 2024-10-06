import type { Request, Response, NextFunction } from 'express';
import { Card } from '../../models/card';
import { CARD_NOT_FOUND } from '../../constants/error-text';
import { NotFound } from '../../errors';

export const remove = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id } = req.params;
    const removed = await Card.findOneAndDelete({ _id: id });
    if (!removed) {
      throw new NotFound(CARD_NOT_FOUND);
    }
    res.status(200);
    res.send({ response: removed });
  } catch (error) {
    next(error);
  }
};
