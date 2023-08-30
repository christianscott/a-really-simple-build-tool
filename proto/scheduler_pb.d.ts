// package: scheduler
// file: proto/scheduler.proto

import * as jspb from "google-protobuf";
import * as google_rpc_status_pb from "../google/rpc/status_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as proto_acl_pb from "../proto/acl_pb";
import * as proto_context_pb from "../proto/context_pb";
import * as proto_trace_pb from "../proto/trace_pb";

export class NodeAddress extends jspb.Message {
  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeAddress.AsObject;
  static toObject(includeInstance: boolean, msg: NodeAddress): NodeAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeAddress;
  static deserializeBinaryFromReader(message: NodeAddress, reader: jspb.BinaryReader): NodeAddress;
}

export namespace NodeAddress {
  export type AsObject = {
    host: string,
    port: number,
  }
}

export class LeaseTaskRequest extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): void;

  getFinalize(): boolean;
  setFinalize(value: boolean): void;

  getRelease(): boolean;
  setRelease(value: boolean): void;

  getExecutorId(): string;
  setExecutorId(value: string): void;

  getReEnqueue(): boolean;
  setReEnqueue(value: boolean): void;

  hasReEnqueueReason(): boolean;
  clearReEnqueueReason(): void;
  getReEnqueueReason(): google_rpc_status_pb.Status | undefined;
  setReEnqueueReason(value?: google_rpc_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaseTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LeaseTaskRequest): LeaseTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeaseTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaseTaskRequest;
  static deserializeBinaryFromReader(message: LeaseTaskRequest, reader: jspb.BinaryReader): LeaseTaskRequest;
}

export namespace LeaseTaskRequest {
  export type AsObject = {
    taskId: string,
    finalize: boolean,
    release: boolean,
    executorId: string,
    reEnqueue: boolean,
    reEnqueueReason?: google_rpc_status_pb.Status.AsObject,
  }
}

export class LeaseTaskResponse extends jspb.Message {
  getSerializedTask(): Uint8Array | string;
  getSerializedTask_asU8(): Uint8Array;
  getSerializedTask_asB64(): string;
  setSerializedTask(value: Uint8Array | string): void;

  getLeaseDurationSeconds(): number;
  setLeaseDurationSeconds(value: number): void;

  getClosedCleanly(): boolean;
  setClosedCleanly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaseTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LeaseTaskResponse): LeaseTaskResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeaseTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaseTaskResponse;
  static deserializeBinaryFromReader(message: LeaseTaskResponse, reader: jspb.BinaryReader): LeaseTaskResponse;
}

export namespace LeaseTaskResponse {
  export type AsObject = {
    serializedTask: Uint8Array | string,
    leaseDurationSeconds: number,
    closedCleanly: boolean,
  }
}

export class TaskSize extends jspb.Message {
  getEstimatedMemoryBytes(): number;
  setEstimatedMemoryBytes(value: number): void;

  getEstimatedMilliCpu(): number;
  setEstimatedMilliCpu(value: number): void;

  getEstimatedFreeDiskBytes(): number;
  setEstimatedFreeDiskBytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskSize.AsObject;
  static toObject(includeInstance: boolean, msg: TaskSize): TaskSize.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskSize, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskSize;
  static deserializeBinaryFromReader(message: TaskSize, reader: jspb.BinaryReader): TaskSize;
}

export namespace TaskSize {
  export type AsObject = {
    estimatedMemoryBytes: number,
    estimatedMilliCpu: number,
    estimatedFreeDiskBytes: number,
  }
}

export class SchedulingMetadata extends jspb.Message {
  hasTaskSize(): boolean;
  clearTaskSize(): void;
  getTaskSize(): TaskSize | undefined;
  setTaskSize(value?: TaskSize): void;

  hasMeasuredTaskSize(): boolean;
  clearMeasuredTaskSize(): void;
  getMeasuredTaskSize(): TaskSize | undefined;
  setMeasuredTaskSize(value?: TaskSize): void;

  hasPredictedTaskSize(): boolean;
  clearPredictedTaskSize(): void;
  getPredictedTaskSize(): TaskSize | undefined;
  setPredictedTaskSize(value?: TaskSize): void;

  getOs(): string;
  setOs(value: string): void;

  getArch(): string;
  setArch(value: string): void;

  getPool(): string;
  setPool(value: string): void;

