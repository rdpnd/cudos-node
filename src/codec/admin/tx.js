"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.MsgClientImpl = exports.MsgAdminSpendResponse = exports.MsgAdminSpendCommunityPool = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var coin_1 = require("@cosmjs/stargate/build/codec/cosmos/base/v1beta1/coin");
exports.protobufPackage = "rdpnd.pocbasecosmos.pocbasecosmos";
var baseMsgAdminSpendCommunityPool = { initiator: "", toAddress: "" };
exports.MsgAdminSpendCommunityPool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.initiator !== "") {
            writer.uint32(10).string(message.initiator);
        }
        if (message.toAddress !== "") {
            writer.uint32(18).string(message.toAddress);
        }
        for (var _i = 0, _a = message.coins; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgAdminSpendCommunityPool);
        message.coins = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.initiator = reader.string();
                    break;
                case 2:
                    message.toAddress = reader.string();
                    break;
                case 3:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMsgAdminSpendCommunityPool);
        message.coins = [];
        if (object.initiator !== undefined && object.initiator !== null) {
            message.initiator = String(object.initiator);
        }
        else {
            message.initiator = "";
        }
        if (object.toAddress !== undefined && object.toAddress !== null) {
            message.toAddress = String(object.toAddress);
        }
        else {
            message.toAddress = "";
        }
        if (object.coins !== undefined && object.coins !== null) {
            for (var _i = 0, _a = object.coins; _i < _a.length; _i++) {
                var e = _a[_i];
                message.coins.push(coin_1.Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.initiator !== undefined && (obj.initiator = message.initiator);
        message.toAddress !== undefined && (obj.toAddress = message.toAddress);
        if (message.coins) {
            obj.coins = message.coins.map(function (e) { return (e ? coin_1.Coin.toJSON(e) : undefined); });
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMsgAdminSpendCommunityPool);
        message.coins = [];
        if (object.initiator !== undefined && object.initiator !== null) {
            message.initiator = object.initiator;
        }
        else {
            message.initiator = "";
        }
        if (object.toAddress !== undefined && object.toAddress !== null) {
            message.toAddress = object.toAddress;
        }
        else {
            message.toAddress = "";
        }
        if (object.coins !== undefined && object.coins !== null) {
            for (var _i = 0, _a = object.coins; _i < _a.length; _i++) {
                var e = _a[_i];
                message.coins.push(coin_1.Coin.fromPartial(e));
            }
        }
        return message;
    }
};
var baseMsgAdminSpendResponse = {};
exports.MsgAdminSpendResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgAdminSpendResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        var message = __assign({}, baseMsgAdminSpendResponse);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseMsgAdminSpendResponse);
        return message;
    }
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.AdminSpendCommunityPool = this.AdminSpendCommunityPool.bind(this);
    }
    MsgClientImpl.prototype.AdminSpendCommunityPool = function (request) {
        var data = exports.MsgAdminSpendCommunityPool.encode(request).finish();
        var promise = this.rpc.request("rdpnd.pocbasecosmos.pocbasecosmos.Msg", "AdminSpendCommunityPool", data);
        return promise.then(function (data) {
            return exports.MsgAdminSpendResponse.decode(new minimal_1["default"].Reader(data));
        });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1["default"].util.Long !== long_1["default"]) {
    minimal_1["default"].util.Long = long_1["default"];
    minimal_1["default"].configure();
}
