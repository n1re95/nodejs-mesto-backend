import type { ErrorRequestHandler } from 'express';
import { Error as MongooseError } from 'mongoose';
import type { ICentralizedError } from '../types';
import { BadRequest, InternalServer } from '../errors';

// eslint-disable-next-line no-unused-vars
export const errorHandler: ErrorRequestHandler = (error, req, res, next): void => {
  const handle = ({ statusCode, message }: ICentralizedError) => {
    res.status(statusCode);
    res.send({ message });
  };

  if (error instanceof MongooseError.ValidationError) {
    return handle(new BadRequest(error.message));
  }

  if (error.statusCode && error.message) {
    return handle(error);
  }

  return handle(new InternalServer(error.message));
};
