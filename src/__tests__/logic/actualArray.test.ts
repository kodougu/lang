import { actualArray } from '../..'

describe('actualArray', () => {
  test('actualArray - undefined', () => {
    const arr = actualArray(undefined)
    expect(arr).toBeTruthy()
    expect(arr.length).toBe(0)
    arr.forEach(i => {
      console.log(i)
    })
  })

  test('actualArray - null', () => {
    const arr = actualArray(null)
    expect(arr).toBeTruthy()
    expect(arr.length).toBe(0)
    arr.forEach(i => {
      console.log(i)
    })
  })

  test('actualArray - empty', () => {
    const arr = actualArray([])
    expect(arr).toBeTruthy()
    expect(arr.length).toBe(0)
    arr.forEach(i => {
      console.log(i)
    })
  })

  test('actualArray - array', () => {
    const arr = actualArray(['a', 'b', 'c'])
    expect(arr).toBeTruthy()
    expect(arr.length).toBe(3)
    arr.forEach(i => {
      console.log(i)
    })
    expect(arr).toMatchObject(['a', 'b', 'c'])
  })

  test('actualArray - array', () => {
    const arr = actualArray([{ id: 'a' }, { id: 'b' }])
    expect(arr).toBeTruthy()
    expect(arr.length).toBe(2)
    arr.forEach(i => {
      console.log(i)
    })
    expect(arr).toMatchObject([{ id: 'a' }, { id: 'b' }])
  })
})
