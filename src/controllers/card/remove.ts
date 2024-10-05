import type { Request, Response } from 'express';
import { Card } from '../../models/card';

export const remove = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const removed = await Card.findOneAndDelete({ _id: id });
    if (!removed) {
      throw new Error('not found');
    }
    res.status(200);
    res.send({ response: removed });
  } catch (error) {
    res.status(500);
    res.json({ error: (error instanceof Error && error.message) });
  }
};
