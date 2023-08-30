// GENERATED CODE -- DO NOT EDIT!

// package: build.bazel.remote.execution.v2
// file: proto/remote_execution.proto

import * as proto_remote_execution_pb from "../proto/remote_execution_pb";
import * as google_longrunning_operations_pb from "../google/longrunning/operations_pb";
import * as grpc from "@grpc/grpc-js";

interface IExecutionService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  execute: grpc.MethodDefinition<proto_remote_execution_pb.ExecuteRequest, google_longrunning_operations_pb.Operation>;
  waitExecution: grpc.MethodDefinition<proto_remote_execution_pb.WaitExecutionRequest, google_longrunning_operations_pb.Operation>;
  publishOperation: grpc.MethodDefinition<google_longrunning_operations_pb.Operation, proto_remote_execution_pb.PublishOperationResponse>;
}

export const ExecutionService: IExecutionService;

export interface IExecutionServer extends grpc.UntypedServiceImplementation {
  execute: grpc.handleServerStreamingCall<proto_remote_execution_pb.ExecuteRequest, google_longrunning_operations_pb.Operation>;
  waitExecution: grpc.handleServerStreamingCall<proto_remote_execution_pb.WaitExecutionRequest, google_longrunning_operations_pb.Operation>;
  publishOperation: grpc.handleClientStreamingCall<google_longrunning_operations_pb.Operation, proto_remote_execution_pb.PublishOperationResponse>;
}

export class ExecutionClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  execute(argument: proto_remote_execution_pb.ExecuteRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<google_longrunning_operations_pb.Operation>;
  execute(argument: proto_remote_execution_pb.ExecuteRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<google_longrunning_operations_pb.Operation>;
  waitExecution(argument: proto_remote_execution_pb.WaitExecutionRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<google_longrunning_operations_pb.Operation>;
  waitExecution(argument: proto_remote_execution_pb.WaitExecutionRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<google_longrunning_operations_pb.Operation>;
  publishOperation(callback: grpc.requestCallback<proto_remote_execution_pb.PublishOperationResponse>): grpc.ClientWritableStream<google_longrunning_operations_pb.Operation>;
  publishOperation(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_remote_execution_pb.PublishOperationResponse>): grpc.ClientWritableStream<google_longrunning_operations_pb.Operation>;
  publishOperation(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_remote_execution_pb.PublishOperationResponse>): grpc.ClientWritableStream<google_longrunning_operations_pb.Operation>;
}

interface IActionCacheService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getActionResult: grpc.MethodDefinition<proto_remote_execution_pb.GetActionResultRequest, proto_remote_execution_pb.ActionResult>;
  updateActionResult: grpc.MethodDefinition<proto_remote_execution_pb.UpdateActionResultRequest, proto_remote_execution_pb.ActionResult>;
}

export const ActionCacheService: IActionCacheService;

export interface IActionCacheServer extends grpc.UntypedServiceImplementation {
  getActionResult: grpc.handleUnaryCall<proto_remote_execution_pb.GetActionResultRequest, proto_remote_execution_pb.ActionResult>;
  updateActionResult: grpc.handleUnaryCall<proto_remote_execution_pb.UpdateActionResultRequest, proto_remote_execution_pb.ActionResult>;
}

export class ActionCacheClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getActionResult(argument: proto_remote_execution_pb.GetActionResultRequest, callback: grpc.requestCallback<proto_remote_execution_pb.ActionResult>): grpc.ClientUnaryCall;
  getActionResult(argument: proto_remote_execution_pb.GetActionResultRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_remote_execution_pb.ActionResult>): grpc.ClientUnaryCall;
  getActionResult(argument: proto_remote_execution_pb.GetActionResultRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_remote_execution_pb.ActionResult>): grpc.ClientUnaryCall;
  updateActionResult(argument: proto_remote_execution_pb.UpdateActionResultRequest, callback: grpc.requestCallback<proto_remote_execution_pb.ActionResult>): grpc.ClientUnaryCall;
  updateActionResult(argument: proto_remote_execution_pb.UpdateActionResultRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_remote_execution_pb.ActionResult>): grpc.ClientUnaryCall;
  updateActionResult(argument: proto_remote_execution_pb.UpdateActionResultRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_remote_execution_pb.ActionResult>): grpc.ClientUnaryCall;
}

interface IContentAddressableStorageService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  findMissingBlobs: grpc.MethodDefinition<proto_remote_execution_pb.FindMissingBlobsRequest, proto_remote_execution_pb.FindMissingBlobsResponse>;
  batchUpdateBlobs: grpc.MethodDefinition<proto_remote_execution_pb.BatchUpdateBlobsRequest, proto_remote_execution_pb.BatchUpdateBlobsResponse>;
  batchReadBlobs: grpc.MethodDefinition<proto_remote_execution_pb.BatchReadBlobsRequest, proto_remote_execution_pb.BatchReadBlobsResponse>;
  getTree: grpc.MethodDefinition<proto_remote_execution_pb.GetTreeRequest, proto_remote_execution_pb.GetTreeResponse>;
}

