import { Request, Response, NextFunction } from 'express';
import { User, type IUser } from '../../models/user';

type TUpdateAvatarBody = Partial<IUser>;

export const update = async (
  req: Request<{}, {}, TUpdateAvatarBody>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const _id = req.user?._id;
    const user = await User.findOneAndUpdate({ _id }, req.body, { new: true });
    res.status(200);
    res.json({ response: user });
  } catch (error) {
    next(error);
  }
};
