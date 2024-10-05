import { Request, Response } from 'express';
import { Card } from '../../models/card';

export const list = async (req: Request, res: Response) => {
  try {
    const cards = await Card.find({});
    res.status(200);
    res.json({ response: cards });
  } catch (error) {
    res.status(500);
    res.json({ error });
  }
};
