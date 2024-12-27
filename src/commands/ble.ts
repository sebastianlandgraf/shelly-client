import {
  BleGetConfigResponse,
  BleGetStatusResponse,
  BleSetConfigRequest,
  RestartRequiredResponse,
} from '@sebastianlandgraf/shelly-models';

export enum BleRequestCommand {
  GetStatus = 'Ble.GetStatus',
  GetConfig = 'Ble.GetConfig',
  SetConfig = 'Ble.SetConfig',
}

export type BleCommandTypes = {
  [BleRequestCommand.GetConfig]: {
    request: unknown;
    response: BleGetConfigResponse;
  };

  [BleRequestCommand.GetStatus]: {
    request: unknown;
    response: BleGetStatusResponse;
  };

  [BleRequestCommand.SetConfig]: {
    request: BleSetConfigRequest;
    response: RestartRequiredResponse;
  };
};
