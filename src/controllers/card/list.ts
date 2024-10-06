import { Request, Response, NextFunction } from 'express';
import { Card } from '../../models/card';

export const list = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const cards = await Card.find({});
    res.status(200);
    res.json({ response: cards });
  } catch (error) {
    next(error);
  }
};
