// Import or define ShellyGetConfigResponse
import {
  ShellyGetConfigResponse,
  ShellyGetStatusResponse,
  ShellyCheckForUpdateResponse,
  ShellyGetComponentsRequest,
  ShellyGetComponentsResponse,
} from '@sebastianlandgraf/shelly-models';

export enum ShellyRequestType {
  'Shelly_GetStatus' = 'Shelly.GetStatus',
  'Shelly_GetConfig' = 'Shelly.GetConfig',
  'Shelly_ListMethods' = 'Shelly.ListMethods',
  'Shelly_CheckForUpdate' = 'Shelly.CheckForUpdate',
  'Shelly_Update' = 'Shelly.Update',
  'Shelly_FactoryReset' = 'Shelly.FactoryReset',
  'Shelly_ResetWiFiConfig' = 'Shelly.ResetWiFiConfig',
  'Shelly_Reboot' = 'Shelly.Reboot',
  'Shelly_GetComponents' = 'Shelly.GetComponents',
}

export type ShellyCommandTypes = {
  [ShellyRequestType.Shelly_GetConfig]: {
    request: undefined;
    response: ShellyGetConfigResponse;
  };

  [ShellyRequestType.Shelly_GetStatus]: {
    request: undefined;
    response: ShellyGetStatusResponse;
  };

  [ShellyRequestType.Shelly_ListMethods]: {
    request: undefined;
    response: {
      methods: string[];
    };
  };
  [ShellyRequestType.Shelly_CheckForUpdate]: {
    request: unknown;
    response: ShellyCheckForUpdateResponse;
  };

  [ShellyRequestType.Shelly_Update]: {
    request: { stage: string };
    response: null;
  };

  [ShellyRequestType.Shelly_FactoryReset]: {
    request: undefined;
    response: null;
  };

  [ShellyRequestType.Shelly_ResetWiFiConfig]: {
    request: undefined;
    response: null;
  };

  [ShellyRequestType.Shelly_Reboot]: {
    request: undefined;
    response: null;
  };

  [ShellyRequestType.Shelly_GetComponents]: {
    request: ShellyGetComponentsRequest;
    response: ShellyGetComponentsResponse;
  };
};
