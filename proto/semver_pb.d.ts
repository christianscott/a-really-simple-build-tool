// package: build.bazel.semver
// file: proto/semver.proto

import * as jspb from "google-protobuf";

export class SemVer extends jspb.Message {
  getMajor(): number;
  setMajor(value: number): void;

  getMinor(): number;
  setMinor(value: number): void;

  getPatch(): number;
  setPatch(value: number): void;

  getPrerelease(): string;
  setPrerelease(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SemVer.AsObject;
  static toObject(includeInstance: boolean, msg: SemVer): SemVer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SemVer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SemVer;
  static deserializeBinaryFromReader(message: SemVer, reader: jspb.BinaryReader): SemVer;
}

export namespace SemVer {
  export type AsObject = {
    major: number,
    minor: number,
    patch: number,
    prerelease: string,
  }
}

