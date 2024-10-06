import { Request, Response, NextFunction } from 'express';
import { User } from '../../models/user';

export const list = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const users = await User.find({});
    res.status(200);
    res.json({ response: users });
  } catch (error) {
    next(error);
  }
};
