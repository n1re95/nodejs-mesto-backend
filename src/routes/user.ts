import express, { type Request, type Response } from 'express';
import type { CustomRequest } from 'types';
import {
  create,
  getList,
  getUser,
} from '../controllers/user';
import type { IUser } from '../models/user';

export const userRouter = express.Router();

userRouter.post('/', async (req: CustomRequest<Partial<IUser>>, res) => {
  const { body } = req;

  try {
    await create({
      name: body.name,
      about: body.about,
      avatar: body.avatar,
    });
    res.sendStatus(200);
  } catch (error) {
    res.status(500);
    res.json({ error });
  }
});

userRouter.get('/', async (req: Request, res: Response) => {
  try {
    const list = await getList();
    res.status(200);
    res.json({ response: list });
  } catch (error) {
    res.status(500);
    res.json({ error });
  }
});

userRouter.get('/:userId', async (req: Request<{ userId?: string }>, res: Response) => {
  try {
    const user = await getUser(req.params.userId);
    res.status(200);
    res.json({ response: user });
  } catch (error) {
    res.status(500);
    res.json({ error });
  }
});
