export interface BaseResponse {
  result: unknown;
  error: unknown;
  id?: number;
}

export interface BaseRequest {
  method: string;
  params: unknown;
  retries?: number;
  id?: number;
}
