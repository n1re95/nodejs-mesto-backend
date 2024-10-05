import { Request, Response } from 'express';
import { User } from '../../models/user';

export const updateAvatar = async (req: Request<{ avatar: string }>, res: Response) => {
  try {
    const id = req.user?._id;
    const user = await User.findById(id);
    if (!user) {
      throw new Error('no user');
    }
    user.avatar = req.body.avatar;
    await user.save();
    res.status(200);
    res.json({ response: user });
  } catch (error) {
    res.status(500);
    res.json({ error });
  }
};
