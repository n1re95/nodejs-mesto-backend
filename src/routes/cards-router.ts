import express from 'express';
import {
  create,
  list,
  remove,
  like,
  dislike,
} from '../controllers/card';

const router = express.Router();

router.post('/', create);
router.get('/', list);
router.delete('/:id', remove);
router.put('/:id/like', like);
router.delete('/:id/like', dislike);

export const cardsRouter = router;
