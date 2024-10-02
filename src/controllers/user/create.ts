import type { Request, Response } from 'express';
import { User, type IUser } from '../../models/user';

export const create = async (req: Request<{}, {}, IUser>, res: Response) => {
  try {
    const { body } = req;
    const user = new User({
      name: body.name,
      about: body.about,
      avatar: body.avatar,
    });
    await user.save();
    res.sendStatus(200);
  } catch (error) {
    res.status(500);
    res.json({ error });
  }
};
