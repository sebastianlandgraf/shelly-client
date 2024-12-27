import {
  WsGetConfigResponse,
  WsSetConfigRequest,
  WsGetStatusResponse,
  RestartRequiredResponse,
} from '@sebastianlandgraf/shelly-models';

export enum WsCommand {
  GetStatus = 'Ws.GetStatus',
  GetConfig = 'Ws.GetConfig',
  SetConfig = 'Ws.SetConfig',
}

export type WsCommandTypes = {
  [WsCommand.GetConfig]: {
    request: unknown;
    response: WsGetConfigResponse;
  };

  [WsCommand.SetConfig]: {
    request: WsSetConfigRequest;
    response: RestartRequiredResponse;
  };

  [WsCommand.GetStatus]: {
    request: unknown;
    response: WsGetStatusResponse;
  };
};
