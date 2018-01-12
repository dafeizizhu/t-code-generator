const TModel = require('t-model')
const md5 = require('md5')

class DemoStruct extends TModel.TStruct {
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
    let intValue = (TModel.TInt32).read(is, 0, true)
    let stringValue = (TModel.TString).read(is, 1, true)
    let floatValue = (TModel.TFloat).read(is, 2, true)
    let doubleValue = (TModel.TDouble).read(is, 3, true)
    let listValue = (TModel.TList(TModel.TString)).read(is, 4, false)
    let mapValue = (TModel.TMap(TModel.TInt32, TModel.TString)).read(is, 5, false)
    let charValue = (TModel.TInt8).read(is, 6, true)
    let shortValue = (TModel.TInt16).read(is, 7, true)
    let longlongValue = (TModel.TInt64).read(is, 8, true)
    let ucharValue = (TModel.TUInt8).read(is, 9, true)
    let ushortValue = (TModel.TUInt16).read(is, 10, true)
    let uintValue = (TModel.TUInt32).read(is, 11, true)
    let bytesValue = (TModel.TBytes).read(is, 12, true)
    return new DemoStruct({
      intValue, stringValue, floatValue, doubleValue, listValue, mapValue, charValue, shortValue, longlongValue, ucharValue, ushortValue, uintValue, bytesValue
    }).valueOf()
  }
  constructor (value) {
    super(value)

    this._t_intValue = new (TModel.TInt32)(this._value.intValue)
    this._t_stringValue = new (TModel.TString)(this._value.stringValue)
    this._t_floatValue = new (TModel.TFloat)(this._value.floatValue)
    this._t_doubleValue = new (TModel.TDouble)(this._value.doubleValue)
    this._t_listValue = new (TModel.TList(TModel.TString))(this._value.listValue)
    this._t_mapValue = new (TModel.TMap(TModel.TInt32, TModel.TString))(this._value.mapValue)
    this._t_charValue = new (TModel.TInt8)(this._value.charValue)
    this._t_shortValue = new (TModel.TInt16)(this._value.shortValue)
    this._t_longlongValue = new (TModel.TInt64)(this._value.longlongValue)
    this._t_ucharValue = new (TModel.TUInt8)(this._value.ucharValue)
    this._t_ushortValue = new (TModel.TUInt16)(this._value.ushortValue)
    this._t_uintValue = new (TModel.TUInt32)(this._value.uintValue)
    this._t_bytesValue = new (TModel.TBytes)(this._value.bytesValue)
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
    this._t_intValue = new (TModel.TInt32)(value)
  }
  set stringValue (value) {
    this._t_stringValue = new (TModel.TString)(value)
  }
  set floatValue (value) {
    this._t_floatValue = new (TModel.TFloat)(value)
  }
  set doubleValue (value) {
    this._t_doubleValue = new (TModel.TDouble)(value)
  }
  set listValue (value) {
    this._t_listValue = new (TModel.TList(TModel.TString))(value)
  }
  set mapValue (value) {
    this._t_mapValue = new (TModel.TMap(TModel.TInt32, TModel.TString))(value)
  }
  set charValue (value) {
    this._t_charValue = new (TModel.TInt8)(value)
  }
  set shortValue (value) {
    this._t_shortValue = new (TModel.TInt16)(value)
  }
  set longlongValue (value) {
    this._t_longlongValue = new (TModel.TInt64)(value)
  }
  set ucharValue (value) {
    this._t_ucharValue = new (TModel.TUInt8)(value)
  }
  set ushortValue (value) {
    this._t_ushortValue = new (TModel.TUInt16)(value)
  }
  set uintValue (value) {
    this._t_uintValue = new (TModel.TUInt32)(value)
  }
  set bytesValue (value) {
    this._t_bytesValue = new (TModel.TBytes)(value)
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
