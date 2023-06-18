@echo off

protoc -I=%CD% %CD%/src/proto/*.proto --js_out=import_style=commonjs:%CD% --grpc-web_out=import_style=typescript,mode=grpcwebtext:%CD%