// package: build.bazel.remote.execution.v2
// file: proto/remote_execution.proto

import * as jspb from "google-protobuf";
import * as proto_semver_pb from "../proto/semver_pb";
import * as google_api_annotations_pb from "../google/api/annotations_pb";
import * as google_longrunning_operations_pb from "../google/longrunning/operations_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../google/rpc/status_pb";
import * as proto_scheduler_pb from "../proto/scheduler_pb";

export class PublishOperationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublishOperationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PublishOperationResponse): PublishOperationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublishOperationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublishOperationResponse;
  static deserializeBinaryFromReader(message: PublishOperationResponse, reader: jspb.BinaryReader): PublishOperationResponse;
}

export namespace PublishOperationResponse {
  export type AsObject = {
  }
}

export class Action extends jspb.Message {
  hasCommandDigest(): boolean;
  clearCommandDigest(): void;
  getCommandDigest(): Digest | undefined;
  setCommandDigest(value?: Digest): void;

  hasInputRootDigest(): boolean;
  clearInputRootDigest(): void;
  getInputRootDigest(): Digest | undefined;
  setInputRootDigest(value?: Digest): void;

  hasTimeout(): boolean;
  clearTimeout(): void;
  getTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setTimeout(value?: google_protobuf_duration_pb.Duration): void;

  getDoNotCache(): boolean;
  setDoNotCache(value: boolean): void;

  clearOutputNodePropertiesList(): void;
  getOutputNodePropertiesList(): Array<string>;
  setOutputNodePropertiesList(value: Array<string>): void;
  addOutputNodeProperties(value: string, index?: number): string;

  getSalt(): Uint8Array | string;
  getSalt_asU8(): Uint8Array;
  getSalt_asB64(): string;
  setSalt(value: Uint8Array | string): void;

  hasPlatform(): boolean;
  clearPlatform(): void;
  getPlatform(): Platform | undefined;
  setPlatform(value?: Platform): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Action.AsObject;
  static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Action;
  static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
}

export namespace Action {
  export type AsObject = {
    commandDigest?: Digest.AsObject,
    inputRootDigest?: Digest.AsObject,
    timeout?: google_protobuf_duration_pb.Duration.AsObject,
    doNotCache: boolean,
    outputNodePropertiesList: Array<string>,
    salt: Uint8Array | string,
    platform?: Platform.AsObject,
  }
}

export class Command extends jspb.Message {
  clearArgumentsList(): void;
  getArgumentsList(): Array<string>;
  setArgumentsList(value: Array<string>): void;
  addArguments(value: string, index?: number): string;

  clearEnvironmentVariablesList(): void;
  getEnvironmentVariablesList(): Array<Command.EnvironmentVariable>;
  setEnvironmentVariablesList(value: Array<Command.EnvironmentVariable>): void;
  addEnvironmentVariables(value?: Command.EnvironmentVariable, index?: number): Command.EnvironmentVariable;

  clearOutputFilesList(): void;
  getOutputFilesList(): Array<string>;
  setOutputFilesList(value: Array<string>): void;
  addOutputFiles(value: string, index?: number): string;

  clearOutputDirectoriesList(): void;
  getOutputDirectoriesList(): Array<string>;
  setOutputDirectoriesList(value: Array<string>): void;
  addOutputDirectories(value: string, index?: number): string;

  clearOutputPathsList(): void;
  getOutputPathsList(): Array<string>;
  setOutputPathsList(value: Array<string>): void;
  addOutputPaths(value: string, index?: number): string;

  hasPlatform(): boolean;
  clearPlatform(): void;
  getPlatform(): Platform | undefined;
  setPlatform(value?: Platform): void;

  getWorkingDirectory(): string;
  setWorkingDirectory(value: string): void;

  clearOutputNodePropertiesList(): void;
  getOutputNodePropertiesList(): Array<string>;
  setOutputNodePropertiesList(value: Array<string>): void;
  addOutputNodeProperties(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Command.AsObject;
  static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Command;
  static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
  export type AsObject = {
    argumentsList: Array<string>,
    environmentVariablesList: Array<Command.EnvironmentVariable.AsObject>,
    outputFilesList: Array<string>,
    outputDirectoriesList: Array<string>,
    outputPathsList: Array<string>,
    platform?: Platform.AsObject,
    workingDirectory: string,
    outputNodePropertiesList: Array<string>,
  }

  export class EnvironmentVariable extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnvironmentVariable.AsObject;
    static toObject(includeInstance: boolean, msg: EnvironmentVariable): EnvironmentVariable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnvironmentVariable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnvironmentVariable;
    static deserializeBinaryFromReader(message: EnvironmentVariable, reader: jspb.BinaryReader): EnvironmentVariable;
  }

  export namespace EnvironmentVariable {
    export type AsObject = {
      name: string,
      value: string,
    }
  }
}

export class Platform extends jspb.Message {
  clearPropertiesList(): void;
  getPropertiesList(): Array<Platform.Property>;
  setPropertiesList(value: Array<Platform.Property>): void;
  addProperties(value?: Platform.Property, index?: number): Platform.Property;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Platform.AsObject;
  static toObject(includeInstance: boolean, msg: Platform): Platform.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Platform, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Platform;
  static deserializeBinaryFromReader(message: Platform, reader: jspb.BinaryReader): Platform;
}

export namespace Platform {
  export type AsObject = {
    propertiesList: Array<Platform.Property.AsObject>,
  }

  export class Property extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Property.AsObject;
    static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Property;
    static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
  }

  export namespace Property {
    export type AsObject = {
      name: string,
      value: string,
    }
  }
}

export class Directory extends jspb.Message {
  clearFilesList(): void;
  getFilesList(): Array<FileNode>;
  setFilesList(value: Array<FileNode>): void;
  addFiles(value?: FileNode, index?: number): FileNode;

  clearDirectoriesList(): void;
  getDirectoriesList(): Array<DirectoryNode>;
  setDirectoriesList(value: Array<DirectoryNode>): void;
  addDirectories(value?: DirectoryNode, index?: number): DirectoryNode;

  clearSymlinksList(): void;
  getSymlinksList(): Array<SymlinkNode>;
  setSymlinksList(value: Array<SymlinkNode>): void;
  addSymlinks(value?: SymlinkNode, index?: number): SymlinkNode;

  hasNodeProperties(): boolean;
  clearNodeProperties(): void;
  getNodeProperties(): NodeProperties | undefined;
  setNodeProperties(value?: NodeProperties): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Directory.AsObject;
  static toObject(includeInstance: boolean, msg: Directory): Directory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Directory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Directory;
  static deserializeBinaryFromReader(message: Directory, reader: jspb.BinaryReader): Directory;
}

export namespace Directory {
  export type AsObject = {
    filesList: Array<FileNode.AsObject>,
    directoriesList: Array<DirectoryNode.AsObject>,
    symlinksList: Array<SymlinkNode.AsObject>,
    nodeProperties?: NodeProperties.AsObject,
  }
}

export class NodeProperty extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeProperty.AsObject;
  static toObject(includeInstance: boolean, msg: NodeProperty): NodeProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeProperty;
  static deserializeBinaryFromReader(message: NodeProperty, reader: jspb.BinaryReader): NodeProperty;
}

export namespace NodeProperty {
  export type AsObject = {
    name: string,
    value: string,
  }
}

export class NodeProperties extends jspb.Message {
  clearPropertiesList(): void;
  getPropertiesList(): Array<NodeProperty>;
  setPropertiesList(value: Array<NodeProperty>): void;
  addProperties(value?: NodeProperty, index?: number): NodeProperty;

