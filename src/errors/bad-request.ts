import { ICentralizedError } from '../types';

export class BadRequest extends Error implements ICentralizedError {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 400;
  }
}
