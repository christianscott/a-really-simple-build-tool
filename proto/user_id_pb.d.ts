// package: user_id
// file: proto/user_id.proto

import * as jspb from "google-protobuf";

export class UserId extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserId.AsObject;
  static toObject(includeInstance: boolean, msg: UserId): UserId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserId;
  static deserializeBinaryFromReader(message: UserId, reader: jspb.BinaryReader): UserId;
}

export namespace UserId {
  export type AsObject = {
    id: string,
  }
}

export class Name extends jspb.Message {
  getFull(): string;
  setFull(value: string): void;

  getFirst(): string;
  setFirst(value: string): void;

  getLast(): string;
  setLast(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Name.AsObject;
  static toObject(includeInstance: boolean, msg: Name): Name.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Name, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Name;
  static deserializeBinaryFromReader(message: Name, reader: jspb.BinaryReader): Name;
}

export namespace Name {
  export type AsObject = {
    full: string,
    first: string,
    last: string,
  }
}

export class DisplayUser extends jspb.Message {
  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): UserId | undefined;
  setUserId(value?: UserId): void;

  hasName(): boolean;
  clearName(): void;
  getName(): Name | undefined;
  setName(value?: Name): void;

  getProfileImageUrl(): string;
  setProfileImageUrl(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisplayUser.AsObject;
  static toObject(includeInstance: boolean, msg: DisplayUser): DisplayUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisplayUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisplayUser;
  static deserializeBinaryFromReader(message: DisplayUser, reader: jspb.BinaryReader): DisplayUser;
}

export namespace DisplayUser {
  export type AsObject = {
    userId?: UserId.AsObject,
    name?: Name.AsObject,
    profileImageUrl: string,
    email: string,
  }
}

