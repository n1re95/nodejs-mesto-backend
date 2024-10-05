import type { Request, Response, NextFunction } from 'express';
import { User, type IUser } from '../../models/user';

export const create = async (req: Request<{}, {}, IUser>, res: Response, next: NextFunction) => {
  try {
    const { body } = req;
    const user = new User({
      name: body.name,
      about: body.about,
      avatar: body.avatar,
    });
    await user.save();
    res.status(200);
    res.send(user);
  } catch (error) {
    next(error);
  }
};
