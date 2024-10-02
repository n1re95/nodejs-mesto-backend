import express from 'express';
import {
  create,
  getList,
  getUser,
} from '../controllers/user';

const router = express.Router();

router.post('/', create);
router.get('/', getList);
router.get('/:userId', getUser);

export const userRouter = router;