  getExecutorGroupId(): string;
  setExecutorGroupId(value: string): void;

  getTaskGroupId(): string;
  setTaskGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchedulingMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: SchedulingMetadata): SchedulingMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchedulingMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchedulingMetadata;
  static deserializeBinaryFromReader(message: SchedulingMetadata, reader: jspb.BinaryReader): SchedulingMetadata;
}

export namespace SchedulingMetadata {
  export type AsObject = {
    taskSize?: TaskSize.AsObject,
    measuredTaskSize?: TaskSize.AsObject,
    predictedTaskSize?: TaskSize.AsObject,
    os: string,
    arch: string,
    pool: string,
    executorGroupId: string,
    taskGroupId: string,
  }
}

export class ScheduleTaskRequest extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): SchedulingMetadata | undefined;
  setMetadata(value?: SchedulingMetadata): void;

  getSerializedTask(): Uint8Array | string;
  getSerializedTask_asU8(): Uint8Array;
  getSerializedTask_asB64(): string;
  setSerializedTask(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleTaskRequest): ScheduleTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleTaskRequest;
  static deserializeBinaryFromReader(message: ScheduleTaskRequest, reader: jspb.BinaryReader): ScheduleTaskRequest;
}

export namespace ScheduleTaskRequest {
  export type AsObject = {
    taskId: string,
    metadata?: SchedulingMetadata.AsObject,
    serializedTask: Uint8Array | string,
  }
}

export class ScheduleTaskResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleTaskResponse): ScheduleTaskResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleTaskResponse;
  static deserializeBinaryFromReader(message: ScheduleTaskResponse, reader: jspb.BinaryReader): ScheduleTaskResponse;
}

export namespace ScheduleTaskResponse {
  export type AsObject = {
  }
}

export class ReEnqueueTaskRequest extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): void;

  getReason(): string;
  setReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReEnqueueTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReEnqueueTaskRequest): ReEnqueueTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReEnqueueTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReEnqueueTaskRequest;
  static deserializeBinaryFromReader(message: ReEnqueueTaskRequest, reader: jspb.BinaryReader): ReEnqueueTaskRequest;
}

export namespace ReEnqueueTaskRequest {
  export type AsObject = {
    taskId: string,
    reason: string,
  }
}

export class ReEnqueueTaskResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReEnqueueTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReEnqueueTaskResponse): ReEnqueueTaskResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReEnqueueTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReEnqueueTaskResponse;
  static deserializeBinaryFromReader(message: ReEnqueueTaskResponse, reader: jspb.BinaryReader): ReEnqueueTaskResponse;
}

export namespace ReEnqueueTaskResponse {
  export type AsObject = {
  }
}

export class EnqueueTaskReservationRequest extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): void;

  hasTaskSize(): boolean;
  clearTaskSize(): void;
  getTaskSize(): TaskSize | undefined;
  setTaskSize(value?: TaskSize): void;

  hasSchedulingMetadata(): boolean;
  clearSchedulingMetadata(): void;
  getSchedulingMetadata(): SchedulingMetadata | undefined;
  setSchedulingMetadata(value?: SchedulingMetadata): void;

  getExecutorId(): string;
  setExecutorId(value: string): void;

  hasTraceMetadata(): boolean;
  clearTraceMetadata(): void;
  getTraceMetadata(): proto_trace_pb.Metadata | undefined;
  setTraceMetadata(value?: proto_trace_pb.Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueTaskReservationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueTaskReservationRequest): EnqueueTaskReservationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueTaskReservationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueTaskReservationRequest;
  static deserializeBinaryFromReader(message: EnqueueTaskReservationRequest, reader: jspb.BinaryReader): EnqueueTaskReservationRequest;
}

export namespace EnqueueTaskReservationRequest {
  export type AsObject = {
    taskId: string,
    taskSize?: TaskSize.AsObject,
    schedulingMetadata?: SchedulingMetadata.AsObject,
    executorId: string,
    traceMetadata?: proto_trace_pb.Metadata.AsObject,
  }
}

export class EnqueueTaskReservationResponse extends jspb.Message {
  getTaskId(): string;
  setTaskId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueTaskReservationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueTaskReservationResponse): EnqueueTaskReservationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueTaskReservationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueTaskReservationResponse;
  static deserializeBinaryFromReader(message: EnqueueTaskReservationResponse, reader: jspb.BinaryReader): EnqueueTaskReservationResponse;
}

