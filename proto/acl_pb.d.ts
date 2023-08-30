// package: acl
// file: proto/acl.proto

import * as jspb from "google-protobuf";
import * as proto_user_id_pb from "../proto/user_id_pb";

export class ACL extends jspb.Message {
  hasUserId(): boolean;
  clearUserId(): void;
  getUserId(): proto_user_id_pb.UserId | undefined;
  setUserId(value?: proto_user_id_pb.UserId): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  hasOwnerPermissions(): boolean;
  clearOwnerPermissions(): void;
  getOwnerPermissions(): ACL.Permissions | undefined;
  setOwnerPermissions(value?: ACL.Permissions): void;

  hasGroupPermissions(): boolean;
  clearGroupPermissions(): void;
  getGroupPermissions(): ACL.Permissions | undefined;
  setGroupPermissions(value?: ACL.Permissions): void;

  hasOthersPermissions(): boolean;
  clearOthersPermissions(): void;
  getOthersPermissions(): ACL.Permissions | undefined;
  setOthersPermissions(value?: ACL.Permissions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ACL.AsObject;
  static toObject(includeInstance: boolean, msg: ACL): ACL.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ACL, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ACL;
  static deserializeBinaryFromReader(message: ACL, reader: jspb.BinaryReader): ACL;
}

export namespace ACL {
  export type AsObject = {
    userId?: proto_user_id_pb.UserId.AsObject,
    groupId: string,
    ownerPermissions?: ACL.Permissions.AsObject,
    groupPermissions?: ACL.Permissions.AsObject,
    othersPermissions?: ACL.Permissions.AsObject,
  }

  export class Permissions extends jspb.Message {
    getRead(): boolean;
    setRead(value: boolean): void;

    getWrite(): boolean;
    setWrite(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Permissions.AsObject;
    static toObject(includeInstance: boolean, msg: Permissions): Permissions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Permissions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Permissions;
    static deserializeBinaryFromReader(message: Permissions, reader: jspb.BinaryReader): Permissions;
  }

  export namespace Permissions {
    export type AsObject = {
      read: boolean,
      write: boolean,
    }
  }
}

