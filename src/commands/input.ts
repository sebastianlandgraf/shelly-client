import {
  ComponentIdRequest,
  InputGetConfigResponse,
  InputGetStatusResponse,
  InputSetConfigRequest,
} from '@sebastianlandgraf/shelly-models';

export enum InputRequestType {
  'Input_GetStatus' = 'Input.GetStatus',
  'Input_GetConfig' = 'Input.GetConfig',
  'Input_SetConfig' = 'Input.SetConfig',
}

export type InputCommandTypes = {
  [InputRequestType.Input_GetConfig]: {
    request: ComponentIdRequest;
    response: InputGetConfigResponse;
  };

  [InputRequestType.Input_GetStatus]: {
    request: ComponentIdRequest;
    response: InputGetStatusResponse;
  };

  [InputRequestType.Input_SetConfig]: {
    request: InputSetConfigRequest;
    response: InputGetConfigResponse;
  };
};
