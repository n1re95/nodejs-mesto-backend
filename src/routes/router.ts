import express from 'express';
import { userRouter } from './user';
import { checkAuth } from '../middleware';

export const router = express.Router();

router.use(checkAuth);
router.use('/user', userRouter);
