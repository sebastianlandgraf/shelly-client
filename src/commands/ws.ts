import {
  WsGetConfigResponse,
  WsSetConfigRequest,
  WsGetStatusResponse,
  RestartRequiredResponse,
} from '@sebastianlandgraf/shelly-models';
export enum WsRequestType {
  'Ws_GetStatus' = 'Ws.GetStatus',
  'Ws_GetConfig' = 'Ws.GetConfig',
  'Ws_SetConfig' = 'Ws.SetConfig',
}

export type WsCommandTypes = {
  [WsRequestType.Ws_GetConfig]: {
    request: unknown;
    response: WsGetConfigResponse;
  };

  [WsRequestType.Ws_SetConfig]: {
    request: WsSetConfigRequest;
    response: RestartRequiredResponse;
  };

  [WsRequestType.Ws_GetStatus]: {
    request: unknown;
    response: WsGetStatusResponse;
  };
};
