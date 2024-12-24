import {
  MqttGetConfigResponse,
  MqttGetStatusResponse,
  MqttSetConfigRequest,
  RestartRequiredResponse,
} from '@sebastianlandgraf/shelly-models';

export enum MqttRequestType {
  'Mqtt_GetStatus' = 'Mqtt.GetStatus',
  'Mqtt_GetConfig' = 'Mqtt.GetConfig',
  'Mqtt_SetConfig' = 'Mqtt.SetConfig',
}

export type MqttCommandTypes = {
  [MqttRequestType.Mqtt_GetConfig]: {
    request: unknown;
    response: MqttGetConfigResponse;
  };

  [MqttRequestType.Mqtt_SetConfig]: {
    request: MqttSetConfigRequest;
    response: RestartRequiredResponse;
  };

  [MqttRequestType.Mqtt_GetStatus]: {
    request: unknown;
    response: MqttGetStatusResponse;
  };
};
