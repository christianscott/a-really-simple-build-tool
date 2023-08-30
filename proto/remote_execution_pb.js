// source: proto/remote_execution.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var proto_semver_pb = require('../proto/semver_pb.js');
goog.object.extend(proto, proto_semver_pb);
var google_api_annotations_pb = require('../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_longrunning_operations_pb = require('../google/longrunning/operations_pb.js');
goog.object.extend(proto, google_longrunning_operations_pb);
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_rpc_status_pb = require('../google/rpc/status_pb.js');
goog.object.extend(proto, google_rpc_status_pb);
var proto_scheduler_pb = require('../proto/scheduler_pb.js');
goog.object.extend(proto, proto_scheduler_pb);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.Action', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.ActionResult', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.CacheCapabilities', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.Command', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.Compressor', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.Compressor.Value', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.Digest', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.DigestFunction', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.DigestFunction.Value', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.Directory', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.DirectoryNode', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.ExecuteRequest', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.ExecuteResponse', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.ExecutedActionMetadata', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.ExecutionCapabilities', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.ExecutionPolicy', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.ExecutionStage', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.ExecutionStage.Value', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.ExecutionTask', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.ExecutorDetails', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.FileNode', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.GetActionResultRequest', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.GetTreeRequest', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.GetTreeResponse', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.IOStats', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.LogFile', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.NodeProperties', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.NodeProperty', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.OutputDirectory', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.OutputFile', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.OutputSymlink', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.Platform', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.Platform.Property', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.PriorityCapabilities', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.PublishOperationResponse', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.RequestMetadata', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.ResultsCachePolicy', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.ScheduledTask', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.ServerCapabilities', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.StoredExecution', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.Value', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.SymlinkNode', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.ToolDetails', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.Tree', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.UpdateActionResultRequest', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.UsageStats', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage', null, global);
goog.exportSymbol('proto.build.bazel.remote.execution.v2.WaitExecutionRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.PublishOperationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.PublishOperationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.PublishOperationResponse.displayName = 'proto.build.bazel.remote.execution.v2.PublishOperationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.Action = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.Action.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.Action, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.Action.displayName = 'proto.build.bazel.remote.execution.v2.Action';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.Command = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.Command.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.Command, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.Command.displayName = 'proto.build.bazel.remote.execution.v2.Command';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable.displayName = 'proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.Platform = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.Platform.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.Platform, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.Platform.displayName = 'proto.build.bazel.remote.execution.v2.Platform';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.Platform.Property = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.Platform.Property, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.Platform.Property.displayName = 'proto.build.bazel.remote.execution.v2.Platform.Property';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.Directory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.Directory.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.Directory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.Directory.displayName = 'proto.build.bazel.remote.execution.v2.Directory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.NodeProperty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.NodeProperty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.NodeProperty.displayName = 'proto.build.bazel.remote.execution.v2.NodeProperty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.NodeProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.NodeProperties.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.NodeProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.NodeProperties.displayName = 'proto.build.bazel.remote.execution.v2.NodeProperties';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.FileNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.FileNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.FileNode.displayName = 'proto.build.bazel.remote.execution.v2.FileNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.DirectoryNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.DirectoryNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.DirectoryNode.displayName = 'proto.build.bazel.remote.execution.v2.DirectoryNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.SymlinkNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.SymlinkNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.SymlinkNode.displayName = 'proto.build.bazel.remote.execution.v2.SymlinkNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.Digest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.Digest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.Digest.displayName = 'proto.build.bazel.remote.execution.v2.Digest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.ExecutedActionMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.displayName = 'proto.build.bazel.remote.execution.v2.ExecutedActionMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.ActionResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.ActionResult.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.ActionResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.ActionResult.displayName = 'proto.build.bazel.remote.execution.v2.ActionResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.OutputFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.OutputFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.OutputFile.displayName = 'proto.build.bazel.remote.execution.v2.OutputFile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.Tree = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.Tree.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.Tree, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.Tree.displayName = 'proto.build.bazel.remote.execution.v2.Tree';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.OutputDirectory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.OutputDirectory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.OutputDirectory.displayName = 'proto.build.bazel.remote.execution.v2.OutputDirectory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.OutputSymlink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.OutputSymlink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.OutputSymlink.displayName = 'proto.build.bazel.remote.execution.v2.OutputSymlink';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.ExecutionPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.ExecutionPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.ExecutionPolicy.displayName = 'proto.build.bazel.remote.execution.v2.ExecutionPolicy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.ResultsCachePolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.ResultsCachePolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.ResultsCachePolicy.displayName = 'proto.build.bazel.remote.execution.v2.ResultsCachePolicy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.ExecuteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.ExecuteRequest.displayName = 'proto.build.bazel.remote.execution.v2.ExecuteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.LogFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.LogFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.LogFile.displayName = 'proto.build.bazel.remote.execution.v2.LogFile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.ExecuteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.ExecuteResponse.displayName = 'proto.build.bazel.remote.execution.v2.ExecuteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.ExecutionStage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.ExecutionStage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.ExecutionStage.displayName = 'proto.build.bazel.remote.execution.v2.ExecutionStage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.displayName = 'proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.WaitExecutionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.WaitExecutionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.WaitExecutionRequest.displayName = 'proto.build.bazel.remote.execution.v2.WaitExecutionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.GetActionResultRequest.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.GetActionResultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.GetActionResultRequest.displayName = 'proto.build.bazel.remote.execution.v2.GetActionResultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.UpdateActionResultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.displayName = 'proto.build.bazel.remote.execution.v2.UpdateActionResultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.displayName = 'proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse.displayName = 'proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.displayName = 'proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.displayName = 'proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.displayName = 'proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.displayName = 'proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.displayName = 'proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.displayName = 'proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.displayName = 'proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.GetTreeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.GetTreeRequest.displayName = 'proto.build.bazel.remote.execution.v2.GetTreeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.GetTreeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.GetTreeResponse.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.GetTreeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.GetTreeResponse.displayName = 'proto.build.bazel.remote.execution.v2.GetTreeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest.displayName = 'proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.ServerCapabilities, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.ServerCapabilities.displayName = 'proto.build.bazel.remote.execution.v2.ServerCapabilities';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.DigestFunction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.DigestFunction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.DigestFunction.displayName = 'proto.build.bazel.remote.execution.v2.DigestFunction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities.displayName = 'proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.PriorityCapabilities.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.PriorityCapabilities, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.PriorityCapabilities.displayName = 'proto.build.bazel.remote.execution.v2.PriorityCapabilities';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.displayName = 'proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.displayName = 'proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.Compressor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.Compressor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.Compressor.displayName = 'proto.build.bazel.remote.execution.v2.Compressor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.CacheCapabilities.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.CacheCapabilities, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.CacheCapabilities.displayName = 'proto.build.bazel.remote.execution.v2.CacheCapabilities';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.ExecutionCapabilities.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.ExecutionCapabilities, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.ExecutionCapabilities.displayName = 'proto.build.bazel.remote.execution.v2.ExecutionCapabilities';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.ToolDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.ToolDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.ToolDetails.displayName = 'proto.build.bazel.remote.execution.v2.ToolDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.RequestMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.RequestMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.RequestMetadata.displayName = 'proto.build.bazel.remote.execution.v2.RequestMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.ExecutionTask = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.ExecutionTask, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.ExecutionTask.displayName = 'proto.build.bazel.remote.execution.v2.ExecutionTask';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.ScheduledTask = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.ScheduledTask, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.ScheduledTask.displayName = 'proto.build.bazel.remote.execution.v2.ScheduledTask';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.ExecutorDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.ExecutorDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.ExecutorDetails.displayName = 'proto.build.bazel.remote.execution.v2.ExecutorDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.IOStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.IOStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.IOStats.displayName = 'proto.build.bazel.remote.execution.v2.IOStats';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.UsageStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.build.bazel.remote.execution.v2.UsageStats.repeatedFields_, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.UsageStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.UsageStats.displayName = 'proto.build.bazel.remote.execution.v2.UsageStats';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.displayName = 'proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build.bazel.remote.execution.v2.StoredExecution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build.bazel.remote.execution.v2.StoredExecution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.build.bazel.remote.execution.v2.StoredExecution.displayName = 'proto.build.bazel.remote.execution.v2.StoredExecution';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.PublishOperationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.PublishOperationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.PublishOperationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.PublishOperationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.PublishOperationResponse}
 */
proto.build.bazel.remote.execution.v2.PublishOperationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.PublishOperationResponse;
  return proto.build.bazel.remote.execution.v2.PublishOperationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.PublishOperationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.PublishOperationResponse}
 */
proto.build.bazel.remote.execution.v2.PublishOperationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.PublishOperationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.PublishOperationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.PublishOperationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.PublishOperationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.Action.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.Action.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.Action.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.Action} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Action.toObject = function(includeInstance, msg) {
  var f, obj = {
    commandDigest: (f = msg.getCommandDigest()) && proto.build.bazel.remote.execution.v2.Digest.toObject(includeInstance, f),
    inputRootDigest: (f = msg.getInputRootDigest()) && proto.build.bazel.remote.execution.v2.Digest.toObject(includeInstance, f),
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    doNotCache: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    outputNodePropertiesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    salt: msg.getSalt_asB64(),
    platform: (f = msg.getPlatform()) && proto.build.bazel.remote.execution.v2.Platform.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.Action}
 */
proto.build.bazel.remote.execution.v2.Action.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.Action;
  return proto.build.bazel.remote.execution.v2.Action.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.Action} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.Action}
 */
proto.build.bazel.remote.execution.v2.Action.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.setCommandDigest(value);
      break;
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.setInputRootDigest(value);
      break;
    case 6:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDoNotCache(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addOutputNodeProperties(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSalt(value);
      break;
    case 10:
      var value = new proto.build.bazel.remote.execution.v2.Platform;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Platform.deserializeBinaryFromReader);
      msg.setPlatform(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.Action.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.Action.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.Action} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Action.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommandDigest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getInputRootDigest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getDoNotCache();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getOutputNodePropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getSalt_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
  f = message.getPlatform();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.build.bazel.remote.execution.v2.Platform.serializeBinaryToWriter
    );
  }
};


/**
 * optional Digest command_digest = 1;
 * @return {?proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.Action.prototype.getCommandDigest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Digest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 1));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Digest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.Action} returns this
*/
proto.build.bazel.remote.execution.v2.Action.prototype.setCommandDigest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.Action} returns this
 */
proto.build.bazel.remote.execution.v2.Action.prototype.clearCommandDigest = function() {
  return this.setCommandDigest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.Action.prototype.hasCommandDigest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Digest input_root_digest = 2;
 * @return {?proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.Action.prototype.getInputRootDigest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Digest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 2));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Digest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.Action} returns this
*/
proto.build.bazel.remote.execution.v2.Action.prototype.setInputRootDigest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.Action} returns this
 */
proto.build.bazel.remote.execution.v2.Action.prototype.clearInputRootDigest = function() {
  return this.setInputRootDigest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.Action.prototype.hasInputRootDigest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration timeout = 6;
 * @return {?proto.google.protobuf.Duration}
 */
proto.build.bazel.remote.execution.v2.Action.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 6));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.Action} returns this
*/
proto.build.bazel.remote.execution.v2.Action.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.Action} returns this
 */
proto.build.bazel.remote.execution.v2.Action.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.Action.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool do_not_cache = 7;
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.Action.prototype.getDoNotCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.build.bazel.remote.execution.v2.Action} returns this
 */
proto.build.bazel.remote.execution.v2.Action.prototype.setDoNotCache = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated string output_node_properties = 8;
 * @return {!Array<string>}
 */
proto.build.bazel.remote.execution.v2.Action.prototype.getOutputNodePropertiesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.build.bazel.remote.execution.v2.Action} returns this
 */
proto.build.bazel.remote.execution.v2.Action.prototype.setOutputNodePropertiesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.Action} returns this
 */
proto.build.bazel.remote.execution.v2.Action.prototype.addOutputNodeProperties = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.Action} returns this
 */
proto.build.bazel.remote.execution.v2.Action.prototype.clearOutputNodePropertiesList = function() {
  return this.setOutputNodePropertiesList([]);
};


/**
 * optional bytes salt = 9;
 * @return {!(string|Uint8Array)}
 */
proto.build.bazel.remote.execution.v2.Action.prototype.getSalt = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * optional bytes salt = 9;
 * This is a type-conversion wrapper around `getSalt()`
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.Action.prototype.getSalt_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSalt()));
};


/**
 * optional bytes salt = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSalt()`
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.Action.prototype.getSalt_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSalt()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.build.bazel.remote.execution.v2.Action} returns this
 */
proto.build.bazel.remote.execution.v2.Action.prototype.setSalt = function(value) {
  return jspb.Message.setProto3BytesField(this, 9, value);
};


/**
 * optional Platform platform = 10;
 * @return {?proto.build.bazel.remote.execution.v2.Platform}
 */
proto.build.bazel.remote.execution.v2.Action.prototype.getPlatform = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Platform} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Platform, 10));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Platform|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.Action} returns this
*/
proto.build.bazel.remote.execution.v2.Action.prototype.setPlatform = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.Action} returns this
 */
proto.build.bazel.remote.execution.v2.Action.prototype.clearPlatform = function() {
  return this.setPlatform(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.Action.prototype.hasPlatform = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.Command.repeatedFields_ = [1,2,3,4,7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.Command.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.Command.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.Command} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Command.toObject = function(includeInstance, msg) {
  var f, obj = {
    argumentsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    environmentVariablesList: jspb.Message.toObjectList(msg.getEnvironmentVariablesList(),
    proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable.toObject, includeInstance),
    outputFilesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    outputDirectoriesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    outputPathsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    platform: (f = msg.getPlatform()) && proto.build.bazel.remote.execution.v2.Platform.toObject(includeInstance, f),
    workingDirectory: jspb.Message.getFieldWithDefault(msg, 6, ""),
    outputNodePropertiesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.Command}
 */
proto.build.bazel.remote.execution.v2.Command.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.Command;
  return proto.build.bazel.remote.execution.v2.Command.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.Command} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.Command}
 */
proto.build.bazel.remote.execution.v2.Command.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addArguments(value);
      break;
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable.deserializeBinaryFromReader);
      msg.addEnvironmentVariables(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addOutputFiles(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addOutputDirectories(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addOutputPaths(value);
      break;
    case 5:
      var value = new proto.build.bazel.remote.execution.v2.Platform;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Platform.deserializeBinaryFromReader);
      msg.setPlatform(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkingDirectory(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addOutputNodeProperties(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.Command.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.Command.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.Command} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Command.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArgumentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getEnvironmentVariablesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable.serializeBinaryToWriter
    );
  }
  f = message.getOutputFilesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getOutputDirectoriesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getOutputPathsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getPlatform();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.build.bazel.remote.execution.v2.Platform.serializeBinaryToWriter
    );
  }
  f = message.getWorkingDirectory();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOutputNodePropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable}
 */
proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable;
  return proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable}
 */
proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable} returns this
 */
proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable} returns this
 */
proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string arguments = 1;
 * @return {!Array<string>}
 */
proto.build.bazel.remote.execution.v2.Command.prototype.getArgumentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.setArgumentsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.addArguments = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.clearArgumentsList = function() {
  return this.setArgumentsList([]);
};


/**
 * repeated EnvironmentVariable environment_variables = 2;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable>}
 */
proto.build.bazel.remote.execution.v2.Command.prototype.getEnvironmentVariablesList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable, 2));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable>} value
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
*/
proto.build.bazel.remote.execution.v2.Command.prototype.setEnvironmentVariablesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable}
 */
proto.build.bazel.remote.execution.v2.Command.prototype.addEnvironmentVariables = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.build.bazel.remote.execution.v2.Command.EnvironmentVariable, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.clearEnvironmentVariablesList = function() {
  return this.setEnvironmentVariablesList([]);
};


/**
 * repeated string output_files = 3;
 * @return {!Array<string>}
 */
proto.build.bazel.remote.execution.v2.Command.prototype.getOutputFilesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.setOutputFilesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.addOutputFiles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.clearOutputFilesList = function() {
  return this.setOutputFilesList([]);
};


/**
 * repeated string output_directories = 4;
 * @return {!Array<string>}
 */
proto.build.bazel.remote.execution.v2.Command.prototype.getOutputDirectoriesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.setOutputDirectoriesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.addOutputDirectories = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.clearOutputDirectoriesList = function() {
  return this.setOutputDirectoriesList([]);
};


/**
 * repeated string output_paths = 7;
 * @return {!Array<string>}
 */
