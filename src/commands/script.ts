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

export enum ScriptRequestType {
  'Script_GetStatus' = 'Script.GetStatus',
  'Script_GetConfig' = 'Script.GetConfig',
  'Script_SetConfig' = 'Script.SetConfig',
  'Script_List' = 'Script.List',
  'Script_Create' = 'Script.Create',
  'Script_Delete' = 'Script.Delete',
  'Script_Start' = 'Script.Start',
  'Script_Stop' = 'Script.Stop',
  'Script_PutCode' = 'Script.PutCode',
  'Script_GetCode' = 'Script.GetCode',
  'Script_Eval' = 'Script.Eval',
}

export type ScriptCommandTypes = {
  [ScriptRequestType.Script_GetConfig]: {
    request: ComponentIdRequest;
    response: ScriptGetConfigResponse;
  };

  [ScriptRequestType.Script_GetStatus]: {
    request: ComponentIdRequest;
    response: ScriptGetStatusResponse;
  };

  [ScriptRequestType.Script_SetConfig]: {
    request: ScriptSetConfigRequest;
    response: RestartRequiredResponse;
  };

  [ScriptRequestType.Script_GetCode]: {
    request: ScriptGetCodeRequest;
    response: ScriptGetCodeResponse;
  };

  [ScriptRequestType.Script_List]: {
    request: undefined;
    response: ScriptListResponse;
  };

  [ScriptRequestType.Script_Start]: {
    request: ComponentIdRequest;
    response: WasRunningResponse;
  };
  [ScriptRequestType.Script_Stop]: {
    request: ComponentIdRequest;
    response: WasRunningResponse;
  };

  [ScriptRequestType.Script_Delete]: {
    request: ComponentIdRequest;
    response: null;
  };
  [ScriptRequestType.Script_Eval]: {
    request: ComponentIdRequest;
    response: { result: unknown };
  };

  [ScriptRequestType.Script_PutCode]: {
    request: ScriptPutCodeRequest;
    response: ScriptPutCodeResponse;
  };

  [ScriptRequestType.Script_Create]: {
    request: ScriptCreateRequest;
    response: ScriptCreateResponse;
  };
};
