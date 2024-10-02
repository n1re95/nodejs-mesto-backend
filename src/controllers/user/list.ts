import { Request, Response } from 'express';
import { User } from '../../models/user';

export const list = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.status(200);
    res.json({ response: users });
  } catch (error) {
    res.status(500);
    res.json({ error });
  }
};
