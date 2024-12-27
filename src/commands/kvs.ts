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

export enum KvsCommand {
  Get = 'KVS.Get',
  Set = 'KVS.Set',
  GetMany = 'KVS.GetMany',
  List = 'KVS.List',
  Delete = 'KVS.Delete',
}

export type KvsCommandTypes = {
  [KvsCommand.Delete]: {
    request: KvsDeleteRequest;
    response: KvsDeleteResponse;
  };

  [KvsCommand.Get]: {
    request: KvsGetRequest;
    response: KvsGetResponse;
  };

  [KvsCommand.GetMany]: {
    request: KvsGetManyRequest;
    response: KvsGetManyResponse;
  };

  [KvsCommand.List]: {
    request: KvsGetManyRequest;
    response: KvsListResponse;
  };

  [KvsCommand.Set]: {
    request: KvsSetRequest;
    response: KvsSetResponse;
  };
};
