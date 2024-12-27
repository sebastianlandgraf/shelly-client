// Import or define ShellyGetConfigResponse
import {
  ShellyGetConfigResponse,
  ShellyGetStatusResponse,
  ShellyCheckForUpdateResponse,
  ShellyGetComponentsRequest,
  ShellyGetComponentsResponse,
} from '@sebastianlandgraf/shelly-models';

export enum ShellyCommand {
  GetStatus = 'Shelly.GetStatus',
  GetConfig = 'Shelly.GetConfig',
  ListMethods = 'Shelly.ListMethods',
  CheckForUpdate = 'Shelly.CheckForUpdate',
  Update = 'Shelly.Update',
  FactoryReset = 'Shelly.FactoryReset',
  ResetWiFiConfig = 'Shelly.ResetWiFiConfig',
  Reboot = 'Shelly.Reboot',
  GetComponents = 'Shelly.GetComponents',
}

export type ShellyCommandTypes = {
  [ShellyCommand.GetConfig]: {
    request: undefined;
    response: ShellyGetConfigResponse;
  };

  [ShellyCommand.GetStatus]: {
    request: undefined;
    response: ShellyGetStatusResponse;
  };

  [ShellyCommand.ListMethods]: {
    request: undefined;
    response: {
      methods: string[];
    };
  };
  [ShellyCommand.CheckForUpdate]: {
    request: unknown;
    response: ShellyCheckForUpdateResponse;
  };

  [ShellyCommand.Update]: {
    request: { stage: string };
    response: null;
  };

  [ShellyCommand.FactoryReset]: {
    request: undefined;
    response: null;
  };

  [ShellyCommand.ResetWiFiConfig]: {
    request: undefined;
    response: null;
  };

  [ShellyCommand.Reboot]: {
    request: undefined;
    response: null;
  };

  [ShellyCommand.GetComponents]: {
    request: ShellyGetComponentsRequest;
    response: ShellyGetComponentsResponse;
  };
};
