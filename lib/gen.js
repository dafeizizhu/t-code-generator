const fs = require('fs')
const path = require('path')
const assert = require('assert')
const stripJsonComments = require('strip-json-comments')
const mustache = require('mustache')
const standard = require('standard')
const util = require('util')

const parser = require('../taf').parser

const localTNames = {
  'bool': 'TStream.TBool',
  'byte': 'TStream.TInt8',
  'char': 'TStream.TInt8',
  'short': 'TStream.TInt16',
  'int': 'TStream.TInt32',
  'long': 'TStream.TInt64',
  'longlong': 'TStream.TInt64',
  'ubyte': 'TStream.TUInt8',
  'uchar': 'TStream.TUInt8',
  'ushort': 'TStream.TUInt16',
  'uint': 'TStream.TUInt32',
  'string': 'TStream.TString',
  'float': 'TStream.TFloat',
  'double': 'TStream.TDouble'
}

const getTName = dataType => {
  if (localTNames[dataType]) return localTNames[dataType]
  let { name, proto, kproto, vproto } = dataType
  if (!name) throw new Error(`type mismatch ${dataType}`)
  switch (name) {
    case 'vector':
      if (proto === 'byte' || proto === 'char') {
        return 'TStream.TBytes'
      } else {
        return `TStream.TList(${getTName(proto)})`
      }
    case 'map':
      return `TStream.TMap(${getTName(kproto)}, ${getTName(vproto)})`
    default:
      throw new Error(`type mismatch ${JSON.stringify(dataType)}`)
  }
}

const toKey = k => {
  return {
    structName: k.items[0],
    items: k.items.slice(1)
  }
}

const getDefaultValue = dataType => {
  switch (dataType) {
    case 'bool':
      return 'false'
    case 'byte':
    case 'char':
    case 'short':
    case 'int':
    case 'long':
    case 'longlong':
    case 'uchar':
    case 'ubyte':
    case 'ushort':
    case 'uint':
    case 'float':
    case 'double':
      return '0'
    case 'string':
      return '\'\''
    default:
      return 'null'
  }
}

const toField = f => {
  let { tag, require, dataType, name } = f
  return {
    name,
    tag,
    require,
    tName: getTName(dataType),
    defaultValue: getDefaultValue(dataType)
  }
}

const toStruct = (s, keys) => {
  let { name, fields } = s

  localTNames[name] = name

  return {
    name,
    fields: fields.map(toField),
    key: keys.filter(k => k.structName === name)[0]
  }
}

const toArg = a => {
  let { dataType, name, tag } = a
  return {
    name,
    tag,
    tName: getTName(dataType),
    defaultValue: getDefaultValue(dataType)
  }
}

const toMethod = m => {
  let { name, args } = m
  args.forEach((a, index) => {
    a.tag = index + 1
  })
  return {
    name,
    returnArg: toArg({ dataType: m.returnDataType, name: 'return' }),
    inArgs: args.filter(a => !a.out).map(toArg),
    outArgs: args.filter(a => a.out).map(toArg)
  }
}

const toInterface = i => {
  let { name, methods } = i
  return {
    name,
    methods: methods.map(toMethod)
  }
}

const toModule = m => {
  let { name, content } = m
  let keys = content.filter(c => c.type === 'key').map(toKey)
  let structs = content.filter(c => c.type === 'struct').map(s => toStruct(s, keys))
    .map(s => Object.assign(s, { moduleName: name }))
  let interfaces = content.filter(c => c.type === 'interface').map(i => toInterface(i))
    .map(i => Object.assign(i, { moduleName: name }))
  return { name, structs, interfaces, hasKey: !!keys.length }
}

const toInclude = (i, filePath) => {
  let includePath = path.resolve(path.dirname(filePath), i.path)
  let includeData = parser.parse(stripJsonComments(fs.readFileSync(includePath, 'utf8')))
  let moduleData = includeData.filter(d => d.type === 'module')[0]
  let moduleName = moduleData.name
  let moduleStructNames = moduleData.content.filter(d => d.type === 'struct').map(d => {
    localTNames[d.name] = d.name
    return d.name
  })
  let moduleInterfaceNames = moduleData.content.filter(d => d.type === 'interface').map(d => d.name)
  let modulePath = i.path.replace(path.extname(i.path), '.js')
  return { includePath, includeData, moduleName, moduleStructNames, moduleInterfaceNames, modulePath }
}

const gen = (filePath, recursive) => {
  let data
  try {
    assert(filePath, `invalid filePath ${filePath}`)
    data = parser.parse(stripJsonComments(fs.readFileSync(filePath, 'utf8')))

    let includes = data.filter(d => d.type === 'include').map(i => toInclude(i, filePath))
    let modules = data.filter(d => d.type === 'module').map(toModule)
    let hasKey = !!modules.filter(m => m.hasKey).length
    let hasInterface = !!modules.filter(m => m.interfaces.length).length
    let code = mustache.render(fs.readFileSync(path.join(__dirname, 'template.mustache'), 'utf8'), {
      includes,
      modules,
      hasKey,
      hasInterface
    })
    standard.lintText(code, {
      fix: true
    }, (err, { results }) => {
      if (err) throw err
      let result = results[0]
      let { messages, errorCount } = result
      if (errorCount > 0) throw new Error(messages.map(m => m.message).join('\n'))
      let { output } = result
      fs.writeFileSync(filePath.replace(path.extname(filePath), '.js'), output || code, { encoding: 'utf8' })
    })

    if (recursive) {
      includes.forEach(include => gen(include.includePath, recursive))
    }
  } catch (err) {
    if (data) console.info(util.inspect(data, { depth: null }))
    throw err
  }
}

module.exports = gen
