import { HttpStatusCode } from '@core/http/protocols';

export type StatusError = {
  status: Exclude<HttpStatusCode, HttpStatusCode.Ok>;
};
