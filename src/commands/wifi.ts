import {
  WifiGetConfigResponse,
  WifiSetConfigRequest,
  WifiGetStatusResponse,
  WifiListApClientsResponse,
  RestartRequiredResponse,
} from '@sebastianlandgraf/shelly-models';

export enum WifiCommand {
  GetStatus = 'Wifi.GetStatus',
  GetConfig = 'Wifi.GetConfig',
  SetConfig = 'Wifi.SetConfig',
  ListApClients = 'WiFi.ListApClients',
}

export type WifiCommandTypes = {
  [WifiCommand.GetConfig]: {
    request: undefined;
    response: WifiGetConfigResponse;
  };

  [WifiCommand.SetConfig]: {
    request: WifiSetConfigRequest;
    response: RestartRequiredResponse;
  };

  [WifiCommand.GetStatus]: {
    request: undefined;
    response: WifiGetStatusResponse;
  };
  [WifiCommand.ListApClients]: {
    request: undefined;
    response: WifiListApClientsResponse;
  };
};
