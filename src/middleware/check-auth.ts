import type { RequestHandler } from 'express';

declare module 'express-serve-static-core' {
  // eslint-disable-next-line no-unused-vars
  interface Request {
    user?: { _id: string };
  }
}

export const checkAuth: RequestHandler = (req, res, next): void => {
  req.user = {
    _id: '66f7e444256fcf2c5a574496',
  };
  next();
};
