import {
  ComponentIdRequest,
  RestartRequiredResponse,
  ScriptCreateRequest,
  ScriptCreateResponse,
  ScriptGetCodeRequest,
  ScriptGetCodeResponse,
  ScriptGetConfigResponse,
  ScriptGetStatusResponse,
  ScriptListResponse,
  ScriptPutCodeRequest,
  ScriptPutCodeResponse,
  ScriptSetConfigRequest,
  WasRunningResponse,
} from '@sebastianlandgraf/shelly-models';

export enum ScriptCommand {
  GetStatus = 'Script.GetStatus',
  GetConfig = 'Script.GetConfig',
  SetConfig = 'Script.SetConfig',
  List = 'Script.List',
  Create = 'Script.Create',
  Delete = 'Script.Delete',
  Start = 'Script.Start',
  Stop = 'Script.Stop',
  PutCode = 'Script.PutCode',
  GetCode = 'Script.GetCode',
  Eval = 'Script.Eval',
}

export type ScriptCommandTypes = {
  [ScriptCommand.GetConfig]: {
    request: ComponentIdRequest;
    response: ScriptGetConfigResponse;
  };

  [ScriptCommand.GetStatus]: {
    request: ComponentIdRequest;
    response: ScriptGetStatusResponse;
  };

  [ScriptCommand.SetConfig]: {
    request: ScriptSetConfigRequest;
    response: RestartRequiredResponse;
  };

  [ScriptCommand.GetCode]: {
    request: ScriptGetCodeRequest;
    response: ScriptGetCodeResponse;
  };

  [ScriptCommand.List]: {
    request: undefined;
    response: ScriptListResponse;
  };

  [ScriptCommand.Start]: {
    request: ComponentIdRequest;
    response: WasRunningResponse;
  };
  [ScriptCommand.Stop]: {
    request: ComponentIdRequest;
    response: WasRunningResponse;
  };

  [ScriptCommand.Delete]: {
    request: ComponentIdRequest;
    response: null;
  };
  [ScriptCommand.Eval]: {
    request: ComponentIdRequest;
    response: { result: unknown };
  };

  [ScriptCommand.PutCode]: {
    request: ScriptPutCodeRequest;
    response: ScriptPutCodeResponse;
  };

  [ScriptCommand.Create]: {
    request: ScriptCreateRequest;
    response: ScriptCreateResponse;
  };
};
