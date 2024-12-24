import { BaseRequest, BaseResponse } from './types.js';

export class RestClient {
  constructor(private baseUrl: URL) {}

  async sendRest(req: BaseRequest): Promise<BaseResponse> {
    const retVal: BaseResponse = {
      result: undefined,
      error: undefined,
    };

    const requestParams = {
      method: req.params ? 'POST' : 'GET',
      body: req.params ? JSON.stringify(req.params) : undefined,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    try {
      const dest = new URL(`rpc/${req.method}`, this.baseUrl);
      const response = await fetch(dest, requestParams);

      if (response.status == 200) {
        const json = await response.json();
        retVal.result = json;
      } else {
        retVal.error = response.statusText;
      }
    } catch (e: unknown) {
      retVal.error = e;
    }

    return retVal;
  }
}