proto.build.bazel.remote.execution.v2.Command.prototype.getOutputPathsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.setOutputPathsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.addOutputPaths = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.clearOutputPathsList = function() {
  return this.setOutputPathsList([]);
};


/**
 * optional Platform platform = 5;
 * @return {?proto.build.bazel.remote.execution.v2.Platform}
 */
proto.build.bazel.remote.execution.v2.Command.prototype.getPlatform = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Platform} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Platform, 5));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Platform|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
*/
proto.build.bazel.remote.execution.v2.Command.prototype.setPlatform = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.clearPlatform = function() {
  return this.setPlatform(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.Command.prototype.hasPlatform = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string working_directory = 6;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.Command.prototype.getWorkingDirectory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.setWorkingDirectory = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string output_node_properties = 8;
 * @return {!Array<string>}
 */
proto.build.bazel.remote.execution.v2.Command.prototype.getOutputNodePropertiesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.setOutputNodePropertiesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.addOutputNodeProperties = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.Command} returns this
 */
proto.build.bazel.remote.execution.v2.Command.prototype.clearOutputNodePropertiesList = function() {
  return this.setOutputNodePropertiesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.Platform.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.Platform.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.Platform.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.Platform} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Platform.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertiesList: jspb.Message.toObjectList(msg.getPropertiesList(),
    proto.build.bazel.remote.execution.v2.Platform.Property.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.Platform}
 */
proto.build.bazel.remote.execution.v2.Platform.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.Platform;
  return proto.build.bazel.remote.execution.v2.Platform.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.Platform} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.Platform}
 */
proto.build.bazel.remote.execution.v2.Platform.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.Platform.Property;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Platform.Property.deserializeBinaryFromReader);
      msg.addProperties(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.Platform.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.Platform.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.Platform} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Platform.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.Platform.Property.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.Platform.Property.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.Platform.Property.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.Platform.Property} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Platform.Property.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.Platform.Property}
 */
proto.build.bazel.remote.execution.v2.Platform.Property.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.Platform.Property;
  return proto.build.bazel.remote.execution.v2.Platform.Property.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.Platform.Property} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.Platform.Property}
 */
proto.build.bazel.remote.execution.v2.Platform.Property.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.Platform.Property.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.Platform.Property.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.Platform.Property} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Platform.Property.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.Platform.Property.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.Platform.Property} returns this
 */
proto.build.bazel.remote.execution.v2.Platform.Property.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.Platform.Property.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.Platform.Property} returns this
 */
proto.build.bazel.remote.execution.v2.Platform.Property.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Property properties = 1;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.Platform.Property>}
 */
proto.build.bazel.remote.execution.v2.Platform.prototype.getPropertiesList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.Platform.Property>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.Platform.Property, 1));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.Platform.Property>} value
 * @return {!proto.build.bazel.remote.execution.v2.Platform} returns this
*/
proto.build.bazel.remote.execution.v2.Platform.prototype.setPropertiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.Platform.Property=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.Platform.Property}
 */
proto.build.bazel.remote.execution.v2.Platform.prototype.addProperties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.build.bazel.remote.execution.v2.Platform.Property, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.Platform} returns this
 */
proto.build.bazel.remote.execution.v2.Platform.prototype.clearPropertiesList = function() {
  return this.setPropertiesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.Directory.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.Directory.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.Directory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.Directory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Directory.toObject = function(includeInstance, msg) {
  var f, obj = {
    filesList: jspb.Message.toObjectList(msg.getFilesList(),
    proto.build.bazel.remote.execution.v2.FileNode.toObject, includeInstance),
    directoriesList: jspb.Message.toObjectList(msg.getDirectoriesList(),
    proto.build.bazel.remote.execution.v2.DirectoryNode.toObject, includeInstance),
    symlinksList: jspb.Message.toObjectList(msg.getSymlinksList(),
    proto.build.bazel.remote.execution.v2.SymlinkNode.toObject, includeInstance),
    nodeProperties: (f = msg.getNodeProperties()) && proto.build.bazel.remote.execution.v2.NodeProperties.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.Directory}
 */
proto.build.bazel.remote.execution.v2.Directory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.Directory;
  return proto.build.bazel.remote.execution.v2.Directory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.Directory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.Directory}
 */
proto.build.bazel.remote.execution.v2.Directory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.FileNode;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.FileNode.deserializeBinaryFromReader);
      msg.addFiles(value);
      break;
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.DirectoryNode;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.DirectoryNode.deserializeBinaryFromReader);
      msg.addDirectories(value);
      break;
    case 3:
      var value = new proto.build.bazel.remote.execution.v2.SymlinkNode;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.SymlinkNode.deserializeBinaryFromReader);
      msg.addSymlinks(value);
      break;
    case 5:
      var value = new proto.build.bazel.remote.execution.v2.NodeProperties;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.NodeProperties.deserializeBinaryFromReader);
      msg.setNodeProperties(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.Directory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.Directory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.Directory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Directory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.FileNode.serializeBinaryToWriter
    );
  }
  f = message.getDirectoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.DirectoryNode.serializeBinaryToWriter
    );
  }
  f = message.getSymlinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.build.bazel.remote.execution.v2.SymlinkNode.serializeBinaryToWriter
    );
  }
  f = message.getNodeProperties();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.build.bazel.remote.execution.v2.NodeProperties.serializeBinaryToWriter
    );
  }
};


/**
 * repeated FileNode files = 1;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.FileNode>}
 */
proto.build.bazel.remote.execution.v2.Directory.prototype.getFilesList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.FileNode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.FileNode, 1));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.FileNode>} value
 * @return {!proto.build.bazel.remote.execution.v2.Directory} returns this
*/
proto.build.bazel.remote.execution.v2.Directory.prototype.setFilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.FileNode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.FileNode}
 */
proto.build.bazel.remote.execution.v2.Directory.prototype.addFiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.build.bazel.remote.execution.v2.FileNode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.Directory} returns this
 */
proto.build.bazel.remote.execution.v2.Directory.prototype.clearFilesList = function() {
  return this.setFilesList([]);
};


/**
 * repeated DirectoryNode directories = 2;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.DirectoryNode>}
 */
proto.build.bazel.remote.execution.v2.Directory.prototype.getDirectoriesList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.DirectoryNode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.DirectoryNode, 2));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.DirectoryNode>} value
 * @return {!proto.build.bazel.remote.execution.v2.Directory} returns this
*/
proto.build.bazel.remote.execution.v2.Directory.prototype.setDirectoriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.DirectoryNode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.DirectoryNode}
 */
proto.build.bazel.remote.execution.v2.Directory.prototype.addDirectories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.build.bazel.remote.execution.v2.DirectoryNode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.Directory} returns this
 */
proto.build.bazel.remote.execution.v2.Directory.prototype.clearDirectoriesList = function() {
  return this.setDirectoriesList([]);
};


/**
 * repeated SymlinkNode symlinks = 3;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.SymlinkNode>}
 */
proto.build.bazel.remote.execution.v2.Directory.prototype.getSymlinksList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.SymlinkNode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.SymlinkNode, 3));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.SymlinkNode>} value
 * @return {!proto.build.bazel.remote.execution.v2.Directory} returns this
*/
proto.build.bazel.remote.execution.v2.Directory.prototype.setSymlinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.SymlinkNode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.SymlinkNode}
 */
proto.build.bazel.remote.execution.v2.Directory.prototype.addSymlinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.build.bazel.remote.execution.v2.SymlinkNode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.Directory} returns this
 */
proto.build.bazel.remote.execution.v2.Directory.prototype.clearSymlinksList = function() {
  return this.setSymlinksList([]);
};


/**
 * optional NodeProperties node_properties = 5;
 * @return {?proto.build.bazel.remote.execution.v2.NodeProperties}
 */
proto.build.bazel.remote.execution.v2.Directory.prototype.getNodeProperties = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.NodeProperties} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.NodeProperties, 5));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.NodeProperties|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.Directory} returns this
*/
proto.build.bazel.remote.execution.v2.Directory.prototype.setNodeProperties = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.Directory} returns this
 */
proto.build.bazel.remote.execution.v2.Directory.prototype.clearNodeProperties = function() {
  return this.setNodeProperties(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.Directory.prototype.hasNodeProperties = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.NodeProperty.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.NodeProperty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.NodeProperty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.NodeProperty.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.NodeProperty}
 */
proto.build.bazel.remote.execution.v2.NodeProperty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.NodeProperty;
  return proto.build.bazel.remote.execution.v2.NodeProperty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.NodeProperty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.NodeProperty}
 */
proto.build.bazel.remote.execution.v2.NodeProperty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.NodeProperty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.NodeProperty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.NodeProperty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.NodeProperty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.NodeProperty.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.NodeProperty} returns this
 */
proto.build.bazel.remote.execution.v2.NodeProperty.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.NodeProperty.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.NodeProperty} returns this
 */
proto.build.bazel.remote.execution.v2.NodeProperty.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.NodeProperties.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.NodeProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.NodeProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.NodeProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.NodeProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
    propertiesList: jspb.Message.toObjectList(msg.getPropertiesList(),
    proto.build.bazel.remote.execution.v2.NodeProperty.toObject, includeInstance),
    mtime: (f = msg.getMtime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    unixMode: (f = msg.getUnixMode()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.NodeProperties}
 */
proto.build.bazel.remote.execution.v2.NodeProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.NodeProperties;
  return proto.build.bazel.remote.execution.v2.NodeProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.NodeProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.NodeProperties}
 */
proto.build.bazel.remote.execution.v2.NodeProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.NodeProperty;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.NodeProperty.deserializeBinaryFromReader);
      msg.addProperties(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setMtime(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setUnixMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.NodeProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.NodeProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.NodeProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.NodeProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.NodeProperty.serializeBinaryToWriter
    );
  }
  f = message.getMtime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUnixMode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NodeProperty properties = 1;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.NodeProperty>}
 */
proto.build.bazel.remote.execution.v2.NodeProperties.prototype.getPropertiesList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.NodeProperty>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.NodeProperty, 1));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.NodeProperty>} value
 * @return {!proto.build.bazel.remote.execution.v2.NodeProperties} returns this
*/
proto.build.bazel.remote.execution.v2.NodeProperties.prototype.setPropertiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.NodeProperty=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.NodeProperty}
 */
proto.build.bazel.remote.execution.v2.NodeProperties.prototype.addProperties = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.build.bazel.remote.execution.v2.NodeProperty, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.NodeProperties} returns this
 */
proto.build.bazel.remote.execution.v2.NodeProperties.prototype.clearPropertiesList = function() {
  return this.setPropertiesList([]);
};


/**
 * optional google.protobuf.Timestamp mtime = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.build.bazel.remote.execution.v2.NodeProperties.prototype.getMtime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.NodeProperties} returns this
*/
proto.build.bazel.remote.execution.v2.NodeProperties.prototype.setMtime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.NodeProperties} returns this
 */
proto.build.bazel.remote.execution.v2.NodeProperties.prototype.clearMtime = function() {
  return this.setMtime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.NodeProperties.prototype.hasMtime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.UInt32Value unix_mode = 3;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.build.bazel.remote.execution.v2.NodeProperties.prototype.getUnixMode = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 3));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.NodeProperties} returns this
*/
proto.build.bazel.remote.execution.v2.NodeProperties.prototype.setUnixMode = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.NodeProperties} returns this
 */
proto.build.bazel.remote.execution.v2.NodeProperties.prototype.clearUnixMode = function() {
  return this.setUnixMode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.NodeProperties.prototype.hasUnixMode = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.FileNode.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.FileNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.FileNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.FileNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    digest: (f = msg.getDigest()) && proto.build.bazel.remote.execution.v2.Digest.toObject(includeInstance, f),
    isExecutable: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    nodeProperties: (f = msg.getNodeProperties()) && proto.build.bazel.remote.execution.v2.NodeProperties.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.FileNode}
 */
proto.build.bazel.remote.execution.v2.FileNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.FileNode;
  return proto.build.bazel.remote.execution.v2.FileNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.FileNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.FileNode}
 */
proto.build.bazel.remote.execution.v2.FileNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.setDigest(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsExecutable(value);
      break;
    case 6:
      var value = new proto.build.bazel.remote.execution.v2.NodeProperties;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.NodeProperties.deserializeBinaryFromReader);
      msg.setNodeProperties(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.FileNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.FileNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.FileNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.FileNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDigest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getIsExecutable();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getNodeProperties();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.build.bazel.remote.execution.v2.NodeProperties.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.FileNode.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.FileNode} returns this
 */
proto.build.bazel.remote.execution.v2.FileNode.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Digest digest = 2;
 * @return {?proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.FileNode.prototype.getDigest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Digest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 2));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Digest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.FileNode} returns this
*/
proto.build.bazel.remote.execution.v2.FileNode.prototype.setDigest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.FileNode} returns this
 */
proto.build.bazel.remote.execution.v2.FileNode.prototype.clearDigest = function() {
  return this.setDigest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.FileNode.prototype.hasDigest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool is_executable = 4;
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.FileNode.prototype.getIsExecutable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.build.bazel.remote.execution.v2.FileNode} returns this
 */
proto.build.bazel.remote.execution.v2.FileNode.prototype.setIsExecutable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional NodeProperties node_properties = 6;
 * @return {?proto.build.bazel.remote.execution.v2.NodeProperties}
 */
proto.build.bazel.remote.execution.v2.FileNode.prototype.getNodeProperties = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.NodeProperties} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.NodeProperties, 6));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.NodeProperties|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.FileNode} returns this
*/
proto.build.bazel.remote.execution.v2.FileNode.prototype.setNodeProperties = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.FileNode} returns this
 */
proto.build.bazel.remote.execution.v2.FileNode.prototype.clearNodeProperties = function() {
  return this.setNodeProperties(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.FileNode.prototype.hasNodeProperties = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.DirectoryNode.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.DirectoryNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.DirectoryNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.DirectoryNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    digest: (f = msg.getDigest()) && proto.build.bazel.remote.execution.v2.Digest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.DirectoryNode}
 */
proto.build.bazel.remote.execution.v2.DirectoryNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.DirectoryNode;
  return proto.build.bazel.remote.execution.v2.DirectoryNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.DirectoryNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.DirectoryNode}
 */
proto.build.bazel.remote.execution.v2.DirectoryNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.setDigest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.DirectoryNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.DirectoryNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.DirectoryNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.DirectoryNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDigest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.DirectoryNode.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.DirectoryNode} returns this
 */
proto.build.bazel.remote.execution.v2.DirectoryNode.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Digest digest = 2;
 * @return {?proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.DirectoryNode.prototype.getDigest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Digest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 2));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Digest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.DirectoryNode} returns this
*/
proto.build.bazel.remote.execution.v2.DirectoryNode.prototype.setDigest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.DirectoryNode} returns this
 */
proto.build.bazel.remote.execution.v2.DirectoryNode.prototype.clearDigest = function() {
  return this.setDigest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.DirectoryNode.prototype.hasDigest = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.SymlinkNode.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.SymlinkNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.SymlinkNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.SymlinkNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    target: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nodeProperties: (f = msg.getNodeProperties()) && proto.build.bazel.remote.execution.v2.NodeProperties.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.SymlinkNode}
 */
proto.build.bazel.remote.execution.v2.SymlinkNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.SymlinkNode;
  return proto.build.bazel.remote.execution.v2.SymlinkNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.SymlinkNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.SymlinkNode}
 */
proto.build.bazel.remote.execution.v2.SymlinkNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTarget(value);
      break;
    case 4:
      var value = new proto.build.bazel.remote.execution.v2.NodeProperties;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.NodeProperties.deserializeBinaryFromReader);
      msg.setNodeProperties(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.SymlinkNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.SymlinkNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.SymlinkNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.SymlinkNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTarget();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNodeProperties();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.build.bazel.remote.execution.v2.NodeProperties.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.SymlinkNode.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.SymlinkNode} returns this
 */
proto.build.bazel.remote.execution.v2.SymlinkNode.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string target = 2;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.SymlinkNode.prototype.getTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.SymlinkNode} returns this
 */
proto.build.bazel.remote.execution.v2.SymlinkNode.prototype.setTarget = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional NodeProperties node_properties = 4;
 * @return {?proto.build.bazel.remote.execution.v2.NodeProperties}
 */
proto.build.bazel.remote.execution.v2.SymlinkNode.prototype.getNodeProperties = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.NodeProperties} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.NodeProperties, 4));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.NodeProperties|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.SymlinkNode} returns this
*/
proto.build.bazel.remote.execution.v2.SymlinkNode.prototype.setNodeProperties = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.SymlinkNode} returns this
 */
