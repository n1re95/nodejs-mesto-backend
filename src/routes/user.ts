import express from 'express';
import {
  create,
  list,
  getOne,
  updateAvatar,
} from '../controllers/user';

const router = express.Router();

router.post('/', create);
router.get('/', list);
router.get('/:id', getOne);
router.patch('/me/avatar', updateAvatar);

export const userRouter = router;
