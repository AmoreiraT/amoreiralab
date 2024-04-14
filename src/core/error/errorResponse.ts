export interface MyError {
  message: string;
}

export class ErrorResponse extends Error implements MyError {
  methodName?: string;

  constructor(message: string, methodName?: string) {
    super(message);
    this.methodName = methodName || '';
  }
}
