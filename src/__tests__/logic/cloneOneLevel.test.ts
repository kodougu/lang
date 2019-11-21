import { cloneOnlyValue } from '../..'

describe('cloneOnlyValue', () => {
  test('cloneOnlyValue', () => {
    const result = cloneOnlyValue({
      bolTrue: true,
      bolFalse: false,
      str: 'aaa',
      num1: 1,
      num2: NaN,
      obj: {
        str: 'bbb',
      },
      arr: ['1', '2'],
      arrobj: [{ str: 'a1' }, { str: 'a2' }],
    })
    console.log(result)
    expect(result).toMatchObject({
      bolTrue: true,
      bolFalse: false,
      str: 'aaa',
      num1: 1,
      num2: NaN,
    })
    expect(result.obj).toBeUndefined()
    expect(result.arr).toBeUndefined()
    expect(result.arrobj).toBeUndefined()
  })
})
