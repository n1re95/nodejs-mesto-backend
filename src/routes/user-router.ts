import express from 'express';
import {
  create,
  list,
  getOne,
  updateAvatar,
  update,
} from '../controllers/user';
import * as validators from '../validators/user';

const router = express.Router();

router.post('/', create);
router.get('/', list);
router.get('/:id', getOne);
router.patch('/me', validators.update, update);
router.patch('/me/avatar', validators.updateAvatar, updateAvatar);

export const userRouter = router;
