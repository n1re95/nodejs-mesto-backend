import { Request, Response, NextFunction } from 'express';
import { User } from '../../models/user';

export const getOne = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200);
    res.json({ response: user });
  } catch (error) {
    next(error);
  }
};
