import { StatusCodes } from 'http-status-codes';
import { ICentralizedError } from '../types';

export class NotFound extends Error implements ICentralizedError {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
