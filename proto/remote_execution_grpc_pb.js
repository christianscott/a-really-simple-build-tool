// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_remote_execution_pb = require('../proto/remote_execution_pb.js');
var proto_semver_pb = require('../proto/semver_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var google_longrunning_operations_pb = require('../google/longrunning/operations_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../google/rpc/status_pb.js');
var proto_scheduler_pb = require('../proto/scheduler_pb.js');

function serialize_build_bazel_remote_execution_v2_ActionResult(arg) {
  if (!(arg instanceof proto_remote_execution_pb.ActionResult)) {
    throw new Error('Expected argument of type build.bazel.remote.execution.v2.ActionResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_build_bazel_remote_execution_v2_ActionResult(buffer_arg) {
  return proto_remote_execution_pb.ActionResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_build_bazel_remote_execution_v2_BatchReadBlobsRequest(arg) {
  if (!(arg instanceof proto_remote_execution_pb.BatchReadBlobsRequest)) {
    throw new Error('Expected argument of type build.bazel.remote.execution.v2.BatchReadBlobsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_build_bazel_remote_execution_v2_BatchReadBlobsRequest(buffer_arg) {
  return proto_remote_execution_pb.BatchReadBlobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_build_bazel_remote_execution_v2_BatchReadBlobsResponse(arg) {
  if (!(arg instanceof proto_remote_execution_pb.BatchReadBlobsResponse)) {
    throw new Error('Expected argument of type build.bazel.remote.execution.v2.BatchReadBlobsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_build_bazel_remote_execution_v2_BatchReadBlobsResponse(buffer_arg) {
  return proto_remote_execution_pb.BatchReadBlobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_build_bazel_remote_execution_v2_BatchUpdateBlobsRequest(arg) {
  if (!(arg instanceof proto_remote_execution_pb.BatchUpdateBlobsRequest)) {
    throw new Error('Expected argument of type build.bazel.remote.execution.v2.BatchUpdateBlobsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_build_bazel_remote_execution_v2_BatchUpdateBlobsRequest(buffer_arg) {
  return proto_remote_execution_pb.BatchUpdateBlobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_build_bazel_remote_execution_v2_BatchUpdateBlobsResponse(arg) {
  if (!(arg instanceof proto_remote_execution_pb.BatchUpdateBlobsResponse)) {
    throw new Error('Expected argument of type build.bazel.remote.execution.v2.BatchUpdateBlobsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_build_bazel_remote_execution_v2_BatchUpdateBlobsResponse(buffer_arg) {
  return proto_remote_execution_pb.BatchUpdateBlobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_build_bazel_remote_execution_v2_ExecuteRequest(arg) {
  if (!(arg instanceof proto_remote_execution_pb.ExecuteRequest)) {
    throw new Error('Expected argument of type build.bazel.remote.execution.v2.ExecuteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_build_bazel_remote_execution_v2_ExecuteRequest(buffer_arg) {
  return proto_remote_execution_pb.ExecuteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_build_bazel_remote_execution_v2_FindMissingBlobsRequest(arg) {
  if (!(arg instanceof proto_remote_execution_pb.FindMissingBlobsRequest)) {
    throw new Error('Expected argument of type build.bazel.remote.execution.v2.FindMissingBlobsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_build_bazel_remote_execution_v2_FindMissingBlobsRequest(buffer_arg) {
  return proto_remote_execution_pb.FindMissingBlobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_build_bazel_remote_execution_v2_FindMissingBlobsResponse(arg) {
  if (!(arg instanceof proto_remote_execution_pb.FindMissingBlobsResponse)) {
    throw new Error('Expected argument of type build.bazel.remote.execution.v2.FindMissingBlobsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_build_bazel_remote_execution_v2_FindMissingBlobsResponse(buffer_arg) {
  return proto_remote_execution_pb.FindMissingBlobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_build_bazel_remote_execution_v2_GetActionResultRequest(arg) {
  if (!(arg instanceof proto_remote_execution_pb.GetActionResultRequest)) {
    throw new Error('Expected argument of type build.bazel.remote.execution.v2.GetActionResultRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_build_bazel_remote_execution_v2_GetActionResultRequest(buffer_arg) {
  return proto_remote_execution_pb.GetActionResultRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_build_bazel_remote_execution_v2_GetCapabilitiesRequest(arg) {
  if (!(arg instanceof proto_remote_execution_pb.GetCapabilitiesRequest)) {
    throw new Error('Expected argument of type build.bazel.remote.execution.v2.GetCapabilitiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_build_bazel_remote_execution_v2_GetCapabilitiesRequest(buffer_arg) {
  return proto_remote_execution_pb.GetCapabilitiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_build_bazel_remote_execution_v2_GetTreeRequest(arg) {
  if (!(arg instanceof proto_remote_execution_pb.GetTreeRequest)) {
    throw new Error('Expected argument of type build.bazel.remote.execution.v2.GetTreeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_build_bazel_remote_execution_v2_GetTreeRequest(buffer_arg) {
  return proto_remote_execution_pb.GetTreeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_build_bazel_remote_execution_v2_GetTreeResponse(arg) {
  if (!(arg instanceof proto_remote_execution_pb.GetTreeResponse)) {
    throw new Error('Expected argument of type build.bazel.remote.execution.v2.GetTreeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_build_bazel_remote_execution_v2_GetTreeResponse(buffer_arg) {
  return proto_remote_execution_pb.GetTreeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_build_bazel_remote_execution_v2_PublishOperationResponse(arg) {
  if (!(arg instanceof proto_remote_execution_pb.PublishOperationResponse)) {
    throw new Error('Expected argument of type build.bazel.remote.execution.v2.PublishOperationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_build_bazel_remote_execution_v2_PublishOperationResponse(buffer_arg) {
  return proto_remote_execution_pb.PublishOperationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_build_bazel_remote_execution_v2_ServerCapabilities(arg) {
  if (!(arg instanceof proto_remote_execution_pb.ServerCapabilities)) {
    throw new Error('Expected argument of type build.bazel.remote.execution.v2.ServerCapabilities');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_build_bazel_remote_execution_v2_ServerCapabilities(buffer_arg) {
  return proto_remote_execution_pb.ServerCapabilities.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_build_bazel_remote_execution_v2_UpdateActionResultRequest(arg) {
  if (!(arg instanceof proto_remote_execution_pb.UpdateActionResultRequest)) {
    throw new Error('Expected argument of type build.bazel.remote.execution.v2.UpdateActionResultRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_build_bazel_remote_execution_v2_UpdateActionResultRequest(buffer_arg) {
  return proto_remote_execution_pb.UpdateActionResultRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_build_bazel_remote_execution_v2_WaitExecutionRequest(arg) {
  if (!(arg instanceof proto_remote_execution_pb.WaitExecutionRequest)) {
    throw new Error('Expected argument of type build.bazel.remote.execution.v2.WaitExecutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_build_bazel_remote_execution_v2_WaitExecutionRequest(buffer_arg) {
  return proto_remote_execution_pb.WaitExecutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExecutionService = exports.ExecutionService = {
  execute: {
    path: '/build.bazel.remote.execution.v2.Execution/Execute',
    requestStream: false,
    responseStream: true,
    requestType: proto_remote_execution_pb.ExecuteRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_build_bazel_remote_execution_v2_ExecuteRequest,
    requestDeserialize: deserialize_build_bazel_remote_execution_v2_ExecuteRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  waitExecution: {
    path: '/build.bazel.remote.execution.v2.Execution/WaitExecution',
    requestStream: false,
    responseStream: true,
    requestType: proto_remote_execution_pb.WaitExecutionRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_build_bazel_remote_execution_v2_WaitExecutionRequest,
    requestDeserialize: deserialize_build_bazel_remote_execution_v2_WaitExecutionRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  publishOperation: {
    path: '/build.bazel.remote.execution.v2.Execution/PublishOperation',
    requestStream: true,
    responseStream: false,
    requestType: google_longrunning_operations_pb.Operation,
    responseType: proto_remote_execution_pb.PublishOperationResponse,
    requestSerialize: serialize_google_longrunning_Operation,
    requestDeserialize: deserialize_google_longrunning_Operation,
    responseSerialize: serialize_build_bazel_remote_execution_v2_PublishOperationResponse,
    responseDeserialize: deserialize_build_bazel_remote_execution_v2_PublishOperationResponse,
  },
};

exports.ExecutionClient = grpc.makeGenericClientConstructor(ExecutionService);
var ActionCacheService = exports.ActionCacheService = {
  getActionResult: {
    path: '/build.bazel.remote.execution.v2.ActionCache/GetActionResult',
    requestStream: false,
    responseStream: false,
    requestType: proto_remote_execution_pb.GetActionResultRequest,
    responseType: proto_remote_execution_pb.ActionResult,
    requestSerialize: serialize_build_bazel_remote_execution_v2_GetActionResultRequest,
    requestDeserialize: deserialize_build_bazel_remote_execution_v2_GetActionResultRequest,
    responseSerialize: serialize_build_bazel_remote_execution_v2_ActionResult,
    responseDeserialize: deserialize_build_bazel_remote_execution_v2_ActionResult,
  },
  updateActionResult: {
    path: '/build.bazel.remote.execution.v2.ActionCache/UpdateActionResult',
    requestStream: false,
    responseStream: false,
    requestType: proto_remote_execution_pb.UpdateActionResultRequest,
    responseType: proto_remote_execution_pb.ActionResult,
    requestSerialize: serialize_build_bazel_remote_execution_v2_UpdateActionResultRequest,
    requestDeserialize: deserialize_build_bazel_remote_execution_v2_UpdateActionResultRequest,
    responseSerialize: serialize_build_bazel_remote_execution_v2_ActionResult,
    responseDeserialize: deserialize_build_bazel_remote_execution_v2_ActionResult,
  },
};

exports.ActionCacheClient = grpc.makeGenericClientConstructor(ActionCacheService);
var ContentAddressableStorageService = exports.ContentAddressableStorageService = {
  findMissingBlobs: {
    path: '/build.bazel.remote.execution.v2.ContentAddressableStorage/FindMissingBlobs',
    requestStream: false,
    responseStream: false,
    requestType: proto_remote_execution_pb.FindMissingBlobsRequest,
    responseType: proto_remote_execution_pb.FindMissingBlobsResponse,
    requestSerialize: serialize_build_bazel_remote_execution_v2_FindMissingBlobsRequest,
    requestDeserialize: deserialize_build_bazel_remote_execution_v2_FindMissingBlobsRequest,
    responseSerialize: serialize_build_bazel_remote_execution_v2_FindMissingBlobsResponse,
    responseDeserialize: deserialize_build_bazel_remote_execution_v2_FindMissingBlobsResponse,
  },
  batchUpdateBlobs: {
    path: '/build.bazel.remote.execution.v2.ContentAddressableStorage/BatchUpdateBlobs',
    requestStream: false,
    responseStream: false,
    requestType: proto_remote_execution_pb.BatchUpdateBlobsRequest,
    responseType: proto_remote_execution_pb.BatchUpdateBlobsResponse,
    requestSerialize: serialize_build_bazel_remote_execution_v2_BatchUpdateBlobsRequest,
    requestDeserialize: deserialize_build_bazel_remote_execution_v2_BatchUpdateBlobsRequest,
    responseSerialize: serialize_build_bazel_remote_execution_v2_BatchUpdateBlobsResponse,
    responseDeserialize: deserialize_build_bazel_remote_execution_v2_BatchUpdateBlobsResponse,
  },
  batchReadBlobs: {
    path: '/build.bazel.remote.execution.v2.ContentAddressableStorage/BatchReadBlobs',
    requestStream: false,
    responseStream: false,
    requestType: proto_remote_execution_pb.BatchReadBlobsRequest,
    responseType: proto_remote_execution_pb.BatchReadBlobsResponse,
    requestSerialize: serialize_build_bazel_remote_execution_v2_BatchReadBlobsRequest,
    requestDeserialize: deserialize_build_bazel_remote_execution_v2_BatchReadBlobsRequest,
    responseSerialize: serialize_build_bazel_remote_execution_v2_BatchReadBlobsResponse,
    responseDeserialize: deserialize_build_bazel_remote_execution_v2_BatchReadBlobsResponse,
  },
  getTree: {
    path: '/build.bazel.remote.execution.v2.ContentAddressableStorage/GetTree',
    requestStream: false,
    responseStream: true,
    requestType: proto_remote_execution_pb.GetTreeRequest,
    responseType: proto_remote_execution_pb.GetTreeResponse,
    requestSerialize: serialize_build_bazel_remote_execution_v2_GetTreeRequest,
    requestDeserialize: deserialize_build_bazel_remote_execution_v2_GetTreeRequest,
    responseSerialize: serialize_build_bazel_remote_execution_v2_GetTreeResponse,
    responseDeserialize: deserialize_build_bazel_remote_execution_v2_GetTreeResponse,
  },
};

exports.ContentAddressableStorageClient = grpc.makeGenericClientConstructor(ContentAddressableStorageService);
var CapabilitiesService = exports.CapabilitiesService = {
  getCapabilities: {
    path: '/build.bazel.remote.execution.v2.Capabilities/GetCapabilities',
    requestStream: false,
    responseStream: false,
    requestType: proto_remote_execution_pb.GetCapabilitiesRequest,
    responseType: proto_remote_execution_pb.ServerCapabilities,
    requestSerialize: serialize_build_bazel_remote_execution_v2_GetCapabilitiesRequest,
    requestDeserialize: deserialize_build_bazel_remote_execution_v2_GetCapabilitiesRequest,
    responseSerialize: serialize_build_bazel_remote_execution_v2_ServerCapabilities,
    responseDeserialize: deserialize_build_bazel_remote_execution_v2_ServerCapabilities,
  },
};

exports.CapabilitiesClient = grpc.makeGenericClientConstructor(CapabilitiesService);
