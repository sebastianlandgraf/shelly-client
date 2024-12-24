//done

import {
  ComponentIdRequest,
  CoverGetConfigResponse,
  CoverGetStatusResponse,
  CoverSetConfigRequest,
  SwitchGotoPositionRequest,
  SwitchMoveRequest,
} from '@sebastianlandgraf/shelly-models';

export enum CoverRequestType {
  'Cover_GetStatus' = 'Cover.GetStatus',
  'Cover_GetConfig' = 'Cover.GetConfig',
  'Cover_SetConfig' = 'Cover.SetConfig',
  'Cover_Open' = 'Cover.Open',
  'Cover_Close' = 'Cover.Close',
  'Cover_Stop' = 'Cover.Stop',
  'Cover_GotoPosition' = 'Cover.GotoPosition',
  'Cover_Calibrate' = 'Cover.Calibration',
  'Cover_ResetCounters' = 'Cover.ResetCounters',
}

export type CoverCommandTypes = {
  [CoverRequestType.Cover_GetConfig]: {
    request: ComponentIdRequest;
    response: CoverGetConfigResponse;
  };

  [CoverRequestType.Cover_GetStatus]: {
    request: ComponentIdRequest;
    response: CoverGetStatusResponse;
  };

  [CoverRequestType.Cover_SetConfig]: {
    request: CoverSetConfigRequest;
    response: CoverGetConfigResponse;
  };

  [CoverRequestType.Cover_Open]: {
    request: SwitchMoveRequest;
    response: null;
  };

  [CoverRequestType.Cover_Close]: {
    request: SwitchMoveRequest;
    response: null;
  };

  [CoverRequestType.Cover_Stop]: {
    request: ComponentIdRequest;
    response: null;
  };

  [CoverRequestType.Cover_GotoPosition]: {
    request: SwitchGotoPositionRequest;
    response: null;
  };

  [CoverRequestType.Cover_ResetCounters]: {
    request: ComponentIdRequest;
    response: null;
  };

  [CoverRequestType.Cover_Calibrate]: {
    request: ComponentIdRequest;
    response: null;
  };
};