proto.build.bazel.remote.execution.v2.SymlinkNode.prototype.clearNodeProperties = function() {
  return this.setNodeProperties(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.SymlinkNode.prototype.hasNodeProperties = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.Digest.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.Digest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.Digest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Digest.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sizeBytes: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.Digest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.Digest;
  return proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.Digest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSizeBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.Digest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.Digest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSizeBytes();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.Digest.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.Digest} returns this
 */
proto.build.bazel.remote.execution.v2.Digest.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 size_bytes = 2;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.Digest.prototype.getSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.Digest} returns this
 */
proto.build.bazel.remote.execution.v2.Digest.prototype.setSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    worker: jspb.Message.getFieldWithDefault(msg, 1, ""),
    queuedTimestamp: (f = msg.getQueuedTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    workerStartTimestamp: (f = msg.getWorkerStartTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    workerCompletedTimestamp: (f = msg.getWorkerCompletedTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    inputFetchStartTimestamp: (f = msg.getInputFetchStartTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    inputFetchCompletedTimestamp: (f = msg.getInputFetchCompletedTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    executionStartTimestamp: (f = msg.getExecutionStartTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    executionCompletedTimestamp: (f = msg.getExecutionCompletedTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    virtualExecutionDuration: (f = msg.getVirtualExecutionDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    outputUploadStartTimestamp: (f = msg.getOutputUploadStartTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    outputUploadCompletedTimestamp: (f = msg.getOutputUploadCompletedTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    auxiliaryMetadataList: jspb.Message.toObjectList(msg.getAuxiliaryMetadataList(),
    google_protobuf_any_pb.Any.toObject, includeInstance),
    executorId: jspb.Message.getFieldWithDefault(msg, 1000, ""),
    ioStats: (f = msg.getIoStats()) && proto.build.bazel.remote.execution.v2.IOStats.toObject(includeInstance, f),
    usageStats: (f = msg.getUsageStats()) && proto.build.bazel.remote.execution.v2.UsageStats.toObject(includeInstance, f),
    estimatedTaskSize: (f = msg.getEstimatedTaskSize()) && proto_scheduler_pb.TaskSize.toObject(includeInstance, f),
    doNotCache: jspb.Message.getBooleanFieldWithDefault(msg, 1004, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.ExecutedActionMetadata;
  return proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorker(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setQueuedTimestamp(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setWorkerStartTimestamp(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setWorkerCompletedTimestamp(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setInputFetchStartTimestamp(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setInputFetchCompletedTimestamp(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExecutionStartTimestamp(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExecutionCompletedTimestamp(value);
      break;
    case 12:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setVirtualExecutionDuration(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setOutputUploadStartTimestamp(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setOutputUploadCompletedTimestamp(value);
      break;
    case 11:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.addAuxiliaryMetadata(value);
      break;
    case 1000:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutorId(value);
      break;
    case 1001:
      var value = new proto.build.bazel.remote.execution.v2.IOStats;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.IOStats.deserializeBinaryFromReader);
      msg.setIoStats(value);
      break;
    case 1002:
      var value = new proto.build.bazel.remote.execution.v2.UsageStats;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.UsageStats.deserializeBinaryFromReader);
      msg.setUsageStats(value);
      break;
    case 1003:
      var value = new proto_scheduler_pb.TaskSize;
      reader.readMessage(value,proto_scheduler_pb.TaskSize.deserializeBinaryFromReader);
      msg.setEstimatedTaskSize(value);
      break;
    case 1004:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDoNotCache(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorker();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQueuedTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getWorkerStartTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getWorkerCompletedTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getInputFetchStartTimestamp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getInputFetchCompletedTimestamp();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExecutionStartTimestamp();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExecutionCompletedTimestamp();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getVirtualExecutionDuration();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getOutputUploadStartTimestamp();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getOutputUploadCompletedTimestamp();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAuxiliaryMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getExecutorId();
  if (f.length > 0) {
    writer.writeString(
      1000,
      f
    );
  }
  f = message.getIoStats();
  if (f != null) {
    writer.writeMessage(
      1001,
      f,
      proto.build.bazel.remote.execution.v2.IOStats.serializeBinaryToWriter
    );
  }
  f = message.getUsageStats();
  if (f != null) {
    writer.writeMessage(
      1002,
      f,
      proto.build.bazel.remote.execution.v2.UsageStats.serializeBinaryToWriter
    );
  }
  f = message.getEstimatedTaskSize();
  if (f != null) {
    writer.writeMessage(
      1003,
      f,
      proto_scheduler_pb.TaskSize.serializeBinaryToWriter
    );
  }
  f = message.getDoNotCache();
  if (f) {
    writer.writeBool(
      1004,
      f
    );
  }
};


/**
 * optional string worker = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.getWorker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.setWorker = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp queued_timestamp = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.getQueuedTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.setQueuedTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.clearQueuedTimestamp = function() {
  return this.setQueuedTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.hasQueuedTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp worker_start_timestamp = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.getWorkerStartTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.setWorkerStartTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.clearWorkerStartTimestamp = function() {
  return this.setWorkerStartTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.hasWorkerStartTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp worker_completed_timestamp = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.getWorkerCompletedTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.setWorkerCompletedTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.clearWorkerCompletedTimestamp = function() {
  return this.setWorkerCompletedTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.hasWorkerCompletedTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp input_fetch_start_timestamp = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.getInputFetchStartTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.setInputFetchStartTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.clearInputFetchStartTimestamp = function() {
  return this.setInputFetchStartTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.hasInputFetchStartTimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp input_fetch_completed_timestamp = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.getInputFetchCompletedTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.setInputFetchCompletedTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.clearInputFetchCompletedTimestamp = function() {
  return this.setInputFetchCompletedTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.hasInputFetchCompletedTimestamp = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp execution_start_timestamp = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.getExecutionStartTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.setExecutionStartTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.clearExecutionStartTimestamp = function() {
  return this.setExecutionStartTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.hasExecutionStartTimestamp = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp execution_completed_timestamp = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.getExecutionCompletedTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.setExecutionCompletedTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.clearExecutionCompletedTimestamp = function() {
  return this.setExecutionCompletedTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.hasExecutionCompletedTimestamp = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Duration virtual_execution_duration = 12;
 * @return {?proto.google.protobuf.Duration}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.getVirtualExecutionDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 12));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.setVirtualExecutionDuration = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.clearVirtualExecutionDuration = function() {
  return this.setVirtualExecutionDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.hasVirtualExecutionDuration = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp output_upload_start_timestamp = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.getOutputUploadStartTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.setOutputUploadStartTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.clearOutputUploadStartTimestamp = function() {
  return this.setOutputUploadStartTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.hasOutputUploadStartTimestamp = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp output_upload_completed_timestamp = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.getOutputUploadCompletedTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.setOutputUploadCompletedTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.clearOutputUploadCompletedTimestamp = function() {
  return this.setOutputUploadCompletedTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.hasOutputUploadCompletedTimestamp = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated google.protobuf.Any auxiliary_metadata = 11;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.getAuxiliaryMetadataList = function() {
  return /** @type{!Array<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 11));
};


/**
 * @param {!Array<!proto.google.protobuf.Any>} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.setAuxiliaryMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.addAuxiliaryMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.google.protobuf.Any, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.clearAuxiliaryMetadataList = function() {
  return this.setAuxiliaryMetadataList([]);
};


/**
 * optional string executor_id = 1000;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.getExecutorId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1000, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.setExecutorId = function(value) {
  return jspb.Message.setProto3StringField(this, 1000, value);
};


/**
 * optional IOStats io_stats = 1001;
 * @return {?proto.build.bazel.remote.execution.v2.IOStats}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.getIoStats = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.IOStats} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.IOStats, 1001));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.IOStats|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.setIoStats = function(value) {
  return jspb.Message.setWrapperField(this, 1001, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.clearIoStats = function() {
  return this.setIoStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.hasIoStats = function() {
  return jspb.Message.getField(this, 1001) != null;
};


/**
 * optional UsageStats usage_stats = 1002;
 * @return {?proto.build.bazel.remote.execution.v2.UsageStats}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.getUsageStats = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.UsageStats} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.UsageStats, 1002));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.UsageStats|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.setUsageStats = function(value) {
  return jspb.Message.setWrapperField(this, 1002, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.clearUsageStats = function() {
  return this.setUsageStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.hasUsageStats = function() {
  return jspb.Message.getField(this, 1002) != null;
};


/**
 * optional scheduler.TaskSize estimated_task_size = 1003;
 * @return {?proto.scheduler.TaskSize}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.getEstimatedTaskSize = function() {
  return /** @type{?proto.scheduler.TaskSize} */ (
    jspb.Message.getWrapperField(this, proto_scheduler_pb.TaskSize, 1003));
};


/**
 * @param {?proto.scheduler.TaskSize|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.setEstimatedTaskSize = function(value) {
  return jspb.Message.setWrapperField(this, 1003, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.clearEstimatedTaskSize = function() {
  return this.setEstimatedTaskSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.hasEstimatedTaskSize = function() {
  return jspb.Message.getField(this, 1003) != null;
};


/**
 * optional bool do_not_cache = 1004;
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.getDoNotCache = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1004, false));
};


/**
 * @param {boolean} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.prototype.setDoNotCache = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1004, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.ActionResult.repeatedFields_ = [2,10,12,3,11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.ActionResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.ActionResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ActionResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    outputFilesList: jspb.Message.toObjectList(msg.getOutputFilesList(),
    proto.build.bazel.remote.execution.v2.OutputFile.toObject, includeInstance),
    outputFileSymlinksList: jspb.Message.toObjectList(msg.getOutputFileSymlinksList(),
    proto.build.bazel.remote.execution.v2.OutputSymlink.toObject, includeInstance),
    outputSymlinksList: jspb.Message.toObjectList(msg.getOutputSymlinksList(),
    proto.build.bazel.remote.execution.v2.OutputSymlink.toObject, includeInstance),
    outputDirectoriesList: jspb.Message.toObjectList(msg.getOutputDirectoriesList(),
    proto.build.bazel.remote.execution.v2.OutputDirectory.toObject, includeInstance),
    outputDirectorySymlinksList: jspb.Message.toObjectList(msg.getOutputDirectorySymlinksList(),
    proto.build.bazel.remote.execution.v2.OutputSymlink.toObject, includeInstance),
    exitCode: jspb.Message.getFieldWithDefault(msg, 4, 0),
    stdoutRaw: msg.getStdoutRaw_asB64(),
    stdoutDigest: (f = msg.getStdoutDigest()) && proto.build.bazel.remote.execution.v2.Digest.toObject(includeInstance, f),
    stderrRaw: msg.getStderrRaw_asB64(),
    stderrDigest: (f = msg.getStderrDigest()) && proto.build.bazel.remote.execution.v2.Digest.toObject(includeInstance, f),
    executionMetadata: (f = msg.getExecutionMetadata()) && proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult}
 */
proto.build.bazel.remote.execution.v2.ActionResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.ActionResult;
  return proto.build.bazel.remote.execution.v2.ActionResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.ActionResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult}
 */
proto.build.bazel.remote.execution.v2.ActionResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.OutputFile;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.OutputFile.deserializeBinaryFromReader);
      msg.addOutputFiles(value);
      break;
    case 10:
      var value = new proto.build.bazel.remote.execution.v2.OutputSymlink;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.OutputSymlink.deserializeBinaryFromReader);
      msg.addOutputFileSymlinks(value);
      break;
    case 12:
      var value = new proto.build.bazel.remote.execution.v2.OutputSymlink;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.OutputSymlink.deserializeBinaryFromReader);
      msg.addOutputSymlinks(value);
      break;
    case 3:
      var value = new proto.build.bazel.remote.execution.v2.OutputDirectory;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.OutputDirectory.deserializeBinaryFromReader);
      msg.addOutputDirectories(value);
      break;
    case 11:
      var value = new proto.build.bazel.remote.execution.v2.OutputSymlink;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.OutputSymlink.deserializeBinaryFromReader);
      msg.addOutputDirectorySymlinks(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExitCode(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStdoutRaw(value);
      break;
    case 6:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.setStdoutDigest(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setStderrRaw(value);
      break;
    case 8:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.setStderrDigest(value);
      break;
    case 9:
      var value = new proto.build.bazel.remote.execution.v2.ExecutedActionMetadata;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.deserializeBinaryFromReader);
      msg.setExecutionMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.ActionResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.ActionResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ActionResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutputFilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.OutputFile.serializeBinaryToWriter
    );
  }
  f = message.getOutputFileSymlinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.build.bazel.remote.execution.v2.OutputSymlink.serializeBinaryToWriter
    );
  }
  f = message.getOutputSymlinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.build.bazel.remote.execution.v2.OutputSymlink.serializeBinaryToWriter
    );
  }
  f = message.getOutputDirectoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.build.bazel.remote.execution.v2.OutputDirectory.serializeBinaryToWriter
    );
  }
  f = message.getOutputDirectorySymlinksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.build.bazel.remote.execution.v2.OutputSymlink.serializeBinaryToWriter
    );
  }
  f = message.getExitCode();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getStdoutRaw_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getStdoutDigest();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getStderrRaw_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getStderrDigest();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getExecutionMetadata();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OutputFile output_files = 2;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.OutputFile>}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.getOutputFilesList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.OutputFile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.OutputFile, 2));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.OutputFile>} value
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
*/
proto.build.bazel.remote.execution.v2.ActionResult.prototype.setOutputFilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.OutputFile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.OutputFile}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.addOutputFiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.build.bazel.remote.execution.v2.OutputFile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.clearOutputFilesList = function() {
  return this.setOutputFilesList([]);
};


/**
 * repeated OutputSymlink output_file_symlinks = 10;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.OutputSymlink>}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.getOutputFileSymlinksList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.OutputSymlink>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.OutputSymlink, 10));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.OutputSymlink>} value
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
*/
proto.build.bazel.remote.execution.v2.ActionResult.prototype.setOutputFileSymlinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.OutputSymlink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.OutputSymlink}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.addOutputFileSymlinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.build.bazel.remote.execution.v2.OutputSymlink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.clearOutputFileSymlinksList = function() {
  return this.setOutputFileSymlinksList([]);
};


/**
 * repeated OutputSymlink output_symlinks = 12;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.OutputSymlink>}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.getOutputSymlinksList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.OutputSymlink>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.OutputSymlink, 12));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.OutputSymlink>} value
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
*/
proto.build.bazel.remote.execution.v2.ActionResult.prototype.setOutputSymlinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.OutputSymlink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.OutputSymlink}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.addOutputSymlinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.build.bazel.remote.execution.v2.OutputSymlink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.clearOutputSymlinksList = function() {
  return this.setOutputSymlinksList([]);
};


/**
 * repeated OutputDirectory output_directories = 3;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.OutputDirectory>}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.getOutputDirectoriesList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.OutputDirectory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.OutputDirectory, 3));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.OutputDirectory>} value
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
*/
proto.build.bazel.remote.execution.v2.ActionResult.prototype.setOutputDirectoriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.OutputDirectory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.OutputDirectory}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.addOutputDirectories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.build.bazel.remote.execution.v2.OutputDirectory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.clearOutputDirectoriesList = function() {
  return this.setOutputDirectoriesList([]);
};


/**
 * repeated OutputSymlink output_directory_symlinks = 11;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.OutputSymlink>}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.getOutputDirectorySymlinksList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.OutputSymlink>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.OutputSymlink, 11));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.OutputSymlink>} value
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
*/
proto.build.bazel.remote.execution.v2.ActionResult.prototype.setOutputDirectorySymlinksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.OutputSymlink=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.OutputSymlink}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.addOutputDirectorySymlinks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.build.bazel.remote.execution.v2.OutputSymlink, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.clearOutputDirectorySymlinksList = function() {
  return this.setOutputDirectorySymlinksList([]);
};


/**
 * optional int32 exit_code = 4;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.getExitCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.setExitCode = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bytes stdout_raw = 5;
 * @return {!(string|Uint8Array)}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.getStdoutRaw = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes stdout_raw = 5;
 * This is a type-conversion wrapper around `getStdoutRaw()`
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.getStdoutRaw_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStdoutRaw()));
};


/**
 * optional bytes stdout_raw = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStdoutRaw()`
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.getStdoutRaw_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStdoutRaw()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.setStdoutRaw = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional Digest stdout_digest = 6;
 * @return {?proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.getStdoutDigest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Digest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 6));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Digest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
*/
proto.build.bazel.remote.execution.v2.ActionResult.prototype.setStdoutDigest = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.clearStdoutDigest = function() {
  return this.setStdoutDigest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.hasStdoutDigest = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes stderr_raw = 7;
 * @return {!(string|Uint8Array)}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.getStderrRaw = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes stderr_raw = 7;
 * This is a type-conversion wrapper around `getStderrRaw()`
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.getStderrRaw_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getStderrRaw()));
};


