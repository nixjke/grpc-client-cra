/**
 * @fileoverview gRPC-Web generated client stub for hero
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.23.3
// source: src/proto/hero.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as src_proto_hero_pb from '../../src/proto/hero_pb';


export class HeroServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorFindOne = new grpcWeb.MethodDescriptor(
    '/hero.HeroService/FindOne',
    grpcWeb.MethodType.UNARY,
    src_proto_hero_pb.HeroById,
    src_proto_hero_pb.Hero,
    (request: src_proto_hero_pb.HeroById) => {
      return request.serializeBinary();
    },
    src_proto_hero_pb.Hero.deserializeBinary
  );

  findOne(
    request: src_proto_hero_pb.HeroById,
    metadata: grpcWeb.Metadata | null): Promise<src_proto_hero_pb.Hero>;

  findOne(
    request: src_proto_hero_pb.HeroById,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: src_proto_hero_pb.Hero) => void): grpcWeb.ClientReadableStream<src_proto_hero_pb.Hero>;

  findOne(
    request: src_proto_hero_pb.HeroById,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: src_proto_hero_pb.Hero) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/hero.HeroService/FindOne',
        request,
        metadata || {},
        this.methodDescriptorFindOne,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/hero.HeroService/FindOne',
    request,
    metadata || {},
    this.methodDescriptorFindOne);
  }

}

