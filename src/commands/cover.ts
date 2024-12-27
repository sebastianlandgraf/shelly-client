//done

import {
  ComponentIdRequest,
  CoverGetConfigResponse,
  CoverGetStatusResponse,
  CoverSetConfigRequest,
  SwitchGotoPositionRequest,
  SwitchMoveRequest,
} from '@sebastianlandgraf/shelly-models';

export enum CoverCommand {
  GetStatus = 'Cover.GetStatus',
  GetConfig = 'Cover.GetConfig',
  SetConfig = 'Cover.SetConfig',
  Open = 'Cover.Open',
  Close = 'Cover.Close',
  Stop = 'Cover.Stop',
  GotoPosition = 'Cover.GotoPosition',
  Calibrate = 'Cover.Calibration',
  ResetCounters = 'Cover.ResetCounters',
}

export type CoverCommandTypes = {
  [CoverCommand.GetConfig]: {
    request: ComponentIdRequest;
    response: CoverGetConfigResponse;
  };

  [CoverCommand.GetStatus]: {
    request: ComponentIdRequest;
    response: CoverGetStatusResponse;
  };

  [CoverCommand.SetConfig]: {
    request: CoverSetConfigRequest;
    response: CoverGetConfigResponse;
  };

  [CoverCommand.Open]: {
    request: SwitchMoveRequest;
    response: null;
  };

  [CoverCommand.Close]: {
    request: SwitchMoveRequest;
    response: null;
  };

  [CoverCommand.Stop]: {
    request: ComponentIdRequest;
    response: null;
  };

  [CoverCommand.GotoPosition]: {
    request: SwitchGotoPositionRequest;
    response: null;
  };

  [CoverCommand.ResetCounters]: {
    request: ComponentIdRequest;
    response: null;
  };

  [CoverCommand.Calibrate]: {
    request: ComponentIdRequest;
    response: null;
  };
};
