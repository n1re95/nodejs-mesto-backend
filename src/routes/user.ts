import express from 'express';
import {
  create,
  list,
  getOne,
} from '../controllers/user';

const router = express.Router();

router.post('/', create);
router.get('/', list);
router.get('/:id', getOne);

export const userRouter = router;