  hasMtime(): boolean;
  clearMtime(): void;
  getMtime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMtime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUnixMode(): boolean;
  clearUnixMode(): void;
  getUnixMode(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setUnixMode(value?: google_protobuf_wrappers_pb.UInt32Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeProperties.AsObject;
  static toObject(includeInstance: boolean, msg: NodeProperties): NodeProperties.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeProperties, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeProperties;
  static deserializeBinaryFromReader(message: NodeProperties, reader: jspb.BinaryReader): NodeProperties;
}

export namespace NodeProperties {
  export type AsObject = {
    propertiesList: Array<NodeProperty.AsObject>,
    mtime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    unixMode?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
  }
}

export class FileNode extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasDigest(): boolean;
  clearDigest(): void;
  getDigest(): Digest | undefined;
  setDigest(value?: Digest): void;

  getIsExecutable(): boolean;
  setIsExecutable(value: boolean): void;

  hasNodeProperties(): boolean;
  clearNodeProperties(): void;
  getNodeProperties(): NodeProperties | undefined;
  setNodeProperties(value?: NodeProperties): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileNode.AsObject;
  static toObject(includeInstance: boolean, msg: FileNode): FileNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileNode;
  static deserializeBinaryFromReader(message: FileNode, reader: jspb.BinaryReader): FileNode;
}

export namespace FileNode {
  export type AsObject = {
    name: string,
    digest?: Digest.AsObject,
    isExecutable: boolean,
    nodeProperties?: NodeProperties.AsObject,
  }
}

export class DirectoryNode extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasDigest(): boolean;
  clearDigest(): void;
  getDigest(): Digest | undefined;
  setDigest(value?: Digest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectoryNode.AsObject;
  static toObject(includeInstance: boolean, msg: DirectoryNode): DirectoryNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DirectoryNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectoryNode;
  static deserializeBinaryFromReader(message: DirectoryNode, reader: jspb.BinaryReader): DirectoryNode;
}

export namespace DirectoryNode {
  export type AsObject = {
    name: string,
    digest?: Digest.AsObject,
  }
}

export class SymlinkNode extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTarget(): string;
  setTarget(value: string): void;

  hasNodeProperties(): boolean;
  clearNodeProperties(): void;
  getNodeProperties(): NodeProperties | undefined;
  setNodeProperties(value?: NodeProperties): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymlinkNode.AsObject;
  static toObject(includeInstance: boolean, msg: SymlinkNode): SymlinkNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymlinkNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymlinkNode;
  static deserializeBinaryFromReader(message: SymlinkNode, reader: jspb.BinaryReader): SymlinkNode;
}

export namespace SymlinkNode {
  export type AsObject = {
    name: string,
    target: string,
    nodeProperties?: NodeProperties.AsObject,
  }
}

export class Digest extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  getSizeBytes(): number;
  setSizeBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Digest.AsObject;
  static toObject(includeInstance: boolean, msg: Digest): Digest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Digest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Digest;
  static deserializeBinaryFromReader(message: Digest, reader: jspb.BinaryReader): Digest;
}

export namespace Digest {
  export type AsObject = {
    hash: string,
    sizeBytes: number,
  }
}

export class ExecutedActionMetadata extends jspb.Message {
  getWorker(): string;
  setWorker(value: string): void;

  hasQueuedTimestamp(): boolean;
  clearQueuedTimestamp(): void;
  getQueuedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setQueuedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasWorkerStartTimestamp(): boolean;
  clearWorkerStartTimestamp(): void;
  getWorkerStartTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setWorkerStartTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasWorkerCompletedTimestamp(): boolean;
  clearWorkerCompletedTimestamp(): void;
  getWorkerCompletedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setWorkerCompletedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasInputFetchStartTimestamp(): boolean;
  clearInputFetchStartTimestamp(): void;
  getInputFetchStartTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInputFetchStartTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasInputFetchCompletedTimestamp(): boolean;
  clearInputFetchCompletedTimestamp(): void;
  getInputFetchCompletedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setInputFetchCompletedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExecutionStartTimestamp(): boolean;
  clearExecutionStartTimestamp(): void;
  getExecutionStartTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExecutionStartTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasExecutionCompletedTimestamp(): boolean;
  clearExecutionCompletedTimestamp(): void;
  getExecutionCompletedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExecutionCompletedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasVirtualExecutionDuration(): boolean;
  clearVirtualExecutionDuration(): void;
  getVirtualExecutionDuration(): google_protobuf_duration_pb.Duration | undefined;
  setVirtualExecutionDuration(value?: google_protobuf_duration_pb.Duration): void;

  hasOutputUploadStartTimestamp(): boolean;
  clearOutputUploadStartTimestamp(): void;
  getOutputUploadStartTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOutputUploadStartTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasOutputUploadCompletedTimestamp(): boolean;
  clearOutputUploadCompletedTimestamp(): void;
  getOutputUploadCompletedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOutputUploadCompletedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearAuxiliaryMetadataList(): void;
  getAuxiliaryMetadataList(): Array<google_protobuf_any_pb.Any>;
  setAuxiliaryMetadataList(value: Array<google_protobuf_any_pb.Any>): void;
  addAuxiliaryMetadata(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  getExecutorId(): string;
  setExecutorId(value: string): void;

  hasIoStats(): boolean;
  clearIoStats(): void;
  getIoStats(): IOStats | undefined;
  setIoStats(value?: IOStats): void;

  hasUsageStats(): boolean;
  clearUsageStats(): void;
  getUsageStats(): UsageStats | undefined;
  setUsageStats(value?: UsageStats): void;

  hasEstimatedTaskSize(): boolean;
  clearEstimatedTaskSize(): void;
  getEstimatedTaskSize(): proto_scheduler_pb.TaskSize | undefined;
  setEstimatedTaskSize(value?: proto_scheduler_pb.TaskSize): void;

  getDoNotCache(): boolean;
  setDoNotCache(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutedActionMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutedActionMetadata): ExecutedActionMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutedActionMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutedActionMetadata;
  static deserializeBinaryFromReader(message: ExecutedActionMetadata, reader: jspb.BinaryReader): ExecutedActionMetadata;
}

export namespace ExecutedActionMetadata {
  export type AsObject = {
    worker: string,
    queuedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    workerStartTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    workerCompletedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    inputFetchStartTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    inputFetchCompletedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    executionStartTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    executionCompletedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    virtualExecutionDuration?: google_protobuf_duration_pb.Duration.AsObject,
    outputUploadStartTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    outputUploadCompletedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    auxiliaryMetadataList: Array<google_protobuf_any_pb.Any.AsObject>,
    executorId: string,
    ioStats?: IOStats.AsObject,
    usageStats?: UsageStats.AsObject,
    estimatedTaskSize?: proto_scheduler_pb.TaskSize.AsObject,
    doNotCache: boolean,
  }
}

export class ActionResult extends jspb.Message {
  clearOutputFilesList(): void;
  getOutputFilesList(): Array<OutputFile>;
  setOutputFilesList(value: Array<OutputFile>): void;
  addOutputFiles(value?: OutputFile, index?: number): OutputFile;

  clearOutputFileSymlinksList(): void;
  getOutputFileSymlinksList(): Array<OutputSymlink>;
  setOutputFileSymlinksList(value: Array<OutputSymlink>): void;
  addOutputFileSymlinks(value?: OutputSymlink, index?: number): OutputSymlink;

  clearOutputSymlinksList(): void;
  getOutputSymlinksList(): Array<OutputSymlink>;
  setOutputSymlinksList(value: Array<OutputSymlink>): void;
  addOutputSymlinks(value?: OutputSymlink, index?: number): OutputSymlink;

  clearOutputDirectoriesList(): void;
  getOutputDirectoriesList(): Array<OutputDirectory>;
  setOutputDirectoriesList(value: Array<OutputDirectory>): void;
  addOutputDirectories(value?: OutputDirectory, index?: number): OutputDirectory;

  clearOutputDirectorySymlinksList(): void;
  getOutputDirectorySymlinksList(): Array<OutputSymlink>;
  setOutputDirectorySymlinksList(value: Array<OutputSymlink>): void;
  addOutputDirectorySymlinks(value?: OutputSymlink, index?: number): OutputSymlink;