export namespace EnqueueTaskReservationResponse {
  export type AsObject = {
    taskId: string,
  }
}

export class RegisterExecutorRequest extends jspb.Message {
  hasNode(): boolean;
  clearNode(): void;
  getNode(): ExecutionNode | undefined;
  setNode(value?: ExecutionNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterExecutorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterExecutorRequest): RegisterExecutorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterExecutorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterExecutorRequest;
  static deserializeBinaryFromReader(message: RegisterExecutorRequest, reader: jspb.BinaryReader): RegisterExecutorRequest;
}

export namespace RegisterExecutorRequest {
  export type AsObject = {
    node?: ExecutionNode.AsObject,
  }
}

export class ShuttingDownRequest extends jspb.Message {
  clearTaskIdList(): void;
  getTaskIdList(): Array<string>;
  setTaskIdList(value: Array<string>): void;
  addTaskId(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShuttingDownRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShuttingDownRequest): ShuttingDownRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShuttingDownRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShuttingDownRequest;
  static deserializeBinaryFromReader(message: ShuttingDownRequest, reader: jspb.BinaryReader): ShuttingDownRequest;
}

export namespace ShuttingDownRequest {
  export type AsObject = {
    taskIdList: Array<string>,
  }
}

export class RegisterAndStreamWorkRequest extends jspb.Message {
  hasRegisterExecutorRequest(): boolean;
  clearRegisterExecutorRequest(): void;
  getRegisterExecutorRequest(): RegisterExecutorRequest | undefined;
  setRegisterExecutorRequest(value?: RegisterExecutorRequest): void;

  hasEnqueueTaskReservationResponse(): boolean;
  clearEnqueueTaskReservationResponse(): void;
  getEnqueueTaskReservationResponse(): EnqueueTaskReservationResponse | undefined;
  setEnqueueTaskReservationResponse(value?: EnqueueTaskReservationResponse): void;

  hasShuttingDownRequest(): boolean;
  clearShuttingDownRequest(): void;
  getShuttingDownRequest(): ShuttingDownRequest | undefined;
  setShuttingDownRequest(value?: ShuttingDownRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterAndStreamWorkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterAndStreamWorkRequest): RegisterAndStreamWorkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterAndStreamWorkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterAndStreamWorkRequest;
  static deserializeBinaryFromReader(message: RegisterAndStreamWorkRequest, reader: jspb.BinaryReader): RegisterAndStreamWorkRequest;
}

export namespace RegisterAndStreamWorkRequest {
  export type AsObject = {
    registerExecutorRequest?: RegisterExecutorRequest.AsObject,
    enqueueTaskReservationResponse?: EnqueueTaskReservationResponse.AsObject,
    shuttingDownRequest?: ShuttingDownRequest.AsObject,
  }
}

export class RegisterAndStreamWorkResponse extends jspb.Message {
  hasEnqueueTaskReservationRequest(): boolean;
  clearEnqueueTaskReservationRequest(): void;
  getEnqueueTaskReservationRequest(): EnqueueTaskReservationRequest | undefined;
  setEnqueueTaskReservationRequest(value?: EnqueueTaskReservationRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterAndStreamWorkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterAndStreamWorkResponse): RegisterAndStreamWorkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterAndStreamWorkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterAndStreamWorkResponse;
  static deserializeBinaryFromReader(message: RegisterAndStreamWorkResponse, reader: jspb.BinaryReader): RegisterAndStreamWorkResponse;
}

export namespace RegisterAndStreamWorkResponse {
  export type AsObject = {
    enqueueTaskReservationRequest?: EnqueueTaskReservationRequest.AsObject,
  }
}

export class ExecutionNode extends jspb.Message {
  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getAssignableMemoryBytes(): number;
  setAssignableMemoryBytes(value: number): void;

  getAssignableMilliCpu(): number;
  setAssignableMilliCpu(value: number): void;

  getOs(): string;
  setOs(value: string): void;

  getArch(): string;
  setArch(value: string): void;

