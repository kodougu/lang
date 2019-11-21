import { cloneArrayOnlyValue } from '../..'

describe('cloneArrayOnlyValue', () => {
  function create(): any {
    return {
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
    }
  }

  test('cloneArrayOnlyValue', () => {
    const arr = [create(), create()]
    const clone = cloneArrayOnlyValue(arr)
    console.log(clone)
    expect(clone).toMatchObject([
      {
        bolTrue: true,
        bolFalse: false,
        str: 'aaa',
        num1: 1,
        num2: NaN,
      },
      {
        bolTrue: true,
        bolFalse: false,
        str: 'aaa',
        num1: 1,
        num2: NaN,
      },
    ])
    expect(clone[0].obj).toBeUndefined()
    expect(clone[0].arr).toBeUndefined()
    expect(clone[0].arrobj).toBeUndefined()
  })
})