  getExitCode(): number;
  setExitCode(value: number): void;

  getStdoutRaw(): Uint8Array | string;
  getStdoutRaw_asU8(): Uint8Array;
  getStdoutRaw_asB64(): string;
  setStdoutRaw(value: Uint8Array | string): void;

  hasStdoutDigest(): boolean;
  clearStdoutDigest(): void;
  getStdoutDigest(): Digest | undefined;
  setStdoutDigest(value?: Digest): void;

  getStderrRaw(): Uint8Array | string;
  getStderrRaw_asU8(): Uint8Array;
  getStderrRaw_asB64(): string;
  setStderrRaw(value: Uint8Array | string): void;

  hasStderrDigest(): boolean;
  clearStderrDigest(): void;
  getStderrDigest(): Digest | undefined;
  setStderrDigest(value?: Digest): void;

  hasExecutionMetadata(): boolean;
  clearExecutionMetadata(): void;
  getExecutionMetadata(): ExecutedActionMetadata | undefined;
  setExecutionMetadata(value?: ExecutedActionMetadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionResult.AsObject;
  static toObject(includeInstance: boolean, msg: ActionResult): ActionResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionResult;
  static deserializeBinaryFromReader(message: ActionResult, reader: jspb.BinaryReader): ActionResult;
}

export namespace ActionResult {
  export type AsObject = {
    outputFilesList: Array<OutputFile.AsObject>,
    outputFileSymlinksList: Array<OutputSymlink.AsObject>,
    outputSymlinksList: Array<OutputSymlink.AsObject>,
    outputDirectoriesList: Array<OutputDirectory.AsObject>,
    outputDirectorySymlinksList: Array<OutputSymlink.AsObject>,
    exitCode: number,
    stdoutRaw: Uint8Array | string,
    stdoutDigest?: Digest.AsObject,
    stderrRaw: Uint8Array | string,
    stderrDigest?: Digest.AsObject,
    executionMetadata?: ExecutedActionMetadata.AsObject,
  }
}

export class OutputFile extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  hasDigest(): boolean;
  clearDigest(): void;
  getDigest(): Digest | undefined;
  setDigest(value?: Digest): void;

  getIsExecutable(): boolean;
  setIsExecutable(value: boolean): void;

  getContents(): Uint8Array | string;
  getContents_asU8(): Uint8Array;
  getContents_asB64(): string;
  setContents(value: Uint8Array | string): void;

  hasNodeProperties(): boolean;
  clearNodeProperties(): void;
  getNodeProperties(): NodeProperties | undefined;
  setNodeProperties(value?: NodeProperties): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputFile.AsObject;
  static toObject(includeInstance: boolean, msg: OutputFile): OutputFile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OutputFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputFile;
  static deserializeBinaryFromReader(message: OutputFile, reader: jspb.BinaryReader): OutputFile;
}

export namespace OutputFile {
  export type AsObject = {
    path: string,
    digest?: Digest.AsObject,
    isExecutable: boolean,
    contents: Uint8Array | string,
    nodeProperties?: NodeProperties.AsObject,
  }
}

export class Tree extends jspb.Message {
  hasRoot(): boolean;
  clearRoot(): void;
  getRoot(): Directory | undefined;
  setRoot(value?: Directory): void;

  clearChildrenList(): void;
  getChildrenList(): Array<Directory>;
  setChildrenList(value: Array<Directory>): void;
  addChildren(value?: Directory, index?: number): Directory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tree.AsObject;
  static toObject(includeInstance: boolean, msg: Tree): Tree.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tree, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tree;
  static deserializeBinaryFromReader(message: Tree, reader: jspb.BinaryReader): Tree;
}

export namespace Tree {
  export type AsObject = {
    root?: Directory.AsObject,
    childrenList: Array<Directory.AsObject>,
  }
}

export class OutputDirectory extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  hasTreeDigest(): boolean;
  clearTreeDigest(): void;
  getTreeDigest(): Digest | undefined;
  setTreeDigest(value?: Digest): void;

  getIsTopologicallySorted(): boolean;
  setIsTopologicallySorted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputDirectory.AsObject;
  static toObject(includeInstance: boolean, msg: OutputDirectory): OutputDirectory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OutputDirectory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputDirectory;
  static deserializeBinaryFromReader(message: OutputDirectory, reader: jspb.BinaryReader): OutputDirectory;
}

export namespace OutputDirectory {
  export type AsObject = {
    path: string,
    treeDigest?: Digest.AsObject,
    isTopologicallySorted: boolean,
  }
}

export class OutputSymlink extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getTarget(): string;
  setTarget(value: string): void;

  hasNodeProperties(): boolean;
  clearNodeProperties(): void;
  getNodeProperties(): NodeProperties | undefined;
  setNodeProperties(value?: NodeProperties): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputSymlink.AsObject;
  static toObject(includeInstance: boolean, msg: OutputSymlink): OutputSymlink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OutputSymlink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputSymlink;
  static deserializeBinaryFromReader(message: OutputSymlink, reader: jspb.BinaryReader): OutputSymlink;
}

export namespace OutputSymlink {
  export type AsObject = {
    path: string,
    target: string,
    nodeProperties?: NodeProperties.AsObject,
  }
}

export class ExecutionPolicy extends jspb.Message {
  getPriority(): number;
  setPriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutionPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutionPolicy): ExecutionPolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutionPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutionPolicy;
  static deserializeBinaryFromReader(message: ExecutionPolicy, reader: jspb.BinaryReader): ExecutionPolicy;
}

export namespace ExecutionPolicy {
  export type AsObject = {
    priority: number,
  }
}

export class ResultsCachePolicy extends jspb.Message {
  getPriority(): number;
  setPriority(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultsCachePolicy.AsObject;
  static toObject(includeInstance: boolean, msg: ResultsCachePolicy): ResultsCachePolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResultsCachePolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultsCachePolicy;
  static deserializeBinaryFromReader(message: ResultsCachePolicy, reader: jspb.BinaryReader): ResultsCachePolicy;
}

export namespace ResultsCachePolicy {
  export type AsObject = {
    priority: number,
  }
}

export class ExecuteRequest extends jspb.Message {
  getInstanceName(): string;
  setInstanceName(value: string): void;

  getSkipCacheLookup(): boolean;
  setSkipCacheLookup(value: boolean): void;

  hasActionDigest(): boolean;
  clearActionDigest(): void;
  getActionDigest(): Digest | undefined;
  setActionDigest(value?: Digest): void;

  hasExecutionPolicy(): boolean;
  clearExecutionPolicy(): void;
  getExecutionPolicy(): ExecutionPolicy | undefined;
  setExecutionPolicy(value?: ExecutionPolicy): void;

  hasResultsCachePolicy(): boolean;
  clearResultsCachePolicy(): void;
  getResultsCachePolicy(): ResultsCachePolicy | undefined;
  setResultsCachePolicy(value?: ResultsCachePolicy): void;

  getDigestFunction(): DigestFunction.ValueMap[keyof DigestFunction.ValueMap];
  setDigestFunction(value: DigestFunction.ValueMap[keyof DigestFunction.ValueMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteRequest): ExecuteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteRequest;
  static deserializeBinaryFromReader(message: ExecuteRequest, reader: jspb.BinaryReader): ExecuteRequest;
}

export namespace ExecuteRequest {
  export type AsObject = {
    instanceName: string,
    skipCacheLookup: boolean,
    actionDigest?: Digest.AsObject,
    executionPolicy?: ExecutionPolicy.AsObject,
    resultsCachePolicy?: ResultsCachePolicy.AsObject,
    digestFunction: DigestFunction.ValueMap[keyof DigestFunction.ValueMap],
  }
}

export class LogFile extends jspb.Message {
  hasDigest(): boolean;
  clearDigest(): void;
  getDigest(): Digest | undefined;
  setDigest(value?: Digest): void;

