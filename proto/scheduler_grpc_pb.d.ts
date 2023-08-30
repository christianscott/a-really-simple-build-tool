// GENERATED CODE -- DO NOT EDIT!

// package: scheduler
// file: proto/scheduler.proto

import * as proto_scheduler_pb from "../proto/scheduler_pb";
import * as grpc from "@grpc/grpc-js";

interface ISchedulerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  registerAndStreamWork: grpc.MethodDefinition<proto_scheduler_pb.RegisterAndStreamWorkRequest, proto_scheduler_pb.RegisterAndStreamWorkResponse>;
  leaseTask: grpc.MethodDefinition<proto_scheduler_pb.LeaseTaskRequest, proto_scheduler_pb.LeaseTaskResponse>;
  scheduleTask: grpc.MethodDefinition<proto_scheduler_pb.ScheduleTaskRequest, proto_scheduler_pb.ScheduleTaskResponse>;
  reEnqueueTask: grpc.MethodDefinition<proto_scheduler_pb.ReEnqueueTaskRequest, proto_scheduler_pb.ReEnqueueTaskResponse>;
  enqueueTaskReservation: grpc.MethodDefinition<proto_scheduler_pb.EnqueueTaskReservationRequest, proto_scheduler_pb.EnqueueTaskReservationResponse>;
}

export const SchedulerService: ISchedulerService;

export interface ISchedulerServer extends grpc.UntypedServiceImplementation {
  registerAndStreamWork: grpc.handleBidiStreamingCall<proto_scheduler_pb.RegisterAndStreamWorkRequest, proto_scheduler_pb.RegisterAndStreamWorkResponse>;
  leaseTask: grpc.handleBidiStreamingCall<proto_scheduler_pb.LeaseTaskRequest, proto_scheduler_pb.LeaseTaskResponse>;
  scheduleTask: grpc.handleUnaryCall<proto_scheduler_pb.ScheduleTaskRequest, proto_scheduler_pb.ScheduleTaskResponse>;
  reEnqueueTask: grpc.handleUnaryCall<proto_scheduler_pb.ReEnqueueTaskRequest, proto_scheduler_pb.ReEnqueueTaskResponse>;
  enqueueTaskReservation: grpc.handleUnaryCall<proto_scheduler_pb.EnqueueTaskReservationRequest, proto_scheduler_pb.EnqueueTaskReservationResponse>;
}

export class SchedulerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  registerAndStreamWork(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<proto_scheduler_pb.RegisterAndStreamWorkRequest, proto_scheduler_pb.RegisterAndStreamWorkResponse>;
  registerAndStreamWork(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<proto_scheduler_pb.RegisterAndStreamWorkRequest, proto_scheduler_pb.RegisterAndStreamWorkResponse>;
  leaseTask(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<proto_scheduler_pb.LeaseTaskRequest, proto_scheduler_pb.LeaseTaskResponse>;
  leaseTask(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<proto_scheduler_pb.LeaseTaskRequest, proto_scheduler_pb.LeaseTaskResponse>;
  scheduleTask(argument: proto_scheduler_pb.ScheduleTaskRequest, callback: grpc.requestCallback<proto_scheduler_pb.ScheduleTaskResponse>): grpc.ClientUnaryCall;
  scheduleTask(argument: proto_scheduler_pb.ScheduleTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_scheduler_pb.ScheduleTaskResponse>): grpc.ClientUnaryCall;
  scheduleTask(argument: proto_scheduler_pb.ScheduleTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_scheduler_pb.ScheduleTaskResponse>): grpc.ClientUnaryCall;
  reEnqueueTask(argument: proto_scheduler_pb.ReEnqueueTaskRequest, callback: grpc.requestCallback<proto_scheduler_pb.ReEnqueueTaskResponse>): grpc.ClientUnaryCall;
  reEnqueueTask(argument: proto_scheduler_pb.ReEnqueueTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_scheduler_pb.ReEnqueueTaskResponse>): grpc.ClientUnaryCall;
  reEnqueueTask(argument: proto_scheduler_pb.ReEnqueueTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_scheduler_pb.ReEnqueueTaskResponse>): grpc.ClientUnaryCall;
  enqueueTaskReservation(argument: proto_scheduler_pb.EnqueueTaskReservationRequest, callback: grpc.requestCallback<proto_scheduler_pb.EnqueueTaskReservationResponse>): grpc.ClientUnaryCall;
  enqueueTaskReservation(argument: proto_scheduler_pb.EnqueueTaskReservationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_scheduler_pb.EnqueueTaskReservationResponse>): grpc.ClientUnaryCall;
  enqueueTaskReservation(argument: proto_scheduler_pb.EnqueueTaskReservationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_scheduler_pb.EnqueueTaskReservationResponse>): grpc.ClientUnaryCall;
}
