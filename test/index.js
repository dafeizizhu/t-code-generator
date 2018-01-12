let describe = global.describe
let it = global.it

const assert = require('assert')
const TStream = require('t-model')

describe('taf2node', () => {
  it('test', () => {
    const { DemoStruct } = require('../examples/Demo').Demo

    let count = 100
    let structValues = []
    for (let i = 0; i < count; i++) {
      structValues.push({
        bytesValue: Buffer.from([1, 2, 3]),
        charValue: 1,
        intValue: i,
        stringValue: 'string ' + i,
        floatValue: i + 0.1,
        doubleValue: i + 0.2,
        listValue: ['string ' + i * 3, 'string ' + (i * 3 + 1), 'string ' + (i * 3 + 2)],
        longlongValue: 12131323,
        mapValue: {
          1: 'string 1',
          2: 'string 2',
          3: 'string 4'
        },
        shortValue: 1,
        ucharValue: 2,
        uintValue: 3,
        ushortValue: 4
      })
    }

    let os = new TStream.TOutputStream()
    structValues.forEach((v, index) => {
      if (index % 3 === 0) {
        new DemoStruct(v).write(os, index)
      }
    })
    let is = new TStream.TInputStream(os.tBuffer)
    structValues.forEach((v, index) => {
      if (index % 2 === 0) {
        let isRequire = (index % 3 === 0)
        let actual = is.readStruct(index, isRequire, DemoStruct, 'default value')
        let expected = isRequire ? v : 'default value'
        assert.deepEqual(actual, expected)
      }
    })
  })
})
