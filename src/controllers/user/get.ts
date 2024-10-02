import { Request, Response } from 'express';
import { User } from '../../models/user';

export const getUser = async (req: Request<{ userId: string }>, res: Response) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200);
    res.json({ response: user });
  } catch (error) {
    res.status(500);
    res.json({ error });
  }
};
