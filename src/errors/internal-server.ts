import { ICentralizedError } from '../types';

export class InternalServer extends Error implements ICentralizedError {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = 500;
  }
}