/**
 * optional bytes stderr_raw = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getStderrRaw()`
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.getStderrRaw_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getStderrRaw()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.setStderrRaw = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * optional Digest stderr_digest = 8;
 * @return {?proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.getStderrDigest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Digest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 8));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Digest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
*/
proto.build.bazel.remote.execution.v2.ActionResult.prototype.setStderrDigest = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.clearStderrDigest = function() {
  return this.setStderrDigest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.hasStderrDigest = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ExecutedActionMetadata execution_metadata = 9;
 * @return {?proto.build.bazel.remote.execution.v2.ExecutedActionMetadata}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.getExecutionMetadata = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.ExecutedActionMetadata, 9));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.ExecutedActionMetadata|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
*/
proto.build.bazel.remote.execution.v2.ActionResult.prototype.setExecutionMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ActionResult} returns this
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.clearExecutionMetadata = function() {
  return this.setExecutionMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ActionResult.prototype.hasExecutionMetadata = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.OutputFile.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.OutputFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.OutputFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.OutputFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    digest: (f = msg.getDigest()) && proto.build.bazel.remote.execution.v2.Digest.toObject(includeInstance, f),
    isExecutable: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    contents: msg.getContents_asB64(),
    nodeProperties: (f = msg.getNodeProperties()) && proto.build.bazel.remote.execution.v2.NodeProperties.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.OutputFile}
 */
proto.build.bazel.remote.execution.v2.OutputFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.OutputFile;
  return proto.build.bazel.remote.execution.v2.OutputFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.OutputFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.OutputFile}
 */
proto.build.bazel.remote.execution.v2.OutputFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.setDigest(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsExecutable(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContents(value);
      break;
    case 7:
      var value = new proto.build.bazel.remote.execution.v2.NodeProperties;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.NodeProperties.deserializeBinaryFromReader);
      msg.setNodeProperties(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.OutputFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.OutputFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.OutputFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.OutputFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDigest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getIsExecutable();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getContents_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getNodeProperties();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.build.bazel.remote.execution.v2.NodeProperties.serializeBinaryToWriter
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.OutputFile.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.OutputFile} returns this
 */
proto.build.bazel.remote.execution.v2.OutputFile.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Digest digest = 2;
 * @return {?proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.OutputFile.prototype.getDigest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Digest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 2));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Digest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.OutputFile} returns this
*/
proto.build.bazel.remote.execution.v2.OutputFile.prototype.setDigest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.OutputFile} returns this
 */
proto.build.bazel.remote.execution.v2.OutputFile.prototype.clearDigest = function() {
  return this.setDigest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.OutputFile.prototype.hasDigest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool is_executable = 4;
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.OutputFile.prototype.getIsExecutable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.build.bazel.remote.execution.v2.OutputFile} returns this
 */
proto.build.bazel.remote.execution.v2.OutputFile.prototype.setIsExecutable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bytes contents = 5;
 * @return {!(string|Uint8Array)}
 */
proto.build.bazel.remote.execution.v2.OutputFile.prototype.getContents = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes contents = 5;
 * This is a type-conversion wrapper around `getContents()`
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.OutputFile.prototype.getContents_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContents()));
};


/**
 * optional bytes contents = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContents()`
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.OutputFile.prototype.getContents_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContents()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.build.bazel.remote.execution.v2.OutputFile} returns this
 */
proto.build.bazel.remote.execution.v2.OutputFile.prototype.setContents = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional NodeProperties node_properties = 7;
 * @return {?proto.build.bazel.remote.execution.v2.NodeProperties}
 */
proto.build.bazel.remote.execution.v2.OutputFile.prototype.getNodeProperties = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.NodeProperties} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.NodeProperties, 7));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.NodeProperties|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.OutputFile} returns this
*/
proto.build.bazel.remote.execution.v2.OutputFile.prototype.setNodeProperties = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.OutputFile} returns this
 */
proto.build.bazel.remote.execution.v2.OutputFile.prototype.clearNodeProperties = function() {
  return this.setNodeProperties(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.OutputFile.prototype.hasNodeProperties = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.Tree.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.Tree.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.Tree.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.Tree} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Tree.toObject = function(includeInstance, msg) {
  var f, obj = {
    root: (f = msg.getRoot()) && proto.build.bazel.remote.execution.v2.Directory.toObject(includeInstance, f),
    childrenList: jspb.Message.toObjectList(msg.getChildrenList(),
    proto.build.bazel.remote.execution.v2.Directory.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.Tree}
 */
proto.build.bazel.remote.execution.v2.Tree.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.Tree;
  return proto.build.bazel.remote.execution.v2.Tree.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.Tree} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.Tree}
 */
proto.build.bazel.remote.execution.v2.Tree.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.Directory;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Directory.deserializeBinaryFromReader);
      msg.setRoot(value);
      break;
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.Directory;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Directory.deserializeBinaryFromReader);
      msg.addChildren(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.Tree.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.Tree.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.Tree} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Tree.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.Directory.serializeBinaryToWriter
    );
  }
  f = message.getChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.Directory.serializeBinaryToWriter
    );
  }
};


/**
 * optional Directory root = 1;
 * @return {?proto.build.bazel.remote.execution.v2.Directory}
 */
proto.build.bazel.remote.execution.v2.Tree.prototype.getRoot = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Directory} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Directory, 1));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Directory|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.Tree} returns this
*/
proto.build.bazel.remote.execution.v2.Tree.prototype.setRoot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.Tree} returns this
 */
proto.build.bazel.remote.execution.v2.Tree.prototype.clearRoot = function() {
  return this.setRoot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.Tree.prototype.hasRoot = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Directory children = 2;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.Directory>}
 */
proto.build.bazel.remote.execution.v2.Tree.prototype.getChildrenList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.Directory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.Directory, 2));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.Directory>} value
 * @return {!proto.build.bazel.remote.execution.v2.Tree} returns this
*/
proto.build.bazel.remote.execution.v2.Tree.prototype.setChildrenList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.Directory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.Directory}
 */
proto.build.bazel.remote.execution.v2.Tree.prototype.addChildren = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.build.bazel.remote.execution.v2.Directory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.Tree} returns this
 */
proto.build.bazel.remote.execution.v2.Tree.prototype.clearChildrenList = function() {
  return this.setChildrenList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.OutputDirectory.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.OutputDirectory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.OutputDirectory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.OutputDirectory.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    treeDigest: (f = msg.getTreeDigest()) && proto.build.bazel.remote.execution.v2.Digest.toObject(includeInstance, f),
    isTopologicallySorted: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.OutputDirectory}
 */
proto.build.bazel.remote.execution.v2.OutputDirectory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.OutputDirectory;
  return proto.build.bazel.remote.execution.v2.OutputDirectory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.OutputDirectory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.OutputDirectory}
 */
proto.build.bazel.remote.execution.v2.OutputDirectory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.setTreeDigest(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTopologicallySorted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.OutputDirectory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.OutputDirectory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.OutputDirectory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.OutputDirectory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTreeDigest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getIsTopologicallySorted();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.OutputDirectory.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.OutputDirectory} returns this
 */
proto.build.bazel.remote.execution.v2.OutputDirectory.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Digest tree_digest = 3;
 * @return {?proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.OutputDirectory.prototype.getTreeDigest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Digest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 3));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Digest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.OutputDirectory} returns this
*/
proto.build.bazel.remote.execution.v2.OutputDirectory.prototype.setTreeDigest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.OutputDirectory} returns this
 */
proto.build.bazel.remote.execution.v2.OutputDirectory.prototype.clearTreeDigest = function() {
  return this.setTreeDigest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.OutputDirectory.prototype.hasTreeDigest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_topologically_sorted = 4;
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.OutputDirectory.prototype.getIsTopologicallySorted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.build.bazel.remote.execution.v2.OutputDirectory} returns this
 */
proto.build.bazel.remote.execution.v2.OutputDirectory.prototype.setIsTopologicallySorted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.OutputSymlink.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.OutputSymlink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.OutputSymlink} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.OutputSymlink.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    target: jspb.Message.getFieldWithDefault(msg, 2, ""),
    nodeProperties: (f = msg.getNodeProperties()) && proto.build.bazel.remote.execution.v2.NodeProperties.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.OutputSymlink}
 */
proto.build.bazel.remote.execution.v2.OutputSymlink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.OutputSymlink;
  return proto.build.bazel.remote.execution.v2.OutputSymlink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.OutputSymlink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.OutputSymlink}
 */
proto.build.bazel.remote.execution.v2.OutputSymlink.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTarget(value);
      break;
    case 4:
      var value = new proto.build.bazel.remote.execution.v2.NodeProperties;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.NodeProperties.deserializeBinaryFromReader);
      msg.setNodeProperties(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.OutputSymlink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.OutputSymlink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.OutputSymlink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.OutputSymlink.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTarget();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNodeProperties();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.build.bazel.remote.execution.v2.NodeProperties.serializeBinaryToWriter
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.OutputSymlink.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.OutputSymlink} returns this
 */
proto.build.bazel.remote.execution.v2.OutputSymlink.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string target = 2;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.OutputSymlink.prototype.getTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.OutputSymlink} returns this
 */
proto.build.bazel.remote.execution.v2.OutputSymlink.prototype.setTarget = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional NodeProperties node_properties = 4;
 * @return {?proto.build.bazel.remote.execution.v2.NodeProperties}
 */
proto.build.bazel.remote.execution.v2.OutputSymlink.prototype.getNodeProperties = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.NodeProperties} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.NodeProperties, 4));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.NodeProperties|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.OutputSymlink} returns this
*/
proto.build.bazel.remote.execution.v2.OutputSymlink.prototype.setNodeProperties = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.OutputSymlink} returns this
 */
proto.build.bazel.remote.execution.v2.OutputSymlink.prototype.clearNodeProperties = function() {
  return this.setNodeProperties(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.OutputSymlink.prototype.hasNodeProperties = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.ExecutionPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.ExecutionPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.ExecutionPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecutionPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    priority: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionPolicy}
 */
proto.build.bazel.remote.execution.v2.ExecutionPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.ExecutionPolicy;
  return proto.build.bazel.remote.execution.v2.ExecutionPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.ExecutionPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionPolicy}
 */
proto.build.bazel.remote.execution.v2.ExecutionPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.ExecutionPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.ExecutionPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.ExecutionPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecutionPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 priority = 1;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.ExecutionPolicy.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionPolicy} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionPolicy.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.ResultsCachePolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.ResultsCachePolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.ResultsCachePolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ResultsCachePolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    priority: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.ResultsCachePolicy}
 */
proto.build.bazel.remote.execution.v2.ResultsCachePolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.ResultsCachePolicy;
  return proto.build.bazel.remote.execution.v2.ResultsCachePolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.ResultsCachePolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.ResultsCachePolicy}
 */
proto.build.bazel.remote.execution.v2.ResultsCachePolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.ResultsCachePolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.ResultsCachePolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.ResultsCachePolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ResultsCachePolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 priority = 1;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.ResultsCachePolicy.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.ResultsCachePolicy} returns this
 */
proto.build.bazel.remote.execution.v2.ResultsCachePolicy.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.ExecuteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.ExecuteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    skipCacheLookup: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    actionDigest: (f = msg.getActionDigest()) && proto.build.bazel.remote.execution.v2.Digest.toObject(includeInstance, f),
    executionPolicy: (f = msg.getExecutionPolicy()) && proto.build.bazel.remote.execution.v2.ExecutionPolicy.toObject(includeInstance, f),
    resultsCachePolicy: (f = msg.getResultsCachePolicy()) && proto.build.bazel.remote.execution.v2.ResultsCachePolicy.toObject(includeInstance, f),
    digestFunction: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteRequest}
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.ExecuteRequest;
  return proto.build.bazel.remote.execution.v2.ExecuteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.ExecuteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteRequest}
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceName(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipCacheLookup(value);
      break;
    case 6:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.setActionDigest(value);
      break;
    case 7:
      var value = new proto.build.bazel.remote.execution.v2.ExecutionPolicy;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.ExecutionPolicy.deserializeBinaryFromReader);
      msg.setExecutionPolicy(value);
      break;
    case 8:
      var value = new proto.build.bazel.remote.execution.v2.ResultsCachePolicy;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.ResultsCachePolicy.deserializeBinaryFromReader);
      msg.setResultsCachePolicy(value);
      break;
    case 9:
      var value = /** @type {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} */ (reader.readEnum());
      msg.setDigestFunction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.ExecuteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.ExecuteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSkipCacheLookup();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getActionDigest();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getExecutionPolicy();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.build.bazel.remote.execution.v2.ExecutionPolicy.serializeBinaryToWriter
    );
  }
  f = message.getResultsCachePolicy();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.build.bazel.remote.execution.v2.ResultsCachePolicy.serializeBinaryToWriter
    );
  }
  f = message.getDigestFunction();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional string instance_name = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.getInstanceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteRequest} returns this
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.setInstanceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool skip_cache_lookup = 3;
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.getSkipCacheLookup = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteRequest} returns this
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.setSkipCacheLookup = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Digest action_digest = 6;
 * @return {?proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.getActionDigest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Digest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 6));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Digest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteRequest} returns this
*/
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.setActionDigest = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteRequest} returns this
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.clearActionDigest = function() {
  return this.setActionDigest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.hasActionDigest = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ExecutionPolicy execution_policy = 7;
 * @return {?proto.build.bazel.remote.execution.v2.ExecutionPolicy}
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.getExecutionPolicy = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.ExecutionPolicy} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.ExecutionPolicy, 7));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.ExecutionPolicy|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteRequest} returns this
*/
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.setExecutionPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteRequest} returns this
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.clearExecutionPolicy = function() {
  return this.setExecutionPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.hasExecutionPolicy = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ResultsCachePolicy results_cache_policy = 8;
 * @return {?proto.build.bazel.remote.execution.v2.ResultsCachePolicy}
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.getResultsCachePolicy = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.ResultsCachePolicy} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.ResultsCachePolicy, 8));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.ResultsCachePolicy|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteRequest} returns this
*/
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.setResultsCachePolicy = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteRequest} returns this
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.clearResultsCachePolicy = function() {
  return this.setResultsCachePolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.hasResultsCachePolicy = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DigestFunction.Value digest_function = 9;
 * @return {!proto.build.bazel.remote.execution.v2.DigestFunction.Value}
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.getDigestFunction = function() {
  return /** @type {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteRequest} returns this
 */
proto.build.bazel.remote.execution.v2.ExecuteRequest.prototype.setDigestFunction = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.LogFile.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.LogFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.LogFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.LogFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    digest: (f = msg.getDigest()) && proto.build.bazel.remote.execution.v2.Digest.toObject(includeInstance, f),
    humanReadable: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.LogFile}
 */
proto.build.bazel.remote.execution.v2.LogFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.LogFile;
  return proto.build.bazel.remote.execution.v2.LogFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.LogFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.LogFile}
 */
proto.build.bazel.remote.execution.v2.LogFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.setDigest(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHumanReadable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.LogFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.LogFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.LogFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.LogFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDigest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getHumanReadable();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Digest digest = 1;
 * @return {?proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.LogFile.prototype.getDigest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Digest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 1));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Digest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.LogFile} returns this
*/
proto.build.bazel.remote.execution.v2.LogFile.prototype.setDigest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.LogFile} returns this
 */
proto.build.bazel.remote.execution.v2.LogFile.prototype.clearDigest = function() {
  return this.setDigest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.LogFile.prototype.hasDigest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool human_readable = 2;
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.LogFile.prototype.getHumanReadable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.build.bazel.remote.execution.v2.LogFile} returns this
 */
