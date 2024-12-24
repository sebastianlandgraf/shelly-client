import {
  BleGetConfigResponse,
  BleGetStatusResponse,
  BleSetConfigRequest,
  RestartRequiredResponse,
} from '@sebastianlandgraf/shelly-models';
export enum BleRequestType {
  'Ble_GetStatus' = 'Ble.GetStatus',
  'Ble_GetConfig' = 'Ble.GetConfig',
  'Ble_SetConfig' = 'Ble.SetConfig',
}

export type BleCommandTypes = {
  [BleRequestType.Ble_GetConfig]: {
    request: unknown;
    response: BleGetConfigResponse;
  };

  [BleRequestType.Ble_GetStatus]: {
    request: unknown;
    response: BleGetStatusResponse;
  };

  [BleRequestType.Ble_SetConfig]: {
    request: BleSetConfigRequest;
    response: RestartRequiredResponse;
  };
};
