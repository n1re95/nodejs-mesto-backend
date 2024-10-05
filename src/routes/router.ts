import express from 'express';
import { userRouter } from './user-router';
import { cardsRouter } from './cards-router';
import { checkAuth } from '../middleware';

export const router = express.Router();

router.use(checkAuth);
router.use('/users', userRouter);
router.use('/cards', cardsRouter);
