import { testFn } from '../index'

describe('index', () => {
  it('if string equals foo', () => {
    testFn('foo')
  })

  it('if string does not equal foo', () => {
    testFn('bar')
  })
})
