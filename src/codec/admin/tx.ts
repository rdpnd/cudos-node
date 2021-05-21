/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "@cosmjs/stargate/build/codec/cosmos/base/v1beta1/coin";

export const protobufPackage = "rdpnd.pocbasecosmos.pocbasecosmos";

export interface MsgAdminSpendCommunityPool {
  initiator: string;
  toAddress: string;
  coins: Coin[];
}

export interface MsgAdminSpendResponse {}

const baseMsgAdminSpendCommunityPool: object = { initiator: "", toAddress: "" };

export const MsgAdminSpendCommunityPool = {
  encode(
    message: MsgAdminSpendCommunityPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.initiator !== "") {
      writer.uint32(10).string(message.initiator);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAdminSpendCommunityPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAdminSpendCommunityPool,
    } as MsgAdminSpendCommunityPool;
    message.coins = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initiator = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAdminSpendCommunityPool {
    const message = {
      ...baseMsgAdminSpendCommunityPool,
    } as MsgAdminSpendCommunityPool;
    message.coins = [];
    if (object.initiator !== undefined && object.initiator !== null) {
      message.initiator = String(object.initiator);
    } else {
      message.initiator = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = String(object.toAddress);
    } else {
      message.toAddress = "";
    }
    if (object.coins !== undefined && object.coins !== null) {
      for (const e of object.coins) {
        message.coins.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgAdminSpendCommunityPool): unknown {
    const obj: any = {};
    message.initiator !== undefined && (obj.initiator = message.initiator);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAdminSpendCommunityPool>
  ): MsgAdminSpendCommunityPool {
    const message = {
      ...baseMsgAdminSpendCommunityPool,
    } as MsgAdminSpendCommunityPool;
    message.coins = [];
    if (object.initiator !== undefined && object.initiator !== null) {
      message.initiator = object.initiator;
    } else {
      message.initiator = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = object.toAddress;
    } else {
      message.toAddress = "";
    }
    if (object.coins !== undefined && object.coins !== null) {
      for (const e of object.coins) {
        message.coins.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgAdminSpendResponse: object = {};

export const MsgAdminSpendResponse = {
  encode(
    _: MsgAdminSpendResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAdminSpendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAdminSpendResponse } as MsgAdminSpendResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgAdminSpendResponse {
    const message = { ...baseMsgAdminSpendResponse } as MsgAdminSpendResponse;
    return message;
  },

  toJSON(_: MsgAdminSpendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAdminSpendResponse>): MsgAdminSpendResponse {
    const message = { ...baseMsgAdminSpendResponse } as MsgAdminSpendResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  AdminSpendCommunityPool(
    request: MsgAdminSpendCommunityPool
  ): Promise<MsgAdminSpendResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AdminSpendCommunityPool = this.AdminSpendCommunityPool.bind(this);
  }
  AdminSpendCommunityPool(
    request: MsgAdminSpendCommunityPool
  ): Promise<MsgAdminSpendResponse> {
    const data = MsgAdminSpendCommunityPool.encode(request).finish();
    const promise = this.rpc.request(
      "rdpnd.pocbasecosmos.pocbasecosmos.Msg",
      "AdminSpendCommunityPool",
      data
    );
    return promise.then((data) =>
      MsgAdminSpendResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