export const ContentAddressableStorageService: IContentAddressableStorageService;

export interface IContentAddressableStorageServer extends grpc.UntypedServiceImplementation {
  findMissingBlobs: grpc.handleUnaryCall<proto_remote_execution_pb.FindMissingBlobsRequest, proto_remote_execution_pb.FindMissingBlobsResponse>;
  batchUpdateBlobs: grpc.handleUnaryCall<proto_remote_execution_pb.BatchUpdateBlobsRequest, proto_remote_execution_pb.BatchUpdateBlobsResponse>;
  batchReadBlobs: grpc.handleUnaryCall<proto_remote_execution_pb.BatchReadBlobsRequest, proto_remote_execution_pb.BatchReadBlobsResponse>;
  getTree: grpc.handleServerStreamingCall<proto_remote_execution_pb.GetTreeRequest, proto_remote_execution_pb.GetTreeResponse>;
}

export class ContentAddressableStorageClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  findMissingBlobs(argument: proto_remote_execution_pb.FindMissingBlobsRequest, callback: grpc.requestCallback<proto_remote_execution_pb.FindMissingBlobsResponse>): grpc.ClientUnaryCall;
  findMissingBlobs(argument: proto_remote_execution_pb.FindMissingBlobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_remote_execution_pb.FindMissingBlobsResponse>): grpc.ClientUnaryCall;
  findMissingBlobs(argument: proto_remote_execution_pb.FindMissingBlobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_remote_execution_pb.FindMissingBlobsResponse>): grpc.ClientUnaryCall;
  batchUpdateBlobs(argument: proto_remote_execution_pb.BatchUpdateBlobsRequest, callback: grpc.requestCallback<proto_remote_execution_pb.BatchUpdateBlobsResponse>): grpc.ClientUnaryCall;
  batchUpdateBlobs(argument: proto_remote_execution_pb.BatchUpdateBlobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_remote_execution_pb.BatchUpdateBlobsResponse>): grpc.ClientUnaryCall;
  batchUpdateBlobs(argument: proto_remote_execution_pb.BatchUpdateBlobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_remote_execution_pb.BatchUpdateBlobsResponse>): grpc.ClientUnaryCall;
  batchReadBlobs(argument: proto_remote_execution_pb.BatchReadBlobsRequest, callback: grpc.requestCallback<proto_remote_execution_pb.BatchReadBlobsResponse>): grpc.ClientUnaryCall;
  batchReadBlobs(argument: proto_remote_execution_pb.BatchReadBlobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_remote_execution_pb.BatchReadBlobsResponse>): grpc.ClientUnaryCall;
  batchReadBlobs(argument: proto_remote_execution_pb.BatchReadBlobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_remote_execution_pb.BatchReadBlobsResponse>): grpc.ClientUnaryCall;
  getTree(argument: proto_remote_execution_pb.GetTreeRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<proto_remote_execution_pb.GetTreeResponse>;
  getTree(argument: proto_remote_execution_pb.GetTreeRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<proto_remote_execution_pb.GetTreeResponse>;
}

interface ICapabilitiesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getCapabilities: grpc.MethodDefinition<proto_remote_execution_pb.GetCapabilitiesRequest, proto_remote_execution_pb.ServerCapabilities>;
}

export const CapabilitiesService: ICapabilitiesService;

export interface ICapabilitiesServer extends grpc.UntypedServiceImplementation {
  getCapabilities: grpc.handleUnaryCall<proto_remote_execution_pb.GetCapabilitiesRequest, proto_remote_execution_pb.ServerCapabilities>;
}

export class CapabilitiesClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getCapabilities(argument: proto_remote_execution_pb.GetCapabilitiesRequest, callback: grpc.requestCallback<proto_remote_execution_pb.ServerCapabilities>): grpc.ClientUnaryCall;
  getCapabilities(argument: proto_remote_execution_pb.GetCapabilitiesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_remote_execution_pb.ServerCapabilities>): grpc.ClientUnaryCall;
  getCapabilities(argument: proto_remote_execution_pb.GetCapabilitiesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_remote_execution_pb.ServerCapabilities>): grpc.ClientUnaryCall;
}
