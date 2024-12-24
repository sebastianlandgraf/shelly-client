import {
  ComponentIdRequest,
  RestartRequiredResponse,
  SwitchGetConfigResponse,
  SwitchGetStatusResponse,
  SwitchSetConfigRequest,
  SwitchSetRequest,
  SwitchSetResponse,
} from '@sebastianlandgraf/shelly-models';

export enum SwitchRequestType {
  'Switch_GetStatus' = 'Switch.GetStatus',
  'Switch_GetConfig' = 'Switch.GetConfig',
  'Switch_SetConfig' = 'Switch.SetConfig',
  'Switch_Set' = 'Switch.Set',
  'Switch_Toggle' = 'Switch.Toggle',
}

export type SwitchCommandTypes = {
  [SwitchRequestType.Switch_GetConfig]: {
    request: ComponentIdRequest;
    response: SwitchGetConfigResponse;
  };

  [SwitchRequestType.Switch_GetStatus]: {
    request: ComponentIdRequest;
    response: SwitchGetStatusResponse;
  };

  [SwitchRequestType.Switch_SetConfig]: {
    request: SwitchSetConfigRequest;
    response: RestartRequiredResponse;
  };

  [SwitchRequestType.Switch_Set]: {
    request: SwitchSetRequest;
    response: SwitchSetResponse;
  };

  [SwitchRequestType.Switch_Toggle]: {
    request: ComponentIdRequest;
    response: SwitchSetResponse;
  };
};