  getHumanReadable(): boolean;
  setHumanReadable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogFile.AsObject;
  static toObject(includeInstance: boolean, msg: LogFile): LogFile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogFile;
  static deserializeBinaryFromReader(message: LogFile, reader: jspb.BinaryReader): LogFile;
}

export namespace LogFile {
  export type AsObject = {
    digest?: Digest.AsObject,
    humanReadable: boolean,
  }
}

export class ExecuteResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): ActionResult | undefined;
  setResult(value?: ActionResult): void;

  getCachedResult(): boolean;
  setCachedResult(value: boolean): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): void;

  getServerLogsMap(): jspb.Map<string, LogFile>;
  clearServerLogsMap(): void;
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteResponse): ExecuteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteResponse;
  static deserializeBinaryFromReader(message: ExecuteResponse, reader: jspb.BinaryReader): ExecuteResponse;
}

export namespace ExecuteResponse {
  export type AsObject = {
    result?: ActionResult.AsObject,
    cachedResult: boolean,
    status?: google_rpc_status_pb.Status.AsObject,
    serverLogsMap: Array<[string, LogFile.AsObject]>,
    message: string,
  }
}

export class ExecutionStage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutionStage.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutionStage): ExecutionStage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutionStage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutionStage;
  static deserializeBinaryFromReader(message: ExecutionStage, reader: jspb.BinaryReader): ExecutionStage;
}

export namespace ExecutionStage {
  export type AsObject = {
  }

  export interface ValueMap {
    UNKNOWN: 0;
    CACHE_CHECK: 1;
    QUEUED: 2;
    EXECUTING: 3;
    COMPLETED: 4;
  }

  export const Value: ValueMap;
}

export class ExecuteOperationMetadata extends jspb.Message {
  getStage(): ExecutionStage.ValueMap[keyof ExecutionStage.ValueMap];
  setStage(value: ExecutionStage.ValueMap[keyof ExecutionStage.ValueMap]): void;

  hasActionDigest(): boolean;
  clearActionDigest(): void;
  getActionDigest(): Digest | undefined;
  setActionDigest(value?: Digest): void;

  getStdoutStreamName(): string;
  setStdoutStreamName(value: string): void;

  getStderrStreamName(): string;
  setStderrStreamName(value: string): void;

  hasPartialExecutionMetadata(): boolean;
  clearPartialExecutionMetadata(): void;
  getPartialExecutionMetadata(): ExecutedActionMetadata | undefined;
  setPartialExecutionMetadata(value?: ExecutedActionMetadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteOperationMetadata): ExecuteOperationMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecuteOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteOperationMetadata;
  static deserializeBinaryFromReader(message: ExecuteOperationMetadata, reader: jspb.BinaryReader): ExecuteOperationMetadata;
}

export namespace ExecuteOperationMetadata {
  export type AsObject = {
    stage: ExecutionStage.ValueMap[keyof ExecutionStage.ValueMap],
    actionDigest?: Digest.AsObject,
    stdoutStreamName: string,
    stderrStreamName: string,
    partialExecutionMetadata?: ExecutedActionMetadata.AsObject,
  }
}

export class WaitExecutionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WaitExecutionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WaitExecutionRequest): WaitExecutionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WaitExecutionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WaitExecutionRequest;
  static deserializeBinaryFromReader(message: WaitExecutionRequest, reader: jspb.BinaryReader): WaitExecutionRequest;
}

export namespace WaitExecutionRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetActionResultRequest extends jspb.Message {
  getInstanceName(): string;
  setInstanceName(value: string): void;

  hasActionDigest(): boolean;
  clearActionDigest(): void;
  getActionDigest(): Digest | undefined;
  setActionDigest(value?: Digest): void;

  getInlineStdout(): boolean;
  setInlineStdout(value: boolean): void;

  getInlineStderr(): boolean;
  setInlineStderr(value: boolean): void;

  clearInlineOutputFilesList(): void;
  getInlineOutputFilesList(): Array<string>;
  setInlineOutputFilesList(value: Array<string>): void;
  addInlineOutputFiles(value: string, index?: number): string;

  getDigestFunction(): DigestFunction.ValueMap[keyof DigestFunction.ValueMap];
  setDigestFunction(value: DigestFunction.ValueMap[keyof DigestFunction.ValueMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionResultRequest): GetActionResultRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetActionResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionResultRequest;
  static deserializeBinaryFromReader(message: GetActionResultRequest, reader: jspb.BinaryReader): GetActionResultRequest;
}

export namespace GetActionResultRequest {
  export type AsObject = {
    instanceName: string,
    actionDigest?: Digest.AsObject,
    inlineStdout: boolean,
    inlineStderr: boolean,
    inlineOutputFilesList: Array<string>,
    digestFunction: DigestFunction.ValueMap[keyof DigestFunction.ValueMap],
  }
}

export class UpdateActionResultRequest extends jspb.Message {
  getInstanceName(): string;
  setInstanceName(value: string): void;

  hasActionDigest(): boolean;
  clearActionDigest(): void;
  getActionDigest(): Digest | undefined;
  setActionDigest(value?: Digest): void;

  hasActionResult(): boolean;
  clearActionResult(): void;
  getActionResult(): ActionResult | undefined;
  setActionResult(value?: ActionResult): void;

  hasResultsCachePolicy(): boolean;
  clearResultsCachePolicy(): void;
  getResultsCachePolicy(): ResultsCachePolicy | undefined;
  setResultsCachePolicy(value?: ResultsCachePolicy): void;

  getDigestFunction(): DigestFunction.ValueMap[keyof DigestFunction.ValueMap];
  setDigestFunction(value: DigestFunction.ValueMap[keyof DigestFunction.ValueMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateActionResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateActionResultRequest): UpdateActionResultRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateActionResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateActionResultRequest;
  static deserializeBinaryFromReader(message: UpdateActionResultRequest, reader: jspb.BinaryReader): UpdateActionResultRequest;
}

export namespace UpdateActionResultRequest {
  export type AsObject = {
    instanceName: string,
    actionDigest?: Digest.AsObject,
    actionResult?: ActionResult.AsObject,
    resultsCachePolicy?: ResultsCachePolicy.AsObject,
    digestFunction: DigestFunction.ValueMap[keyof DigestFunction.ValueMap],
  }
}

export class FindMissingBlobsRequest extends jspb.Message {
  getInstanceName(): string;
  setInstanceName(value: string): void;

  clearBlobDigestsList(): void;
  getBlobDigestsList(): Array<Digest>;
  setBlobDigestsList(value: Array<Digest>): void;
  addBlobDigests(value?: Digest, index?: number): Digest;

  getDigestFunction(): DigestFunction.ValueMap[keyof DigestFunction.ValueMap];
  setDigestFunction(value: DigestFunction.ValueMap[keyof DigestFunction.ValueMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindMissingBlobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FindMissingBlobsRequest): FindMissingBlobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindMissingBlobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindMissingBlobsRequest;
  static deserializeBinaryFromReader(message: FindMissingBlobsRequest, reader: jspb.BinaryReader): FindMissingBlobsRequest;
}

export namespace FindMissingBlobsRequest {
  export type AsObject = {
    instanceName: string,
    blobDigestsList: Array<Digest.AsObject>,
    digestFunction: DigestFunction.ValueMap[keyof DigestFunction.ValueMap],
  }
}

export class FindMissingBlobsResponse extends jspb.Message {
  clearMissingBlobDigestsList(): void;
  getMissingBlobDigestsList(): Array<Digest>;
  setMissingBlobDigestsList(value: Array<Digest>): void;
  addMissingBlobDigests(value?: Digest, index?: number): Digest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindMissingBlobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FindMissingBlobsResponse): FindMissingBlobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FindMissingBlobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindMissingBlobsResponse;
  static deserializeBinaryFromReader(message: FindMissingBlobsResponse, reader: jspb.BinaryReader): FindMissingBlobsResponse;
}

export namespace FindMissingBlobsResponse {
  export type AsObject = {
    missingBlobDigestsList: Array<Digest.AsObject>,
  }
}

export class BatchUpdateBlobsRequest extends jspb.Message {
  getInstanceName(): string;
  setInstanceName(value: string): void;

