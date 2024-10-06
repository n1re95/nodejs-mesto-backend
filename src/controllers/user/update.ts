import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { User, type IUser } from '../../models/user';
import { NotFound } from '../../errors';
import { USER_NOT_FOUND } from '../../constants/error-text';

type TUpdateAvatarBody = Partial<IUser>;

export const update = async (
  req: Request<{}, {}, TUpdateAvatarBody>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const _id = req.user?._id;
    const user = await User.findOneAndUpdate({ _id }, req.body, { new: true });
    if (!user) {
      throw new NotFound(USER_NOT_FOUND);
    }
    res.status(StatusCodes.OK);
    res.json({ response: user });
  } catch (error) {
    next(error);
  }
};
