import express from 'express';
import {
  create,
  list,
  remove,
} from '../controllers/card';

const router = express.Router();

router.post('/', create);
router.get('/', list);
router.delete('/:id', remove);

export const cardsRouter = router;
