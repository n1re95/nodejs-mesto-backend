import { StatusCodes } from 'http-status-codes';
import { ICentralizedError } from '../types';

export class InternalServer extends Error implements ICentralizedError {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  }
}
