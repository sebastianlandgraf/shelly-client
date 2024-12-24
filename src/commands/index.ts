import { BleRequestType, BleCommandTypes } from './ble.js';
import { CoverCommandTypes, CoverRequestType } from './cover.js';
import { InputCommandTypes, InputRequestType } from './input.js';
import { KvsCommandTypes, KVSRequestType } from './kvs.js';
import { ScriptCommandTypes, ScriptRequestType } from './script.js';
import { ShellyCommandTypes, ShellyRequestType } from './shelly.js';
import { SwitchCommandTypes, SwitchRequestType } from './switch.js';
import { SysCommandTypes, SysRequestType } from './sys.js';
import { WifiRequestType, WifiCommandTypes } from './wifi.js';

export const Commands3 = {
  ...BleRequestType,
  ...WifiRequestType,
  ...InputRequestType,
  ...SysRequestType,
  ...CoverRequestType,
  ...SwitchRequestType,
  ...ScriptRequestType,
  ...KVSRequestType,
  ...ShellyRequestType,
};

export type Commands4 = typeof Commands3;

export type CommandTypes = BleCommandTypes &
  WifiCommandTypes &
  InputCommandTypes &
  SysCommandTypes &
  CoverCommandTypes &
  SwitchCommandTypes &
  ScriptCommandTypes &
  KvsCommandTypes &
  ShellyCommandTypes;

export type RequestFunction<T extends keyof CommandTypes> = (
  method: T,
  params: CommandTypes[T]['request'],
  ...args: unknown[]
) => Promise<CommandTypes[T]['response'] | undefined>;

export interface RequestHandler {
  request<T extends keyof CommandTypes>(
    method: T,
    params: CommandTypes[T]['request'],
    ...args: unknown[]
  ): Promise<CommandTypes[T]['response'] | undefined>;
}
