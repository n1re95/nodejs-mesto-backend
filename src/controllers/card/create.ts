import type { Request, Response, NextFunction } from 'express';
import { Card } from '../../models/card';

type TCardCreateBody = {
  name: string;
  link: string;
  owner: string;
};

export const create = async (
  req: Request<{}, {}, TCardCreateBody>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const card = new Card(req.body);
    await card.save();
    res.status(200);
    res.send({ response: card });
  } catch (error) {
    next(error);
  }
};
