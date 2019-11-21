/* global describe test */
import { stringify, decycle } from '../../index'

describe('stringify', () => {
  test('no error', () => {
    const a: any = [{}]
    a[0].a = a
    a.push(a)
    a.push('a')
    console.log(stringify(a))
  })
  test('no error - 2', () => {
    const object: any = {}
    object.arr = [object, object]
    object.arr.push(object.arr)
    object.obj = object
    console.log(stringify(object, '  '))
  })
  test('no error - decycle', () => {
    const object: any = {}
    object.arr = [object, object]
    object.arr.push(object.arr)
    object.obj = object
    console.log(decycle(object))
  })
})
