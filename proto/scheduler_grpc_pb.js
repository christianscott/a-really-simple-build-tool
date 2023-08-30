// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_scheduler_pb = require('../proto/scheduler_pb.js');
var google_rpc_status_pb = require('../google/rpc/status_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var proto_acl_pb = require('../proto/acl_pb.js');
var proto_context_pb = require('../proto/context_pb.js');
var proto_trace_pb = require('../proto/trace_pb.js');

function serialize_scheduler_EnqueueTaskReservationRequest(arg) {
  if (!(arg instanceof proto_scheduler_pb.EnqueueTaskReservationRequest)) {
    throw new Error('Expected argument of type scheduler.EnqueueTaskReservationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_EnqueueTaskReservationRequest(buffer_arg) {
  return proto_scheduler_pb.EnqueueTaskReservationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scheduler_EnqueueTaskReservationResponse(arg) {
  if (!(arg instanceof proto_scheduler_pb.EnqueueTaskReservationResponse)) {
    throw new Error('Expected argument of type scheduler.EnqueueTaskReservationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_EnqueueTaskReservationResponse(buffer_arg) {
  return proto_scheduler_pb.EnqueueTaskReservationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scheduler_LeaseTaskRequest(arg) {
  if (!(arg instanceof proto_scheduler_pb.LeaseTaskRequest)) {
    throw new Error('Expected argument of type scheduler.LeaseTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_LeaseTaskRequest(buffer_arg) {
  return proto_scheduler_pb.LeaseTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scheduler_LeaseTaskResponse(arg) {
  if (!(arg instanceof proto_scheduler_pb.LeaseTaskResponse)) {
    throw new Error('Expected argument of type scheduler.LeaseTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_LeaseTaskResponse(buffer_arg) {
  return proto_scheduler_pb.LeaseTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scheduler_ReEnqueueTaskRequest(arg) {
  if (!(arg instanceof proto_scheduler_pb.ReEnqueueTaskRequest)) {
    throw new Error('Expected argument of type scheduler.ReEnqueueTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_ReEnqueueTaskRequest(buffer_arg) {
  return proto_scheduler_pb.ReEnqueueTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scheduler_ReEnqueueTaskResponse(arg) {
  if (!(arg instanceof proto_scheduler_pb.ReEnqueueTaskResponse)) {
    throw new Error('Expected argument of type scheduler.ReEnqueueTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_ReEnqueueTaskResponse(buffer_arg) {
  return proto_scheduler_pb.ReEnqueueTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scheduler_RegisterAndStreamWorkRequest(arg) {
  if (!(arg instanceof proto_scheduler_pb.RegisterAndStreamWorkRequest)) {
    throw new Error('Expected argument of type scheduler.RegisterAndStreamWorkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_RegisterAndStreamWorkRequest(buffer_arg) {
  return proto_scheduler_pb.RegisterAndStreamWorkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scheduler_RegisterAndStreamWorkResponse(arg) {
  if (!(arg instanceof proto_scheduler_pb.RegisterAndStreamWorkResponse)) {
    throw new Error('Expected argument of type scheduler.RegisterAndStreamWorkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_RegisterAndStreamWorkResponse(buffer_arg) {
  return proto_scheduler_pb.RegisterAndStreamWorkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scheduler_ScheduleTaskRequest(arg) {
  if (!(arg instanceof proto_scheduler_pb.ScheduleTaskRequest)) {
    throw new Error('Expected argument of type scheduler.ScheduleTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_ScheduleTaskRequest(buffer_arg) {
  return proto_scheduler_pb.ScheduleTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_scheduler_ScheduleTaskResponse(arg) {
  if (!(arg instanceof proto_scheduler_pb.ScheduleTaskResponse)) {
    throw new Error('Expected argument of type scheduler.ScheduleTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_scheduler_ScheduleTaskResponse(buffer_arg) {
  return proto_scheduler_pb.ScheduleTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SchedulerService = exports.SchedulerService = {
  registerAndStreamWork: {
    path: '/scheduler.Scheduler/RegisterAndStreamWork',
    requestStream: true,
    responseStream: true,
    requestType: proto_scheduler_pb.RegisterAndStreamWorkRequest,
    responseType: proto_scheduler_pb.RegisterAndStreamWorkResponse,
    requestSerialize: serialize_scheduler_RegisterAndStreamWorkRequest,
    requestDeserialize: deserialize_scheduler_RegisterAndStreamWorkRequest,
    responseSerialize: serialize_scheduler_RegisterAndStreamWorkResponse,
    responseDeserialize: deserialize_scheduler_RegisterAndStreamWorkResponse,
  },
  leaseTask: {
    path: '/scheduler.Scheduler/LeaseTask',
    requestStream: true,
    responseStream: true,
    requestType: proto_scheduler_pb.LeaseTaskRequest,
    responseType: proto_scheduler_pb.LeaseTaskResponse,
    requestSerialize: serialize_scheduler_LeaseTaskRequest,
    requestDeserialize: deserialize_scheduler_LeaseTaskRequest,
    responseSerialize: serialize_scheduler_LeaseTaskResponse,
    responseDeserialize: deserialize_scheduler_LeaseTaskResponse,
  },
  scheduleTask: {
    path: '/scheduler.Scheduler/ScheduleTask',
    requestStream: false,
    responseStream: false,
    requestType: proto_scheduler_pb.ScheduleTaskRequest,
    responseType: proto_scheduler_pb.ScheduleTaskResponse,
    requestSerialize: serialize_scheduler_ScheduleTaskRequest,
    requestDeserialize: deserialize_scheduler_ScheduleTaskRequest,
    responseSerialize: serialize_scheduler_ScheduleTaskResponse,
    responseDeserialize: deserialize_scheduler_ScheduleTaskResponse,
  },
  reEnqueueTask: {
    path: '/scheduler.Scheduler/ReEnqueueTask',
    requestStream: false,
    responseStream: false,
    requestType: proto_scheduler_pb.ReEnqueueTaskRequest,
    responseType: proto_scheduler_pb.ReEnqueueTaskResponse,
    requestSerialize: serialize_scheduler_ReEnqueueTaskRequest,
    requestDeserialize: deserialize_scheduler_ReEnqueueTaskRequest,
    responseSerialize: serialize_scheduler_ReEnqueueTaskResponse,
    responseDeserialize: deserialize_scheduler_ReEnqueueTaskResponse,
  },
  enqueueTaskReservation: {
    path: '/scheduler.Scheduler/EnqueueTaskReservation',
    requestStream: false,
    responseStream: false,
    requestType: proto_scheduler_pb.EnqueueTaskReservationRequest,
    responseType: proto_scheduler_pb.EnqueueTaskReservationResponse,
    requestSerialize: serialize_scheduler_EnqueueTaskReservationRequest,
    requestDeserialize: deserialize_scheduler_EnqueueTaskReservationRequest,
    responseSerialize: serialize_scheduler_EnqueueTaskReservationResponse,
    responseDeserialize: deserialize_scheduler_EnqueueTaskReservationResponse,
  },
};

exports.SchedulerClient = grpc.makeGenericClientConstructor(SchedulerService);
