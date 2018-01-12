const TStream = require('t-model')
const TafProtocolClient = require('t-rpc/lib/protocols/taf/client')
const { RpcError, ClientDecodeError, ServerFuncNotFoundError } = require('t-rpc/lib/util/rpc-error')

let { DemoStruct } = require('./DemoStruct.js').Demo

class DemoFProxy {
  static get Protocol () {
    return TafProtocolClient
  }
  constructor () {
    this._name = undefined
    this._objectProxy = undefined
  }
  setTimeout (value) {
    this._objectProxy.timeout = value
  }
  getTimeout () {
    return this._objectProxy.timeout
  }
  returnBoolMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg, ...args) {
    let _encode = () => {
      let os = new TStream.TOutputStream()
      new (TStream.TBool)(boolArg).write(os, 1)
      new (TStream.TInt32)(intArg).write(os, 2)
      new (TStream.TString)(stringArg).write(os, 3)
      new (TStream.TFloat)(floatValue).write(os, 4)
      new (TStream.TDouble)(doubleValue).write(os, 5)
      new (TStream.TList(TStream.TInt32))(vectorArg).write(os, 6)
      new (TStream.TMap(TStream.TInt32, TStream.TString))(mapArg).write(os, 7)
      new (DemoStruct)(structArg).write(os, 8)
      new (TStream.TInt8)(charArg).write(os, 9)
      new (TStream.TInt16)(shortArg).write(os, 10)
      new (TStream.TInt64)(longlongArg).write(os, 11)
      new (TStream.TUInt8)(ucharArg).write(os, 12)
      new (TStream.TUInt16)(ushortArg).write(os, 13)
      new (TStream.TUInt32)(uintArg).write(os, 14)
      new (TStream.TBytes)(bytesArg).write(os, 15)
      return os.tBuffer.buffer
    }
    let _decode = rpcResult => {
      try {
        let response = { arguments: {} }
        let is = new TStream.TInputStream(new TStream.TBuffer(rpcResult.responseMessage.responsePacket.sBuffer))
        response.costtime = rpcResult.costTime
        response.return = TStream.TBool.read(is, 0, true)
        response.arguments.outBoolArg = TStream.TBool.read(is, 16, true)
        response.arguments.outIntArg = TStream.TInt32.read(is, 17, true)
        response.arguments.outStringArg = TStream.TString.read(is, 18, true)
        response.arguments.outFloatValue = TStream.TFloat.read(is, 19, true)
        response.arguments.outDoubleValue = TStream.TDouble.read(is, 20, true)
        response.arguments.outVectorArg = TStream.TList(TStream.TInt32).read(is, 21, true)
        response.arguments.outMapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 22, true)
        response.arguments.outStructArg = DemoStruct.read(is, 23, true)
        response.arguments.outCharArg = TStream.TInt8.read(is, 24, true)
        response.arguments.outShortArg = TStream.TInt16.read(is, 25, true)
        response.arguments.outLonglongArg = TStream.TInt64.read(is, 26, true)
        response.arguments.outUcharArg = TStream.TUInt8.read(is, 27, true)
        response.arguments.outUshortArg = TStream.TUInt16.read(is, 28, true)
        response.arguments.outUintArg = TStream.TUInt32.read(is, 29, true)
        response.arguments.outBytesArg = TStream.TBytes.read(is, 30, true)
        return { request: rpcResult.requestMessage, response }
      } catch (error) {
        throw new ClientDecodeError(error.message, rpcResult.requestMessage, rpcResult.responseMessage, rpcResult.costTime, rpcResult.endpointInfo)
      }
    }
    let _error = rpcError => {
      let code = rpcError.responseMessage ? rpcError.responseMessage.code : -999
      let message = rpcError.responseMessage ? rpcError.responseMessage.message : rpcError.message
      throw new RpcError(code, message, rpcError.requestMessage, rpcError.responseMessage, rpcError.costTime, rpcError.endpointInfo)
    }
    return this._objectProxy.invoke('returnBoolMethod', _encode(), args.length > 0 ? args[0] : undefined).then(_decode, _error)
  }
  returnCharMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg, ...args) {
    let _encode = () => {
      let os = new TStream.TOutputStream()
      new (TStream.TBool)(boolArg).write(os, 1)
      new (TStream.TInt32)(intArg).write(os, 2)
      new (TStream.TString)(stringArg).write(os, 3)
      new (TStream.TFloat)(floatValue).write(os, 4)
      new (TStream.TDouble)(doubleValue).write(os, 5)
      new (TStream.TList(TStream.TInt32))(vectorArg).write(os, 6)
      new (TStream.TMap(TStream.TInt32, TStream.TString))(mapArg).write(os, 7)
      new (DemoStruct)(structArg).write(os, 8)
      new (TStream.TInt8)(charArg).write(os, 9)
      new (TStream.TInt16)(shortArg).write(os, 10)
      new (TStream.TInt64)(longlongArg).write(os, 11)
      new (TStream.TUInt8)(ucharArg).write(os, 12)
      new (TStream.TUInt16)(ushortArg).write(os, 13)
      new (TStream.TUInt32)(uintArg).write(os, 14)
      new (TStream.TBytes)(bytesArg).write(os, 15)
      return os.tBuffer.buffer
    }
    let _decode = rpcResult => {
      try {
        let response = { arguments: {} }
        let is = new TStream.TInputStream(new TStream.TBuffer(rpcResult.responseMessage.responsePacket.sBuffer))
        response.costtime = rpcResult.costTime
        response.return = TStream.TInt8.read(is, 0, true)
        response.arguments.outBoolArg = TStream.TBool.read(is, 16, true)
        response.arguments.outIntArg = TStream.TInt32.read(is, 17, true)
        response.arguments.outStringArg = TStream.TString.read(is, 18, true)
        response.arguments.outFloatValue = TStream.TFloat.read(is, 19, true)
        response.arguments.outDoubleValue = TStream.TDouble.read(is, 20, true)
        response.arguments.outVectorArg = TStream.TList(TStream.TInt32).read(is, 21, true)
        response.arguments.outMapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 22, true)
        response.arguments.outStructArg = DemoStruct.read(is, 23, true)
        response.arguments.outCharArg = TStream.TInt8.read(is, 24, true)
        response.arguments.outShortArg = TStream.TInt16.read(is, 25, true)
        response.arguments.outLonglongArg = TStream.TInt64.read(is, 26, true)
        response.arguments.outUcharArg = TStream.TUInt8.read(is, 27, true)
        response.arguments.outUshortArg = TStream.TUInt16.read(is, 28, true)
        response.arguments.outUintArg = TStream.TUInt32.read(is, 29, true)
        response.arguments.outBytesArg = TStream.TBytes.read(is, 30, true)
        return { request: rpcResult.requestMessage, response }
      } catch (error) {
        throw new ClientDecodeError(error.message, rpcResult.requestMessage, rpcResult.responseMessage, rpcResult.costTime, rpcResult.endpointInfo)
      }
    }
    let _error = rpcError => {
      let code = rpcError.responseMessage ? rpcError.responseMessage.code : -999
      let message = rpcError.responseMessage ? rpcError.responseMessage.message : rpcError.message
      throw new RpcError(code, message, rpcError.requestMessage, rpcError.responseMessage, rpcError.costTime, rpcError.endpointInfo)
    }
    return this._objectProxy.invoke('returnCharMethod', _encode(), args.length > 0 ? args[0] : undefined).then(_decode, _error)
  }
  returnShortMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg, ...args) {
    let _encode = () => {
      let os = new TStream.TOutputStream()
      new (TStream.TBool)(boolArg).write(os, 1)
      new (TStream.TInt32)(intArg).write(os, 2)
      new (TStream.TString)(stringArg).write(os, 3)
      new (TStream.TFloat)(floatValue).write(os, 4)
      new (TStream.TDouble)(doubleValue).write(os, 5)
      new (TStream.TList(TStream.TInt32))(vectorArg).write(os, 6)
      new (TStream.TMap(TStream.TInt32, TStream.TString))(mapArg).write(os, 7)
      new (DemoStruct)(structArg).write(os, 8)
      new (TStream.TInt8)(charArg).write(os, 9)
      new (TStream.TInt16)(shortArg).write(os, 10)
      new (TStream.TInt64)(longlongArg).write(os, 11)
      new (TStream.TUInt8)(ucharArg).write(os, 12)
      new (TStream.TUInt16)(ushortArg).write(os, 13)
      new (TStream.TUInt32)(uintArg).write(os, 14)
      new (TStream.TBytes)(bytesArg).write(os, 15)
      return os.tBuffer.buffer
    }
    let _decode = rpcResult => {
      try {
        let response = { arguments: {} }
        let is = new TStream.TInputStream(new TStream.TBuffer(rpcResult.responseMessage.responsePacket.sBuffer))
        response.costtime = rpcResult.costTime
        response.return = TStream.TInt16.read(is, 0, true)
        response.arguments.outBoolArg = TStream.TBool.read(is, 16, true)
        response.arguments.outIntArg = TStream.TInt32.read(is, 17, true)
        response.arguments.outStringArg = TStream.TString.read(is, 18, true)
        response.arguments.outFloatValue = TStream.TFloat.read(is, 19, true)
        response.arguments.outDoubleValue = TStream.TDouble.read(is, 20, true)
        response.arguments.outVectorArg = TStream.TList(TStream.TInt32).read(is, 21, true)
        response.arguments.outMapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 22, true)
        response.arguments.outStructArg = DemoStruct.read(is, 23, true)
        response.arguments.outCharArg = TStream.TInt8.read(is, 24, true)
        response.arguments.outShortArg = TStream.TInt16.read(is, 25, true)
        response.arguments.outLonglongArg = TStream.TInt64.read(is, 26, true)
        response.arguments.outUcharArg = TStream.TUInt8.read(is, 27, true)
        response.arguments.outUshortArg = TStream.TUInt16.read(is, 28, true)
        response.arguments.outUintArg = TStream.TUInt32.read(is, 29, true)
        response.arguments.outBytesArg = TStream.TBytes.read(is, 30, true)
        return { request: rpcResult.requestMessage, response }
      } catch (error) {
        throw new ClientDecodeError(error.message, rpcResult.requestMessage, rpcResult.responseMessage, rpcResult.costTime, rpcResult.endpointInfo)
      }
    }
    let _error = rpcError => {
      let code = rpcError.responseMessage ? rpcError.responseMessage.code : -999
      let message = rpcError.responseMessage ? rpcError.responseMessage.message : rpcError.message
      throw new RpcError(code, message, rpcError.requestMessage, rpcError.responseMessage, rpcError.costTime, rpcError.endpointInfo)
    }
    return this._objectProxy.invoke('returnShortMethod', _encode(), args.length > 0 ? args[0] : undefined).then(_decode, _error)
  }
  returnIntMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg, ...args) {
    let _encode = () => {
      let os = new TStream.TOutputStream()
      new (TStream.TBool)(boolArg).write(os, 1)
      new (TStream.TInt32)(intArg).write(os, 2)
      new (TStream.TString)(stringArg).write(os, 3)
      new (TStream.TFloat)(floatValue).write(os, 4)
      new (TStream.TDouble)(doubleValue).write(os, 5)
      new (TStream.TList(TStream.TInt32))(vectorArg).write(os, 6)
      new (TStream.TMap(TStream.TInt32, TStream.TString))(mapArg).write(os, 7)
      new (DemoStruct)(structArg).write(os, 8)
      new (TStream.TInt8)(charArg).write(os, 9)
      new (TStream.TInt16)(shortArg).write(os, 10)
      new (TStream.TInt64)(longlongArg).write(os, 11)
      new (TStream.TUInt8)(ucharArg).write(os, 12)
      new (TStream.TUInt16)(ushortArg).write(os, 13)
      new (TStream.TUInt32)(uintArg).write(os, 14)
      new (TStream.TBytes)(bytesArg).write(os, 15)
      return os.tBuffer.buffer
    }
    let _decode = rpcResult => {
      try {
        let response = { arguments: {} }
        let is = new TStream.TInputStream(new TStream.TBuffer(rpcResult.responseMessage.responsePacket.sBuffer))
        response.costtime = rpcResult.costTime
        response.return = TStream.TInt32.read(is, 0, true)
        response.arguments.outBoolArg = TStream.TBool.read(is, 16, true)
        response.arguments.outIntArg = TStream.TInt32.read(is, 17, true)
        response.arguments.outStringArg = TStream.TString.read(is, 18, true)
        response.arguments.outFloatValue = TStream.TFloat.read(is, 19, true)
        response.arguments.outDoubleValue = TStream.TDouble.read(is, 20, true)
        response.arguments.outVectorArg = TStream.TList(TStream.TInt32).read(is, 21, true)
        response.arguments.outMapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 22, true)
        response.arguments.outStructArg = DemoStruct.read(is, 23, true)
        response.arguments.outCharArg = TStream.TInt8.read(is, 24, true)
        response.arguments.outShortArg = TStream.TInt16.read(is, 25, true)
        response.arguments.outLonglongArg = TStream.TInt64.read(is, 26, true)
        response.arguments.outUcharArg = TStream.TUInt8.read(is, 27, true)
        response.arguments.outUshortArg = TStream.TUInt16.read(is, 28, true)
        response.arguments.outUintArg = TStream.TUInt32.read(is, 29, true)
        response.arguments.outBytesArg = TStream.TBytes.read(is, 30, true)
        return { request: rpcResult.requestMessage, response }
      } catch (error) {
        throw new ClientDecodeError(error.message, rpcResult.requestMessage, rpcResult.responseMessage, rpcResult.costTime, rpcResult.endpointInfo)
      }
    }
    let _error = rpcError => {
      let code = rpcError.responseMessage ? rpcError.responseMessage.code : -999
      let message = rpcError.responseMessage ? rpcError.responseMessage.message : rpcError.message
      throw new RpcError(code, message, rpcError.requestMessage, rpcError.responseMessage, rpcError.costTime, rpcError.endpointInfo)
    }
    return this._objectProxy.invoke('returnIntMethod', _encode(), args.length > 0 ? args[0] : undefined).then(_decode, _error)
  }
  returnLonglongMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg, ...args) {
    let _encode = () => {
      let os = new TStream.TOutputStream()
      new (TStream.TBool)(boolArg).write(os, 1)
      new (TStream.TInt32)(intArg).write(os, 2)
      new (TStream.TString)(stringArg).write(os, 3)
      new (TStream.TFloat)(floatValue).write(os, 4)
      new (TStream.TDouble)(doubleValue).write(os, 5)
      new (TStream.TList(TStream.TInt32))(vectorArg).write(os, 6)
      new (TStream.TMap(TStream.TInt32, TStream.TString))(mapArg).write(os, 7)
      new (DemoStruct)(structArg).write(os, 8)
      new (TStream.TInt8)(charArg).write(os, 9)
      new (TStream.TInt16)(shortArg).write(os, 10)
      new (TStream.TInt64)(longlongArg).write(os, 11)
      new (TStream.TUInt8)(ucharArg).write(os, 12)
      new (TStream.TUInt16)(ushortArg).write(os, 13)
      new (TStream.TUInt32)(uintArg).write(os, 14)
      new (TStream.TBytes)(bytesArg).write(os, 15)
      return os.tBuffer.buffer
    }
    let _decode = rpcResult => {
      try {
        let response = { arguments: {} }
        let is = new TStream.TInputStream(new TStream.TBuffer(rpcResult.responseMessage.responsePacket.sBuffer))
        response.costtime = rpcResult.costTime
        response.return = TStream.TInt64.read(is, 0, true)
        response.arguments.outBoolArg = TStream.TBool.read(is, 16, true)
        response.arguments.outIntArg = TStream.TInt32.read(is, 17, true)
        response.arguments.outStringArg = TStream.TString.read(is, 18, true)
        response.arguments.outFloatValue = TStream.TFloat.read(is, 19, true)
        response.arguments.outDoubleValue = TStream.TDouble.read(is, 20, true)
        response.arguments.outVectorArg = TStream.TList(TStream.TInt32).read(is, 21, true)
        response.arguments.outMapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 22, true)
        response.arguments.outStructArg = DemoStruct.read(is, 23, true)
        response.arguments.outCharArg = TStream.TInt8.read(is, 24, true)
        response.arguments.outShortArg = TStream.TInt16.read(is, 25, true)
        response.arguments.outLonglongArg = TStream.TInt64.read(is, 26, true)
        response.arguments.outUcharArg = TStream.TUInt8.read(is, 27, true)
        response.arguments.outUshortArg = TStream.TUInt16.read(is, 28, true)
        response.arguments.outUintArg = TStream.TUInt32.read(is, 29, true)
        response.arguments.outBytesArg = TStream.TBytes.read(is, 30, true)
        return { request: rpcResult.requestMessage, response }
      } catch (error) {
        throw new ClientDecodeError(error.message, rpcResult.requestMessage, rpcResult.responseMessage, rpcResult.costTime, rpcResult.endpointInfo)
      }
    }
    let _error = rpcError => {
      let code = rpcError.responseMessage ? rpcError.responseMessage.code : -999
      let message = rpcError.responseMessage ? rpcError.responseMessage.message : rpcError.message
      throw new RpcError(code, message, rpcError.requestMessage, rpcError.responseMessage, rpcError.costTime, rpcError.endpointInfo)
    }
    return this._objectProxy.invoke('returnLonglongMethod', _encode(), args.length > 0 ? args[0] : undefined).then(_decode, _error)
  }
  returnUCharMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg, ...args) {
    let _encode = () => {
      let os = new TStream.TOutputStream()
      new (TStream.TBool)(boolArg).write(os, 1)
      new (TStream.TInt32)(intArg).write(os, 2)
      new (TStream.TString)(stringArg).write(os, 3)
      new (TStream.TFloat)(floatValue).write(os, 4)
      new (TStream.TDouble)(doubleValue).write(os, 5)
      new (TStream.TList(TStream.TInt32))(vectorArg).write(os, 6)
      new (TStream.TMap(TStream.TInt32, TStream.TString))(mapArg).write(os, 7)
      new (DemoStruct)(structArg).write(os, 8)
      new (TStream.TInt8)(charArg).write(os, 9)
      new (TStream.TInt16)(shortArg).write(os, 10)
      new (TStream.TInt64)(longlongArg).write(os, 11)
      new (TStream.TUInt8)(ucharArg).write(os, 12)
      new (TStream.TUInt16)(ushortArg).write(os, 13)
      new (TStream.TUInt32)(uintArg).write(os, 14)
      new (TStream.TBytes)(bytesArg).write(os, 15)
      return os.tBuffer.buffer
    }
    let _decode = rpcResult => {
      try {
        let response = { arguments: {} }
        let is = new TStream.TInputStream(new TStream.TBuffer(rpcResult.responseMessage.responsePacket.sBuffer))
        response.costtime = rpcResult.costTime
        response.return = TStream.TUInt8.read(is, 0, true)
        response.arguments.outBoolArg = TStream.TBool.read(is, 16, true)
        response.arguments.outIntArg = TStream.TInt32.read(is, 17, true)
        response.arguments.outStringArg = TStream.TString.read(is, 18, true)
        response.arguments.outFloatValue = TStream.TFloat.read(is, 19, true)
        response.arguments.outDoubleValue = TStream.TDouble.read(is, 20, true)
        response.arguments.outVectorArg = TStream.TList(TStream.TInt32).read(is, 21, true)
        response.arguments.outMapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 22, true)
        response.arguments.outStructArg = DemoStruct.read(is, 23, true)
        response.arguments.outCharArg = TStream.TInt8.read(is, 24, true)
        response.arguments.outShortArg = TStream.TInt16.read(is, 25, true)
        response.arguments.outLonglongArg = TStream.TInt64.read(is, 26, true)
        response.arguments.outUcharArg = TStream.TUInt8.read(is, 27, true)
        response.arguments.outUshortArg = TStream.TUInt16.read(is, 28, true)
        response.arguments.outUintArg = TStream.TUInt32.read(is, 29, true)
        response.arguments.outBytesArg = TStream.TBytes.read(is, 30, true)
        return { request: rpcResult.requestMessage, response }
      } catch (error) {
        throw new ClientDecodeError(error.message, rpcResult.requestMessage, rpcResult.responseMessage, rpcResult.costTime, rpcResult.endpointInfo)
      }
    }
    let _error = rpcError => {
      let code = rpcError.responseMessage ? rpcError.responseMessage.code : -999
      let message = rpcError.responseMessage ? rpcError.responseMessage.message : rpcError.message
      throw new RpcError(code, message, rpcError.requestMessage, rpcError.responseMessage, rpcError.costTime, rpcError.endpointInfo)
    }
    return this._objectProxy.invoke('returnUCharMethod', _encode(), args.length > 0 ? args[0] : undefined).then(_decode, _error)
  }
  returnUShortMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg, ...args) {
    let _encode = () => {
      let os = new TStream.TOutputStream()
      new (TStream.TBool)(boolArg).write(os, 1)
      new (TStream.TInt32)(intArg).write(os, 2)
      new (TStream.TString)(stringArg).write(os, 3)
      new (TStream.TFloat)(floatValue).write(os, 4)
      new (TStream.TDouble)(doubleValue).write(os, 5)
      new (TStream.TList(TStream.TInt32))(vectorArg).write(os, 6)
      new (TStream.TMap(TStream.TInt32, TStream.TString))(mapArg).write(os, 7)
      new (DemoStruct)(structArg).write(os, 8)
      new (TStream.TInt8)(charArg).write(os, 9)
      new (TStream.TInt16)(shortArg).write(os, 10)
      new (TStream.TInt64)(longlongArg).write(os, 11)
      new (TStream.TUInt8)(ucharArg).write(os, 12)
      new (TStream.TUInt16)(ushortArg).write(os, 13)
      new (TStream.TUInt32)(uintArg).write(os, 14)
      new (TStream.TBytes)(bytesArg).write(os, 15)
      return os.tBuffer.buffer
    }
    let _decode = rpcResult => {
      try {
        let response = { arguments: {} }
        let is = new TStream.TInputStream(new TStream.TBuffer(rpcResult.responseMessage.responsePacket.sBuffer))
        response.costtime = rpcResult.costTime
        response.return = TStream.TUInt16.read(is, 0, true)
        response.arguments.outBoolArg = TStream.TBool.read(is, 16, true)
        response.arguments.outIntArg = TStream.TInt32.read(is, 17, true)
        response.arguments.outStringArg = TStream.TString.read(is, 18, true)
        response.arguments.outFloatValue = TStream.TFloat.read(is, 19, true)
        response.arguments.outDoubleValue = TStream.TDouble.read(is, 20, true)
        response.arguments.outVectorArg = TStream.TList(TStream.TInt32).read(is, 21, true)
        response.arguments.outMapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 22, true)
        response.arguments.outStructArg = DemoStruct.read(is, 23, true)
        response.arguments.outCharArg = TStream.TInt8.read(is, 24, true)
        response.arguments.outShortArg = TStream.TInt16.read(is, 25, true)
        response.arguments.outLonglongArg = TStream.TInt64.read(is, 26, true)
        response.arguments.outUcharArg = TStream.TUInt8.read(is, 27, true)
        response.arguments.outUshortArg = TStream.TUInt16.read(is, 28, true)
        response.arguments.outUintArg = TStream.TUInt32.read(is, 29, true)
        response.arguments.outBytesArg = TStream.TBytes.read(is, 30, true)
        return { request: rpcResult.requestMessage, response }
      } catch (error) {
        throw new ClientDecodeError(error.message, rpcResult.requestMessage, rpcResult.responseMessage, rpcResult.costTime, rpcResult.endpointInfo)
      }
    }
    let _error = rpcError => {
      let code = rpcError.responseMessage ? rpcError.responseMessage.code : -999
      let message = rpcError.responseMessage ? rpcError.responseMessage.message : rpcError.message
      throw new RpcError(code, message, rpcError.requestMessage, rpcError.responseMessage, rpcError.costTime, rpcError.endpointInfo)
    }
    return this._objectProxy.invoke('returnUShortMethod', _encode(), args.length > 0 ? args[0] : undefined).then(_decode, _error)
  }
  returnUIntMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg, ...args) {
    let _encode = () => {
      let os = new TStream.TOutputStream()
      new (TStream.TBool)(boolArg).write(os, 1)
      new (TStream.TInt32)(intArg).write(os, 2)
      new (TStream.TString)(stringArg).write(os, 3)
      new (TStream.TFloat)(floatValue).write(os, 4)
      new (TStream.TDouble)(doubleValue).write(os, 5)
      new (TStream.TList(TStream.TInt32))(vectorArg).write(os, 6)
      new (TStream.TMap(TStream.TInt32, TStream.TString))(mapArg).write(os, 7)
      new (DemoStruct)(structArg).write(os, 8)
      new (TStream.TInt8)(charArg).write(os, 9)
      new (TStream.TInt16)(shortArg).write(os, 10)
      new (TStream.TInt64)(longlongArg).write(os, 11)
      new (TStream.TUInt8)(ucharArg).write(os, 12)
      new (TStream.TUInt16)(ushortArg).write(os, 13)
      new (TStream.TUInt32)(uintArg).write(os, 14)
      new (TStream.TBytes)(bytesArg).write(os, 15)
      return os.tBuffer.buffer
    }
    let _decode = rpcResult => {
      try {
        let response = { arguments: {} }
        let is = new TStream.TInputStream(new TStream.TBuffer(rpcResult.responseMessage.responsePacket.sBuffer))
        response.costtime = rpcResult.costTime
        response.return = TStream.TUInt32.read(is, 0, true)
        response.arguments.outBoolArg = TStream.TBool.read(is, 16, true)
        response.arguments.outIntArg = TStream.TInt32.read(is, 17, true)
        response.arguments.outStringArg = TStream.TString.read(is, 18, true)
        response.arguments.outFloatValue = TStream.TFloat.read(is, 19, true)
        response.arguments.outDoubleValue = TStream.TDouble.read(is, 20, true)
        response.arguments.outVectorArg = TStream.TList(TStream.TInt32).read(is, 21, true)
        response.arguments.outMapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 22, true)
        response.arguments.outStructArg = DemoStruct.read(is, 23, true)
        response.arguments.outCharArg = TStream.TInt8.read(is, 24, true)
        response.arguments.outShortArg = TStream.TInt16.read(is, 25, true)
        response.arguments.outLonglongArg = TStream.TInt64.read(is, 26, true)
        response.arguments.outUcharArg = TStream.TUInt8.read(is, 27, true)
        response.arguments.outUshortArg = TStream.TUInt16.read(is, 28, true)
        response.arguments.outUintArg = TStream.TUInt32.read(is, 29, true)
        response.arguments.outBytesArg = TStream.TBytes.read(is, 30, true)
        return { request: rpcResult.requestMessage, response }
      } catch (error) {
        throw new ClientDecodeError(error.message, rpcResult.requestMessage, rpcResult.responseMessage, rpcResult.costTime, rpcResult.endpointInfo)
      }
    }
    let _error = rpcError => {
      let code = rpcError.responseMessage ? rpcError.responseMessage.code : -999
      let message = rpcError.responseMessage ? rpcError.responseMessage.message : rpcError.message
      throw new RpcError(code, message, rpcError.requestMessage, rpcError.responseMessage, rpcError.costTime, rpcError.endpointInfo)
    }
    return this._objectProxy.invoke('returnUIntMethod', _encode(), args.length > 0 ? args[0] : undefined).then(_decode, _error)
  }
  returnFloatMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg, ...args) {
    let _encode = () => {
      let os = new TStream.TOutputStream()
      new (TStream.TBool)(boolArg).write(os, 1)
      new (TStream.TInt32)(intArg).write(os, 2)
      new (TStream.TString)(stringArg).write(os, 3)
      new (TStream.TFloat)(floatValue).write(os, 4)
      new (TStream.TDouble)(doubleValue).write(os, 5)
      new (TStream.TList(TStream.TInt32))(vectorArg).write(os, 6)
      new (TStream.TMap(TStream.TInt32, TStream.TString))(mapArg).write(os, 7)
      new (DemoStruct)(structArg).write(os, 8)
      new (TStream.TInt8)(charArg).write(os, 9)
      new (TStream.TInt16)(shortArg).write(os, 10)
      new (TStream.TInt64)(longlongArg).write(os, 11)
      new (TStream.TUInt8)(ucharArg).write(os, 12)
      new (TStream.TUInt16)(ushortArg).write(os, 13)
      new (TStream.TUInt32)(uintArg).write(os, 14)
      new (TStream.TBytes)(bytesArg).write(os, 15)
      return os.tBuffer.buffer
    }
    let _decode = rpcResult => {
      try {
        let response = { arguments: {} }
        let is = new TStream.TInputStream(new TStream.TBuffer(rpcResult.responseMessage.responsePacket.sBuffer))
        response.costtime = rpcResult.costTime
        response.return = TStream.TFloat.read(is, 0, true)
        response.arguments.outBoolArg = TStream.TBool.read(is, 16, true)
        response.arguments.outIntArg = TStream.TInt32.read(is, 17, true)
        response.arguments.outStringArg = TStream.TString.read(is, 18, true)
        response.arguments.outFloatValue = TStream.TFloat.read(is, 19, true)
        response.arguments.outDoubleValue = TStream.TDouble.read(is, 20, true)
        response.arguments.outVectorArg = TStream.TList(TStream.TInt32).read(is, 21, true)
        response.arguments.outMapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 22, true)
        response.arguments.outStructArg = DemoStruct.read(is, 23, true)
        response.arguments.outCharArg = TStream.TInt8.read(is, 24, true)
        response.arguments.outShortArg = TStream.TInt16.read(is, 25, true)
        response.arguments.outLonglongArg = TStream.TInt64.read(is, 26, true)
        response.arguments.outUcharArg = TStream.TUInt8.read(is, 27, true)
        response.arguments.outUshortArg = TStream.TUInt16.read(is, 28, true)
        response.arguments.outUintArg = TStream.TUInt32.read(is, 29, true)
        response.arguments.outBytesArg = TStream.TBytes.read(is, 30, true)
        return { request: rpcResult.requestMessage, response }
      } catch (error) {
        throw new ClientDecodeError(error.message, rpcResult.requestMessage, rpcResult.responseMessage, rpcResult.costTime, rpcResult.endpointInfo)
      }
    }
    let _error = rpcError => {
      let code = rpcError.responseMessage ? rpcError.responseMessage.code : -999
      let message = rpcError.responseMessage ? rpcError.responseMessage.message : rpcError.message
      throw new RpcError(code, message, rpcError.requestMessage, rpcError.responseMessage, rpcError.costTime, rpcError.endpointInfo)
    }
    return this._objectProxy.invoke('returnFloatMethod', _encode(), args.length > 0 ? args[0] : undefined).then(_decode, _error)
  }
  returnDoubleMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg, ...args) {
    let _encode = () => {
      let os = new TStream.TOutputStream()
      new (TStream.TBool)(boolArg).write(os, 1)
      new (TStream.TInt32)(intArg).write(os, 2)
      new (TStream.TString)(stringArg).write(os, 3)
      new (TStream.TFloat)(floatValue).write(os, 4)
      new (TStream.TDouble)(doubleValue).write(os, 5)
      new (TStream.TList(TStream.TInt32))(vectorArg).write(os, 6)
      new (TStream.TMap(TStream.TInt32, TStream.TString))(mapArg).write(os, 7)
      new (DemoStruct)(structArg).write(os, 8)
      new (TStream.TInt8)(charArg).write(os, 9)
      new (TStream.TInt16)(shortArg).write(os, 10)
      new (TStream.TInt64)(longlongArg).write(os, 11)
      new (TStream.TUInt8)(ucharArg).write(os, 12)
      new (TStream.TUInt16)(ushortArg).write(os, 13)
      new (TStream.TUInt32)(uintArg).write(os, 14)
      new (TStream.TBytes)(bytesArg).write(os, 15)
      return os.tBuffer.buffer
    }
    let _decode = rpcResult => {
      try {
        let response = { arguments: {} }
        let is = new TStream.TInputStream(new TStream.TBuffer(rpcResult.responseMessage.responsePacket.sBuffer))
        response.costtime = rpcResult.costTime
        response.return = TStream.TDouble.read(is, 0, true)
        response.arguments.outBoolArg = TStream.TBool.read(is, 16, true)
        response.arguments.outIntArg = TStream.TInt32.read(is, 17, true)
        response.arguments.outStringArg = TStream.TString.read(is, 18, true)
        response.arguments.outFloatValue = TStream.TFloat.read(is, 19, true)
        response.arguments.outDoubleValue = TStream.TDouble.read(is, 20, true)
        response.arguments.outVectorArg = TStream.TList(TStream.TInt32).read(is, 21, true)
        response.arguments.outMapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 22, true)
        response.arguments.outStructArg = DemoStruct.read(is, 23, true)
        response.arguments.outCharArg = TStream.TInt8.read(is, 24, true)
        response.arguments.outShortArg = TStream.TInt16.read(is, 25, true)
        response.arguments.outLonglongArg = TStream.TInt64.read(is, 26, true)
        response.arguments.outUcharArg = TStream.TUInt8.read(is, 27, true)
        response.arguments.outUshortArg = TStream.TUInt16.read(is, 28, true)
        response.arguments.outUintArg = TStream.TUInt32.read(is, 29, true)
        response.arguments.outBytesArg = TStream.TBytes.read(is, 30, true)
        return { request: rpcResult.requestMessage, response }
      } catch (error) {
        throw new ClientDecodeError(error.message, rpcResult.requestMessage, rpcResult.responseMessage, rpcResult.costTime, rpcResult.endpointInfo)
      }
    }
    let _error = rpcError => {
      let code = rpcError.responseMessage ? rpcError.responseMessage.code : -999
      let message = rpcError.responseMessage ? rpcError.responseMessage.message : rpcError.message
      throw new RpcError(code, message, rpcError.requestMessage, rpcError.responseMessage, rpcError.costTime, rpcError.endpointInfo)
    }
    return this._objectProxy.invoke('returnDoubleMethod', _encode(), args.length > 0 ? args[0] : undefined).then(_decode, _error)
  }
  returnStringMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg, ...args) {
    let _encode = () => {
      let os = new TStream.TOutputStream()
      new (TStream.TBool)(boolArg).write(os, 1)
      new (TStream.TInt32)(intArg).write(os, 2)
      new (TStream.TString)(stringArg).write(os, 3)
      new (TStream.TFloat)(floatValue).write(os, 4)
      new (TStream.TDouble)(doubleValue).write(os, 5)
      new (TStream.TList(TStream.TInt32))(vectorArg).write(os, 6)
      new (TStream.TMap(TStream.TInt32, TStream.TString))(mapArg).write(os, 7)
      new (DemoStruct)(structArg).write(os, 8)
      new (TStream.TInt8)(charArg).write(os, 9)
      new (TStream.TInt16)(shortArg).write(os, 10)
      new (TStream.TInt64)(longlongArg).write(os, 11)
      new (TStream.TUInt8)(ucharArg).write(os, 12)
      new (TStream.TUInt16)(ushortArg).write(os, 13)
      new (TStream.TUInt32)(uintArg).write(os, 14)
      new (TStream.TBytes)(bytesArg).write(os, 15)
      return os.tBuffer.buffer
    }
    let _decode = rpcResult => {
      try {
        let response = { arguments: {} }
        let is = new TStream.TInputStream(new TStream.TBuffer(rpcResult.responseMessage.responsePacket.sBuffer))
        response.costtime = rpcResult.costTime
        response.return = TStream.TString.read(is, 0, true)
        response.arguments.outBoolArg = TStream.TBool.read(is, 16, true)
        response.arguments.outIntArg = TStream.TInt32.read(is, 17, true)
        response.arguments.outStringArg = TStream.TString.read(is, 18, true)
        response.arguments.outFloatValue = TStream.TFloat.read(is, 19, true)
        response.arguments.outDoubleValue = TStream.TDouble.read(is, 20, true)
        response.arguments.outVectorArg = TStream.TList(TStream.TInt32).read(is, 21, true)
        response.arguments.outMapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 22, true)
        response.arguments.outStructArg = DemoStruct.read(is, 23, true)
        response.arguments.outCharArg = TStream.TInt8.read(is, 24, true)
        response.arguments.outShortArg = TStream.TInt16.read(is, 25, true)
        response.arguments.outLonglongArg = TStream.TInt64.read(is, 26, true)
        response.arguments.outUcharArg = TStream.TUInt8.read(is, 27, true)
        response.arguments.outUshortArg = TStream.TUInt16.read(is, 28, true)
        response.arguments.outUintArg = TStream.TUInt32.read(is, 29, true)
        response.arguments.outBytesArg = TStream.TBytes.read(is, 30, true)
        return { request: rpcResult.requestMessage, response }
      } catch (error) {
        throw new ClientDecodeError(error.message, rpcResult.requestMessage, rpcResult.responseMessage, rpcResult.costTime, rpcResult.endpointInfo)
      }
    }
    let _error = rpcError => {
      let code = rpcError.responseMessage ? rpcError.responseMessage.code : -999
      let message = rpcError.responseMessage ? rpcError.responseMessage.message : rpcError.message
      throw new RpcError(code, message, rpcError.requestMessage, rpcError.responseMessage, rpcError.costTime, rpcError.endpointInfo)
    }
    return this._objectProxy.invoke('returnStringMethod', _encode(), args.length > 0 ? args[0] : undefined).then(_decode, _error)
  }
  returnStructMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg, ...args) {
    let _encode = () => {
      let os = new TStream.TOutputStream()
      new (TStream.TBool)(boolArg).write(os, 1)
      new (TStream.TInt32)(intArg).write(os, 2)
      new (TStream.TString)(stringArg).write(os, 3)
      new (TStream.TFloat)(floatValue).write(os, 4)
      new (TStream.TDouble)(doubleValue).write(os, 5)
      new (TStream.TList(TStream.TInt32))(vectorArg).write(os, 6)
      new (TStream.TMap(TStream.TInt32, TStream.TString))(mapArg).write(os, 7)
      new (DemoStruct)(structArg).write(os, 8)
      new (TStream.TInt8)(charArg).write(os, 9)
      new (TStream.TInt16)(shortArg).write(os, 10)
      new (TStream.TInt64)(longlongArg).write(os, 11)
      new (TStream.TUInt8)(ucharArg).write(os, 12)
      new (TStream.TUInt16)(ushortArg).write(os, 13)
      new (TStream.TUInt32)(uintArg).write(os, 14)
      new (TStream.TBytes)(bytesArg).write(os, 15)
      return os.tBuffer.buffer
    }
    let _decode = rpcResult => {
      try {
        let response = { arguments: {} }
        let is = new TStream.TInputStream(new TStream.TBuffer(rpcResult.responseMessage.responsePacket.sBuffer))
        response.costtime = rpcResult.costTime
        response.return = DemoStruct.read(is, 0, true)
        response.arguments.outBoolArg = TStream.TBool.read(is, 16, true)
        response.arguments.outIntArg = TStream.TInt32.read(is, 17, true)
        response.arguments.outStringArg = TStream.TString.read(is, 18, true)
        response.arguments.outFloatValue = TStream.TFloat.read(is, 19, true)
        response.arguments.outDoubleValue = TStream.TDouble.read(is, 20, true)
        response.arguments.outVectorArg = TStream.TList(TStream.TInt32).read(is, 21, true)
        response.arguments.outMapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 22, true)
        response.arguments.outStructArg = DemoStruct.read(is, 23, true)
        response.arguments.outCharArg = TStream.TInt8.read(is, 24, true)
        response.arguments.outShortArg = TStream.TInt16.read(is, 25, true)
        response.arguments.outLonglongArg = TStream.TInt64.read(is, 26, true)
        response.arguments.outUcharArg = TStream.TUInt8.read(is, 27, true)
        response.arguments.outUshortArg = TStream.TUInt16.read(is, 28, true)
        response.arguments.outUintArg = TStream.TUInt32.read(is, 29, true)
        response.arguments.outBytesArg = TStream.TBytes.read(is, 30, true)
        return { request: rpcResult.requestMessage, response }
      } catch (error) {
        throw new ClientDecodeError(error.message, rpcResult.requestMessage, rpcResult.responseMessage, rpcResult.costTime, rpcResult.endpointInfo)
      }
    }
    let _error = rpcError => {
      let code = rpcError.responseMessage ? rpcError.responseMessage.code : -999
      let message = rpcError.responseMessage ? rpcError.responseMessage.message : rpcError.message
      throw new RpcError(code, message, rpcError.requestMessage, rpcError.responseMessage, rpcError.costTime, rpcError.endpointInfo)
    }
    return this._objectProxy.invoke('returnStructMethod', _encode(), args.length > 0 ? args[0] : undefined).then(_decode, _error)
  }
  returnBytesMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg, ...args) {
    let _encode = () => {
      let os = new TStream.TOutputStream()
      new (TStream.TBool)(boolArg).write(os, 1)
      new (TStream.TInt32)(intArg).write(os, 2)
      new (TStream.TString)(stringArg).write(os, 3)
      new (TStream.TFloat)(floatValue).write(os, 4)
      new (TStream.TDouble)(doubleValue).write(os, 5)
      new (TStream.TList(TStream.TInt32))(vectorArg).write(os, 6)
      new (TStream.TMap(TStream.TInt32, TStream.TString))(mapArg).write(os, 7)
      new (DemoStruct)(structArg).write(os, 8)
      new (TStream.TInt8)(charArg).write(os, 9)
      new (TStream.TInt16)(shortArg).write(os, 10)
      new (TStream.TInt64)(longlongArg).write(os, 11)
      new (TStream.TUInt8)(ucharArg).write(os, 12)
      new (TStream.TUInt16)(ushortArg).write(os, 13)
      new (TStream.TUInt32)(uintArg).write(os, 14)
      new (TStream.TBytes)(bytesArg).write(os, 15)
      return os.tBuffer.buffer
    }
    let _decode = rpcResult => {
      try {
        let response = { arguments: {} }
        let is = new TStream.TInputStream(new TStream.TBuffer(rpcResult.responseMessage.responsePacket.sBuffer))
        response.costtime = rpcResult.costTime
        response.return = TStream.TBytes.read(is, 0, true)
        response.arguments.outBoolArg = TStream.TBool.read(is, 16, true)
        response.arguments.outIntArg = TStream.TInt32.read(is, 17, true)
        response.arguments.outStringArg = TStream.TString.read(is, 18, true)
        response.arguments.outFloatValue = TStream.TFloat.read(is, 19, true)
        response.arguments.outDoubleValue = TStream.TDouble.read(is, 20, true)
        response.arguments.outVectorArg = TStream.TList(TStream.TInt32).read(is, 21, true)
        response.arguments.outMapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 22, true)
        response.arguments.outStructArg = DemoStruct.read(is, 23, true)
        response.arguments.outCharArg = TStream.TInt8.read(is, 24, true)
        response.arguments.outShortArg = TStream.TInt16.read(is, 25, true)
        response.arguments.outLonglongArg = TStream.TInt64.read(is, 26, true)
        response.arguments.outUcharArg = TStream.TUInt8.read(is, 27, true)
        response.arguments.outUshortArg = TStream.TUInt16.read(is, 28, true)
        response.arguments.outUintArg = TStream.TUInt32.read(is, 29, true)
        response.arguments.outBytesArg = TStream.TBytes.read(is, 30, true)
        return { request: rpcResult.requestMessage, response }
      } catch (error) {
        throw new ClientDecodeError(error.message, rpcResult.requestMessage, rpcResult.responseMessage, rpcResult.costTime, rpcResult.endpointInfo)
      }
    }
    let _error = rpcError => {
      let code = rpcError.responseMessage ? rpcError.responseMessage.code : -999
      let message = rpcError.responseMessage ? rpcError.responseMessage.message : rpcError.message
      throw new RpcError(code, message, rpcError.requestMessage, rpcError.responseMessage, rpcError.costTime, rpcError.endpointInfo)
    }
    return this._objectProxy.invoke('returnBytesMethod', _encode(), args.length > 0 ? args[0] : undefined).then(_decode, _error)
  }
  returnListMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg, ...args) {
    let _encode = () => {
      let os = new TStream.TOutputStream()
      new (TStream.TBool)(boolArg).write(os, 1)
      new (TStream.TInt32)(intArg).write(os, 2)
      new (TStream.TString)(stringArg).write(os, 3)
      new (TStream.TFloat)(floatValue).write(os, 4)
      new (TStream.TDouble)(doubleValue).write(os, 5)
      new (TStream.TList(TStream.TInt32))(vectorArg).write(os, 6)
      new (TStream.TMap(TStream.TInt32, TStream.TString))(mapArg).write(os, 7)
      new (DemoStruct)(structArg).write(os, 8)
      new (TStream.TInt8)(charArg).write(os, 9)
      new (TStream.TInt16)(shortArg).write(os, 10)
      new (TStream.TInt64)(longlongArg).write(os, 11)
      new (TStream.TUInt8)(ucharArg).write(os, 12)
      new (TStream.TUInt16)(ushortArg).write(os, 13)
      new (TStream.TUInt32)(uintArg).write(os, 14)
      new (TStream.TBytes)(bytesArg).write(os, 15)
      return os.tBuffer.buffer
    }
    let _decode = rpcResult => {
      try {
        let response = { arguments: {} }
        let is = new TStream.TInputStream(new TStream.TBuffer(rpcResult.responseMessage.responsePacket.sBuffer))
        response.costtime = rpcResult.costTime
        response.return = TStream.TList(TStream.TUInt8).read(is, 0, true)
        response.arguments.outBoolArg = TStream.TBool.read(is, 16, true)
        response.arguments.outIntArg = TStream.TInt32.read(is, 17, true)
        response.arguments.outStringArg = TStream.TString.read(is, 18, true)
        response.arguments.outFloatValue = TStream.TFloat.read(is, 19, true)
        response.arguments.outDoubleValue = TStream.TDouble.read(is, 20, true)
        response.arguments.outVectorArg = TStream.TList(TStream.TInt32).read(is, 21, true)
        response.arguments.outMapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 22, true)
        response.arguments.outStructArg = DemoStruct.read(is, 23, true)
        response.arguments.outCharArg = TStream.TInt8.read(is, 24, true)
        response.arguments.outShortArg = TStream.TInt16.read(is, 25, true)
        response.arguments.outLonglongArg = TStream.TInt64.read(is, 26, true)
        response.arguments.outUcharArg = TStream.TUInt8.read(is, 27, true)
        response.arguments.outUshortArg = TStream.TUInt16.read(is, 28, true)
        response.arguments.outUintArg = TStream.TUInt32.read(is, 29, true)
        response.arguments.outBytesArg = TStream.TBytes.read(is, 30, true)
        return { request: rpcResult.requestMessage, response }
      } catch (error) {
        throw new ClientDecodeError(error.message, rpcResult.requestMessage, rpcResult.responseMessage, rpcResult.costTime, rpcResult.endpointInfo)
      }
    }
    let _error = rpcError => {
      let code = rpcError.responseMessage ? rpcError.responseMessage.code : -999
      let message = rpcError.responseMessage ? rpcError.responseMessage.message : rpcError.message
      throw new RpcError(code, message, rpcError.requestMessage, rpcError.responseMessage, rpcError.costTime, rpcError.endpointInfo)
    }
    return this._objectProxy.invoke('returnListMethod', _encode(), args.length > 0 ? args[0] : undefined).then(_decode, _error)
  }
  returnMapMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg, ...args) {
    let _encode = () => {
      let os = new TStream.TOutputStream()
      new (TStream.TBool)(boolArg).write(os, 1)
      new (TStream.TInt32)(intArg).write(os, 2)
      new (TStream.TString)(stringArg).write(os, 3)
      new (TStream.TFloat)(floatValue).write(os, 4)
      new (TStream.TDouble)(doubleValue).write(os, 5)
      new (TStream.TList(TStream.TInt32))(vectorArg).write(os, 6)
      new (TStream.TMap(TStream.TInt32, TStream.TString))(mapArg).write(os, 7)
      new (DemoStruct)(structArg).write(os, 8)
      new (TStream.TInt8)(charArg).write(os, 9)
      new (TStream.TInt16)(shortArg).write(os, 10)
      new (TStream.TInt64)(longlongArg).write(os, 11)
      new (TStream.TUInt8)(ucharArg).write(os, 12)
      new (TStream.TUInt16)(ushortArg).write(os, 13)
      new (TStream.TUInt32)(uintArg).write(os, 14)
      new (TStream.TBytes)(bytesArg).write(os, 15)
      return os.tBuffer.buffer
    }
    let _decode = rpcResult => {
      try {
        let response = { arguments: {} }
        let is = new TStream.TInputStream(new TStream.TBuffer(rpcResult.responseMessage.responsePacket.sBuffer))
        response.costtime = rpcResult.costTime
        response.return = TStream.TMap(TStream.TString, TStream.TInt16).read(is, 0, true)
        response.arguments.outBoolArg = TStream.TBool.read(is, 16, true)
        response.arguments.outIntArg = TStream.TInt32.read(is, 17, true)
        response.arguments.outStringArg = TStream.TString.read(is, 18, true)
        response.arguments.outFloatValue = TStream.TFloat.read(is, 19, true)
        response.arguments.outDoubleValue = TStream.TDouble.read(is, 20, true)
        response.arguments.outVectorArg = TStream.TList(TStream.TInt32).read(is, 21, true)
        response.arguments.outMapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 22, true)
        response.arguments.outStructArg = DemoStruct.read(is, 23, true)
        response.arguments.outCharArg = TStream.TInt8.read(is, 24, true)
        response.arguments.outShortArg = TStream.TInt16.read(is, 25, true)
        response.arguments.outLonglongArg = TStream.TInt64.read(is, 26, true)
        response.arguments.outUcharArg = TStream.TUInt8.read(is, 27, true)
        response.arguments.outUshortArg = TStream.TUInt16.read(is, 28, true)
        response.arguments.outUintArg = TStream.TUInt32.read(is, 29, true)
        response.arguments.outBytesArg = TStream.TBytes.read(is, 30, true)
        return { request: rpcResult.requestMessage, response }
      } catch (error) {
        throw new ClientDecodeError(error.message, rpcResult.requestMessage, rpcResult.responseMessage, rpcResult.costTime, rpcResult.endpointInfo)
      }
    }
    let _error = rpcError => {
      let code = rpcError.responseMessage ? rpcError.responseMessage.code : -999
      let message = rpcError.responseMessage ? rpcError.responseMessage.message : rpcError.message
      throw new RpcError(code, message, rpcError.requestMessage, rpcError.responseMessage, rpcError.costTime, rpcError.endpointInfo)
    }
    return this._objectProxy.invoke('returnMapMethod', _encode(), args.length > 0 ? args[0] : undefined).then(_decode, _error)
  }
  complicate (inArg, ...args) {
    let _encode = () => {
      let os = new TStream.TOutputStream()
      new (TStream.TMap(TStream.TMap(TStream.TInt32, DemoStruct), TStream.TList(TStream.TInt32)))(inArg).write(os, 1)
      return os.tBuffer.buffer
    }
    let _decode = rpcResult => {
      try {
        let response = { arguments: {} }
        let is = new TStream.TInputStream(new TStream.TBuffer(rpcResult.responseMessage.responsePacket.sBuffer))
        response.costtime = rpcResult.costTime
        response.return = TStream.TMap(TStream.TList(DemoStruct), TStream.TMap(TStream.TString, TStream.TList(TStream.TInt32))).read(is, 0, true)
        response.arguments.outArg = TStream.TMap(TStream.TMap(TStream.TList(TStream.TString), DemoStruct), TStream.TMap(TStream.TString, TStream.TList(TStream.TMap(TStream.TString, TStream.TInt32)))).read(is, 2, true)
        return { request: rpcResult.requestMessage, response }
      } catch (error) {
        throw new ClientDecodeError(error.message, rpcResult.requestMessage, rpcResult.responseMessage, rpcResult.costTime, rpcResult.endpointInfo)
      }
    }
    let _error = rpcError => {
      let code = rpcError.responseMessage ? rpcError.responseMessage.code : -999
      let message = rpcError.responseMessage ? rpcError.responseMessage.message : rpcError.message
      throw new RpcError(code, message, rpcError.requestMessage, rpcError.responseMessage, rpcError.costTime, rpcError.endpointInfo)
    }
    return this._objectProxy.invoke('complicate', _encode(), args.length > 0 ? args[0] : undefined).then(_decode, _error)
  }
}

