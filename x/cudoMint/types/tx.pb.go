// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: cudos/cudoMint/tx.proto

package types

import (
	context "context"
	fmt "fmt"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

func init() { proto.RegisterFile("cudos/cudoMint/tx.proto", fileDescriptor_98a61e8cfc4908c6) }

var fileDescriptor_98a61e8cfc4908c6 = []byte{
	// 116 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x4f, 0x2e, 0x4d, 0xc9,
	0x2f, 0xd6, 0x07, 0x91, 0xbe, 0x99, 0x79, 0x25, 0xfa, 0x25, 0x15, 0x7a, 0x05, 0x45, 0xf9, 0x25,
	0xf9, 0x42, 0x7c, 0x60, 0x09, 0x3d, 0x98, 0x84, 0x11, 0x2b, 0x17, 0xb3, 0x6f, 0x71, 0xba, 0x93,
	0xfd, 0x89, 0x47, 0x72, 0x8c, 0x17, 0x1e, 0xc9, 0x31, 0x3e, 0x78, 0x24, 0xc7, 0x38, 0xe1, 0xb1,
	0x1c, 0xc3, 0x85, 0xc7, 0x72, 0x0c, 0x37, 0x1e, 0xcb, 0x31, 0x44, 0xa9, 0x42, 0x34, 0xe4, 0x17,
	0xa5, 0x83, 0x4d, 0x2b, 0xd6, 0xcd, 0xcb, 0x4f, 0x49, 0xd5, 0xaf, 0x40, 0x32, 0xba, 0xb2, 0x20,
	0xb5, 0x38, 0x89, 0x0d, 0x6c, 0xbc, 0x31, 0x20, 0x00, 0x00, 0xff, 0xff, 0x58, 0xc8, 0x8f, 0x04,
	0x79, 0x00, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MsgClient is the client API for Msg service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MsgClient interface {
}

type msgClient struct {
	cc grpc1.ClientConn
}

func NewMsgClient(cc grpc1.ClientConn) MsgClient {
	return &msgClient{cc}
}

// MsgServer is the server API for Msg service.
type MsgServer interface {
}

// UnimplementedMsgServer can be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func RegisterMsgServer(s grpc1.Server, srv MsgServer) {
	s.RegisterService(&_Msg_serviceDesc, srv)
}

var _Msg_serviceDesc = grpc.ServiceDesc{
	ServiceName: "cudos.cudoMint.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "cudos/cudoMint/tx.proto",
}
