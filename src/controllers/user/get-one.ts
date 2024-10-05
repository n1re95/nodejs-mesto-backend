import { Request, Response } from 'express';
import { User } from '../../models/user';

export const getOne = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200);
    res.json({ response: user });
  } catch (error) {
    res.status(500);
    res.json({ error });
  }
};