  clearRequestsList(): void;
  getRequestsList(): Array<BatchUpdateBlobsRequest.Request>;
  setRequestsList(value: Array<BatchUpdateBlobsRequest.Request>): void;
  addRequests(value?: BatchUpdateBlobsRequest.Request, index?: number): BatchUpdateBlobsRequest.Request;

  getDigestFunction(): DigestFunction.ValueMap[keyof DigestFunction.ValueMap];
  setDigestFunction(value: DigestFunction.ValueMap[keyof DigestFunction.ValueMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchUpdateBlobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchUpdateBlobsRequest): BatchUpdateBlobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchUpdateBlobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchUpdateBlobsRequest;
  static deserializeBinaryFromReader(message: BatchUpdateBlobsRequest, reader: jspb.BinaryReader): BatchUpdateBlobsRequest;
}

export namespace BatchUpdateBlobsRequest {
  export type AsObject = {
    instanceName: string,
    requestsList: Array<BatchUpdateBlobsRequest.Request.AsObject>,
    digestFunction: DigestFunction.ValueMap[keyof DigestFunction.ValueMap],
  }

  export class Request extends jspb.Message {
    hasDigest(): boolean;
    clearDigest(): void;
    getDigest(): Digest | undefined;
    setDigest(value?: Digest): void;

    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): void;

    getCompressor(): Compressor.ValueMap[keyof Compressor.ValueMap];
    setCompressor(value: Compressor.ValueMap[keyof Compressor.ValueMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
  }

  export namespace Request {
    export type AsObject = {
      digest?: Digest.AsObject,
      data: Uint8Array | string,
      compressor: Compressor.ValueMap[keyof Compressor.ValueMap],
    }
  }
}

export class BatchUpdateBlobsResponse extends jspb.Message {
  clearResponsesList(): void;
  getResponsesList(): Array<BatchUpdateBlobsResponse.Response>;
  setResponsesList(value: Array<BatchUpdateBlobsResponse.Response>): void;
  addResponses(value?: BatchUpdateBlobsResponse.Response, index?: number): BatchUpdateBlobsResponse.Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchUpdateBlobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchUpdateBlobsResponse): BatchUpdateBlobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchUpdateBlobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchUpdateBlobsResponse;
  static deserializeBinaryFromReader(message: BatchUpdateBlobsResponse, reader: jspb.BinaryReader): BatchUpdateBlobsResponse;
}

export namespace BatchUpdateBlobsResponse {
  export type AsObject = {
    responsesList: Array<BatchUpdateBlobsResponse.Response.AsObject>,
  }

  export class Response extends jspb.Message {
    hasDigest(): boolean;
    clearDigest(): void;
    getDigest(): Digest | undefined;
    setDigest(value?: Digest): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
  }

  export namespace Response {
    export type AsObject = {
      digest?: Digest.AsObject,
      status?: google_rpc_status_pb.Status.AsObject,
    }
  }
}

export class BatchReadBlobsRequest extends jspb.Message {
  getInstanceName(): string;
  setInstanceName(value: string): void;

  clearDigestsList(): void;
  getDigestsList(): Array<Digest>;
  setDigestsList(value: Array<Digest>): void;
  addDigests(value?: Digest, index?: number): Digest;

  clearAcceptableCompressorsList(): void;
  getAcceptableCompressorsList(): Array<Compressor.ValueMap[keyof Compressor.ValueMap]>;
  setAcceptableCompressorsList(value: Array<Compressor.ValueMap[keyof Compressor.ValueMap]>): void;
  addAcceptableCompressors(value: Compressor.ValueMap[keyof Compressor.ValueMap], index?: number): Compressor.ValueMap[keyof Compressor.ValueMap];

  getDigestFunction(): DigestFunction.ValueMap[keyof DigestFunction.ValueMap];
  setDigestFunction(value: DigestFunction.ValueMap[keyof DigestFunction.ValueMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchReadBlobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchReadBlobsRequest): BatchReadBlobsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchReadBlobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchReadBlobsRequest;
  static deserializeBinaryFromReader(message: BatchReadBlobsRequest, reader: jspb.BinaryReader): BatchReadBlobsRequest;
}

export namespace BatchReadBlobsRequest {
  export type AsObject = {
    instanceName: string,
    digestsList: Array<Digest.AsObject>,
    acceptableCompressorsList: Array<Compressor.ValueMap[keyof Compressor.ValueMap]>,
    digestFunction: DigestFunction.ValueMap[keyof DigestFunction.ValueMap],
  }
}

export class BatchReadBlobsResponse extends jspb.Message {
  clearResponsesList(): void;
  getResponsesList(): Array<BatchReadBlobsResponse.Response>;
  setResponsesList(value: Array<BatchReadBlobsResponse.Response>): void;
  addResponses(value?: BatchReadBlobsResponse.Response, index?: number): BatchReadBlobsResponse.Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchReadBlobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchReadBlobsResponse): BatchReadBlobsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchReadBlobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchReadBlobsResponse;
  static deserializeBinaryFromReader(message: BatchReadBlobsResponse, reader: jspb.BinaryReader): BatchReadBlobsResponse;
}

export namespace BatchReadBlobsResponse {
  export type AsObject = {
    responsesList: Array<BatchReadBlobsResponse.Response.AsObject>,
  }

  export class Response extends jspb.Message {
    hasDigest(): boolean;
    clearDigest(): void;
    getDigest(): Digest | undefined;
    setDigest(value?: Digest): void;

    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): void;

    getCompressor(): Compressor.ValueMap[keyof Compressor.ValueMap];
    setCompressor(value: Compressor.ValueMap[keyof Compressor.ValueMap]): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
  }

  export namespace Response {
    export type AsObject = {
      digest?: Digest.AsObject,
      data: Uint8Array | string,
      compressor: Compressor.ValueMap[keyof Compressor.ValueMap],
      status?: google_rpc_status_pb.Status.AsObject,
    }
  }
}

export class GetTreeRequest extends jspb.Message {
  getInstanceName(): string;
  setInstanceName(value: string): void;

  hasRootDigest(): boolean;
  clearRootDigest(): void;
  getRootDigest(): Digest | undefined;
  setRootDigest(value?: Digest): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getDigestFunction(): DigestFunction.ValueMap[keyof DigestFunction.ValueMap];
  setDigestFunction(value: DigestFunction.ValueMap[keyof DigestFunction.ValueMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTreeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTreeRequest): GetTreeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTreeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTreeRequest;
  static deserializeBinaryFromReader(message: GetTreeRequest, reader: jspb.BinaryReader): GetTreeRequest;
}

export namespace GetTreeRequest {
  export type AsObject = {
    instanceName: string,
    rootDigest?: Digest.AsObject,
    pageSize: number,
    pageToken: string,
    digestFunction: DigestFunction.ValueMap[keyof DigestFunction.ValueMap],
  }
}

export class GetTreeResponse extends jspb.Message {
  clearDirectoriesList(): void;
  getDirectoriesList(): Array<Directory>;
  setDirectoriesList(value: Array<Directory>): void;
  addDirectories(value?: Directory, index?: number): Directory;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTreeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTreeResponse): GetTreeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTreeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTreeResponse;
  static deserializeBinaryFromReader(message: GetTreeResponse, reader: jspb.BinaryReader): GetTreeResponse;
}

export namespace GetTreeResponse {
  export type AsObject = {
    directoriesList: Array<Directory.AsObject>,
    nextPageToken: string,
  }
}

export class GetCapabilitiesRequest extends jspb.Message {
  getInstanceName(): string;
  setInstanceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCapabilitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCapabilitiesRequest): GetCapabilitiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCapabilitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCapabilitiesRequest;
  static deserializeBinaryFromReader(message: GetCapabilitiesRequest, reader: jspb.BinaryReader): GetCapabilitiesRequest;
}

export namespace GetCapabilitiesRequest {
  export type AsObject = {
    instanceName: string,
  }
}

export class ServerCapabilities extends jspb.Message {
  hasCacheCapabilities(): boolean;
  clearCacheCapabilities(): void;
  getCacheCapabilities(): CacheCapabilities | undefined;
  setCacheCapabilities(value?: CacheCapabilities): void;

