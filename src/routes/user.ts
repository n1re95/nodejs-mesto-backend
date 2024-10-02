import express from 'express';
import {
  create,
  list,
  getUser,
} from '../controllers/user';

const router = express.Router();

router.post('/', create);
router.get('/', list);
router.get('/:id', getUser);

export const userRouter = router;
