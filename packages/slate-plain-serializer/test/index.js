import Plain from '@whimsicalcode/slate-plain-serializer'
import assert from 'assert'
import { Value } from '@whimsicalcode/slate'
import { fixtures } from '@whimsicalcode/slate-dev-test-utils'

describe('@whimsicalcode/slate-plain-serializer', () => {
  fixtures(__dirname, 'deserialize', ({ module }) => {
    const { input, output, options } = module
    const value = Plain.deserialize(input, options)
    const actual = Value.isValue(value) ? value.toJSON() : value
    const expected = Value.isValue(output) ? output.toJSON() : output
    assert.deepEqual(actual, expected)
  })

  fixtures(__dirname, 'serialize', ({ module }) => {
    const { input, output, options } = module
    const string = Plain.serialize(input, options)
    const actual = string
    const expected = output
    assert.deepEqual(actual, expected)
  })
})
