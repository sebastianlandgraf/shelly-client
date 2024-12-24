import {
  KvsDeleteRequest,
  KvsDeleteResponse,
  KvsGetManyRequest,
  KvsGetManyResponse,
  KvsGetRequest,
  KvsGetResponse,
  KvsListResponse,
  KvsSetRequest,
  KvsSetResponse,
} from '@sebastianlandgraf/shelly-models';

export enum KVSRequestType {
  'KVS_Get' = 'KVS.Get',
  'KVS_Set' = 'KVS.Set',
  'KVS_GetMany' = 'KVS.GetMany',
  'KVS_List' = 'KVS.List',
  'KVS_Delete' = 'KVS.Delete',
}

export type KvsCommandTypes = {
  [KVSRequestType.KVS_Delete]: {
    request: KvsDeleteRequest;
    response: KvsDeleteResponse;
  };

  [KVSRequestType.KVS_Get]: {
    request: KvsGetRequest;
    response: KvsGetResponse;
  };

  [KVSRequestType.KVS_GetMany]: {
    request: KvsGetManyRequest;
    response: KvsGetManyResponse;
  };

  [KVSRequestType.KVS_List]: {
    request: KvsGetManyRequest;
    response: KvsListResponse;
  };

  [KVSRequestType.KVS_Set]: {
    request: KvsSetRequest;
    response: KvsSetResponse;
  };
};