  hasExecutionCapabilities(): boolean;
  clearExecutionCapabilities(): void;
  getExecutionCapabilities(): ExecutionCapabilities | undefined;
  setExecutionCapabilities(value?: ExecutionCapabilities): void;

  hasDeprecatedApiVersion(): boolean;
  clearDeprecatedApiVersion(): void;
  getDeprecatedApiVersion(): proto_semver_pb.SemVer | undefined;
  setDeprecatedApiVersion(value?: proto_semver_pb.SemVer): void;

  hasLowApiVersion(): boolean;
  clearLowApiVersion(): void;
  getLowApiVersion(): proto_semver_pb.SemVer | undefined;
  setLowApiVersion(value?: proto_semver_pb.SemVer): void;

  hasHighApiVersion(): boolean;
  clearHighApiVersion(): void;
  getHighApiVersion(): proto_semver_pb.SemVer | undefined;
  setHighApiVersion(value?: proto_semver_pb.SemVer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerCapabilities.AsObject;
  static toObject(includeInstance: boolean, msg: ServerCapabilities): ServerCapabilities.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerCapabilities, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerCapabilities;
  static deserializeBinaryFromReader(message: ServerCapabilities, reader: jspb.BinaryReader): ServerCapabilities;
}

export namespace ServerCapabilities {
  export type AsObject = {
    cacheCapabilities?: CacheCapabilities.AsObject,
    executionCapabilities?: ExecutionCapabilities.AsObject,
    deprecatedApiVersion?: proto_semver_pb.SemVer.AsObject,
    lowApiVersion?: proto_semver_pb.SemVer.AsObject,
    highApiVersion?: proto_semver_pb.SemVer.AsObject,
  }
}

export class DigestFunction extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DigestFunction.AsObject;
  static toObject(includeInstance: boolean, msg: DigestFunction): DigestFunction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DigestFunction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DigestFunction;
  static deserializeBinaryFromReader(message: DigestFunction, reader: jspb.BinaryReader): DigestFunction;
}

export namespace DigestFunction {
  export type AsObject = {
  }

  export interface ValueMap {
    UNKNOWN: 0;
    SHA256: 1;
    SHA1: 2;
    MD5: 3;
    VSO: 4;
    SHA384: 5;
    SHA512: 6;
    MURMUR3: 7;
    SHA256TREE: 8;
    BLAKE3: 9;
  }

  export const Value: ValueMap;
}

export class ActionCacheUpdateCapabilities extends jspb.Message {
  getUpdateEnabled(): boolean;
  setUpdateEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionCacheUpdateCapabilities.AsObject;
  static toObject(includeInstance: boolean, msg: ActionCacheUpdateCapabilities): ActionCacheUpdateCapabilities.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionCacheUpdateCapabilities, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionCacheUpdateCapabilities;
  static deserializeBinaryFromReader(message: ActionCacheUpdateCapabilities, reader: jspb.BinaryReader): ActionCacheUpdateCapabilities;
}

export namespace ActionCacheUpdateCapabilities {
  export type AsObject = {
    updateEnabled: boolean,
  }
}

export class PriorityCapabilities extends jspb.Message {
  clearPrioritiesList(): void;
  getPrioritiesList(): Array<PriorityCapabilities.PriorityRange>;
  setPrioritiesList(value: Array<PriorityCapabilities.PriorityRange>): void;
  addPriorities(value?: PriorityCapabilities.PriorityRange, index?: number): PriorityCapabilities.PriorityRange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriorityCapabilities.AsObject;
  static toObject(includeInstance: boolean, msg: PriorityCapabilities): PriorityCapabilities.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriorityCapabilities, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriorityCapabilities;
  static deserializeBinaryFromReader(message: PriorityCapabilities, reader: jspb.BinaryReader): PriorityCapabilities;
}

export namespace PriorityCapabilities {
  export type AsObject = {
    prioritiesList: Array<PriorityCapabilities.PriorityRange.AsObject>,
  }

  export class PriorityRange extends jspb.Message {
    getMinPriority(): number;
    setMinPriority(value: number): void;

    getMaxPriority(): number;
    setMaxPriority(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriorityRange.AsObject;
    static toObject(includeInstance: boolean, msg: PriorityRange): PriorityRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriorityRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriorityRange;
    static deserializeBinaryFromReader(message: PriorityRange, reader: jspb.BinaryReader): PriorityRange;
  }

  export namespace PriorityRange {
    export type AsObject = {
      minPriority: number,
      maxPriority: number,
    }
  }
}

export class SymlinkAbsolutePathStrategy extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymlinkAbsolutePathStrategy.AsObject;
  static toObject(includeInstance: boolean, msg: SymlinkAbsolutePathStrategy): SymlinkAbsolutePathStrategy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymlinkAbsolutePathStrategy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymlinkAbsolutePathStrategy;
  static deserializeBinaryFromReader(message: SymlinkAbsolutePathStrategy, reader: jspb.BinaryReader): SymlinkAbsolutePathStrategy;
}

export namespace SymlinkAbsolutePathStrategy {
  export type AsObject = {
  }

  export interface ValueMap {
    UNKNOWN: 0;
    DISALLOWED: 1;
    ALLOWED: 2;
  }

  export const Value: ValueMap;
}

export class Compressor extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Compressor.AsObject;
  static toObject(includeInstance: boolean, msg: Compressor): Compressor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Compressor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Compressor;
  static deserializeBinaryFromReader(message: Compressor, reader: jspb.BinaryReader): Compressor;
}

export namespace Compressor {
  export type AsObject = {
  }

  export interface ValueMap {
    IDENTITY: 0;
    ZSTD: 1;
    DEFLATE: 2;
    BROTLI: 3;
  }

  export const Value: ValueMap;
}

export class CacheCapabilities extends jspb.Message {
  clearDigestFunctionsList(): void;
  getDigestFunctionsList(): Array<DigestFunction.ValueMap[keyof DigestFunction.ValueMap]>;
  setDigestFunctionsList(value: Array<DigestFunction.ValueMap[keyof DigestFunction.ValueMap]>): void;
  addDigestFunctions(value: DigestFunction.ValueMap[keyof DigestFunction.ValueMap], index?: number): DigestFunction.ValueMap[keyof DigestFunction.ValueMap];

  hasActionCacheUpdateCapabilities(): boolean;
  clearActionCacheUpdateCapabilities(): void;
  getActionCacheUpdateCapabilities(): ActionCacheUpdateCapabilities | undefined;
  setActionCacheUpdateCapabilities(value?: ActionCacheUpdateCapabilities): void;

  hasCachePriorityCapabilities(): boolean;
  clearCachePriorityCapabilities(): void;
  getCachePriorityCapabilities(): PriorityCapabilities | undefined;
  setCachePriorityCapabilities(value?: PriorityCapabilities): void;

  getMaxBatchTotalSizeBytes(): number;
  setMaxBatchTotalSizeBytes(value: number): void;

  getSymlinkAbsolutePathStrategy(): SymlinkAbsolutePathStrategy.ValueMap[keyof SymlinkAbsolutePathStrategy.ValueMap];
  setSymlinkAbsolutePathStrategy(value: SymlinkAbsolutePathStrategy.ValueMap[keyof SymlinkAbsolutePathStrategy.ValueMap]): void;

