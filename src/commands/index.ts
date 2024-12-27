import { BleRequestCommand, BleCommandTypes } from './ble.js';
import { CoverCommandTypes, CoverCommand } from './cover.js';
import { InputCommandTypes, InputCommand } from './input.js';
import { KvsCommandTypes, KvsCommand } from './kvs.js';
import { ScriptCommandTypes, ScriptCommand } from './script.js';
import { ShellyCommandTypes, ShellyCommand } from './shelly.js';
import { SwitchCommand, SwitchRequestType } from './switch.js';
import { SysCommandTypes, SysRequestType } from './sys.js';
import { WifiCommand, WifiCommandTypes } from './wifi.js';

export const DeviceCommand = {
  ...BleRequestCommand,
  ...WifiCommand,
  ...InputCommand,
  ...SysRequestType,
  ...CoverCommand,
  ...SwitchRequestType,
  ...ScriptCommand,
  ...KvsCommand,
  ...ShellyCommand,
};

export type DeviceCommandTypes = BleCommandTypes &
  WifiCommandTypes &
  InputCommandTypes &
  SysCommandTypes &
  CoverCommandTypes &
  SwitchCommand &
  ScriptCommandTypes &
  KvsCommandTypes &
  ShellyCommandTypes;

export type RequestFunction<T extends keyof DeviceCommandTypes> = (
  method: T,
  params: DeviceCommandTypes[T]['request'],
  ...args: unknown[]
) => Promise<DeviceCommandTypes[T]['response'] | undefined>;

export interface RequestHandler {
  request: RequestFunction<keyof DeviceCommandTypes>;
}