proto.build.bazel.remote.execution.v2.LogFile.prototype.setHumanReadable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.ExecuteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.ExecuteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && proto.build.bazel.remote.execution.v2.ActionResult.toObject(includeInstance, f),
    cachedResult: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    status: (f = msg.getStatus()) && google_rpc_status_pb.Status.toObject(includeInstance, f),
    serverLogsMap: (f = msg.getServerLogsMap()) ? f.toObject(includeInstance, proto.build.bazel.remote.execution.v2.LogFile.toObject) : [],
    message: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteResponse}
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.ExecuteResponse;
  return proto.build.bazel.remote.execution.v2.ExecuteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.ExecuteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteResponse}
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.ActionResult;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.ActionResult.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCachedResult(value);
      break;
    case 3:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 4:
      var value = msg.getServerLogsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.build.bazel.remote.execution.v2.LogFile.deserializeBinaryFromReader, "", new proto.build.bazel.remote.execution.v2.LogFile());
         });
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.ExecuteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.ExecuteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.ActionResult.serializeBinaryToWriter
    );
  }
  f = message.getCachedResult();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getServerLogsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.build.bazel.remote.execution.v2.LogFile.serializeBinaryToWriter);
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ActionResult result = 1;
 * @return {?proto.build.bazel.remote.execution.v2.ActionResult}
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.prototype.getResult = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.ActionResult} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.ActionResult, 1));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.ActionResult|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteResponse} returns this
*/
proto.build.bazel.remote.execution.v2.ExecuteResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteResponse} returns this
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool cached_result = 2;
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.prototype.getCachedResult = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteResponse} returns this
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.prototype.setCachedResult = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional google.rpc.Status status = 3;
 * @return {?proto.google.rpc.Status}
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.prototype.getStatus = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 3));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteResponse} returns this
*/
proto.build.bazel.remote.execution.v2.ExecuteResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteResponse} returns this
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, LogFile> server_logs = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.build.bazel.remote.execution.v2.LogFile>}
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.prototype.getServerLogsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.build.bazel.remote.execution.v2.LogFile>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.build.bazel.remote.execution.v2.LogFile));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteResponse} returns this
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.prototype.clearServerLogsMap = function() {
  this.getServerLogsMap().clear();
  return this;
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteResponse} returns this
 */
proto.build.bazel.remote.execution.v2.ExecuteResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.ExecutionStage.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.ExecutionStage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.ExecutionStage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecutionStage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionStage}
 */
proto.build.bazel.remote.execution.v2.ExecutionStage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.ExecutionStage;
  return proto.build.bazel.remote.execution.v2.ExecutionStage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.ExecutionStage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionStage}
 */
proto.build.bazel.remote.execution.v2.ExecutionStage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.ExecutionStage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.ExecutionStage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.ExecutionStage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecutionStage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.build.bazel.remote.execution.v2.ExecutionStage.Value = {
  UNKNOWN: 0,
  CACHE_CHECK: 1,
  QUEUED: 2,
  EXECUTING: 3,
  COMPLETED: 4
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    stage: jspb.Message.getFieldWithDefault(msg, 1, 0),
    actionDigest: (f = msg.getActionDigest()) && proto.build.bazel.remote.execution.v2.Digest.toObject(includeInstance, f),
    stdoutStreamName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    stderrStreamName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    partialExecutionMetadata: (f = msg.getPartialExecutionMetadata()) && proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata}
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata;
  return proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata}
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.build.bazel.remote.execution.v2.ExecutionStage.Value} */ (reader.readEnum());
      msg.setStage(value);
      break;
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.setActionDigest(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStdoutStreamName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStderrStreamName(value);
      break;
    case 5:
      var value = new proto.build.bazel.remote.execution.v2.ExecutedActionMetadata;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.deserializeBinaryFromReader);
      msg.setPartialExecutionMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStage();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getActionDigest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getStdoutStreamName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStderrStreamName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPartialExecutionMetadata();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.build.bazel.remote.execution.v2.ExecutedActionMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional ExecutionStage.Value stage = 1;
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionStage.Value}
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.prototype.getStage = function() {
  return /** @type {!proto.build.bazel.remote.execution.v2.ExecutionStage.Value} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.ExecutionStage.Value} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.prototype.setStage = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Digest action_digest = 2;
 * @return {?proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.prototype.getActionDigest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Digest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 2));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Digest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.prototype.setActionDigest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.prototype.clearActionDigest = function() {
  return this.setActionDigest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.prototype.hasActionDigest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string stdout_stream_name = 3;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.prototype.getStdoutStreamName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.prototype.setStdoutStreamName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string stderr_stream_name = 4;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.prototype.getStderrStreamName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.prototype.setStderrStreamName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional ExecutedActionMetadata partial_execution_metadata = 5;
 * @return {?proto.build.bazel.remote.execution.v2.ExecutedActionMetadata}
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.prototype.getPartialExecutionMetadata = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.ExecutedActionMetadata} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.ExecutedActionMetadata, 5));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.ExecutedActionMetadata|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.prototype.setPartialExecutionMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.prototype.clearPartialExecutionMetadata = function() {
  return this.setPartialExecutionMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecuteOperationMetadata.prototype.hasPartialExecutionMetadata = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.WaitExecutionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.WaitExecutionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.WaitExecutionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.WaitExecutionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.WaitExecutionRequest}
 */
proto.build.bazel.remote.execution.v2.WaitExecutionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.WaitExecutionRequest;
  return proto.build.bazel.remote.execution.v2.WaitExecutionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.WaitExecutionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.WaitExecutionRequest}
 */
proto.build.bazel.remote.execution.v2.WaitExecutionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.WaitExecutionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.WaitExecutionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.WaitExecutionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.WaitExecutionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.WaitExecutionRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.WaitExecutionRequest} returns this
 */
proto.build.bazel.remote.execution.v2.WaitExecutionRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.GetActionResultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.GetActionResultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    actionDigest: (f = msg.getActionDigest()) && proto.build.bazel.remote.execution.v2.Digest.toObject(includeInstance, f),
    inlineStdout: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    inlineStderr: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    inlineOutputFilesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    digestFunction: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.GetActionResultRequest}
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.GetActionResultRequest;
  return proto.build.bazel.remote.execution.v2.GetActionResultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.GetActionResultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.GetActionResultRequest}
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceName(value);
      break;
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.setActionDigest(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInlineStdout(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInlineStderr(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addInlineOutputFiles(value);
      break;
    case 6:
      var value = /** @type {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} */ (reader.readEnum());
      msg.setDigestFunction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.GetActionResultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.GetActionResultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getActionDigest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getInlineStdout();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getInlineStderr();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getInlineOutputFilesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getDigestFunction();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string instance_name = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.getInstanceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.GetActionResultRequest} returns this
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.setInstanceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Digest action_digest = 2;
 * @return {?proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.getActionDigest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Digest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 2));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Digest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.GetActionResultRequest} returns this
*/
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.setActionDigest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.GetActionResultRequest} returns this
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.clearActionDigest = function() {
  return this.setActionDigest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.hasActionDigest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool inline_stdout = 3;
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.getInlineStdout = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.build.bazel.remote.execution.v2.GetActionResultRequest} returns this
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.setInlineStdout = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool inline_stderr = 4;
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.getInlineStderr = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.build.bazel.remote.execution.v2.GetActionResultRequest} returns this
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.setInlineStderr = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated string inline_output_files = 5;
 * @return {!Array<string>}
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.getInlineOutputFilesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.build.bazel.remote.execution.v2.GetActionResultRequest} returns this
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.setInlineOutputFilesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.GetActionResultRequest} returns this
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.addInlineOutputFiles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.GetActionResultRequest} returns this
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.clearInlineOutputFilesList = function() {
  return this.setInlineOutputFilesList([]);
};


/**
 * optional DigestFunction.Value digest_function = 6;
 * @return {!proto.build.bazel.remote.execution.v2.DigestFunction.Value}
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.getDigestFunction = function() {
  return /** @type {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} value
 * @return {!proto.build.bazel.remote.execution.v2.GetActionResultRequest} returns this
 */
proto.build.bazel.remote.execution.v2.GetActionResultRequest.prototype.setDigestFunction = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.UpdateActionResultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    actionDigest: (f = msg.getActionDigest()) && proto.build.bazel.remote.execution.v2.Digest.toObject(includeInstance, f),
    actionResult: (f = msg.getActionResult()) && proto.build.bazel.remote.execution.v2.ActionResult.toObject(includeInstance, f),
    resultsCachePolicy: (f = msg.getResultsCachePolicy()) && proto.build.bazel.remote.execution.v2.ResultsCachePolicy.toObject(includeInstance, f),
    digestFunction: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.UpdateActionResultRequest}
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.UpdateActionResultRequest;
  return proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.UpdateActionResultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.UpdateActionResultRequest}
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceName(value);
      break;
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.setActionDigest(value);
      break;
    case 3:
      var value = new proto.build.bazel.remote.execution.v2.ActionResult;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.ActionResult.deserializeBinaryFromReader);
      msg.setActionResult(value);
      break;
    case 4:
      var value = new proto.build.bazel.remote.execution.v2.ResultsCachePolicy;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.ResultsCachePolicy.deserializeBinaryFromReader);
      msg.setResultsCachePolicy(value);
      break;
    case 5:
      var value = /** @type {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} */ (reader.readEnum());
      msg.setDigestFunction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.UpdateActionResultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getActionDigest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getActionResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.build.bazel.remote.execution.v2.ActionResult.serializeBinaryToWriter
    );
  }
  f = message.getResultsCachePolicy();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.build.bazel.remote.execution.v2.ResultsCachePolicy.serializeBinaryToWriter
    );
  }
  f = message.getDigestFunction();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string instance_name = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.getInstanceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.UpdateActionResultRequest} returns this
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.setInstanceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Digest action_digest = 2;
 * @return {?proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.getActionDigest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Digest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 2));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Digest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.UpdateActionResultRequest} returns this
*/
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.setActionDigest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.UpdateActionResultRequest} returns this
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.clearActionDigest = function() {
  return this.setActionDigest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.hasActionDigest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ActionResult action_result = 3;
 * @return {?proto.build.bazel.remote.execution.v2.ActionResult}
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.getActionResult = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.ActionResult} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.ActionResult, 3));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.ActionResult|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.UpdateActionResultRequest} returns this
*/
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.setActionResult = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.UpdateActionResultRequest} returns this
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.clearActionResult = function() {
  return this.setActionResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.hasActionResult = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ResultsCachePolicy results_cache_policy = 4;
 * @return {?proto.build.bazel.remote.execution.v2.ResultsCachePolicy}
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.getResultsCachePolicy = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.ResultsCachePolicy} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.ResultsCachePolicy, 4));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.ResultsCachePolicy|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.UpdateActionResultRequest} returns this
*/
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.setResultsCachePolicy = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.UpdateActionResultRequest} returns this
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.clearResultsCachePolicy = function() {
  return this.setResultsCachePolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.hasResultsCachePolicy = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DigestFunction.Value digest_function = 5;
 * @return {!proto.build.bazel.remote.execution.v2.DigestFunction.Value}
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.getDigestFunction = function() {
  return /** @type {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} value
 * @return {!proto.build.bazel.remote.execution.v2.UpdateActionResultRequest} returns this
 */
proto.build.bazel.remote.execution.v2.UpdateActionResultRequest.prototype.setDigestFunction = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    blobDigestsList: jspb.Message.toObjectList(msg.getBlobDigestsList(),
    proto.build.bazel.remote.execution.v2.Digest.toObject, includeInstance),
    digestFunction: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest}
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest;
  return proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest}
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceName(value);
      break;
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.addBlobDigests(value);
      break;
    case 3:
      var value = /** @type {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} */ (reader.readEnum());
      msg.setDigestFunction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBlobDigestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getDigestFunction();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string instance_name = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.prototype.getInstanceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest} returns this
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.prototype.setInstanceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Digest blob_digests = 2;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.Digest>}
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.prototype.getBlobDigestsList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.Digest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 2));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.Digest>} value
 * @return {!proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest} returns this
*/
proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.prototype.setBlobDigestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.Digest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.prototype.addBlobDigests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.build.bazel.remote.execution.v2.Digest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest} returns this
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.prototype.clearBlobDigestsList = function() {
  return this.setBlobDigestsList([]);
};


/**
 * optional DigestFunction.Value digest_function = 3;
 * @return {!proto.build.bazel.remote.execution.v2.DigestFunction.Value}
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.prototype.getDigestFunction = function() {
  return /** @type {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} value
 * @return {!proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest} returns this
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsRequest.prototype.setDigestFunction = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    missingBlobDigestsList: jspb.Message.toObjectList(msg.getMissingBlobDigestsList(),
    proto.build.bazel.remote.execution.v2.Digest.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse}
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse;
  return proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse}
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.addMissingBlobDigests(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMissingBlobDigestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Digest missing_blob_digests = 2;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.Digest>}
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse.prototype.getMissingBlobDigestsList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.Digest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 2));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.Digest>} value
 * @return {!proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse} returns this
*/
proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse.prototype.setMissingBlobDigestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.Digest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse.prototype.addMissingBlobDigests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.build.bazel.remote.execution.v2.Digest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse} returns this
 */
proto.build.bazel.remote.execution.v2.FindMissingBlobsResponse.prototype.clearMissingBlobDigestsList = function() {
  return this.setMissingBlobDigestsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    requestsList: jspb.Message.toObjectList(msg.getRequestsList(),
    proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.toObject, includeInstance),
    digestFunction: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest;
  return proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceName(value);
      break;
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.deserializeBinaryFromReader);
      msg.addRequests(value);
      break;
    case 5:
      var value = /** @type {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} */ (reader.readEnum());
      msg.setDigestFunction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.serializeBinaryToWriter
    );
  }
  f = message.getDigestFunction();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    digest: (f = msg.getDigest()) && proto.build.bazel.remote.execution.v2.Digest.toObject(includeInstance, f),
    data: msg.getData_asB64(),
    compressor: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request;
  return proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.setDigest(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {!proto.build.bazel.remote.execution.v2.Compressor.Value} */ (reader.readEnum());
      msg.setCompressor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDigest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getCompressor();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional Digest digest = 1;
 * @return {?proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.prototype.getDigest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Digest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 1));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Digest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request} returns this
*/
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.prototype.setDigest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request} returns this
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.prototype.clearDigest = function() {
  return this.setDigest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.prototype.hasDigest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request} returns this
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional Compressor.Value compressor = 3;
 * @return {!proto.build.bazel.remote.execution.v2.Compressor.Value}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.prototype.getCompressor = function() {
  return /** @type {!proto.build.bazel.remote.execution.v2.Compressor.Value} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.Compressor.Value} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request} returns this
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request.prototype.setCompressor = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string instance_name = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.prototype.getInstanceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest} returns this
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.prototype.setInstanceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Request requests = 2;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request>}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.prototype.getRequestsList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request, 2));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request>} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest} returns this
*/
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.prototype.setRequestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.prototype.addRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.Request, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest} returns this
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.prototype.clearRequestsList = function() {
  return this.setRequestsList([]);
};


/**
 * optional DigestFunction.Value digest_function = 5;
 * @return {!proto.build.bazel.remote.execution.v2.DigestFunction.Value}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.prototype.getDigestFunction = function() {
  return /** @type {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest} returns this
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsRequest.prototype.setDigestFunction = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responsesList: jspb.Message.toObjectList(msg.getResponsesList(),
    proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse;
  return proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.deserializeBinaryFromReader);
      msg.addResponses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    digest: (f = msg.getDigest()) && proto.build.bazel.remote.execution.v2.Digest.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && google_rpc_status_pb.Status.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response;
  return proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.setDigest(value);
      break;
    case 2:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDigest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Digest digest = 1;
 * @return {?proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.prototype.getDigest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Digest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 1));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Digest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response} returns this
*/
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.prototype.setDigest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response} returns this
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.prototype.clearDigest = function() {
  return this.setDigest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.prototype.hasDigest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.rpc.Status status = 2;
 * @return {?proto.google.rpc.Status}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.prototype.getStatus = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 2));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response} returns this
*/
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response} returns this
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Response responses = 1;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response>}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.prototype.getResponsesList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response, 1));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response>} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse} returns this
*/
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.prototype.setResponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response}
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.prototype.addResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.Response, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse} returns this
 */
proto.build.bazel.remote.execution.v2.BatchUpdateBlobsResponse.prototype.clearResponsesList = function() {
  return this.setResponsesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    digestsList: jspb.Message.toObjectList(msg.getDigestsList(),
    proto.build.bazel.remote.execution.v2.Digest.toObject, includeInstance),
    acceptableCompressorsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    digestFunction: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest;
  return proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceName(value);
      break;
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.addDigests(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.build.bazel.remote.execution.v2.Compressor.Value>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAcceptableCompressors(values[i]);
      }
      break;
    case 4:
      var value = /** @type {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} */ (reader.readEnum());
      msg.setDigestFunction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDigestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getAcceptableCompressorsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
  f = message.getDigestFunction();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string instance_name = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.prototype.getInstanceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest} returns this
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.prototype.setInstanceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Digest digests = 2;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.Digest>}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.prototype.getDigestsList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.Digest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 2));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.Digest>} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest} returns this
*/
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.prototype.setDigestsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.Digest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.prototype.addDigests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.build.bazel.remote.execution.v2.Digest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest} returns this
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.prototype.clearDigestsList = function() {
  return this.setDigestsList([]);
};