  getPool(): string;
  setPool(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getExecutorId(): string;
  setExecutorId(value: string): void;

  getExecutorHostId(): string;
  setExecutorHostId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecutionNode.AsObject;
  static toObject(includeInstance: boolean, msg: ExecutionNode): ExecutionNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExecutionNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecutionNode;
  static deserializeBinaryFromReader(message: ExecutionNode, reader: jspb.BinaryReader): ExecutionNode;
}

export namespace ExecutionNode {
  export type AsObject = {
    host: string,
    port: number,
    assignableMemoryBytes: number,
    assignableMilliCpu: number,
    os: string,
    arch: string,
    pool: string,
    version: string,
    executorId: string,
    executorHostId: string,
  }
}

export class GetExecutionNodesRequest extends jspb.Message {
  hasRequestContext(): boolean;
  clearRequestContext(): void;
  getRequestContext(): proto_context_pb.RequestContext | undefined;
  setRequestContext(value?: proto_context_pb.RequestContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExecutionNodesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetExecutionNodesRequest): GetExecutionNodesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetExecutionNodesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExecutionNodesRequest;
  static deserializeBinaryFromReader(message: GetExecutionNodesRequest, reader: jspb.BinaryReader): GetExecutionNodesRequest;
}

export namespace GetExecutionNodesRequest {
  export type AsObject = {
    requestContext?: proto_context_pb.RequestContext.AsObject,
  }
}

export class GetExecutionNodesResponse extends jspb.Message {
  hasResponseContext(): boolean;
  clearResponseContext(): void;
  getResponseContext(): proto_context_pb.ResponseContext | undefined;
  setResponseContext(value?: proto_context_pb.ResponseContext): void;

  clearExecutorList(): void;
  getExecutorList(): Array<GetExecutionNodesResponse.Executor>;
  setExecutorList(value: Array<GetExecutionNodesResponse.Executor>): void;
  addExecutor(value?: GetExecutionNodesResponse.Executor, index?: number): GetExecutionNodesResponse.Executor;

  getUserOwnedExecutorsSupported(): boolean;
  setUserOwnedExecutorsSupported(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExecutionNodesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetExecutionNodesResponse): GetExecutionNodesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetExecutionNodesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExecutionNodesResponse;
  static deserializeBinaryFromReader(message: GetExecutionNodesResponse, reader: jspb.BinaryReader): GetExecutionNodesResponse;
}

export namespace GetExecutionNodesResponse {
  export type AsObject = {
    responseContext?: proto_context_pb.ResponseContext.AsObject,
    executorList: Array<GetExecutionNodesResponse.Executor.AsObject>,
    userOwnedExecutorsSupported: boolean,
  }

  export class Executor extends jspb.Message {
    hasNode(): boolean;
    clearNode(): void;
    getNode(): ExecutionNode | undefined;
    setNode(value?: ExecutionNode): void;

    getIsDefault(): boolean;
    setIsDefault(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Executor.AsObject;
    static toObject(includeInstance: boolean, msg: Executor): Executor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Executor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Executor;
    static deserializeBinaryFromReader(message: Executor, reader: jspb.BinaryReader): Executor;
  }

  export namespace Executor {
    export type AsObject = {
      node?: ExecutionNode.AsObject,
      isDefault: boolean,
    }
  }
}

export class RegisteredExecutionNode extends jspb.Message {
  hasRegistration(): boolean;
  clearRegistration(): void;
  getRegistration(): ExecutionNode | undefined;
  setRegistration(value?: ExecutionNode): void;

  getSchedulerHostPort(): string;
  setSchedulerHostPort(value: string): void;

  getGroupId(): string;
  setGroupId(value: string): void;

  hasAcl(): boolean;
  clearAcl(): void;
  getAcl(): proto_acl_pb.ACL | undefined;
  setAcl(value?: proto_acl_pb.ACL): void;

  hasLastPingTime(): boolean;
  clearLastPingTime(): void;
  getLastPingTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastPingTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisteredExecutionNode.AsObject;
  static toObject(includeInstance: boolean, msg: RegisteredExecutionNode): RegisteredExecutionNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisteredExecutionNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisteredExecutionNode;
  static deserializeBinaryFromReader(message: RegisteredExecutionNode, reader: jspb.BinaryReader): RegisteredExecutionNode;
}

export namespace RegisteredExecutionNode {
  export type AsObject = {
    registration?: ExecutionNode.AsObject,
    schedulerHostPort: string,
    groupId: string,
    acl?: proto_acl_pb.ACL.AsObject,
    lastPingTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

