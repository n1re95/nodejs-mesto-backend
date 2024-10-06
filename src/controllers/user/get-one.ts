import { Request, Response, NextFunction } from 'express';
import { User } from '../../models/user';
import { NotFound } from '../../errors';

export const getOne = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      throw new NotFound('user not found');
    }
    res.status(200);
    res.json({ response: user });
  } catch (error) {
    next(error);
  }
};