/**
 * repeated Compressor.Value acceptable_compressors = 3;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.Compressor.Value>}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.prototype.getAcceptableCompressorsList = function() {
  return /** @type {!Array<!proto.build.bazel.remote.execution.v2.Compressor.Value>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.Compressor.Value>} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest} returns this
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.prototype.setAcceptableCompressorsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.Compressor.Value} value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest} returns this
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.prototype.addAcceptableCompressors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest} returns this
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.prototype.clearAcceptableCompressorsList = function() {
  return this.setAcceptableCompressorsList([]);
};


/**
 * optional DigestFunction.Value digest_function = 4;
 * @return {!proto.build.bazel.remote.execution.v2.DigestFunction.Value}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.prototype.getDigestFunction = function() {
  return /** @type {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest} returns this
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsRequest.prototype.setDigestFunction = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responsesList: jspb.Message.toObjectList(msg.getResponsesList(),
    proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse;
  return proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.deserializeBinaryFromReader);
      msg.addResponses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    digest: (f = msg.getDigest()) && proto.build.bazel.remote.execution.v2.Digest.toObject(includeInstance, f),
    data: msg.getData_asB64(),
    compressor: jspb.Message.getFieldWithDefault(msg, 4, 0),
    status: (f = msg.getStatus()) && google_rpc_status_pb.Status.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response;
  return proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.setDigest(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 4:
      var value = /** @type {!proto.build.bazel.remote.execution.v2.Compressor.Value} */ (reader.readEnum());
      msg.setCompressor(value);
      break;
    case 3:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDigest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getCompressor();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional Digest digest = 1;
 * @return {?proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.prototype.getDigest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Digest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 1));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Digest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response} returns this
*/
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.prototype.setDigest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response} returns this
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.prototype.clearDigest = function() {
  return this.setDigest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.prototype.hasDigest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response} returns this
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional Compressor.Value compressor = 4;
 * @return {!proto.build.bazel.remote.execution.v2.Compressor.Value}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.prototype.getCompressor = function() {
  return /** @type {!proto.build.bazel.remote.execution.v2.Compressor.Value} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.Compressor.Value} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response} returns this
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.prototype.setCompressor = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.rpc.Status status = 3;
 * @return {?proto.google.rpc.Status}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.prototype.getStatus = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 3));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response} returns this
*/
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response} returns this
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Response responses = 1;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response>}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.prototype.getResponsesList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response, 1));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response>} value
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse} returns this
*/
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.prototype.setResponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response}
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.prototype.addResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.Response, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse} returns this
 */
proto.build.bazel.remote.execution.v2.BatchReadBlobsResponse.prototype.clearResponsesList = function() {
  return this.setResponsesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.GetTreeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.GetTreeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    rootDigest: (f = msg.getRootDigest()) && proto.build.bazel.remote.execution.v2.Digest.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    digestFunction: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.GetTreeRequest}
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.GetTreeRequest;
  return proto.build.bazel.remote.execution.v2.GetTreeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.GetTreeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.GetTreeRequest}
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceName(value);
      break;
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.Digest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Digest.deserializeBinaryFromReader);
      msg.setRootDigest(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 5:
      var value = /** @type {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} */ (reader.readEnum());
      msg.setDigestFunction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.GetTreeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.GetTreeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRootDigest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.Digest.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDigestFunction();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string instance_name = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest.prototype.getInstanceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.GetTreeRequest} returns this
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest.prototype.setInstanceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Digest root_digest = 2;
 * @return {?proto.build.bazel.remote.execution.v2.Digest}
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest.prototype.getRootDigest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Digest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Digest, 2));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Digest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.GetTreeRequest} returns this
*/
proto.build.bazel.remote.execution.v2.GetTreeRequest.prototype.setRootDigest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.GetTreeRequest} returns this
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest.prototype.clearRootDigest = function() {
  return this.setRootDigest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest.prototype.hasRootDigest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.GetTreeRequest} returns this
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.GetTreeRequest} returns this
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional DigestFunction.Value digest_function = 5;
 * @return {!proto.build.bazel.remote.execution.v2.DigestFunction.Value}
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest.prototype.getDigestFunction = function() {
  return /** @type {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} value
 * @return {!proto.build.bazel.remote.execution.v2.GetTreeRequest} returns this
 */
proto.build.bazel.remote.execution.v2.GetTreeRequest.prototype.setDigestFunction = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.GetTreeResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.GetTreeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.GetTreeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.GetTreeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.GetTreeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    directoriesList: jspb.Message.toObjectList(msg.getDirectoriesList(),
    proto.build.bazel.remote.execution.v2.Directory.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.GetTreeResponse}
 */
proto.build.bazel.remote.execution.v2.GetTreeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.GetTreeResponse;
  return proto.build.bazel.remote.execution.v2.GetTreeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.GetTreeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.GetTreeResponse}
 */
proto.build.bazel.remote.execution.v2.GetTreeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.Directory;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Directory.deserializeBinaryFromReader);
      msg.addDirectories(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.GetTreeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.GetTreeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.GetTreeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.GetTreeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirectoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.Directory.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Directory directories = 1;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.Directory>}
 */
proto.build.bazel.remote.execution.v2.GetTreeResponse.prototype.getDirectoriesList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.Directory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.Directory, 1));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.Directory>} value
 * @return {!proto.build.bazel.remote.execution.v2.GetTreeResponse} returns this
*/
proto.build.bazel.remote.execution.v2.GetTreeResponse.prototype.setDirectoriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.Directory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.Directory}
 */
proto.build.bazel.remote.execution.v2.GetTreeResponse.prototype.addDirectories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.build.bazel.remote.execution.v2.Directory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.GetTreeResponse} returns this
 */
proto.build.bazel.remote.execution.v2.GetTreeResponse.prototype.clearDirectoriesList = function() {
  return this.setDirectoriesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.GetTreeResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.GetTreeResponse} returns this
 */
proto.build.bazel.remote.execution.v2.GetTreeResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceName: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest}
 */
proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest;
  return proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest}
 */
proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string instance_name = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest.prototype.getInstanceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest} returns this
 */
proto.build.bazel.remote.execution.v2.GetCapabilitiesRequest.prototype.setInstanceName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.ServerCapabilities.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.ServerCapabilities} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.toObject = function(includeInstance, msg) {
  var f, obj = {
    cacheCapabilities: (f = msg.getCacheCapabilities()) && proto.build.bazel.remote.execution.v2.CacheCapabilities.toObject(includeInstance, f),
    executionCapabilities: (f = msg.getExecutionCapabilities()) && proto.build.bazel.remote.execution.v2.ExecutionCapabilities.toObject(includeInstance, f),
    deprecatedApiVersion: (f = msg.getDeprecatedApiVersion()) && proto_semver_pb.SemVer.toObject(includeInstance, f),
    lowApiVersion: (f = msg.getLowApiVersion()) && proto_semver_pb.SemVer.toObject(includeInstance, f),
    highApiVersion: (f = msg.getHighApiVersion()) && proto_semver_pb.SemVer.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.ServerCapabilities}
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.ServerCapabilities;
  return proto.build.bazel.remote.execution.v2.ServerCapabilities.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.ServerCapabilities} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.ServerCapabilities}
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.CacheCapabilities;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.CacheCapabilities.deserializeBinaryFromReader);
      msg.setCacheCapabilities(value);
      break;
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.ExecutionCapabilities;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.ExecutionCapabilities.deserializeBinaryFromReader);
      msg.setExecutionCapabilities(value);
      break;
    case 3:
      var value = new proto_semver_pb.SemVer;
      reader.readMessage(value,proto_semver_pb.SemVer.deserializeBinaryFromReader);
      msg.setDeprecatedApiVersion(value);
      break;
    case 4:
      var value = new proto_semver_pb.SemVer;
      reader.readMessage(value,proto_semver_pb.SemVer.deserializeBinaryFromReader);
      msg.setLowApiVersion(value);
      break;
    case 5:
      var value = new proto_semver_pb.SemVer;
      reader.readMessage(value,proto_semver_pb.SemVer.deserializeBinaryFromReader);
      msg.setHighApiVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.ServerCapabilities.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.ServerCapabilities} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCacheCapabilities();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.CacheCapabilities.serializeBinaryToWriter
    );
  }
  f = message.getExecutionCapabilities();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.ExecutionCapabilities.serializeBinaryToWriter
    );
  }
  f = message.getDeprecatedApiVersion();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_semver_pb.SemVer.serializeBinaryToWriter
    );
  }
  f = message.getLowApiVersion();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_semver_pb.SemVer.serializeBinaryToWriter
    );
  }
  f = message.getHighApiVersion();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_semver_pb.SemVer.serializeBinaryToWriter
    );
  }
};


/**
 * optional CacheCapabilities cache_capabilities = 1;
 * @return {?proto.build.bazel.remote.execution.v2.CacheCapabilities}
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.getCacheCapabilities = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.CacheCapabilities} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.CacheCapabilities, 1));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.CacheCapabilities|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ServerCapabilities} returns this
*/
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.setCacheCapabilities = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ServerCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.clearCacheCapabilities = function() {
  return this.setCacheCapabilities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.hasCacheCapabilities = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ExecutionCapabilities execution_capabilities = 2;
 * @return {?proto.build.bazel.remote.execution.v2.ExecutionCapabilities}
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.getExecutionCapabilities = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.ExecutionCapabilities} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.ExecutionCapabilities, 2));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.ExecutionCapabilities|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ServerCapabilities} returns this
*/
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.setExecutionCapabilities = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ServerCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.clearExecutionCapabilities = function() {
  return this.setExecutionCapabilities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.hasExecutionCapabilities = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional build.bazel.semver.SemVer deprecated_api_version = 3;
 * @return {?proto.build.bazel.semver.SemVer}
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.getDeprecatedApiVersion = function() {
  return /** @type{?proto.build.bazel.semver.SemVer} */ (
    jspb.Message.getWrapperField(this, proto_semver_pb.SemVer, 3));
};


/**
 * @param {?proto.build.bazel.semver.SemVer|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ServerCapabilities} returns this
*/
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.setDeprecatedApiVersion = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ServerCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.clearDeprecatedApiVersion = function() {
  return this.setDeprecatedApiVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.hasDeprecatedApiVersion = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional build.bazel.semver.SemVer low_api_version = 4;
 * @return {?proto.build.bazel.semver.SemVer}
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.getLowApiVersion = function() {
  return /** @type{?proto.build.bazel.semver.SemVer} */ (
    jspb.Message.getWrapperField(this, proto_semver_pb.SemVer, 4));
};


/**
 * @param {?proto.build.bazel.semver.SemVer|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ServerCapabilities} returns this
*/
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.setLowApiVersion = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ServerCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.clearLowApiVersion = function() {
  return this.setLowApiVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.hasLowApiVersion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional build.bazel.semver.SemVer high_api_version = 5;
 * @return {?proto.build.bazel.semver.SemVer}
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.getHighApiVersion = function() {
  return /** @type{?proto.build.bazel.semver.SemVer} */ (
    jspb.Message.getWrapperField(this, proto_semver_pb.SemVer, 5));
};


/**
 * @param {?proto.build.bazel.semver.SemVer|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ServerCapabilities} returns this
*/
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.setHighApiVersion = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ServerCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.clearHighApiVersion = function() {
  return this.setHighApiVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ServerCapabilities.prototype.hasHighApiVersion = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.DigestFunction.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.DigestFunction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.DigestFunction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.DigestFunction.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.DigestFunction}
 */
proto.build.bazel.remote.execution.v2.DigestFunction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.DigestFunction;
  return proto.build.bazel.remote.execution.v2.DigestFunction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.DigestFunction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.DigestFunction}
 */
proto.build.bazel.remote.execution.v2.DigestFunction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.DigestFunction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.DigestFunction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.DigestFunction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.DigestFunction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.build.bazel.remote.execution.v2.DigestFunction.Value = {
  UNKNOWN: 0,
  SHA256: 1,
  SHA1: 2,
  MD5: 3,
  VSO: 4,
  SHA384: 5,
  SHA512: 6,
  MURMUR3: 7,
  SHA256TREE: 8,
  BLAKE3: 9
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities.toObject = function(includeInstance, msg) {
  var f, obj = {
    updateEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities}
 */
proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities;
  return proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities}
 */
proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdateEnabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdateEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool update_enabled = 1;
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities.prototype.getUpdateEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities.prototype.setUpdateEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.PriorityCapabilities.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.PriorityCapabilities} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.toObject = function(includeInstance, msg) {
  var f, obj = {
    prioritiesList: jspb.Message.toObjectList(msg.getPrioritiesList(),
    proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.PriorityCapabilities}
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.PriorityCapabilities;
  return proto.build.bazel.remote.execution.v2.PriorityCapabilities.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.PriorityCapabilities} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.PriorityCapabilities}
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.deserializeBinaryFromReader);
      msg.addPriorities(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.PriorityCapabilities.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.PriorityCapabilities} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrioritiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    minPriority: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxPriority: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange}
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange;
  return proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange}
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinPriority(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxPriority(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinPriority();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMaxPriority();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 min_priority = 1;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.prototype.getMinPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange} returns this
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.prototype.setMinPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 max_priority = 2;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.prototype.getMaxPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange} returns this
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange.prototype.setMaxPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated PriorityRange priorities = 1;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange>}
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.prototype.getPrioritiesList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange, 1));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange>} value
 * @return {!proto.build.bazel.remote.execution.v2.PriorityCapabilities} returns this
*/
proto.build.bazel.remote.execution.v2.PriorityCapabilities.prototype.setPrioritiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange}
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.prototype.addPriorities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.build.bazel.remote.execution.v2.PriorityCapabilities.PriorityRange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.PriorityCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.PriorityCapabilities.prototype.clearPrioritiesList = function() {
  return this.setPrioritiesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy}
 */
proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy;
  return proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy}
 */
proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.Value = {
  UNKNOWN: 0,
  DISALLOWED: 1,
  ALLOWED: 2
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.Compressor.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.Compressor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.Compressor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Compressor.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.Compressor}
 */
proto.build.bazel.remote.execution.v2.Compressor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.Compressor;
  return proto.build.bazel.remote.execution.v2.Compressor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.Compressor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.Compressor}
 */
