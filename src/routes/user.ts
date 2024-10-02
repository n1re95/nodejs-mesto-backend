import express from 'express';
import {
  create,
  getList,
  getUser,
  remove,
} from '../controllers/user';

const router = express.Router();

router.post('/', create);
router.get('/', getList);
router.get('/:id', getUser);
router.delete('/:id', remove);

export const userRouter = router;
