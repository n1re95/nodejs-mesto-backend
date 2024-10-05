import express from 'express';
import {
  create,
} from '../controllers/card';

const router = express.Router();

router.post('/', create);

export const cardsRouter = router;