proto.build.bazel.remote.execution.v2.Compressor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.Compressor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.Compressor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.Compressor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.Compressor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.build.bazel.remote.execution.v2.Compressor.Value = {
  IDENTITY: 0,
  ZSTD: 1,
  DEFLATE: 2,
  BROTLI: 3
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.repeatedFields_ = [1,6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.CacheCapabilities.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.CacheCapabilities} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.toObject = function(includeInstance, msg) {
  var f, obj = {
    digestFunctionsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    actionCacheUpdateCapabilities: (f = msg.getActionCacheUpdateCapabilities()) && proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities.toObject(includeInstance, f),
    cachePriorityCapabilities: (f = msg.getCachePriorityCapabilities()) && proto.build.bazel.remote.execution.v2.PriorityCapabilities.toObject(includeInstance, f),
    maxBatchTotalSizeBytes: jspb.Message.getFieldWithDefault(msg, 4, 0),
    symlinkAbsolutePathStrategy: jspb.Message.getFieldWithDefault(msg, 5, 0),
    supportedCompressorsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    supportedBatchUpdateCompressorsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.CacheCapabilities}
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.CacheCapabilities;
  return proto.build.bazel.remote.execution.v2.CacheCapabilities.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.CacheCapabilities} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.CacheCapabilities}
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.build.bazel.remote.execution.v2.DigestFunction.Value>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDigestFunctions(values[i]);
      }
      break;
    case 2:
      var value = new proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities.deserializeBinaryFromReader);
      msg.setActionCacheUpdateCapabilities(value);
      break;
    case 3:
      var value = new proto.build.bazel.remote.execution.v2.PriorityCapabilities;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.PriorityCapabilities.deserializeBinaryFromReader);
      msg.setCachePriorityCapabilities(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxBatchTotalSizeBytes(value);
      break;
    case 5:
      var value = /** @type {!proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.Value} */ (reader.readEnum());
      msg.setSymlinkAbsolutePathStrategy(value);
      break;
    case 6:
      var values = /** @type {!Array<!proto.build.bazel.remote.execution.v2.Compressor.Value>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSupportedCompressors(values[i]);
      }
      break;
    case 7:
      var values = /** @type {!Array<!proto.build.bazel.remote.execution.v2.Compressor.Value>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSupportedBatchUpdateCompressors(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.CacheCapabilities.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.CacheCapabilities} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDigestFunctionsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getActionCacheUpdateCapabilities();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities.serializeBinaryToWriter
    );
  }
  f = message.getCachePriorityCapabilities();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.build.bazel.remote.execution.v2.PriorityCapabilities.serializeBinaryToWriter
    );
  }
  f = message.getMaxBatchTotalSizeBytes();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getSymlinkAbsolutePathStrategy();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getSupportedCompressorsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      6,
      f
    );
  }
  f = message.getSupportedBatchUpdateCompressorsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      7,
      f
    );
  }
};


/**
 * repeated DigestFunction.Value digest_functions = 1;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.DigestFunction.Value>}
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.getDigestFunctionsList = function() {
  return /** @type {!Array<!proto.build.bazel.remote.execution.v2.DigestFunction.Value>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.DigestFunction.Value>} value
 * @return {!proto.build.bazel.remote.execution.v2.CacheCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.setDigestFunctionsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.CacheCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.addDigestFunctions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.CacheCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.clearDigestFunctionsList = function() {
  return this.setDigestFunctionsList([]);
};


/**
 * optional ActionCacheUpdateCapabilities action_cache_update_capabilities = 2;
 * @return {?proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities}
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.getActionCacheUpdateCapabilities = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities, 2));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.ActionCacheUpdateCapabilities|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.CacheCapabilities} returns this
*/
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.setActionCacheUpdateCapabilities = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.CacheCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.clearActionCacheUpdateCapabilities = function() {
  return this.setActionCacheUpdateCapabilities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.hasActionCacheUpdateCapabilities = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PriorityCapabilities cache_priority_capabilities = 3;
 * @return {?proto.build.bazel.remote.execution.v2.PriorityCapabilities}
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.getCachePriorityCapabilities = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.PriorityCapabilities} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.PriorityCapabilities, 3));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.PriorityCapabilities|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.CacheCapabilities} returns this
*/
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.setCachePriorityCapabilities = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.CacheCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.clearCachePriorityCapabilities = function() {
  return this.setCachePriorityCapabilities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.hasCachePriorityCapabilities = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 max_batch_total_size_bytes = 4;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.getMaxBatchTotalSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.CacheCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.setMaxBatchTotalSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional SymlinkAbsolutePathStrategy.Value symlink_absolute_path_strategy = 5;
 * @return {!proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.Value}
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.getSymlinkAbsolutePathStrategy = function() {
  return /** @type {!proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.Value} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.SymlinkAbsolutePathStrategy.Value} value
 * @return {!proto.build.bazel.remote.execution.v2.CacheCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.setSymlinkAbsolutePathStrategy = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * repeated Compressor.Value supported_compressors = 6;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.Compressor.Value>}
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.getSupportedCompressorsList = function() {
  return /** @type {!Array<!proto.build.bazel.remote.execution.v2.Compressor.Value>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.Compressor.Value>} value
 * @return {!proto.build.bazel.remote.execution.v2.CacheCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.setSupportedCompressorsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.Compressor.Value} value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.CacheCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.addSupportedCompressors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.CacheCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.clearSupportedCompressorsList = function() {
  return this.setSupportedCompressorsList([]);
};


/**
 * repeated Compressor.Value supported_batch_update_compressors = 7;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.Compressor.Value>}
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.getSupportedBatchUpdateCompressorsList = function() {
  return /** @type {!Array<!proto.build.bazel.remote.execution.v2.Compressor.Value>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.Compressor.Value>} value
 * @return {!proto.build.bazel.remote.execution.v2.CacheCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.setSupportedBatchUpdateCompressorsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.Compressor.Value} value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.CacheCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.addSupportedBatchUpdateCompressors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.CacheCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.CacheCapabilities.prototype.clearSupportedBatchUpdateCompressorsList = function() {
  return this.setSupportedBatchUpdateCompressorsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.ExecutionCapabilities.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.ExecutionCapabilities} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.toObject = function(includeInstance, msg) {
  var f, obj = {
    digestFunction: jspb.Message.getFieldWithDefault(msg, 1, 0),
    execEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    executionPriorityCapabilities: (f = msg.getExecutionPriorityCapabilities()) && proto.build.bazel.remote.execution.v2.PriorityCapabilities.toObject(includeInstance, f),
    supportedNodePropertiesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    digestFunctionsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionCapabilities}
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.ExecutionCapabilities;
  return proto.build.bazel.remote.execution.v2.ExecutionCapabilities.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.ExecutionCapabilities} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionCapabilities}
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} */ (reader.readEnum());
      msg.setDigestFunction(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExecEnabled(value);
      break;
    case 3:
      var value = new proto.build.bazel.remote.execution.v2.PriorityCapabilities;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.PriorityCapabilities.deserializeBinaryFromReader);
      msg.setExecutionPriorityCapabilities(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addSupportedNodeProperties(value);
      break;
    case 5:
      var values = /** @type {!Array<!proto.build.bazel.remote.execution.v2.DigestFunction.Value>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDigestFunctions(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.ExecutionCapabilities.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.ExecutionCapabilities} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDigestFunction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getExecEnabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getExecutionPriorityCapabilities();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.build.bazel.remote.execution.v2.PriorityCapabilities.serializeBinaryToWriter
    );
  }
  f = message.getSupportedNodePropertiesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getDigestFunctionsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
};


/**
 * optional DigestFunction.Value digest_function = 1;
 * @return {!proto.build.bazel.remote.execution.v2.DigestFunction.Value}
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.getDigestFunction = function() {
  return /** @type {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.setDigestFunction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool exec_enabled = 2;
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.getExecEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.setExecEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional PriorityCapabilities execution_priority_capabilities = 3;
 * @return {?proto.build.bazel.remote.execution.v2.PriorityCapabilities}
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.getExecutionPriorityCapabilities = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.PriorityCapabilities} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.PriorityCapabilities, 3));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.PriorityCapabilities|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionCapabilities} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.setExecutionPriorityCapabilities = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.clearExecutionPriorityCapabilities = function() {
  return this.setExecutionPriorityCapabilities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.hasExecutionPriorityCapabilities = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string supported_node_properties = 4;
 * @return {!Array<string>}
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.getSupportedNodePropertiesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.setSupportedNodePropertiesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.addSupportedNodeProperties = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.clearSupportedNodePropertiesList = function() {
  return this.setSupportedNodePropertiesList([]);
};


/**
 * repeated DigestFunction.Value digest_functions = 5;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.DigestFunction.Value>}
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.getDigestFunctionsList = function() {
  return /** @type {!Array<!proto.build.bazel.remote.execution.v2.DigestFunction.Value>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.DigestFunction.Value>} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.setDigestFunctionsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.DigestFunction.Value} value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.addDigestFunctions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionCapabilities} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionCapabilities.prototype.clearDigestFunctionsList = function() {
  return this.setDigestFunctionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.ToolDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.ToolDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.ToolDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ToolDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    toolName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    toolVersion: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.ToolDetails}
 */
proto.build.bazel.remote.execution.v2.ToolDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.ToolDetails;
  return proto.build.bazel.remote.execution.v2.ToolDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.ToolDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.ToolDetails}
 */
proto.build.bazel.remote.execution.v2.ToolDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToolName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToolVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.ToolDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.ToolDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.ToolDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ToolDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToolName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToolVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string tool_name = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.ToolDetails.prototype.getToolName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.ToolDetails} returns this
 */
proto.build.bazel.remote.execution.v2.ToolDetails.prototype.setToolName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tool_version = 2;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.ToolDetails.prototype.getToolVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.ToolDetails} returns this
 */
proto.build.bazel.remote.execution.v2.ToolDetails.prototype.setToolVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.RequestMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.RequestMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    toolDetails: (f = msg.getToolDetails()) && proto.build.bazel.remote.execution.v2.ToolDetails.toObject(includeInstance, f),
    actionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    toolInvocationId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    correlatedInvocationsId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    actionMnemonic: jspb.Message.getFieldWithDefault(msg, 5, ""),
    targetId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    configurationId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    executorDetails: (f = msg.getExecutorDetails()) && proto.build.bazel.remote.execution.v2.ExecutorDetails.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.RequestMetadata}
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.RequestMetadata;
  return proto.build.bazel.remote.execution.v2.RequestMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.RequestMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.RequestMetadata}
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.ToolDetails;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.ToolDetails.deserializeBinaryFromReader);
      msg.setToolDetails(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setToolInvocationId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCorrelatedInvocationsId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setActionMnemonic(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigurationId(value);
      break;
    case 1000:
      var value = new proto.build.bazel.remote.execution.v2.ExecutorDetails;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.ExecutorDetails.deserializeBinaryFromReader);
      msg.setExecutorDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.RequestMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.RequestMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToolDetails();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.ToolDetails.serializeBinaryToWriter
    );
  }
  f = message.getActionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToolInvocationId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCorrelatedInvocationsId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getActionMnemonic();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTargetId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getConfigurationId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getExecutorDetails();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      proto.build.bazel.remote.execution.v2.ExecutorDetails.serializeBinaryToWriter
    );
  }
};


/**
 * optional ToolDetails tool_details = 1;
 * @return {?proto.build.bazel.remote.execution.v2.ToolDetails}
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.getToolDetails = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.ToolDetails} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.ToolDetails, 1));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.ToolDetails|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.RequestMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.setToolDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.RequestMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.clearToolDetails = function() {
  return this.setToolDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.hasToolDetails = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string action_id = 2;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.getActionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.RequestMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.setActionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tool_invocation_id = 3;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.getToolInvocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.RequestMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.setToolInvocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string correlated_invocations_id = 4;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.getCorrelatedInvocationsId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.RequestMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.setCorrelatedInvocationsId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string action_mnemonic = 5;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.getActionMnemonic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.RequestMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.setActionMnemonic = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string target_id = 6;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.getTargetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.RequestMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.setTargetId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string configuration_id = 7;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.getConfigurationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.RequestMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.setConfigurationId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional ExecutorDetails executor_details = 1000;
 * @return {?proto.build.bazel.remote.execution.v2.ExecutorDetails}
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.getExecutorDetails = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.ExecutorDetails} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.ExecutorDetails, 1000));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.ExecutorDetails|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.RequestMetadata} returns this
*/
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.setExecutorDetails = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.RequestMetadata} returns this
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.clearExecutorDetails = function() {
  return this.setExecutorDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.RequestMetadata.prototype.hasExecutorDetails = function() {
  return jspb.Message.getField(this, 1000) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.ExecutionTask.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.ExecutionTask} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.toObject = function(includeInstance, msg) {
  var f, obj = {
    executeRequest: (f = msg.getExecuteRequest()) && proto.build.bazel.remote.execution.v2.ExecuteRequest.toObject(includeInstance, f),
    action: (f = msg.getAction()) && proto.build.bazel.remote.execution.v2.Action.toObject(includeInstance, f),
    command: (f = msg.getCommand()) && proto.build.bazel.remote.execution.v2.Command.toObject(includeInstance, f),
    executionId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    jwt: jspb.Message.getFieldWithDefault(msg, 2, ""),
    invocationId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    queuedTimestamp: (f = msg.getQueuedTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    platformOverrides: (f = msg.getPlatformOverrides()) && proto.build.bazel.remote.execution.v2.Platform.toObject(includeInstance, f),
    requestMetadata: (f = msg.getRequestMetadata()) && proto.build.bazel.remote.execution.v2.RequestMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionTask}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.ExecutionTask;
  return proto.build.bazel.remote.execution.v2.ExecutionTask.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.ExecutionTask} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionTask}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.ExecuteRequest;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.ExecuteRequest.deserializeBinaryFromReader);
      msg.setExecuteRequest(value);
      break;
    case 4:
      var value = new proto.build.bazel.remote.execution.v2.Action;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Action.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 5:
      var value = new proto.build.bazel.remote.execution.v2.Command;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Command.deserializeBinaryFromReader);
      msg.setCommand(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJwt(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvocationId(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setQueuedTimestamp(value);
      break;
    case 8:
      var value = new proto.build.bazel.remote.execution.v2.Platform;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.Platform.deserializeBinaryFromReader);
      msg.setPlatformOverrides(value);
      break;
    case 9:
      var value = new proto.build.bazel.remote.execution.v2.RequestMetadata;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.RequestMetadata.deserializeBinaryFromReader);
      msg.setRequestMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.ExecutionTask.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.ExecutionTask} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecuteRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.ExecuteRequest.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.build.bazel.remote.execution.v2.Action.serializeBinaryToWriter
    );
  }
  f = message.getCommand();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.build.bazel.remote.execution.v2.Command.serializeBinaryToWriter
    );
  }
  f = message.getExecutionId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getJwt();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInvocationId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQueuedTimestamp();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPlatformOverrides();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.build.bazel.remote.execution.v2.Platform.serializeBinaryToWriter
    );
  }
  f = message.getRequestMetadata();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.build.bazel.remote.execution.v2.RequestMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional ExecuteRequest execute_request = 1;
 * @return {?proto.build.bazel.remote.execution.v2.ExecuteRequest}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.getExecuteRequest = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.ExecuteRequest} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.ExecuteRequest, 1));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.ExecuteRequest|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionTask} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.setExecuteRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionTask} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.clearExecuteRequest = function() {
  return this.setExecuteRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.hasExecuteRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Action action = 4;
 * @return {?proto.build.bazel.remote.execution.v2.Action}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.getAction = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Action} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Action, 4));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Action|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionTask} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.setAction = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionTask} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.hasAction = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Command command = 5;
 * @return {?proto.build.bazel.remote.execution.v2.Command}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.getCommand = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Command} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Command, 5));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Command|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionTask} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.setCommand = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionTask} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.clearCommand = function() {
  return this.setCommand(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.hasCommand = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string execution_id = 6;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.getExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionTask} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string jwt = 2;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.getJwt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionTask} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.setJwt = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string invocation_id = 3;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.getInvocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionTask} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.setInvocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp queued_timestamp = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.getQueuedTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionTask} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.setQueuedTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionTask} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.clearQueuedTimestamp = function() {
  return this.setQueuedTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.hasQueuedTimestamp = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Platform platform_overrides = 8;
 * @return {?proto.build.bazel.remote.execution.v2.Platform}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.getPlatformOverrides = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.Platform} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.Platform, 8));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.Platform|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionTask} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.setPlatformOverrides = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionTask} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.clearPlatformOverrides = function() {
  return this.setPlatformOverrides(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.hasPlatformOverrides = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional RequestMetadata request_metadata = 9;
 * @return {?proto.build.bazel.remote.execution.v2.RequestMetadata}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.getRequestMetadata = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.RequestMetadata} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.RequestMetadata, 9));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.RequestMetadata|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionTask} returns this
*/
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.setRequestMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutionTask} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.clearRequestMetadata = function() {
  return this.setRequestMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ExecutionTask.prototype.hasRequestMetadata = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.ScheduledTask.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.ScheduledTask.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.ScheduledTask} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ScheduledTask.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionTask: (f = msg.getExecutionTask()) && proto.build.bazel.remote.execution.v2.ExecutionTask.toObject(includeInstance, f),
    schedulingMetadata: (f = msg.getSchedulingMetadata()) && proto_scheduler_pb.SchedulingMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.ScheduledTask}
 */
proto.build.bazel.remote.execution.v2.ScheduledTask.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.ScheduledTask;
  return proto.build.bazel.remote.execution.v2.ScheduledTask.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.ScheduledTask} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.ScheduledTask}
 */
proto.build.bazel.remote.execution.v2.ScheduledTask.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.build.bazel.remote.execution.v2.ExecutionTask;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.ExecutionTask.deserializeBinaryFromReader);
      msg.setExecutionTask(value);
      break;
    case 2:
      var value = new proto_scheduler_pb.SchedulingMetadata;
      reader.readMessage(value,proto_scheduler_pb.SchedulingMetadata.deserializeBinaryFromReader);
      msg.setSchedulingMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.ScheduledTask.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.ScheduledTask.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.ScheduledTask} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ScheduledTask.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionTask();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.build.bazel.remote.execution.v2.ExecutionTask.serializeBinaryToWriter
    );
  }
  f = message.getSchedulingMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_scheduler_pb.SchedulingMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional ExecutionTask execution_task = 1;
 * @return {?proto.build.bazel.remote.execution.v2.ExecutionTask}
 */
proto.build.bazel.remote.execution.v2.ScheduledTask.prototype.getExecutionTask = function() {
  return /** @type{?proto.build.bazel.remote.execution.v2.ExecutionTask} */ (
    jspb.Message.getWrapperField(this, proto.build.bazel.remote.execution.v2.ExecutionTask, 1));
};


/**
 * @param {?proto.build.bazel.remote.execution.v2.ExecutionTask|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ScheduledTask} returns this
*/
proto.build.bazel.remote.execution.v2.ScheduledTask.prototype.setExecutionTask = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ScheduledTask} returns this
 */
