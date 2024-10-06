import type { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
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
    res.status(StatusCodes.OK);
    res.send({ response: user });
  } catch (error) {
    next(error);
  }
};