class DemoFServant {
  doRequest (requestMessage) {
    let { requestId, funcName, appBuffer } = requestMessage
    let is = new TStream.TInputStream(new TStream.TBuffer(appBuffer))
    let os = new TStream.TOutputStream()
    switch (funcName) {
      case 'returnBoolMethod': {
        let boolArg = TStream.TBool.read(is, 1, true)
        let intArg = TStream.TInt32.read(is, 2, true)
        let stringArg = TStream.TString.read(is, 3, true)
        let floatValue = TStream.TFloat.read(is, 4, true)
        let doubleValue = TStream.TDouble.read(is, 5, true)
        let vectorArg = TStream.TList(TStream.TInt32).read(is, 6, true)
        let mapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 7, true)
        let structArg = DemoStruct.read(is, 8, true)
        let charArg = TStream.TInt8.read(is, 9, true)
        let shortArg = TStream.TInt16.read(is, 10, true)
        let longlongArg = TStream.TInt64.read(is, 11, true)
        let ucharArg = TStream.TUInt8.read(is, 12, true)
        let ushortArg = TStream.TUInt16.read(is, 13, true)
        let uintArg = TStream.TUInt32.read(is, 14, true)
        let bytesArg = TStream.TBytes.read(is, 15, true)
        return this.returnBoolMethod(boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg).then(ret => {
          new (TStream.TBool)(ret.return).write(os, 0)
          new (TStream.TBool)(ret.outBoolArg).write(os, 16)
          new (TStream.TInt32)(ret.outIntArg).write(os, 17)
          new (TStream.TString)(ret.outStringArg).write(os, 18)
          new (TStream.TFloat)(ret.outFloatValue).write(os, 19)
          new (TStream.TDouble)(ret.outDoubleValue).write(os, 20)
          new (TStream.TList(TStream.TInt32))(ret.outVectorArg).write(os, 21)
          new (TStream.TMap(TStream.TInt32, TStream.TString))(ret.outMapArg).write(os, 22)
          new (DemoStruct)(ret.outStructArg).write(os, 23)
          new (TStream.TInt8)(ret.outCharArg).write(os, 24)
          new (TStream.TInt16)(ret.outShortArg).write(os, 25)
          new (TStream.TInt64)(ret.outLonglongArg).write(os, 26)
          new (TStream.TUInt8)(ret.outUcharArg).write(os, 27)
          new (TStream.TUInt16)(ret.outUshortArg).write(os, 28)
          new (TStream.TUInt32)(ret.outUintArg).write(os, 29)
          new (TStream.TBytes)(ret.outBytesArg).write(os, 30)
          let responseMessage = {
            requestId,
            code: 0,
            message: 'success',
            responsePacket: {
              sBuffer: os.tBuffer.buffer
            }
          }
          return Promise.resolve({ responseMessage })
        }).catch(error => {
          let code = error.code ? error.code : -999
          let message = error.message || 'unknown error'
          let rpcError = new RpcError(code, message, requestMessage, null, 0, null)
          return Promise.reject(rpcError)
        })
      }
      case 'returnCharMethod': {
        let boolArg = TStream.TBool.read(is, 1, true)
        let intArg = TStream.TInt32.read(is, 2, true)
        let stringArg = TStream.TString.read(is, 3, true)
        let floatValue = TStream.TFloat.read(is, 4, true)
        let doubleValue = TStream.TDouble.read(is, 5, true)
        let vectorArg = TStream.TList(TStream.TInt32).read(is, 6, true)
        let mapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 7, true)
        let structArg = DemoStruct.read(is, 8, true)
        let charArg = TStream.TInt8.read(is, 9, true)
        let shortArg = TStream.TInt16.read(is, 10, true)
        let longlongArg = TStream.TInt64.read(is, 11, true)
        let ucharArg = TStream.TUInt8.read(is, 12, true)
        let ushortArg = TStream.TUInt16.read(is, 13, true)
        let uintArg = TStream.TUInt32.read(is, 14, true)
        let bytesArg = TStream.TBytes.read(is, 15, true)
        return this.returnCharMethod(boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg).then(ret => {
          new (TStream.TInt8)(ret.return).write(os, 0)
          new (TStream.TBool)(ret.outBoolArg).write(os, 16)
          new (TStream.TInt32)(ret.outIntArg).write(os, 17)
          new (TStream.TString)(ret.outStringArg).write(os, 18)
          new (TStream.TFloat)(ret.outFloatValue).write(os, 19)
          new (TStream.TDouble)(ret.outDoubleValue).write(os, 20)
          new (TStream.TList(TStream.TInt32))(ret.outVectorArg).write(os, 21)
          new (TStream.TMap(TStream.TInt32, TStream.TString))(ret.outMapArg).write(os, 22)
          new (DemoStruct)(ret.outStructArg).write(os, 23)
          new (TStream.TInt8)(ret.outCharArg).write(os, 24)
          new (TStream.TInt16)(ret.outShortArg).write(os, 25)
          new (TStream.TInt64)(ret.outLonglongArg).write(os, 26)
          new (TStream.TUInt8)(ret.outUcharArg).write(os, 27)
          new (TStream.TUInt16)(ret.outUshortArg).write(os, 28)
          new (TStream.TUInt32)(ret.outUintArg).write(os, 29)
          new (TStream.TBytes)(ret.outBytesArg).write(os, 30)
          let responseMessage = {
            requestId,
            code: 0,
            message: 'success',
            responsePacket: {
              sBuffer: os.tBuffer.buffer
            }
          }
          return Promise.resolve({ responseMessage })
        }).catch(error => {
          let code = error.code ? error.code : -999
          let message = error.message || 'unknown error'
          let rpcError = new RpcError(code, message, requestMessage, null, 0, null)
          return Promise.reject(rpcError)
        })
      }
      case 'returnShortMethod': {
        let boolArg = TStream.TBool.read(is, 1, true)
        let intArg = TStream.TInt32.read(is, 2, true)
        let stringArg = TStream.TString.read(is, 3, true)
        let floatValue = TStream.TFloat.read(is, 4, true)
        let doubleValue = TStream.TDouble.read(is, 5, true)
        let vectorArg = TStream.TList(TStream.TInt32).read(is, 6, true)
        let mapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 7, true)
        let structArg = DemoStruct.read(is, 8, true)
        let charArg = TStream.TInt8.read(is, 9, true)
        let shortArg = TStream.TInt16.read(is, 10, true)
        let longlongArg = TStream.TInt64.read(is, 11, true)
        let ucharArg = TStream.TUInt8.read(is, 12, true)
        let ushortArg = TStream.TUInt16.read(is, 13, true)
        let uintArg = TStream.TUInt32.read(is, 14, true)
        let bytesArg = TStream.TBytes.read(is, 15, true)
        return this.returnShortMethod(boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg).then(ret => {
          new (TStream.TInt16)(ret.return).write(os, 0)
          new (TStream.TBool)(ret.outBoolArg).write(os, 16)
          new (TStream.TInt32)(ret.outIntArg).write(os, 17)
          new (TStream.TString)(ret.outStringArg).write(os, 18)
          new (TStream.TFloat)(ret.outFloatValue).write(os, 19)
          new (TStream.TDouble)(ret.outDoubleValue).write(os, 20)
          new (TStream.TList(TStream.TInt32))(ret.outVectorArg).write(os, 21)
          new (TStream.TMap(TStream.TInt32, TStream.TString))(ret.outMapArg).write(os, 22)
          new (DemoStruct)(ret.outStructArg).write(os, 23)
          new (TStream.TInt8)(ret.outCharArg).write(os, 24)
          new (TStream.TInt16)(ret.outShortArg).write(os, 25)
          new (TStream.TInt64)(ret.outLonglongArg).write(os, 26)
          new (TStream.TUInt8)(ret.outUcharArg).write(os, 27)
          new (TStream.TUInt16)(ret.outUshortArg).write(os, 28)
          new (TStream.TUInt32)(ret.outUintArg).write(os, 29)
          new (TStream.TBytes)(ret.outBytesArg).write(os, 30)
          let responseMessage = {
            requestId,
            code: 0,
            message: 'success',
            responsePacket: {
              sBuffer: os.tBuffer.buffer
            }
          }
          return Promise.resolve({ responseMessage })
        }).catch(error => {
          let code = error.code ? error.code : -999
          let message = error.message || 'unknown error'
          let rpcError = new RpcError(code, message, requestMessage, null, 0, null)
          return Promise.reject(rpcError)
        })
      }
      case 'returnIntMethod': {
        let boolArg = TStream.TBool.read(is, 1, true)
        let intArg = TStream.TInt32.read(is, 2, true)
        let stringArg = TStream.TString.read(is, 3, true)
        let floatValue = TStream.TFloat.read(is, 4, true)
        let doubleValue = TStream.TDouble.read(is, 5, true)
        let vectorArg = TStream.TList(TStream.TInt32).read(is, 6, true)
        let mapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 7, true)
        let structArg = DemoStruct.read(is, 8, true)
        let charArg = TStream.TInt8.read(is, 9, true)
        let shortArg = TStream.TInt16.read(is, 10, true)
        let longlongArg = TStream.TInt64.read(is, 11, true)
        let ucharArg = TStream.TUInt8.read(is, 12, true)
        let ushortArg = TStream.TUInt16.read(is, 13, true)
        let uintArg = TStream.TUInt32.read(is, 14, true)
        let bytesArg = TStream.TBytes.read(is, 15, true)
        return this.returnIntMethod(boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg).then(ret => {
          new (TStream.TInt32)(ret.return).write(os, 0)
          new (TStream.TBool)(ret.outBoolArg).write(os, 16)
          new (TStream.TInt32)(ret.outIntArg).write(os, 17)
          new (TStream.TString)(ret.outStringArg).write(os, 18)
          new (TStream.TFloat)(ret.outFloatValue).write(os, 19)
          new (TStream.TDouble)(ret.outDoubleValue).write(os, 20)
          new (TStream.TList(TStream.TInt32))(ret.outVectorArg).write(os, 21)
          new (TStream.TMap(TStream.TInt32, TStream.TString))(ret.outMapArg).write(os, 22)
          new (DemoStruct)(ret.outStructArg).write(os, 23)
          new (TStream.TInt8)(ret.outCharArg).write(os, 24)
          new (TStream.TInt16)(ret.outShortArg).write(os, 25)
          new (TStream.TInt64)(ret.outLonglongArg).write(os, 26)
          new (TStream.TUInt8)(ret.outUcharArg).write(os, 27)
          new (TStream.TUInt16)(ret.outUshortArg).write(os, 28)
          new (TStream.TUInt32)(ret.outUintArg).write(os, 29)
          new (TStream.TBytes)(ret.outBytesArg).write(os, 30)
          let responseMessage = {
            requestId,
            code: 0,
            message: 'success',
            responsePacket: {
              sBuffer: os.tBuffer.buffer
            }
          }
          return Promise.resolve({ responseMessage })
        }).catch(error => {
          let code = error.code ? error.code : -999
          let message = error.message || 'unknown error'
          let rpcError = new RpcError(code, message, requestMessage, null, 0, null)
          return Promise.reject(rpcError)
        })
      }
      case 'returnLonglongMethod': {
        let boolArg = TStream.TBool.read(is, 1, true)
        let intArg = TStream.TInt32.read(is, 2, true)
        let stringArg = TStream.TString.read(is, 3, true)
        let floatValue = TStream.TFloat.read(is, 4, true)
        let doubleValue = TStream.TDouble.read(is, 5, true)
        let vectorArg = TStream.TList(TStream.TInt32).read(is, 6, true)
        let mapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 7, true)
        let structArg = DemoStruct.read(is, 8, true)
        let charArg = TStream.TInt8.read(is, 9, true)
        let shortArg = TStream.TInt16.read(is, 10, true)
        let longlongArg = TStream.TInt64.read(is, 11, true)
        let ucharArg = TStream.TUInt8.read(is, 12, true)
        let ushortArg = TStream.TUInt16.read(is, 13, true)
        let uintArg = TStream.TUInt32.read(is, 14, true)
        let bytesArg = TStream.TBytes.read(is, 15, true)
        return this.returnLonglongMethod(boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg).then(ret => {
          new (TStream.TInt64)(ret.return).write(os, 0)
          new (TStream.TBool)(ret.outBoolArg).write(os, 16)
          new (TStream.TInt32)(ret.outIntArg).write(os, 17)
          new (TStream.TString)(ret.outStringArg).write(os, 18)
          new (TStream.TFloat)(ret.outFloatValue).write(os, 19)
          new (TStream.TDouble)(ret.outDoubleValue).write(os, 20)
          new (TStream.TList(TStream.TInt32))(ret.outVectorArg).write(os, 21)
          new (TStream.TMap(TStream.TInt32, TStream.TString))(ret.outMapArg).write(os, 22)
          new (DemoStruct)(ret.outStructArg).write(os, 23)
          new (TStream.TInt8)(ret.outCharArg).write(os, 24)
          new (TStream.TInt16)(ret.outShortArg).write(os, 25)
          new (TStream.TInt64)(ret.outLonglongArg).write(os, 26)
          new (TStream.TUInt8)(ret.outUcharArg).write(os, 27)
          new (TStream.TUInt16)(ret.outUshortArg).write(os, 28)
          new (TStream.TUInt32)(ret.outUintArg).write(os, 29)
          new (TStream.TBytes)(ret.outBytesArg).write(os, 30)
          let responseMessage = {
            requestId,
            code: 0,
            message: 'success',
            responsePacket: {
              sBuffer: os.tBuffer.buffer
            }
          }
          return Promise.resolve({ responseMessage })
        }).catch(error => {
          let code = error.code ? error.code : -999
          let message = error.message || 'unknown error'
          let rpcError = new RpcError(code, message, requestMessage, null, 0, null)
          return Promise.reject(rpcError)
        })
      }
      case 'returnUCharMethod': {
        let boolArg = TStream.TBool.read(is, 1, true)
        let intArg = TStream.TInt32.read(is, 2, true)
        let stringArg = TStream.TString.read(is, 3, true)
        let floatValue = TStream.TFloat.read(is, 4, true)
        let doubleValue = TStream.TDouble.read(is, 5, true)
        let vectorArg = TStream.TList(TStream.TInt32).read(is, 6, true)
        let mapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 7, true)
        let structArg = DemoStruct.read(is, 8, true)
        let charArg = TStream.TInt8.read(is, 9, true)
        let shortArg = TStream.TInt16.read(is, 10, true)
        let longlongArg = TStream.TInt64.read(is, 11, true)
        let ucharArg = TStream.TUInt8.read(is, 12, true)
        let ushortArg = TStream.TUInt16.read(is, 13, true)
        let uintArg = TStream.TUInt32.read(is, 14, true)
        let bytesArg = TStream.TBytes.read(is, 15, true)
        return this.returnUCharMethod(boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg).then(ret => {
          new (TStream.TUInt8)(ret.return).write(os, 0)
          new (TStream.TBool)(ret.outBoolArg).write(os, 16)
          new (TStream.TInt32)(ret.outIntArg).write(os, 17)
          new (TStream.TString)(ret.outStringArg).write(os, 18)
          new (TStream.TFloat)(ret.outFloatValue).write(os, 19)
          new (TStream.TDouble)(ret.outDoubleValue).write(os, 20)
          new (TStream.TList(TStream.TInt32))(ret.outVectorArg).write(os, 21)
          new (TStream.TMap(TStream.TInt32, TStream.TString))(ret.outMapArg).write(os, 22)
          new (DemoStruct)(ret.outStructArg).write(os, 23)
          new (TStream.TInt8)(ret.outCharArg).write(os, 24)
          new (TStream.TInt16)(ret.outShortArg).write(os, 25)
          new (TStream.TInt64)(ret.outLonglongArg).write(os, 26)
          new (TStream.TUInt8)(ret.outUcharArg).write(os, 27)
          new (TStream.TUInt16)(ret.outUshortArg).write(os, 28)
          new (TStream.TUInt32)(ret.outUintArg).write(os, 29)
          new (TStream.TBytes)(ret.outBytesArg).write(os, 30)
          let responseMessage = {
            requestId,
            code: 0,
            message: 'success',
            responsePacket: {
              sBuffer: os.tBuffer.buffer
            }
          }
          return Promise.resolve({ responseMessage })
        }).catch(error => {
          let code = error.code ? error.code : -999
          let message = error.message || 'unknown error'
          let rpcError = new RpcError(code, message, requestMessage, null, 0, null)
          return Promise.reject(rpcError)
        })
      }
      case 'returnUShortMethod': {
        let boolArg = TStream.TBool.read(is, 1, true)
        let intArg = TStream.TInt32.read(is, 2, true)
        let stringArg = TStream.TString.read(is, 3, true)
        let floatValue = TStream.TFloat.read(is, 4, true)
        let doubleValue = TStream.TDouble.read(is, 5, true)
        let vectorArg = TStream.TList(TStream.TInt32).read(is, 6, true)
        let mapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 7, true)
        let structArg = DemoStruct.read(is, 8, true)
        let charArg = TStream.TInt8.read(is, 9, true)
        let shortArg = TStream.TInt16.read(is, 10, true)
        let longlongArg = TStream.TInt64.read(is, 11, true)
        let ucharArg = TStream.TUInt8.read(is, 12, true)
        let ushortArg = TStream.TUInt16.read(is, 13, true)
        let uintArg = TStream.TUInt32.read(is, 14, true)
        let bytesArg = TStream.TBytes.read(is, 15, true)
        return this.returnUShortMethod(boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg).then(ret => {
          new (TStream.TUInt16)(ret.return).write(os, 0)
          new (TStream.TBool)(ret.outBoolArg).write(os, 16)
          new (TStream.TInt32)(ret.outIntArg).write(os, 17)
          new (TStream.TString)(ret.outStringArg).write(os, 18)
          new (TStream.TFloat)(ret.outFloatValue).write(os, 19)
          new (TStream.TDouble)(ret.outDoubleValue).write(os, 20)
          new (TStream.TList(TStream.TInt32))(ret.outVectorArg).write(os, 21)
          new (TStream.TMap(TStream.TInt32, TStream.TString))(ret.outMapArg).write(os, 22)
          new (DemoStruct)(ret.outStructArg).write(os, 23)
          new (TStream.TInt8)(ret.outCharArg).write(os, 24)
          new (TStream.TInt16)(ret.outShortArg).write(os, 25)
          new (TStream.TInt64)(ret.outLonglongArg).write(os, 26)
          new (TStream.TUInt8)(ret.outUcharArg).write(os, 27)
          new (TStream.TUInt16)(ret.outUshortArg).write(os, 28)
          new (TStream.TUInt32)(ret.outUintArg).write(os, 29)
          new (TStream.TBytes)(ret.outBytesArg).write(os, 30)
          let responseMessage = {
            requestId,
            code: 0,
            message: 'success',
            responsePacket: {
              sBuffer: os.tBuffer.buffer
            }
          }
          return Promise.resolve({ responseMessage })
        }).catch(error => {
          let code = error.code ? error.code : -999
          let message = error.message || 'unknown error'
          let rpcError = new RpcError(code, message, requestMessage, null, 0, null)
          return Promise.reject(rpcError)
        })
      }
      case 'returnUIntMethod': {
        let boolArg = TStream.TBool.read(is, 1, true)
        let intArg = TStream.TInt32.read(is, 2, true)
        let stringArg = TStream.TString.read(is, 3, true)
        let floatValue = TStream.TFloat.read(is, 4, true)
        let doubleValue = TStream.TDouble.read(is, 5, true)
        let vectorArg = TStream.TList(TStream.TInt32).read(is, 6, true)
        let mapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 7, true)
        let structArg = DemoStruct.read(is, 8, true)
        let charArg = TStream.TInt8.read(is, 9, true)
        let shortArg = TStream.TInt16.read(is, 10, true)
        let longlongArg = TStream.TInt64.read(is, 11, true)
        let ucharArg = TStream.TUInt8.read(is, 12, true)
        let ushortArg = TStream.TUInt16.read(is, 13, true)
        let uintArg = TStream.TUInt32.read(is, 14, true)
        let bytesArg = TStream.TBytes.read(is, 15, true)
        return this.returnUIntMethod(boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg).then(ret => {
          new (TStream.TUInt32)(ret.return).write(os, 0)
          new (TStream.TBool)(ret.outBoolArg).write(os, 16)
          new (TStream.TInt32)(ret.outIntArg).write(os, 17)
          new (TStream.TString)(ret.outStringArg).write(os, 18)
          new (TStream.TFloat)(ret.outFloatValue).write(os, 19)
          new (TStream.TDouble)(ret.outDoubleValue).write(os, 20)
          new (TStream.TList(TStream.TInt32))(ret.outVectorArg).write(os, 21)
          new (TStream.TMap(TStream.TInt32, TStream.TString))(ret.outMapArg).write(os, 22)
          new (DemoStruct)(ret.outStructArg).write(os, 23)
          new (TStream.TInt8)(ret.outCharArg).write(os, 24)
          new (TStream.TInt16)(ret.outShortArg).write(os, 25)
          new (TStream.TInt64)(ret.outLonglongArg).write(os, 26)
          new (TStream.TUInt8)(ret.outUcharArg).write(os, 27)
          new (TStream.TUInt16)(ret.outUshortArg).write(os, 28)
          new (TStream.TUInt32)(ret.outUintArg).write(os, 29)
          new (TStream.TBytes)(ret.outBytesArg).write(os, 30)
          let responseMessage = {
            requestId,
            code: 0,
            message: 'success',
            responsePacket: {
              sBuffer: os.tBuffer.buffer
            }
          }
          return Promise.resolve({ responseMessage })
        }).catch(error => {
          let code = error.code ? error.code : -999
          let message = error.message || 'unknown error'
          let rpcError = new RpcError(code, message, requestMessage, null, 0, null)
          return Promise.reject(rpcError)
        })
      }
      case 'returnFloatMethod': {
        let boolArg = TStream.TBool.read(is, 1, true)
        let intArg = TStream.TInt32.read(is, 2, true)
        let stringArg = TStream.TString.read(is, 3, true)
        let floatValue = TStream.TFloat.read(is, 4, true)
        let doubleValue = TStream.TDouble.read(is, 5, true)
        let vectorArg = TStream.TList(TStream.TInt32).read(is, 6, true)
        let mapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 7, true)
        let structArg = DemoStruct.read(is, 8, true)
        let charArg = TStream.TInt8.read(is, 9, true)
        let shortArg = TStream.TInt16.read(is, 10, true)
        let longlongArg = TStream.TInt64.read(is, 11, true)
        let ucharArg = TStream.TUInt8.read(is, 12, true)
        let ushortArg = TStream.TUInt16.read(is, 13, true)
        let uintArg = TStream.TUInt32.read(is, 14, true)
        let bytesArg = TStream.TBytes.read(is, 15, true)
        return this.returnFloatMethod(boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg).then(ret => {
          new (TStream.TFloat)(ret.return).write(os, 0)
          new (TStream.TBool)(ret.outBoolArg).write(os, 16)
          new (TStream.TInt32)(ret.outIntArg).write(os, 17)
          new (TStream.TString)(ret.outStringArg).write(os, 18)
          new (TStream.TFloat)(ret.outFloatValue).write(os, 19)
          new (TStream.TDouble)(ret.outDoubleValue).write(os, 20)
          new (TStream.TList(TStream.TInt32))(ret.outVectorArg).write(os, 21)
          new (TStream.TMap(TStream.TInt32, TStream.TString))(ret.outMapArg).write(os, 22)
          new (DemoStruct)(ret.outStructArg).write(os, 23)
          new (TStream.TInt8)(ret.outCharArg).write(os, 24)
          new (TStream.TInt16)(ret.outShortArg).write(os, 25)
          new (TStream.TInt64)(ret.outLonglongArg).write(os, 26)
          new (TStream.TUInt8)(ret.outUcharArg).write(os, 27)
          new (TStream.TUInt16)(ret.outUshortArg).write(os, 28)
          new (TStream.TUInt32)(ret.outUintArg).write(os, 29)
          new (TStream.TBytes)(ret.outBytesArg).write(os, 30)
          let responseMessage = {
            requestId,
            code: 0,
            message: 'success',
            responsePacket: {
              sBuffer: os.tBuffer.buffer
            }
          }
          return Promise.resolve({ responseMessage })
        }).catch(error => {
          let code = error.code ? error.code : -999
          let message = error.message || 'unknown error'
          let rpcError = new RpcError(code, message, requestMessage, null, 0, null)
          return Promise.reject(rpcError)
        })
      }
      case 'returnDoubleMethod': {
        let boolArg = TStream.TBool.read(is, 1, true)
        let intArg = TStream.TInt32.read(is, 2, true)
        let stringArg = TStream.TString.read(is, 3, true)
        let floatValue = TStream.TFloat.read(is, 4, true)
        let doubleValue = TStream.TDouble.read(is, 5, true)
        let vectorArg = TStream.TList(TStream.TInt32).read(is, 6, true)
        let mapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 7, true)
        let structArg = DemoStruct.read(is, 8, true)
        let charArg = TStream.TInt8.read(is, 9, true)
        let shortArg = TStream.TInt16.read(is, 10, true)
        let longlongArg = TStream.TInt64.read(is, 11, true)
        let ucharArg = TStream.TUInt8.read(is, 12, true)
        let ushortArg = TStream.TUInt16.read(is, 13, true)
        let uintArg = TStream.TUInt32.read(is, 14, true)
        let bytesArg = TStream.TBytes.read(is, 15, true)
        return this.returnDoubleMethod(boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg).then(ret => {
          new (TStream.TDouble)(ret.return).write(os, 0)
          new (TStream.TBool)(ret.outBoolArg).write(os, 16)
          new (TStream.TInt32)(ret.outIntArg).write(os, 17)
          new (TStream.TString)(ret.outStringArg).write(os, 18)
          new (TStream.TFloat)(ret.outFloatValue).write(os, 19)
          new (TStream.TDouble)(ret.outDoubleValue).write(os, 20)
          new (TStream.TList(TStream.TInt32))(ret.outVectorArg).write(os, 21)
          new (TStream.TMap(TStream.TInt32, TStream.TString))(ret.outMapArg).write(os, 22)
          new (DemoStruct)(ret.outStructArg).write(os, 23)
          new (TStream.TInt8)(ret.outCharArg).write(os, 24)
          new (TStream.TInt16)(ret.outShortArg).write(os, 25)
          new (TStream.TInt64)(ret.outLonglongArg).write(os, 26)
          new (TStream.TUInt8)(ret.outUcharArg).write(os, 27)
          new (TStream.TUInt16)(ret.outUshortArg).write(os, 28)
          new (TStream.TUInt32)(ret.outUintArg).write(os, 29)
          new (TStream.TBytes)(ret.outBytesArg).write(os, 30)
          let responseMessage = {
            requestId,
            code: 0,
            message: 'success',
            responsePacket: {
              sBuffer: os.tBuffer.buffer
            }
          }
          return Promise.resolve({ responseMessage })
        }).catch(error => {
          let code = error.code ? error.code : -999
          let message = error.message || 'unknown error'
          let rpcError = new RpcError(code, message, requestMessage, null, 0, null)
          return Promise.reject(rpcError)
        })
      }
      case 'returnStringMethod': {
        let boolArg = TStream.TBool.read(is, 1, true)
        let intArg = TStream.TInt32.read(is, 2, true)
        let stringArg = TStream.TString.read(is, 3, true)
        let floatValue = TStream.TFloat.read(is, 4, true)
        let doubleValue = TStream.TDouble.read(is, 5, true)
        let vectorArg = TStream.TList(TStream.TInt32).read(is, 6, true)
        let mapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 7, true)
        let structArg = DemoStruct.read(is, 8, true)
        let charArg = TStream.TInt8.read(is, 9, true)
        let shortArg = TStream.TInt16.read(is, 10, true)
        let longlongArg = TStream.TInt64.read(is, 11, true)
        let ucharArg = TStream.TUInt8.read(is, 12, true)
        let ushortArg = TStream.TUInt16.read(is, 13, true)
        let uintArg = TStream.TUInt32.read(is, 14, true)
        let bytesArg = TStream.TBytes.read(is, 15, true)
        return this.returnStringMethod(boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg).then(ret => {
          new (TStream.TString)(ret.return).write(os, 0)
          new (TStream.TBool)(ret.outBoolArg).write(os, 16)
          new (TStream.TInt32)(ret.outIntArg).write(os, 17)
          new (TStream.TString)(ret.outStringArg).write(os, 18)
          new (TStream.TFloat)(ret.outFloatValue).write(os, 19)
          new (TStream.TDouble)(ret.outDoubleValue).write(os, 20)
          new (TStream.TList(TStream.TInt32))(ret.outVectorArg).write(os, 21)
          new (TStream.TMap(TStream.TInt32, TStream.TString))(ret.outMapArg).write(os, 22)
          new (DemoStruct)(ret.outStructArg).write(os, 23)
          new (TStream.TInt8)(ret.outCharArg).write(os, 24)
          new (TStream.TInt16)(ret.outShortArg).write(os, 25)
          new (TStream.TInt64)(ret.outLonglongArg).write(os, 26)
          new (TStream.TUInt8)(ret.outUcharArg).write(os, 27)
          new (TStream.TUInt16)(ret.outUshortArg).write(os, 28)
          new (TStream.TUInt32)(ret.outUintArg).write(os, 29)
          new (TStream.TBytes)(ret.outBytesArg).write(os, 30)
          let responseMessage = {
            requestId,
            code: 0,
            message: 'success',
            responsePacket: {
              sBuffer: os.tBuffer.buffer
            }
          }
          return Promise.resolve({ responseMessage })
        }).catch(error => {
          let code = error.code ? error.code : -999
          let message = error.message || 'unknown error'
          let rpcError = new RpcError(code, message, requestMessage, null, 0, null)
          return Promise.reject(rpcError)
        })
      }
      case 'returnStructMethod': {
        let boolArg = TStream.TBool.read(is, 1, true)
        let intArg = TStream.TInt32.read(is, 2, true)
        let stringArg = TStream.TString.read(is, 3, true)
        let floatValue = TStream.TFloat.read(is, 4, true)
        let doubleValue = TStream.TDouble.read(is, 5, true)
        let vectorArg = TStream.TList(TStream.TInt32).read(is, 6, true)
        let mapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 7, true)
        let structArg = DemoStruct.read(is, 8, true)
        let charArg = TStream.TInt8.read(is, 9, true)
        let shortArg = TStream.TInt16.read(is, 10, true)
        let longlongArg = TStream.TInt64.read(is, 11, true)
        let ucharArg = TStream.TUInt8.read(is, 12, true)
        let ushortArg = TStream.TUInt16.read(is, 13, true)
        let uintArg = TStream.TUInt32.read(is, 14, true)
        let bytesArg = TStream.TBytes.read(is, 15, true)
        return this.returnStructMethod(boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg).then(ret => {
          new (DemoStruct)(ret.return).write(os, 0)
          new (TStream.TBool)(ret.outBoolArg).write(os, 16)
          new (TStream.TInt32)(ret.outIntArg).write(os, 17)
          new (TStream.TString)(ret.outStringArg).write(os, 18)
          new (TStream.TFloat)(ret.outFloatValue).write(os, 19)
          new (TStream.TDouble)(ret.outDoubleValue).write(os, 20)
          new (TStream.TList(TStream.TInt32))(ret.outVectorArg).write(os, 21)
          new (TStream.TMap(TStream.TInt32, TStream.TString))(ret.outMapArg).write(os, 22)
          new (DemoStruct)(ret.outStructArg).write(os, 23)
          new (TStream.TInt8)(ret.outCharArg).write(os, 24)
          new (TStream.TInt16)(ret.outShortArg).write(os, 25)
          new (TStream.TInt64)(ret.outLonglongArg).write(os, 26)
          new (TStream.TUInt8)(ret.outUcharArg).write(os, 27)
          new (TStream.TUInt16)(ret.outUshortArg).write(os, 28)
          new (TStream.TUInt32)(ret.outUintArg).write(os, 29)
          new (TStream.TBytes)(ret.outBytesArg).write(os, 30)
          let responseMessage = {
            requestId,
            code: 0,
            message: 'success',
            responsePacket: {
              sBuffer: os.tBuffer.buffer
            }
          }
          return Promise.resolve({ responseMessage })
        }).catch(error => {
          let code = error.code ? error.code : -999
          let message = error.message || 'unknown error'
          let rpcError = new RpcError(code, message, requestMessage, null, 0, null)
          return Promise.reject(rpcError)
        })
      }
      case 'returnBytesMethod': {
        let boolArg = TStream.TBool.read(is, 1, true)
        let intArg = TStream.TInt32.read(is, 2, true)
        let stringArg = TStream.TString.read(is, 3, true)
        let floatValue = TStream.TFloat.read(is, 4, true)
        let doubleValue = TStream.TDouble.read(is, 5, true)
        let vectorArg = TStream.TList(TStream.TInt32).read(is, 6, true)
        let mapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 7, true)
        let structArg = DemoStruct.read(is, 8, true)
        let charArg = TStream.TInt8.read(is, 9, true)
        let shortArg = TStream.TInt16.read(is, 10, true)
        let longlongArg = TStream.TInt64.read(is, 11, true)
        let ucharArg = TStream.TUInt8.read(is, 12, true)
        let ushortArg = TStream.TUInt16.read(is, 13, true)
        let uintArg = TStream.TUInt32.read(is, 14, true)
        let bytesArg = TStream.TBytes.read(is, 15, true)
        return this.returnBytesMethod(boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg).then(ret => {
          new (TStream.TBytes)(ret.return).write(os, 0)
          new (TStream.TBool)(ret.outBoolArg).write(os, 16)
          new (TStream.TInt32)(ret.outIntArg).write(os, 17)
          new (TStream.TString)(ret.outStringArg).write(os, 18)
          new (TStream.TFloat)(ret.outFloatValue).write(os, 19)
          new (TStream.TDouble)(ret.outDoubleValue).write(os, 20)
          new (TStream.TList(TStream.TInt32))(ret.outVectorArg).write(os, 21)
          new (TStream.TMap(TStream.TInt32, TStream.TString))(ret.outMapArg).write(os, 22)
          new (DemoStruct)(ret.outStructArg).write(os, 23)
          new (TStream.TInt8)(ret.outCharArg).write(os, 24)
          new (TStream.TInt16)(ret.outShortArg).write(os, 25)
          new (TStream.TInt64)(ret.outLonglongArg).write(os, 26)
          new (TStream.TUInt8)(ret.outUcharArg).write(os, 27)
          new (TStream.TUInt16)(ret.outUshortArg).write(os, 28)
          new (TStream.TUInt32)(ret.outUintArg).write(os, 29)
          new (TStream.TBytes)(ret.outBytesArg).write(os, 30)
          let responseMessage = {
            requestId,
            code: 0,
            message: 'success',
            responsePacket: {
              sBuffer: os.tBuffer.buffer
            }
          }
          return Promise.resolve({ responseMessage })
        }).catch(error => {
          let code = error.code ? error.code : -999
          let message = error.message || 'unknown error'
          let rpcError = new RpcError(code, message, requestMessage, null, 0, null)
          return Promise.reject(rpcError)
        })
      }
      case 'returnListMethod': {
        let boolArg = TStream.TBool.read(is, 1, true)
        let intArg = TStream.TInt32.read(is, 2, true)
        let stringArg = TStream.TString.read(is, 3, true)
        let floatValue = TStream.TFloat.read(is, 4, true)
        let doubleValue = TStream.TDouble.read(is, 5, true)
        let vectorArg = TStream.TList(TStream.TInt32).read(is, 6, true)
        let mapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 7, true)
        let structArg = DemoStruct.read(is, 8, true)
        let charArg = TStream.TInt8.read(is, 9, true)
        let shortArg = TStream.TInt16.read(is, 10, true)
        let longlongArg = TStream.TInt64.read(is, 11, true)
        let ucharArg = TStream.TUInt8.read(is, 12, true)
        let ushortArg = TStream.TUInt16.read(is, 13, true)
        let uintArg = TStream.TUInt32.read(is, 14, true)
        let bytesArg = TStream.TBytes.read(is, 15, true)
        return this.returnListMethod(boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg).then(ret => {
          new (TStream.TList(TStream.TUInt8))(ret.return).write(os, 0)
          new (TStream.TBool)(ret.outBoolArg).write(os, 16)
          new (TStream.TInt32)(ret.outIntArg).write(os, 17)
          new (TStream.TString)(ret.outStringArg).write(os, 18)
          new (TStream.TFloat)(ret.outFloatValue).write(os, 19)
          new (TStream.TDouble)(ret.outDoubleValue).write(os, 20)
          new (TStream.TList(TStream.TInt32))(ret.outVectorArg).write(os, 21)
          new (TStream.TMap(TStream.TInt32, TStream.TString))(ret.outMapArg).write(os, 22)
          new (DemoStruct)(ret.outStructArg).write(os, 23)
          new (TStream.TInt8)(ret.outCharArg).write(os, 24)
          new (TStream.TInt16)(ret.outShortArg).write(os, 25)
          new (TStream.TInt64)(ret.outLonglongArg).write(os, 26)
          new (TStream.TUInt8)(ret.outUcharArg).write(os, 27)
          new (TStream.TUInt16)(ret.outUshortArg).write(os, 28)
          new (TStream.TUInt32)(ret.outUintArg).write(os, 29)
          new (TStream.TBytes)(ret.outBytesArg).write(os, 30)
          let responseMessage = {
            requestId,
            code: 0,
            message: 'success',
            responsePacket: {
              sBuffer: os.tBuffer.buffer
            }
          }
          return Promise.resolve({ responseMessage })
        }).catch(error => {
          let code = error.code ? error.code : -999
          let message = error.message || 'unknown error'
          let rpcError = new RpcError(code, message, requestMessage, null, 0, null)
          return Promise.reject(rpcError)
        })
      }
      case 'returnMapMethod': {
        let boolArg = TStream.TBool.read(is, 1, true)
        let intArg = TStream.TInt32.read(is, 2, true)
        let stringArg = TStream.TString.read(is, 3, true)
        let floatValue = TStream.TFloat.read(is, 4, true)
        let doubleValue = TStream.TDouble.read(is, 5, true)
        let vectorArg = TStream.TList(TStream.TInt32).read(is, 6, true)
        let mapArg = TStream.TMap(TStream.TInt32, TStream.TString).read(is, 7, true)
        let structArg = DemoStruct.read(is, 8, true)
        let charArg = TStream.TInt8.read(is, 9, true)
        let shortArg = TStream.TInt16.read(is, 10, true)
        let longlongArg = TStream.TInt64.read(is, 11, true)
        let ucharArg = TStream.TUInt8.read(is, 12, true)
        let ushortArg = TStream.TUInt16.read(is, 13, true)
        let uintArg = TStream.TUInt32.read(is, 14, true)
        let bytesArg = TStream.TBytes.read(is, 15, true)
        return this.returnMapMethod(boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg).then(ret => {
          new (TStream.TMap(TStream.TString, TStream.TInt16))(ret.return).write(os, 0)
          new (TStream.TBool)(ret.outBoolArg).write(os, 16)
          new (TStream.TInt32)(ret.outIntArg).write(os, 17)
          new (TStream.TString)(ret.outStringArg).write(os, 18)
          new (TStream.TFloat)(ret.outFloatValue).write(os, 19)
          new (TStream.TDouble)(ret.outDoubleValue).write(os, 20)
          new (TStream.TList(TStream.TInt32))(ret.outVectorArg).write(os, 21)
          new (TStream.TMap(TStream.TInt32, TStream.TString))(ret.outMapArg).write(os, 22)
          new (DemoStruct)(ret.outStructArg).write(os, 23)
          new (TStream.TInt8)(ret.outCharArg).write(os, 24)
          new (TStream.TInt16)(ret.outShortArg).write(os, 25)
          new (TStream.TInt64)(ret.outLonglongArg).write(os, 26)
          new (TStream.TUInt8)(ret.outUcharArg).write(os, 27)
          new (TStream.TUInt16)(ret.outUshortArg).write(os, 28)
          new (TStream.TUInt32)(ret.outUintArg).write(os, 29)
          new (TStream.TBytes)(ret.outBytesArg).write(os, 30)
          let responseMessage = {
            requestId,
            code: 0,
            message: 'success',
            responsePacket: {
              sBuffer: os.tBuffer.buffer
            }
          }
          return Promise.resolve({ responseMessage })
        }).catch(error => {
          let code = error.code ? error.code : -999
          let message = error.message || 'unknown error'
          let rpcError = new RpcError(code, message, requestMessage, null, 0, null)
          return Promise.reject(rpcError)
        })
      }
      case 'complicate': {
        let inArg = TStream.TMap(TStream.TMap(TStream.TInt32, DemoStruct), TStream.TList(TStream.TInt32)).read(is, 1, true)
        return this.complicate(inArg).then(ret => {
          new (TStream.TMap(TStream.TList(DemoStruct), TStream.TMap(TStream.TString, TStream.TList(TStream.TInt32))))(ret.return).write(os, 0)
          new (TStream.TMap(TStream.TMap(TStream.TList(TStream.TString), DemoStruct), TStream.TMap(TStream.TString, TStream.TList(TStream.TMap(TStream.TString, TStream.TInt32)))))(ret.outArg).write(os, 2)
          let responseMessage = {
            requestId,
            code: 0,
            message: 'success',
            responsePacket: {
              sBuffer: os.tBuffer.buffer
            }
          }
          return Promise.resolve({ responseMessage })
        }).catch(error => {
          let code = error.code ? error.code : -999
          let message = error.message || 'unknown error'
          let rpcError = new RpcError(code, message, requestMessage, null, 0, null)
          return Promise.reject(rpcError)
        })
      }
      default:
        return Promise.reject(new ServerFuncNotFoundError(funcName + ' not found', requestMessage, null, 0, null))
    }
  }
  returnBoolMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg) {
    let ret = {}
    ret.return = false
    ret.outBoolArg = false
    ret.outIntArg = 0
    ret.outStringArg = ''
    ret.outFloatValue = 0
    ret.outDoubleValue = 0
    ret.outVectorArg = null
    ret.outMapArg = null
    ret.outStructArg = null
    ret.outCharArg = 0
    ret.outShortArg = 0
    ret.outLonglongArg = 0
    ret.outUcharArg = 0
    ret.outUshortArg = 0
    ret.outUintArg = 0
    ret.outBytesArg = null
    return Promise.resolve(ret)
  }
  returnCharMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg) {
    let ret = {}
    ret.return = 0
    ret.outBoolArg = false
    ret.outIntArg = 0
    ret.outStringArg = ''
    ret.outFloatValue = 0
    ret.outDoubleValue = 0
    ret.outVectorArg = null
    ret.outMapArg = null
    ret.outStructArg = null
    ret.outCharArg = 0
    ret.outShortArg = 0
    ret.outLonglongArg = 0
    ret.outUcharArg = 0
    ret.outUshortArg = 0
    ret.outUintArg = 0
    ret.outBytesArg = null
    return Promise.resolve(ret)
  }
  returnShortMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg) {
    let ret = {}
    ret.return = 0
    ret.outBoolArg = false
    ret.outIntArg = 0
    ret.outStringArg = ''
    ret.outFloatValue = 0
    ret.outDoubleValue = 0
    ret.outVectorArg = null
    ret.outMapArg = null
    ret.outStructArg = null
    ret.outCharArg = 0
    ret.outShortArg = 0
    ret.outLonglongArg = 0
    ret.outUcharArg = 0
    ret.outUshortArg = 0
    ret.outUintArg = 0
    ret.outBytesArg = null
    return Promise.resolve(ret)
  }
  returnIntMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg) {
    let ret = {}
    ret.return = 0
    ret.outBoolArg = false
    ret.outIntArg = 0
    ret.outStringArg = ''
    ret.outFloatValue = 0
    ret.outDoubleValue = 0
    ret.outVectorArg = null
    ret.outMapArg = null
    ret.outStructArg = null
    ret.outCharArg = 0
    ret.outShortArg = 0
    ret.outLonglongArg = 0
    ret.outUcharArg = 0
    ret.outUshortArg = 0
    ret.outUintArg = 0
    ret.outBytesArg = null
    return Promise.resolve(ret)
  }
  returnLonglongMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg) {
    let ret = {}
    ret.return = 0
    ret.outBoolArg = false
    ret.outIntArg = 0
    ret.outStringArg = ''
    ret.outFloatValue = 0
    ret.outDoubleValue = 0
    ret.outVectorArg = null
    ret.outMapArg = null
    ret.outStructArg = null
    ret.outCharArg = 0
    ret.outShortArg = 0
    ret.outLonglongArg = 0
    ret.outUcharArg = 0
    ret.outUshortArg = 0
    ret.outUintArg = 0
    ret.outBytesArg = null
    return Promise.resolve(ret)
  }
  returnUCharMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg) {
    let ret = {}
    ret.return = 0
    ret.outBoolArg = false
    ret.outIntArg = 0
    ret.outStringArg = ''
    ret.outFloatValue = 0
    ret.outDoubleValue = 0
    ret.outVectorArg = null
    ret.outMapArg = null
    ret.outStructArg = null
    ret.outCharArg = 0
    ret.outShortArg = 0
    ret.outLonglongArg = 0
    ret.outUcharArg = 0
    ret.outUshortArg = 0
    ret.outUintArg = 0
    ret.outBytesArg = null
    return Promise.resolve(ret)
  }
  returnUShortMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg) {
    let ret = {}
    ret.return = 0
    ret.outBoolArg = false
    ret.outIntArg = 0
    ret.outStringArg = ''
    ret.outFloatValue = 0
    ret.outDoubleValue = 0
    ret.outVectorArg = null
    ret.outMapArg = null
    ret.outStructArg = null
    ret.outCharArg = 0
    ret.outShortArg = 0
    ret.outLonglongArg = 0
    ret.outUcharArg = 0
    ret.outUshortArg = 0
    ret.outUintArg = 0
    ret.outBytesArg = null
    return Promise.resolve(ret)
  }
  returnUIntMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg) {
    let ret = {}
    ret.return = 0
    ret.outBoolArg = false
    ret.outIntArg = 0
    ret.outStringArg = ''
    ret.outFloatValue = 0
    ret.outDoubleValue = 0
    ret.outVectorArg = null
    ret.outMapArg = null
    ret.outStructArg = null
    ret.outCharArg = 0
    ret.outShortArg = 0
    ret.outLonglongArg = 0
    ret.outUcharArg = 0
    ret.outUshortArg = 0
    ret.outUintArg = 0
    ret.outBytesArg = null
    return Promise.resolve(ret)
  }
  returnFloatMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg) {
    let ret = {}
    ret.return = 0
    ret.outBoolArg = false
    ret.outIntArg = 0
    ret.outStringArg = ''
    ret.outFloatValue = 0
    ret.outDoubleValue = 0
    ret.outVectorArg = null
    ret.outMapArg = null
    ret.outStructArg = null
    ret.outCharArg = 0
    ret.outShortArg = 0
    ret.outLonglongArg = 0
    ret.outUcharArg = 0
    ret.outUshortArg = 0
    ret.outUintArg = 0
    ret.outBytesArg = null
    return Promise.resolve(ret)
  }
  returnDoubleMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg) {
    let ret = {}
    ret.return = 0
    ret.outBoolArg = false
    ret.outIntArg = 0
    ret.outStringArg = ''
    ret.outFloatValue = 0
    ret.outDoubleValue = 0
    ret.outVectorArg = null
    ret.outMapArg = null
    ret.outStructArg = null
    ret.outCharArg = 0
    ret.outShortArg = 0
    ret.outLonglongArg = 0
    ret.outUcharArg = 0
    ret.outUshortArg = 0
    ret.outUintArg = 0
    ret.outBytesArg = null
    return Promise.resolve(ret)
  }
  returnStringMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg) {
    let ret = {}
    ret.return = ''
    ret.outBoolArg = false
    ret.outIntArg = 0
    ret.outStringArg = ''
    ret.outFloatValue = 0
    ret.outDoubleValue = 0
    ret.outVectorArg = null
    ret.outMapArg = null
    ret.outStructArg = null
    ret.outCharArg = 0
    ret.outShortArg = 0
    ret.outLonglongArg = 0
    ret.outUcharArg = 0
    ret.outUshortArg = 0
    ret.outUintArg = 0
    ret.outBytesArg = null
    return Promise.resolve(ret)
  }
  returnStructMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg) {
    let ret = {}
    ret.return = null
    ret.outBoolArg = false
    ret.outIntArg = 0
    ret.outStringArg = ''
    ret.outFloatValue = 0
    ret.outDoubleValue = 0
    ret.outVectorArg = null
    ret.outMapArg = null
    ret.outStructArg = null
    ret.outCharArg = 0
    ret.outShortArg = 0
    ret.outLonglongArg = 0
    ret.outUcharArg = 0
    ret.outUshortArg = 0
    ret.outUintArg = 0
    ret.outBytesArg = null
    return Promise.resolve(ret)
  }
  returnBytesMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg) {
    let ret = {}
    ret.return = null
    ret.outBoolArg = false
    ret.outIntArg = 0
    ret.outStringArg = ''
    ret.outFloatValue = 0
    ret.outDoubleValue = 0
    ret.outVectorArg = null
    ret.outMapArg = null
    ret.outStructArg = null
    ret.outCharArg = 0
    ret.outShortArg = 0
    ret.outLonglongArg = 0
    ret.outUcharArg = 0
    ret.outUshortArg = 0
    ret.outUintArg = 0
    ret.outBytesArg = null
    return Promise.resolve(ret)
  }
  returnListMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg) {
    let ret = {}
    ret.return = null
    ret.outBoolArg = false
    ret.outIntArg = 0
    ret.outStringArg = ''
    ret.outFloatValue = 0
    ret.outDoubleValue = 0
    ret.outVectorArg = null
    ret.outMapArg = null
    ret.outStructArg = null
    ret.outCharArg = 0
    ret.outShortArg = 0
    ret.outLonglongArg = 0
    ret.outUcharArg = 0
    ret.outUshortArg = 0
    ret.outUintArg = 0
    ret.outBytesArg = null
    return Promise.resolve(ret)
  }
  returnMapMethod (boolArg, intArg, stringArg, floatValue, doubleValue, vectorArg, mapArg, structArg, charArg, shortArg, longlongArg, ucharArg, ushortArg, uintArg, bytesArg) {
    let ret = {}
    ret.return = null
    ret.outBoolArg = false
    ret.outIntArg = 0
    ret.outStringArg = ''
    ret.outFloatValue = 0
    ret.outDoubleValue = 0
    ret.outVectorArg = null
    ret.outMapArg = null
    ret.outStructArg = null
    ret.outCharArg = 0
    ret.outShortArg = 0
    ret.outLonglongArg = 0
    ret.outUcharArg = 0
    ret.outUshortArg = 0
    ret.outUintArg = 0
    ret.outBytesArg = null
    return Promise.resolve(ret)
  }
  complicate (inArg) {
    let ret = {}
    ret.return = null
    ret.outArg = null
    return Promise.resolve(ret)
  }
}

exports.Demo = exports.Demo || {}
exports.Demo.DemoStruct = DemoStruct
exports.Demo = exports.Demo || {}
exports.Demo.DemoFProxy = DemoFProxy
exports.Demo.DemoFServant = DemoFServant
