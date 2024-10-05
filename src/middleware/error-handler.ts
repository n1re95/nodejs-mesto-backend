import type { ErrorRequestHandler } from 'express';
import { Error as MongooseError } from 'mongoose';
import type { ICentralizedError } from '../types';
import { BadRequest, InternalServer } from '../errors';

// eslint-disable-next-line no-unused-vars
export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  const handle = ({ statusCode, message }: ICentralizedError) => {
    res.status(statusCode);
    res.send({ error: message });
  };

  if (error instanceof MongooseError.ValidationError) {
    return handle(new BadRequest(error.message));
  }

  return handle(new InternalServer(error.message));
};
