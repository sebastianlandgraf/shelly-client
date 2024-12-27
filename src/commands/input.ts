import {
  ComponentIdRequest,
  InputGetConfigResponse,
  InputGetStatusResponse,
  InputSetConfigRequest,
} from '@sebastianlandgraf/shelly-models';

export enum InputCommand {
  GetStatus = 'Input.GetStatus',
  GetConfig = 'Input.GetConfig',
  SetConfig = 'Input.SetConfig',
}

export type InputCommandTypes = {
  [InputCommand.GetConfig]: {
    request: ComponentIdRequest;
    response: InputGetConfigResponse;
  };

  [InputCommand.GetStatus]: {
    request: ComponentIdRequest;
    response: InputGetStatusResponse;
  };

  [InputCommand.SetConfig]: {
    request: InputSetConfigRequest;
    response: InputGetConfigResponse;
  };
};
