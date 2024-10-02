import type { Request, Response } from 'express';
import { User } from '../../models/user';

export const remove = async (req: Request<{ id: string }>, res: Response) => {
  try {
    await User.findByIdAndDelete(req.body.id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500);
    res.json({ error });
  }
};
