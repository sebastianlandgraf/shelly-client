import {
  RestartRequiredResponse,
  SysGetConfigResponse,
  SysGetStatusResponse,
  SysSetConfigRequest,
} from '@sebastianlandgraf/shelly-models';

export enum SysRequestType {
  GetStatus = 'Sys.GetStatus',
  GetConfig = 'Sys.GetConfig',
  SetConfig = 'Sys.SetConfig',
}

export type SysCommandTypes = {
  [SysRequestType.GetConfig]: {
    request: undefined;
    response: SysGetConfigResponse;
  };

  [SysRequestType.SetConfig]: {
    request: SysSetConfigRequest;
    response: RestartRequiredResponse;
  };

  [SysRequestType.GetStatus]: {
    request: undefined;
    response: SysGetStatusResponse;
  };
};
