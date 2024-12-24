import {
  CloudGetConfigResponse,
  CloudGetStatusResponse,
  CloudSetConfigRequest,
} from '@sebastianlandgraf/shelly-models';

export enum CloudRequestType {
  'Cloud_GetStatus' = 'Cloud.GetStatus',
  'Cloud_GetConfig' = 'Cloud.GetConfig',
  'Cloud_SetConfig' = 'Cloud.SetConfig',
}

export type CloudCommandTypes = {
  [CloudRequestType.Cloud_GetConfig]: {
    request: unknown;
    response: CloudGetConfigResponse;
  };

  [CloudRequestType.Cloud_GetStatus]: {
    request: unknown;
    response: CloudGetStatusResponse;
  };

  [CloudRequestType.Cloud_SetConfig]: {
    request: CloudSetConfigRequest;
    response: CloudGetConfigResponse;
  };
};
