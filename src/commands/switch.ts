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
  GetStatus = 'Switch.GetStatus',
  GetConfig = 'Switch.GetConfig',
  SetConfig = 'Switch.SetConfig',
  Set = 'Switch.Set',
  Toggle = 'Switch.Toggle',
}

export type SwitchCommand = {
  [SwitchRequestType.GetConfig]: {
    request: ComponentIdRequest;
    response: SwitchGetConfigResponse;
  };

  [SwitchRequestType.GetStatus]: {
    request: ComponentIdRequest;
    response: SwitchGetStatusResponse;
  };

  [SwitchRequestType.SetConfig]: {
    request: SwitchSetConfigRequest;
    response: RestartRequiredResponse;
  };

  [SwitchRequestType.Set]: {
    request: SwitchSetRequest;
    response: SwitchSetResponse;
  };

  [SwitchRequestType.Toggle]: {
    request: ComponentIdRequest;
    response: SwitchSetResponse;
  };
};