  clearSupportedCompressorsList(): void;
  getSupportedCompressorsList(): Array<Compressor.ValueMap[keyof Compressor.ValueMap]>;
  setSupportedCompressorsList(value: Array<Compressor.ValueMap[keyof Compressor.ValueMap]>): void;
  addSupportedCompressors(value: Compressor.ValueMap[keyof Compressor.ValueMap], index?: number): Compressor.ValueMap[keyof Compressor.ValueMap];

  clearSupportedBatchUpdateCompressorsList(): void;
  getSupportedBatchUpdateCompressorsList(): Array<Compressor.ValueMap[keyof Compressor.ValueMap]>;
  setSupportedBatchUpdateCompressorsList(value: Array<Compressor.ValueMap[keyof Compressor.ValueMap]>): void;
  addSupportedBatchUpdateCompressors(value: Compressor.ValueMap[keyof Compressor.ValueMap], index?: number): Compressor.ValueMap[keyof Compressor.ValueMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CacheCapabilities.AsObject;
  static toObject(includeInstance: boolean, msg: CacheCapabilities): CacheCapabilities.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CacheCapabilities, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CacheCapabilities;
  static deserializeBinaryFromReader(message: CacheCapabilities, reader: jspb.BinaryReader): CacheCapabilities;
}

export namespace CacheCapabilities {
  export type AsObject = {
    digestFunctionsList: Array<DigestFunction.ValueMap[keyof DigestFunction.ValueMap]>,
    actionCacheUpdateCapabilities?: ActionCacheUpdateCapabilities.AsObject,
    cachePriorityCapabilities?: PriorityCapabilities.AsObject,
    maxBatchTotalSizeBytes: number,
    symlinkAbsolutePathStrategy: SymlinkAbsolutePathStrategy.ValueMap[keyof SymlinkAbsolutePathStrategy.ValueMap],
    supportedCompressorsList: Array<Compressor.ValueMap[keyof Compressor.ValueMap]>,
    supportedBatchUpdateCompressorsList: Array<Compressor.ValueMap[keyof Compressor.ValueMap]>,
  }
}

export class ExecutionCapabilities extends jspb.Message {
  getDigestFunction(): DigestFunction.ValueMap[keyof DigestFunction.ValueMap];
  setDigestFunction(value: DigestFunction.ValueMap[keyof DigestFunction.ValueMap]): void;

  getExecEnabled(): boolean;
  setExecEnabled(value: boolean): void;

  hasExecutionPriorityCapabilities(): boolean;
  clearExecutionPriorityCapabilities(): void;
  getExecutionPriorityCapabilities(): PriorityCapabilities | undefined;
  setExecutionPriorityCapabilities(value?: PriorityCapabilities): void;

  clearSupportedNodePropertiesList(): void;
  getSupportedNodePropertiesList(): Array<string>;
  setSupportedNodePropertiesList(value: Array<string>): void;
  addSupportedNodeProperties(value: string, index?: number): string;

  clearDigestFunctionsList(): void;
  getDigestFunctionsList(): Array<DigestFunction.ValueMap[keyof DigestFunction.ValueMap]>;
  setDigestFunctionsList(value: Array<DigestFunction.ValueMap[keyof DigestFunction.ValueMap]>): void;
  addDigestFunctions(value: DigestFunction.ValueMap[keyof DigestFunction.ValueMap], index?: number): DigestFunction.ValueMap[keyof DigestFunction.ValueMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutionCapabilities.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutionCapabilities): ExecutionCapabilities.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutionCapabilities, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutionCapabilities;
  static deserializeBinaryFromReader(message: ExecutionCapabilities, reader: jspb.BinaryReader): ExecutionCapabilities;
}

export namespace ExecutionCapabilities {
  export type AsObject = {
    digestFunction: DigestFunction.ValueMap[keyof DigestFunction.ValueMap],
    execEnabled: boolean,
    executionPriorityCapabilities?: PriorityCapabilities.AsObject,
    supportedNodePropertiesList: Array<string>,
    digestFunctionsList: Array<DigestFunction.ValueMap[keyof DigestFunction.ValueMap]>,
  }
}

export class ToolDetails extends jspb.Message {
  getToolName(): string;
  setToolName(value: string): void;

  getToolVersion(): string;
  setToolVersion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToolDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ToolDetails): ToolDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToolDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToolDetails;
  static deserializeBinaryFromReader(message: ToolDetails, reader: jspb.BinaryReader): ToolDetails;
}

export namespace ToolDetails {
  export type AsObject = {
    toolName: string,
    toolVersion: string,
  }
}

export class RequestMetadata extends jspb.Message {
  hasToolDetails(): boolean;
  clearToolDetails(): void;
  getToolDetails(): ToolDetails | undefined;
  setToolDetails(value?: ToolDetails): void;

  getActionId(): string;
  setActionId(value: string): void;

  getToolInvocationId(): string;
  setToolInvocationId(value: string): void;

  getCorrelatedInvocationsId(): string;
  setCorrelatedInvocationsId(value: string): void;

  getActionMnemonic(): string;
  setActionMnemonic(value: string): void;

  getTargetId(): string;
  setTargetId(value: string): void;

  getConfigurationId(): string;
  setConfigurationId(value: string): void;

  hasExecutorDetails(): boolean;
  clearExecutorDetails(): void;
  getExecutorDetails(): ExecutorDetails | undefined;
  setExecutorDetails(value?: ExecutorDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: RequestMetadata): RequestMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestMetadata;
  static deserializeBinaryFromReader(message: RequestMetadata, reader: jspb.BinaryReader): RequestMetadata;
}

export namespace RequestMetadata {
  export type AsObject = {
    toolDetails?: ToolDetails.AsObject,
    actionId: string,
    toolInvocationId: string,
    correlatedInvocationsId: string,
    actionMnemonic: string,
    targetId: string,
    configurationId: string,
    executorDetails?: ExecutorDetails.AsObject,
  }
}

export class ExecutionTask extends jspb.Message {
  hasExecuteRequest(): boolean;
  clearExecuteRequest(): void;
  getExecuteRequest(): ExecuteRequest | undefined;
  setExecuteRequest(value?: ExecuteRequest): void;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): Action | undefined;
  setAction(value?: Action): void;

  hasCommand(): boolean;
  clearCommand(): void;
  getCommand(): Command | undefined;
  setCommand(value?: Command): void;

  getExecutionId(): string;
  setExecutionId(value: string): void;

  getJwt(): string;
  setJwt(value: string): void;

  getInvocationId(): string;
  setInvocationId(value: string): void;

  hasQueuedTimestamp(): boolean;
  clearQueuedTimestamp(): void;
  getQueuedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setQueuedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasPlatformOverrides(): boolean;
  clearPlatformOverrides(): void;
  getPlatformOverrides(): Platform | undefined;
  setPlatformOverrides(value?: Platform): void;

  hasRequestMetadata(): boolean;
  clearRequestMetadata(): void;
  getRequestMetadata(): RequestMetadata | undefined;
  setRequestMetadata(value?: RequestMetadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutionTask.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutionTask): ExecutionTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutionTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutionTask;
  static deserializeBinaryFromReader(message: ExecutionTask, reader: jspb.BinaryReader): ExecutionTask;
}

export namespace ExecutionTask {
  export type AsObject = {
    executeRequest?: ExecuteRequest.AsObject,
    action?: Action.AsObject,
    command?: Command.AsObject,
    executionId: string,
    jwt: string,
    invocationId: string,
    queuedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    platformOverrides?: Platform.AsObject,
    requestMetadata?: RequestMetadata.AsObject,
  }
}

export class ScheduledTask extends jspb.Message {
  hasExecutionTask(): boolean;
  clearExecutionTask(): void;
  getExecutionTask(): ExecutionTask | undefined;
  setExecutionTask(value?: ExecutionTask): void;

