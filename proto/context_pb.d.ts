// package: context
// file: proto/context.proto

import * as jspb from "google-protobuf";
import * as proto_user_id_pb from "../proto/user_id_pb";

export class RequestContext extends jspb.Message {
  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): proto_user_id_pb.UserId | undefined;
  setUserId(value?: proto_user_id_pb.UserId): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  getImpersonatingGroupId(): string;
  setImpersonatingGroupId(value: string): void;

  getTimezoneOffsetMinutes(): number;
  setTimezoneOffsetMinutes(value: number): void;

  getTimezone(): string;
  setTimezone(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestContext.AsObject;
  static toObject(includeInstance: boolean, msg: RequestContext): RequestContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestContext;
  static deserializeBinaryFromReader(message: RequestContext, reader: jspb.BinaryReader): RequestContext;
}

export namespace RequestContext {
  export type AsObject = {
    userId?: proto_user_id_pb.UserId.AsObject,
    groupId: string,
    impersonatingGroupId: string,
    timezoneOffsetMinutes: number,
    timezone: string,
  }
}

export class ResponseContext extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseContext.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseContext): ResponseContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseContext;
  static deserializeBinaryFromReader(message: ResponseContext, reader: jspb.BinaryReader): ResponseContext;
}

export namespace ResponseContext {
  export type AsObject = {
  }
}

