import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { User } from '../../models/user';
import { NotFound } from '../../errors';
import { USER_NOT_FOUND } from '../../constants/error-text';

export const getOne = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      throw new NotFound(USER_NOT_FOUND);
    }
    res.status(StatusCodes.OK);
    res.json({ response: user });
  } catch (error) {
    next(error);
  }
};
