#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

ROOT_PROTO_DIR="./proto"
COSMOS_PROTO_DIR="$ROOT_PROTO_DIR/cosmos/cosmos-sdk/proto"
THIRD_PARTY_PROTO_DIR="$ROOT_PROTO_DIR/cosmos/cosmos-sdk/third_party/proto"
CUDOS_PROTO_DIR="$ROOT_PROTO_DIR/cudos"
OUT_DIR="../src/codec/"

mkdir -p "$OUT_DIR"

protoc \
  --plugin="$(yarn bin protoc-gen-ts_proto)" \
  --ts_proto_out="$OUT_DIR" \
  --proto_path="$CUDOS_PROTO_DIR" \
  --proto_path="$COSMOS_PROTO_DIR" \
  --proto_path="$THIRD_PARTY_PROTO_DIR" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  "$CUDOS_PROTO_DIR/admin/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/gov/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/gov/v1beta1/gov.proto" \

# Remove unnecessary codec files
rm -rf \
  src/codec/cosmos_proto/ \
  src/codec/gogoproto/ \
  src/codec/google/api/ \
  src/codec/google/protobuf/descriptor.ts