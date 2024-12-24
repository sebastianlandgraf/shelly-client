import {
  WifiGetConfigResponse,
  WifiSetConfigRequest,
  WifiGetStatusResponse,
  WifiListApClientsResponse,
  RestartRequiredResponse,
} from '@sebastianlandgraf/shelly-models';

export enum WifiRequestType {
  'Wifi_GetStatus' = 'Wifi.GetStatus',
  'Wifi_GetConfig' = 'Wifi.GetConfig',
  'Wifi_SetConfig' = 'Wifi.SetConfig',
  'WiFi_ListAPClients' = 'WiFi.ListAPClients',
}

export type WifiCommandTypes = {
  [WifiRequestType.Wifi_GetConfig]: {
    request: undefined;
    response: WifiGetConfigResponse;
  };

  [WifiRequestType.Wifi_SetConfig]: {
    request: WifiSetConfigRequest;
    response: RestartRequiredResponse;
  };

  [WifiRequestType.Wifi_GetStatus]: {
    request: undefined;
    response: WifiGetStatusResponse;
  };
  [WifiRequestType.WiFi_ListAPClients]: {
    request: undefined;
    response: WifiListApClientsResponse;
  };
};
