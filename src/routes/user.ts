import express from 'express';
import {
  create,
  list,
  getOne,
  updateAvatar,
  update,
} from '../controllers/user';

const router = express.Router();

router.post('/', create);
router.get('/', list);
router.get('/:id', getOne);
router.patch('/me', update);
router.patch('/me/avatar', updateAvatar);

export const userRouter = router;
