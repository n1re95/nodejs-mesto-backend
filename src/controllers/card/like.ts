import type { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Card } from '../../models/card';
import { CARD_NOT_FOUND } from '../../constants/error-text';
import { NotFound } from '../../errors';

export const like = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      throw new Error('no user id in mock auth');
    }
    const card = await Card.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likes: userId } },
      { new: true },
    );
    if (!card) {
      throw new NotFound(CARD_NOT_FOUND);
    }
    res.status(StatusCodes.OK);
    res.send({ response: card });
  } catch (error) {
    next(error);
  }
};
