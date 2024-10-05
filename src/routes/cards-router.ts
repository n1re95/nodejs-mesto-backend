import express from 'express';
import {
  create,
  list,
  remove,
  like,
} from '../controllers/card';

const router = express.Router();

router.post('/', create);
router.get('/', list);
router.delete('/:id', remove);
router.put('/:id/like', like);

export const cardsRouter = router;
