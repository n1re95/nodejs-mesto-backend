import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Card } from '../../models/card';

export const list = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const cards = await Card.find({});
    res.status(StatusCodes.OK);
    res.json({ response: cards });
  } catch (error) {
    next(error);
  }
};