  hasSchedulingMetadata(): boolean;
  clearSchedulingMetadata(): void;
  getSchedulingMetadata(): proto_scheduler_pb.SchedulingMetadata | undefined;
  setSchedulingMetadata(value?: proto_scheduler_pb.SchedulingMetadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduledTask.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduledTask): ScheduledTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduledTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduledTask;
  static deserializeBinaryFromReader(message: ScheduledTask, reader: jspb.BinaryReader): ScheduledTask;
}

export namespace ScheduledTask {
  export type AsObject = {
    executionTask?: ExecutionTask.AsObject,
    schedulingMetadata?: proto_scheduler_pb.SchedulingMetadata.AsObject,
  }
}

export class ExecutorDetails extends jspb.Message {
  getExecutorHostId(): string;
  setExecutorHostId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutorDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutorDetails): ExecutorDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutorDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutorDetails;
  static deserializeBinaryFromReader(message: ExecutorDetails, reader: jspb.BinaryReader): ExecutorDetails;
}

export namespace ExecutorDetails {
  export type AsObject = {
    executorHostId: string,
  }
}

export class IOStats extends jspb.Message {
  getFileDownloadCount(): number;
  setFileDownloadCount(value: number): void;

  getFileDownloadSizeBytes(): number;
  setFileDownloadSizeBytes(value: number): void;

  getFileDownloadDurationUsec(): number;
  setFileDownloadDurationUsec(value: number): void;

  getFileUploadCount(): number;
  setFileUploadCount(value: number): void;

  getFileUploadSizeBytes(): number;
  setFileUploadSizeBytes(value: number): void;

  getFileUploadDurationUsec(): number;
  setFileUploadDurationUsec(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IOStats.AsObject;
  static toObject(includeInstance: boolean, msg: IOStats): IOStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IOStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IOStats;
  static deserializeBinaryFromReader(message: IOStats, reader: jspb.BinaryReader): IOStats;
}

export namespace IOStats {
  export type AsObject = {
    fileDownloadCount: number,
    fileDownloadSizeBytes: number,
    fileDownloadDurationUsec: number,
    fileUploadCount: number,
    fileUploadSizeBytes: number,
    fileUploadDurationUsec: number,
  }
}

export class UsageStats extends jspb.Message {
  getPeakMemoryBytes(): number;
  setPeakMemoryBytes(value: number): void;

  getCpuNanos(): number;
  setCpuNanos(value: number): void;

  getMemoryBytes(): number;
  setMemoryBytes(value: number): void;

  clearPeakFileSystemUsageList(): void;
  getPeakFileSystemUsageList(): Array<UsageStats.FileSystemUsage>;
  setPeakFileSystemUsageList(value: Array<UsageStats.FileSystemUsage>): void;
  addPeakFileSystemUsage(value?: UsageStats.FileSystemUsage, index?: number): UsageStats.FileSystemUsage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageStats.AsObject;
  static toObject(includeInstance: boolean, msg: UsageStats): UsageStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageStats;
  static deserializeBinaryFromReader(message: UsageStats, reader: jspb.BinaryReader): UsageStats;
}

export namespace UsageStats {
  export type AsObject = {
    peakMemoryBytes: number,
    cpuNanos: number,
    memoryBytes: number,
    peakFileSystemUsageList: Array<UsageStats.FileSystemUsage.AsObject>,
  }

  export class FileSystemUsage extends jspb.Message {
    getSource(): string;
    setSource(value: string): void;

    getTarget(): string;
    setTarget(value: string): void;

    getFstype(): string;
    setFstype(value: string): void;

    getUsedBytes(): number;
    setUsedBytes(value: number): void;

    getTotalBytes(): number;
    setTotalBytes(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileSystemUsage.AsObject;
    static toObject(includeInstance: boolean, msg: FileSystemUsage): FileSystemUsage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileSystemUsage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileSystemUsage;
    static deserializeBinaryFromReader(message: FileSystemUsage, reader: jspb.BinaryReader): FileSystemUsage;
  }

  export namespace FileSystemUsage {
    export type AsObject = {
      source: string,
      target: string,
      fstype: string,
      usedBytes: number,
      totalBytes: number,
    }
  }
}

export class StoredExecution extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getUpdatedAtUsec(): number;
  setUpdatedAtUsec(value: number): void;

  getExecutionId(): string;
  setExecutionId(value: string): void;

  getInvocationUuid(): string;
  setInvocationUuid(value: string): void;

  getCreatedAtUsec(): number;
  setCreatedAtUsec(value: number): void;

  getUserId(): string;
  setUserId(value: string): void;

  getWorker(): string;
  setWorker(value: string): void;

  getStage(): number;
  setStage(value: number): void;

  getFileDownloadCount(): number;
  setFileDownloadCount(value: number): void;

  getFileDownloadSizeBytes(): number;
  setFileDownloadSizeBytes(value: number): void;

  getFileDownloadDurationUsec(): number;
  setFileDownloadDurationUsec(value: number): void;

  getFileUploadCount(): number;
  setFileUploadCount(value: number): void;

  getFileUploadSizeBytes(): number;
  setFileUploadSizeBytes(value: number): void;

  getFileUploadDurationUsec(): number;
  setFileUploadDurationUsec(value: number): void;

  getPeakMemoryBytes(): number;
  setPeakMemoryBytes(value: number): void;

  getCpuNanos(): number;
  setCpuNanos(value: number): void;

  getEstimatedMemoryBytes(): number;
  setEstimatedMemoryBytes(value: number): void;

  getEstimatedMilliCpu(): number;
  setEstimatedMilliCpu(value: number): void;

  getQueuedTimestampUsec(): number;
  setQueuedTimestampUsec(value: number): void;

  getWorkerStartTimestampUsec(): number;
  setWorkerStartTimestampUsec(value: number): void;

  getWorkerCompletedTimestampUsec(): number;
  setWorkerCompletedTimestampUsec(value: number): void;

  getInputFetchStartTimestampUsec(): number;
  setInputFetchStartTimestampUsec(value: number): void;

  getInputFetchCompletedTimestampUsec(): number;
  setInputFetchCompletedTimestampUsec(value: number): void;

  getExecutionStartTimestampUsec(): number;
  setExecutionStartTimestampUsec(value: number): void;

  getExecutionCompletedTimestampUsec(): number;
  setExecutionCompletedTimestampUsec(value: number): void;

  getOutputUploadStartTimestampUsec(): number;
  setOutputUploadStartTimestampUsec(value: number): void;

  getOutputUploadCompletedTimestampUsec(): number;
  setOutputUploadCompletedTimestampUsec(value: number): void;

  getInvocationLinkType(): number;
  setInvocationLinkType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoredExecution.AsObject;
  static toObject(includeInstance: boolean, msg: StoredExecution): StoredExecution.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StoredExecution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoredExecution;
  static deserializeBinaryFromReader(message: StoredExecution, reader: jspb.BinaryReader): StoredExecution;
}

export namespace StoredExecution {
  export type AsObject = {
    groupId: string,
    updatedAtUsec: number,
    executionId: string,
    invocationUuid: string,
    createdAtUsec: number,
    userId: string,
    worker: string,
    stage: number,
    fileDownloadCount: number,
    fileDownloadSizeBytes: number,
    fileDownloadDurationUsec: number,
    fileUploadCount: number,
    fileUploadSizeBytes: number,
    fileUploadDurationUsec: number,
    peakMemoryBytes: number,
    cpuNanos: number,
    estimatedMemoryBytes: number,
    estimatedMilliCpu: number,
    queuedTimestampUsec: number,
    workerStartTimestampUsec: number,
    workerCompletedTimestampUsec: number,
    inputFetchStartTimestampUsec: number,
    inputFetchCompletedTimestampUsec: number,
    executionStartTimestampUsec: number,
    executionCompletedTimestampUsec: number,
    outputUploadStartTimestampUsec: number,
    outputUploadCompletedTimestampUsec: number,
    invocationLinkType: number,
  }
}

