import express from 'express';
import {
  create,
  list,
} from '../controllers/card';

const router = express.Router();

router.post('/', create);
router.get('/', list);

export const cardsRouter = router;
