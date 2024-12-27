import {
  MqttGetConfigResponse,
  MqttGetStatusResponse,
  MqttSetConfigRequest,
  RestartRequiredResponse,
} from '@sebastianlandgraf/shelly-models';

export enum MqttCommand {
  GetStatus = 'Mqtt.GetStatus',
  GetConfig = 'Mqtt.GetConfig',
  SetConfig = 'Mqtt.SetConfig',
}

export type MqttCommandTypes = {
  [MqttCommand.GetConfig]: {
    request: unknown;
    response: MqttGetConfigResponse;
  };

  [MqttCommand.SetConfig]: {
    request: MqttSetConfigRequest;
    response: RestartRequiredResponse;
  };

  [MqttCommand.GetStatus]: {
    request: unknown;
    response: MqttGetStatusResponse;
  };
};