proto.build.bazel.remote.execution.v2.ScheduledTask.prototype.clearExecutionTask = function() {
  return this.setExecutionTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ScheduledTask.prototype.hasExecutionTask = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional scheduler.SchedulingMetadata scheduling_metadata = 2;
 * @return {?proto.scheduler.SchedulingMetadata}
 */
proto.build.bazel.remote.execution.v2.ScheduledTask.prototype.getSchedulingMetadata = function() {
  return /** @type{?proto.scheduler.SchedulingMetadata} */ (
    jspb.Message.getWrapperField(this, proto_scheduler_pb.SchedulingMetadata, 2));
};


/**
 * @param {?proto.scheduler.SchedulingMetadata|undefined} value
 * @return {!proto.build.bazel.remote.execution.v2.ScheduledTask} returns this
*/
proto.build.bazel.remote.execution.v2.ScheduledTask.prototype.setSchedulingMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.build.bazel.remote.execution.v2.ScheduledTask} returns this
 */
proto.build.bazel.remote.execution.v2.ScheduledTask.prototype.clearSchedulingMetadata = function() {
  return this.setSchedulingMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.build.bazel.remote.execution.v2.ScheduledTask.prototype.hasSchedulingMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.ExecutorDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.ExecutorDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.ExecutorDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecutorDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    executorHostId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutorDetails}
 */
proto.build.bazel.remote.execution.v2.ExecutorDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.ExecutorDetails;
  return proto.build.bazel.remote.execution.v2.ExecutorDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.ExecutorDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.ExecutorDetails}
 */
proto.build.bazel.remote.execution.v2.ExecutorDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutorHostId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.ExecutorDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.ExecutorDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.ExecutorDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.ExecutorDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutorHostId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string executor_host_id = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.ExecutorDetails.prototype.getExecutorHostId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.ExecutorDetails} returns this
 */
proto.build.bazel.remote.execution.v2.ExecutorDetails.prototype.setExecutorHostId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.IOStats.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.IOStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.IOStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.IOStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileDownloadCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    fileDownloadSizeBytes: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fileDownloadDurationUsec: jspb.Message.getFieldWithDefault(msg, 3, 0),
    fileUploadCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    fileUploadSizeBytes: jspb.Message.getFieldWithDefault(msg, 5, 0),
    fileUploadDurationUsec: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.IOStats}
 */
proto.build.bazel.remote.execution.v2.IOStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.IOStats;
  return proto.build.bazel.remote.execution.v2.IOStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.IOStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.IOStats}
 */
proto.build.bazel.remote.execution.v2.IOStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileDownloadCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileDownloadSizeBytes(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileDownloadDurationUsec(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileUploadCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileUploadSizeBytes(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileUploadDurationUsec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.IOStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.IOStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.IOStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.IOStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileDownloadCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFileDownloadSizeBytes();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getFileDownloadDurationUsec();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getFileUploadCount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getFileUploadSizeBytes();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getFileUploadDurationUsec();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional int64 file_download_count = 1;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.IOStats.prototype.getFileDownloadCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.IOStats} returns this
 */
proto.build.bazel.remote.execution.v2.IOStats.prototype.setFileDownloadCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 file_download_size_bytes = 2;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.IOStats.prototype.getFileDownloadSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.IOStats} returns this
 */
proto.build.bazel.remote.execution.v2.IOStats.prototype.setFileDownloadSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 file_download_duration_usec = 3;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.IOStats.prototype.getFileDownloadDurationUsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.IOStats} returns this
 */
proto.build.bazel.remote.execution.v2.IOStats.prototype.setFileDownloadDurationUsec = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 file_upload_count = 4;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.IOStats.prototype.getFileUploadCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.IOStats} returns this
 */
proto.build.bazel.remote.execution.v2.IOStats.prototype.setFileUploadCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 file_upload_size_bytes = 5;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.IOStats.prototype.getFileUploadSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.IOStats} returns this
 */
proto.build.bazel.remote.execution.v2.IOStats.prototype.setFileUploadSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 file_upload_duration_usec = 6;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.IOStats.prototype.getFileUploadDurationUsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.IOStats} returns this
 */
proto.build.bazel.remote.execution.v2.IOStats.prototype.setFileUploadDurationUsec = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.build.bazel.remote.execution.v2.UsageStats.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.UsageStats.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.UsageStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.UsageStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.UsageStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    peakMemoryBytes: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cpuNanos: jspb.Message.getFieldWithDefault(msg, 2, 0),
    memoryBytes: jspb.Message.getFieldWithDefault(msg, 3, 0),
    peakFileSystemUsageList: jspb.Message.toObjectList(msg.getPeakFileSystemUsageList(),
    proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.UsageStats}
 */
proto.build.bazel.remote.execution.v2.UsageStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.UsageStats;
  return proto.build.bazel.remote.execution.v2.UsageStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.UsageStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.UsageStats}
 */
proto.build.bazel.remote.execution.v2.UsageStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPeakMemoryBytes(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCpuNanos(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemoryBytes(value);
      break;
    case 4:
      var value = new proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage;
      reader.readMessage(value,proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.deserializeBinaryFromReader);
      msg.addPeakFileSystemUsage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.UsageStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.UsageStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.UsageStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.UsageStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeakMemoryBytes();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCpuNanos();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMemoryBytes();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPeakFileSystemUsageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.toObject = function(includeInstance, msg) {
  var f, obj = {
    source: jspb.Message.getFieldWithDefault(msg, 1, ""),
    target: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fstype: jspb.Message.getFieldWithDefault(msg, 3, ""),
    usedBytes: jspb.Message.getFieldWithDefault(msg, 4, 0),
    totalBytes: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage}
 */
proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage;
  return proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage}
 */
proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTarget(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFstype(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUsedBytes(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalBytes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTarget();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFstype();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUsedBytes();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTotalBytes();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string source = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage} returns this
 */
proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.prototype.setSource = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string target = 2;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.prototype.getTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage} returns this
 */
proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.prototype.setTarget = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string fstype = 3;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.prototype.getFstype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage} returns this
 */
proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.prototype.setFstype = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 used_bytes = 4;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.prototype.getUsedBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage} returns this
 */
proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.prototype.setUsedBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 total_bytes = 5;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.prototype.getTotalBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage} returns this
 */
proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage.prototype.setTotalBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 peak_memory_bytes = 1;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.UsageStats.prototype.getPeakMemoryBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.UsageStats} returns this
 */
proto.build.bazel.remote.execution.v2.UsageStats.prototype.setPeakMemoryBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 cpu_nanos = 2;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.UsageStats.prototype.getCpuNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.UsageStats} returns this
 */
proto.build.bazel.remote.execution.v2.UsageStats.prototype.setCpuNanos = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 memory_bytes = 3;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.UsageStats.prototype.getMemoryBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.UsageStats} returns this
 */
proto.build.bazel.remote.execution.v2.UsageStats.prototype.setMemoryBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated FileSystemUsage peak_file_system_usage = 4;
 * @return {!Array<!proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage>}
 */
proto.build.bazel.remote.execution.v2.UsageStats.prototype.getPeakFileSystemUsageList = function() {
  return /** @type{!Array<!proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage, 4));
};


/**
 * @param {!Array<!proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage>} value
 * @return {!proto.build.bazel.remote.execution.v2.UsageStats} returns this
*/
proto.build.bazel.remote.execution.v2.UsageStats.prototype.setPeakFileSystemUsageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage}
 */
proto.build.bazel.remote.execution.v2.UsageStats.prototype.addPeakFileSystemUsage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.build.bazel.remote.execution.v2.UsageStats.FileSystemUsage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.build.bazel.remote.execution.v2.UsageStats} returns this
 */
proto.build.bazel.remote.execution.v2.UsageStats.prototype.clearPeakFileSystemUsageList = function() {
  return this.setPeakFileSystemUsageList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.toObject = function(opt_includeInstance) {
  return proto.build.bazel.remote.execution.v2.StoredExecution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.build.bazel.remote.execution.v2.StoredExecution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.StoredExecution.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    updatedAtUsec: jspb.Message.getFieldWithDefault(msg, 2, 0),
    executionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    invocationUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdAtUsec: jspb.Message.getFieldWithDefault(msg, 5, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    worker: jspb.Message.getFieldWithDefault(msg, 7, ""),
    stage: jspb.Message.getFieldWithDefault(msg, 8, 0),
    fileDownloadCount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    fileDownloadSizeBytes: jspb.Message.getFieldWithDefault(msg, 10, 0),
    fileDownloadDurationUsec: jspb.Message.getFieldWithDefault(msg, 11, 0),
    fileUploadCount: jspb.Message.getFieldWithDefault(msg, 12, 0),
    fileUploadSizeBytes: jspb.Message.getFieldWithDefault(msg, 13, 0),
    fileUploadDurationUsec: jspb.Message.getFieldWithDefault(msg, 14, 0),
    peakMemoryBytes: jspb.Message.getFieldWithDefault(msg, 15, 0),
    cpuNanos: jspb.Message.getFieldWithDefault(msg, 16, 0),
    estimatedMemoryBytes: jspb.Message.getFieldWithDefault(msg, 17, 0),
    estimatedMilliCpu: jspb.Message.getFieldWithDefault(msg, 18, 0),
    queuedTimestampUsec: jspb.Message.getFieldWithDefault(msg, 19, 0),
    workerStartTimestampUsec: jspb.Message.getFieldWithDefault(msg, 20, 0),
    workerCompletedTimestampUsec: jspb.Message.getFieldWithDefault(msg, 21, 0),
    inputFetchStartTimestampUsec: jspb.Message.getFieldWithDefault(msg, 22, 0),
    inputFetchCompletedTimestampUsec: jspb.Message.getFieldWithDefault(msg, 23, 0),
    executionStartTimestampUsec: jspb.Message.getFieldWithDefault(msg, 24, 0),
    executionCompletedTimestampUsec: jspb.Message.getFieldWithDefault(msg, 25, 0),
    outputUploadStartTimestampUsec: jspb.Message.getFieldWithDefault(msg, 26, 0),
    outputUploadCompletedTimestampUsec: jspb.Message.getFieldWithDefault(msg, 27, 0),
    invocationLinkType: jspb.Message.getFieldWithDefault(msg, 28, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.build.bazel.remote.execution.v2.StoredExecution;
  return proto.build.bazel.remote.execution.v2.StoredExecution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build.bazel.remote.execution.v2.StoredExecution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAtUsec(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecutionId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInvocationUuid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAtUsec(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorker(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStage(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileDownloadCount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileDownloadSizeBytes(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileDownloadDurationUsec(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileUploadCount(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileUploadSizeBytes(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFileUploadDurationUsec(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPeakMemoryBytes(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCpuNanos(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEstimatedMemoryBytes(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEstimatedMilliCpu(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQueuedTimestampUsec(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkerStartTimestampUsec(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkerCompletedTimestampUsec(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInputFetchStartTimestampUsec(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInputFetchCompletedTimestampUsec(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExecutionStartTimestampUsec(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExecutionCompletedTimestampUsec(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOutputUploadStartTimestampUsec(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOutputUploadCompletedTimestampUsec(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInvocationLinkType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.build.bazel.remote.execution.v2.StoredExecution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build.bazel.remote.execution.v2.StoredExecution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build.bazel.remote.execution.v2.StoredExecution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUpdatedAtUsec();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getExecutionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInvocationUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedAtUsec();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorker();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStage();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getFileDownloadCount();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getFileDownloadSizeBytes();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getFileDownloadDurationUsec();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getFileUploadCount();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getFileUploadSizeBytes();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getFileUploadDurationUsec();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getPeakMemoryBytes();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getCpuNanos();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
  f = message.getEstimatedMemoryBytes();
  if (f !== 0) {
    writer.writeInt64(
      17,
      f
    );
  }
  f = message.getEstimatedMilliCpu();
  if (f !== 0) {
    writer.writeInt64(
      18,
      f
    );
  }
  f = message.getQueuedTimestampUsec();
  if (f !== 0) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = message.getWorkerStartTimestampUsec();
  if (f !== 0) {
    writer.writeInt64(
      20,
      f
    );
  }
  f = message.getWorkerCompletedTimestampUsec();
  if (f !== 0) {
    writer.writeInt64(
      21,
      f
    );
  }
  f = message.getInputFetchStartTimestampUsec();
  if (f !== 0) {
    writer.writeInt64(
      22,
      f
    );
  }
  f = message.getInputFetchCompletedTimestampUsec();
  if (f !== 0) {
    writer.writeInt64(
      23,
      f
    );
  }
  f = message.getExecutionStartTimestampUsec();
  if (f !== 0) {
    writer.writeInt64(
      24,
      f
    );
  }
  f = message.getExecutionCompletedTimestampUsec();
  if (f !== 0) {
    writer.writeInt64(
      25,
      f
    );
  }
  f = message.getOutputUploadStartTimestampUsec();
  if (f !== 0) {
    writer.writeInt64(
      26,
      f
    );
  }
  f = message.getOutputUploadCompletedTimestampUsec();
  if (f !== 0) {
    writer.writeInt64(
      27,
      f
    );
  }
  f = message.getInvocationLinkType();
  if (f !== 0) {
    writer.writeInt32(
      28,
      f
    );
  }
};


/**
 * optional string group_id = 1;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 updated_at_usec = 2;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getUpdatedAtUsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setUpdatedAtUsec = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string execution_id = 3;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getExecutionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setExecutionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string invocation_uuid = 4;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getInvocationUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setInvocationUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 created_at_usec = 5;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getCreatedAtUsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setCreatedAtUsec = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string user_id = 6;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string worker = 7;
 * @return {string}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getWorker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setWorker = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 stage = 8;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getStage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setStage = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 file_download_count = 9;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getFileDownloadCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setFileDownloadCount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 file_download_size_bytes = 10;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getFileDownloadSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setFileDownloadSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 file_download_duration_usec = 11;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getFileDownloadDurationUsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setFileDownloadDurationUsec = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 file_upload_count = 12;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getFileUploadCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setFileUploadCount = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 file_upload_size_bytes = 13;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getFileUploadSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setFileUploadSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int64 file_upload_duration_usec = 14;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getFileUploadDurationUsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setFileUploadDurationUsec = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int64 peak_memory_bytes = 15;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getPeakMemoryBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setPeakMemoryBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional int64 cpu_nanos = 16;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getCpuNanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setCpuNanos = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional int64 estimated_memory_bytes = 17;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getEstimatedMemoryBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setEstimatedMemoryBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional int64 estimated_milli_cpu = 18;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getEstimatedMilliCpu = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setEstimatedMilliCpu = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional int64 queued_timestamp_usec = 19;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getQueuedTimestampUsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setQueuedTimestampUsec = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional int64 worker_start_timestamp_usec = 20;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getWorkerStartTimestampUsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setWorkerStartTimestampUsec = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional int64 worker_completed_timestamp_usec = 21;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getWorkerCompletedTimestampUsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setWorkerCompletedTimestampUsec = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional int64 input_fetch_start_timestamp_usec = 22;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getInputFetchStartTimestampUsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setInputFetchStartTimestampUsec = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional int64 input_fetch_completed_timestamp_usec = 23;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getInputFetchCompletedTimestampUsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setInputFetchCompletedTimestampUsec = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional int64 execution_start_timestamp_usec = 24;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getExecutionStartTimestampUsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setExecutionStartTimestampUsec = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional int64 execution_completed_timestamp_usec = 25;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getExecutionCompletedTimestampUsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setExecutionCompletedTimestampUsec = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
};


/**
 * optional int64 output_upload_start_timestamp_usec = 26;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getOutputUploadStartTimestampUsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setOutputUploadStartTimestampUsec = function(value) {
  return jspb.Message.setProto3IntField(this, 26, value);
};


/**
 * optional int64 output_upload_completed_timestamp_usec = 27;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getOutputUploadCompletedTimestampUsec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setOutputUploadCompletedTimestampUsec = function(value) {
  return jspb.Message.setProto3IntField(this, 27, value);
};


/**
 * optional int32 invocation_link_type = 28;
 * @return {number}
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.getInvocationLinkType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.build.bazel.remote.execution.v2.StoredExecution} returns this
 */
proto.build.bazel.remote.execution.v2.StoredExecution.prototype.setInvocationLinkType = function(value) {
  return jspb.Message.setProto3IntField(this, 28, value);
};


goog.object.extend(exports, proto.build.bazel.remote.execution.v2);
