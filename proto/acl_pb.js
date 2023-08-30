// source: proto/acl.proto
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

var proto_user_id_pb = require('../proto/user_id_pb.js');
goog.object.extend(proto, proto_user_id_pb);
goog.exportSymbol('proto.acl.ACL', null, global);
goog.exportSymbol('proto.acl.ACL.Permissions', null, global);
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
proto.acl.ACL = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.acl.ACL, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.acl.ACL.displayName = 'proto.acl.ACL';
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
proto.acl.ACL.Permissions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.acl.ACL.Permissions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.acl.ACL.Permissions.displayName = 'proto.acl.ACL.Permissions';
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
proto.acl.ACL.prototype.toObject = function(opt_includeInstance) {
  return proto.acl.ACL.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.acl.ACL} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.acl.ACL.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: (f = msg.getUserId()) && proto_user_id_pb.UserId.toObject(includeInstance, f),
    groupId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    ownerPermissions: (f = msg.getOwnerPermissions()) && proto.acl.ACL.Permissions.toObject(includeInstance, f),
    groupPermissions: (f = msg.getGroupPermissions()) && proto.acl.ACL.Permissions.toObject(includeInstance, f),
    othersPermissions: (f = msg.getOthersPermissions()) && proto.acl.ACL.Permissions.toObject(includeInstance, f)
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
 * @return {!proto.acl.ACL}
 */
proto.acl.ACL.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.acl.ACL;
  return proto.acl.ACL.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.acl.ACL} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.acl.ACL}
 */
proto.acl.ACL.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_user_id_pb.UserId;
      reader.readMessage(value,proto_user_id_pb.UserId.deserializeBinaryFromReader);
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupId(value);
      break;
    case 3:
      var value = new proto.acl.ACL.Permissions;
      reader.readMessage(value,proto.acl.ACL.Permissions.deserializeBinaryFromReader);
      msg.setOwnerPermissions(value);
      break;
    case 4:
      var value = new proto.acl.ACL.Permissions;
      reader.readMessage(value,proto.acl.ACL.Permissions.deserializeBinaryFromReader);
      msg.setGroupPermissions(value);
      break;
    case 5:
      var value = new proto.acl.ACL.Permissions;
      reader.readMessage(value,proto.acl.ACL.Permissions.deserializeBinaryFromReader);
      msg.setOthersPermissions(value);
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
proto.acl.ACL.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.acl.ACL.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.acl.ACL} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.acl.ACL.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_user_id_pb.UserId.serializeBinaryToWriter
    );
  }
  f = message.getGroupId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOwnerPermissions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.acl.ACL.Permissions.serializeBinaryToWriter
    );
  }
  f = message.getGroupPermissions();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.acl.ACL.Permissions.serializeBinaryToWriter
    );
  }
  f = message.getOthersPermissions();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.acl.ACL.Permissions.serializeBinaryToWriter
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
proto.acl.ACL.Permissions.prototype.toObject = function(opt_includeInstance) {
  return proto.acl.ACL.Permissions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.acl.ACL.Permissions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.acl.ACL.Permissions.toObject = function(includeInstance, msg) {
  var f, obj = {
    read: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    write: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.acl.ACL.Permissions}
 */
proto.acl.ACL.Permissions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.acl.ACL.Permissions;
  return proto.acl.ACL.Permissions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.acl.ACL.Permissions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.acl.ACL.Permissions}
 */
proto.acl.ACL.Permissions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRead(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWrite(value);
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
proto.acl.ACL.Permissions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.acl.ACL.Permissions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.acl.ACL.Permissions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.acl.ACL.Permissions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRead();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getWrite();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool read = 1;
 * @return {boolean}
 */
proto.acl.ACL.Permissions.prototype.getRead = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.acl.ACL.Permissions} returns this
 */
proto.acl.ACL.Permissions.prototype.setRead = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool write = 2;
 * @return {boolean}
 */
proto.acl.ACL.Permissions.prototype.getWrite = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.acl.ACL.Permissions} returns this
 */
proto.acl.ACL.Permissions.prototype.setWrite = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional user_id.UserId user_id = 1;
 * @return {?proto.user_id.UserId}
 */
proto.acl.ACL.prototype.getUserId = function() {
  return /** @type{?proto.user_id.UserId} */ (
    jspb.Message.getWrapperField(this, proto_user_id_pb.UserId, 1));
};


/**
 * @param {?proto.user_id.UserId|undefined} value
 * @return {!proto.acl.ACL} returns this
*/
proto.acl.ACL.prototype.setUserId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.acl.ACL} returns this
 */
proto.acl.ACL.prototype.clearUserId = function() {
  return this.setUserId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.acl.ACL.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string group_id = 2;
 * @return {string}
 */
proto.acl.ACL.prototype.getGroupId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.acl.ACL} returns this
 */
proto.acl.ACL.prototype.setGroupId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Permissions owner_permissions = 3;
 * @return {?proto.acl.ACL.Permissions}
 */
proto.acl.ACL.prototype.getOwnerPermissions = function() {
  return /** @type{?proto.acl.ACL.Permissions} */ (
    jspb.Message.getWrapperField(this, proto.acl.ACL.Permissions, 3));
};


/**
 * @param {?proto.acl.ACL.Permissions|undefined} value
 * @return {!proto.acl.ACL} returns this
*/
proto.acl.ACL.prototype.setOwnerPermissions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.acl.ACL} returns this
 */
proto.acl.ACL.prototype.clearOwnerPermissions = function() {
  return this.setOwnerPermissions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.acl.ACL.prototype.hasOwnerPermissions = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Permissions group_permissions = 4;
 * @return {?proto.acl.ACL.Permissions}
 */
proto.acl.ACL.prototype.getGroupPermissions = function() {
  return /** @type{?proto.acl.ACL.Permissions} */ (
    jspb.Message.getWrapperField(this, proto.acl.ACL.Permissions, 4));
};


/**
 * @param {?proto.acl.ACL.Permissions|undefined} value
 * @return {!proto.acl.ACL} returns this
*/
proto.acl.ACL.prototype.setGroupPermissions = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.acl.ACL} returns this
 */
proto.acl.ACL.prototype.clearGroupPermissions = function() {
  return this.setGroupPermissions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.acl.ACL.prototype.hasGroupPermissions = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Permissions others_permissions = 5;
 * @return {?proto.acl.ACL.Permissions}
 */
proto.acl.ACL.prototype.getOthersPermissions = function() {
  return /** @type{?proto.acl.ACL.Permissions} */ (
    jspb.Message.getWrapperField(this, proto.acl.ACL.Permissions, 5));
};


/**
 * @param {?proto.acl.ACL.Permissions|undefined} value
 * @return {!proto.acl.ACL} returns this
*/
proto.acl.ACL.prototype.setOthersPermissions = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.acl.ACL} returns this
 */
proto.acl.ACL.prototype.clearOthersPermissions = function() {
  return this.setOthersPermissions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.acl.ACL.prototype.hasOthersPermissions = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.acl);
