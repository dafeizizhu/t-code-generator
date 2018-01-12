const TStream = require('t-model')
const md5 = require('md5')

class DemoStruct extends TStream.TStruct {
  static parse (value) {
    return Object.assign({}, {
      intValue: 0,
      stringValue: '',
      floatValue: 0,
      doubleValue: 0,
      listValue: null,
      mapValue: null,
      charValue: 0,
      shortValue: 0,
      longlongValue: 0,
      ucharValue: 0,
      ushortValue: 0,
      uintValue: 0,
      bytesValue: null
    }, value)
  }
  static readFrom (is, tBuffer) {
    let intValue = (TStream.TInt32).read(is, 0, true)
    let stringValue = (TStream.TString).read(is, 1, true)
    let floatValue = (TStream.TFloat).read(is, 2, true)
    let doubleValue = (TStream.TDouble).read(is, 3, true)
    let listValue = (TStream.TList(TStream.TString)).read(is, 4, false)
    let mapValue = (TStream.TMap(TStream.TInt32, TStream.TString)).read(is, 5, false)
    let charValue = (TStream.TInt8).read(is, 6, true)
    let shortValue = (TStream.TInt16).read(is, 7, true)
    let longlongValue = (TStream.TInt64).read(is, 8, true)
    let ucharValue = (TStream.TUInt8).read(is, 9, true)
    let ushortValue = (TStream.TUInt16).read(is, 10, true)
    let uintValue = (TStream.TUInt32).read(is, 11, true)
    let bytesValue = (TStream.TBytes).read(is, 12, true)
    return new DemoStruct({
      intValue, stringValue, floatValue, doubleValue, listValue, mapValue, charValue, shortValue, longlongValue, ucharValue, ushortValue, uintValue, bytesValue
    }).valueOf()
  }
  constructor (value) {
    super(value)

    this._t_intValue = new (TStream.TInt32)(this._value.intValue)
    this._t_stringValue = new (TStream.TString)(this._value.stringValue)
    this._t_floatValue = new (TStream.TFloat)(this._value.floatValue)
    this._t_doubleValue = new (TStream.TDouble)(this._value.doubleValue)
    this._t_listValue = new (TStream.TList(TStream.TString))(this._value.listValue)
    this._t_mapValue = new (TStream.TMap(TStream.TInt32, TStream.TString))(this._value.mapValue)
    this._t_charValue = new (TStream.TInt8)(this._value.charValue)
    this._t_shortValue = new (TStream.TInt16)(this._value.shortValue)
    this._t_longlongValue = new (TStream.TInt64)(this._value.longlongValue)
    this._t_ucharValue = new (TStream.TUInt8)(this._value.ucharValue)
    this._t_ushortValue = new (TStream.TUInt16)(this._value.ushortValue)
    this._t_uintValue = new (TStream.TUInt32)(this._value.uintValue)
    this._t_bytesValue = new (TStream.TBytes)(this._value.bytesValue)
  }

  get intValue () {
    return this._t_intValue.valueOf()
  }
  get stringValue () {
    return this._t_stringValue.valueOf()
  }
  get floatValue () {
    return this._t_floatValue.valueOf()
  }
  get doubleValue () {
    return this._t_doubleValue.valueOf()
  }
  get listValue () {
    return this._t_listValue.valueOf()
  }
  get mapValue () {
    return this._t_mapValue.valueOf()
  }
  get charValue () {
    return this._t_charValue.valueOf()
  }
  get shortValue () {
    return this._t_shortValue.valueOf()
  }
  get longlongValue () {
    return this._t_longlongValue.valueOf()
  }
  get ucharValue () {
    return this._t_ucharValue.valueOf()
  }
  get ushortValue () {
    return this._t_ushortValue.valueOf()
  }
  get uintValue () {
    return this._t_uintValue.valueOf()
  }
  get bytesValue () {
    return this._t_bytesValue.valueOf()
  }

  set intValue (value) {
    this._t_intValue = new (TStream.TInt32)(value)
  }
  set stringValue (value) {
    this._t_stringValue = new (TStream.TString)(value)
  }
  set floatValue (value) {
    this._t_floatValue = new (TStream.TFloat)(value)
  }
  set doubleValue (value) {
    this._t_doubleValue = new (TStream.TDouble)(value)
  }
  set listValue (value) {
    this._t_listValue = new (TStream.TList(TStream.TString))(value)
  }
  set mapValue (value) {
    this._t_mapValue = new (TStream.TMap(TStream.TInt32, TStream.TString))(value)
  }
  set charValue (value) {
    this._t_charValue = new (TStream.TInt8)(value)
  }
  set shortValue (value) {
    this._t_shortValue = new (TStream.TInt16)(value)
  }
  set longlongValue (value) {
    this._t_longlongValue = new (TStream.TInt64)(value)
  }
  set ucharValue (value) {
    this._t_ucharValue = new (TStream.TUInt8)(value)
  }
  set ushortValue (value) {
    this._t_ushortValue = new (TStream.TUInt16)(value)
  }
  set uintValue (value) {
    this._t_uintValue = new (TStream.TUInt32)(value)
  }
  set bytesValue (value) {
    this._t_bytesValue = new (TStream.TBytes)(value)
  }

  writeTo (os, tBuffer) {
    this._t_intValue.write(os, 0)
    this._t_stringValue.write(os, 1)
    this._t_floatValue.write(os, 2)
    this._t_doubleValue.write(os, 3)
    this._t_listValue.write(os, 4)
    this._t_mapValue.write(os, 5)
    this._t_charValue.write(os, 6)
    this._t_shortValue.write(os, 7)
    this._t_longlongValue.write(os, 8)
    this._t_ucharValue.write(os, 9)
    this._t_ushortValue.write(os, 10)
    this._t_uintValue.write(os, 11)
    this._t_bytesValue.write(os, 12)
  }

  valueOf () {
    return {
      intValue: this._t_intValue.valueOf(),
      stringValue: this._t_stringValue.valueOf(),
      floatValue: this._t_floatValue.valueOf(),
      doubleValue: this._t_doubleValue.valueOf(),
      listValue: this._t_listValue.valueOf(),
      mapValue: this._t_mapValue.valueOf(),
      charValue: this._t_charValue.valueOf(),
      shortValue: this._t_shortValue.valueOf(),
      longlongValue: this._t_longlongValue.valueOf(),
      ucharValue: this._t_ucharValue.valueOf(),
      ushortValue: this._t_ushortValue.valueOf(),
      uintValue: this._t_uintValue.valueOf(),
      bytesValue: this._t_bytesValue.valueOf()
    }
  }

  keyOf () {
    return md5([
      this._t_intValue.keyOf(),
      this._t_stringValue.keyOf(),
      this._t_floatVaule.keyOf(),
      this._t_doubeValue.keyOf(),
      this._t_listValue.keyOf(),
      this._t_mapValue.keyOf(),
      this._t_charValue.keyOf(),
      this._t_shortValue.keyOf(),
      this._t_longlongValue.keyOf(),
      this._t_ucharValue.keyOf(),
      this._t_ushortValue.keyOf(),
      this._t_uintValue.keyOf()
    ].join('__key__'))
  }
}

exports.Demo = exports.Demo || {}
exports.Demo.DemoStruct = DemoStruct
