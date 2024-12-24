import {
  RestartRequiredResponse,
  SysGetConfigResponse,
  SysGetStatusResponse,
  SysSetConfigRequest,
} from '@sebastianlandgraf/shelly-models';

export enum SysRequestType {
  'Sys_GetStatus' = 'Sys.GetStatus',
  'Sys_GetConfig' = 'Sys.GetConfig',
  'Sys_SetConfig' = 'Sys.SetConfig',
}
export type SysCommandTypes = {
  [SysRequestType.Sys_GetConfig]: {
    request: undefined;
    response: SysGetConfigResponse;
  };

  [SysRequestType.Sys_SetConfig]: {
    request: SysSetConfigRequest;
    response: RestartRequiredResponse;
  };

  [SysRequestType.Sys_GetStatus]: {
    request: undefined;
    response: SysGetStatusResponse;
  };
};
