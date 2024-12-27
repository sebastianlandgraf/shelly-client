import {
  CloudGetConfigResponse,
  CloudGetStatusResponse,
  CloudSetConfigRequest,
} from '@sebastianlandgraf/shelly-models';

export enum CloudCommand {
  GetStatus = 'Cloud.GetStatus',
  GetConfig = 'Cloud.GetConfig',
  SetConfig = 'Cloud.SetConfig',
}

export type CloudCommandTypes = {
  [CloudCommand.GetConfig]: {
    request: unknown;
    response: CloudGetConfigResponse;
  };

  [CloudCommand.GetStatus]: {
    request: unknown;
    response: CloudGetStatusResponse;
  };

  [CloudCommand.SetConfig]: {
    request: CloudSetConfigRequest;
    response: CloudGetConfigResponse;
  };
};
