import { Request, Response, NextFunction } from 'express';
import { NotFound } from '../../errors';
import { USER_NOT_FOUND } from '../../constants/error-text';
import { User } from '../../models/user';

export const updateAvatar = async (
  req: Request<{ avatar: string }>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = req.user?._id;
    const user = await User.findById(id);
    if (!user) {
      throw new NotFound(USER_NOT_FOUND);
    }
    user.avatar = req.body.avatar;
    await user.save();
    res.status(200);
    res.json({ response: user });
  } catch (error) {
    next(error);
  }
};
