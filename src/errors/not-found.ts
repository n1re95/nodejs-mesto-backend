import { ICentralizedError } from '../types';

export class NotFound extends Error implements ICentralizedError {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 404;
  }
}
