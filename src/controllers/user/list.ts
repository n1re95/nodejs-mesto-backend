import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { User } from '../../models/user';

export const list = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const users = await User.find({});
    res.status(StatusCodes.OK);
    res.json({ response: users });
  } catch (error) {
    next(error);
  }
};
