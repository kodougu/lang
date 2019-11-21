/* global describe test expect */
import {
  isObject,
  isString,
  isInteger,
  isFloat,
  isTrue,
  randomString,
} from '../..'

describe('is', () => {
  test('isObject -> true:object', () => {
    expect(isObject({})).toBeTruthy()
  })
  test('isObject -> false:int', () => {
    expect(isObject(1)).not.toBeTruthy()
  })
  test('isObject -> true:array', () => {
    expect(isObject([])).toBeTruthy()
  })

  test('isString -> true:string', () => {
    expect(isString('')).toBeTruthy()
  })
  test('isString -> false:int', () => {
    expect(isString(1)).not.toBeTruthy()
  })
  test('isString -> false:object', () => {
    expect(isString({})).not.toBeTruthy()
  })
  test('isString -> false:array', () => {
    expect(isString([])).not.toBeTruthy()
  })

  test('isInteger -> false:empty', () => {
    expect(isInteger('')).not.toBeTruthy()
  })
  test('isInteger -> true:int', () => {
    expect(isInteger('1')).toBeTruthy()
  })
  test('isInteger -> true:float', () => {
    expect(isInteger('1.05')).not.toBeTruthy()
  })
  test('isInteger -> false:undefined', () => {
    expect(isInteger(undefined)).not.toBeTruthy()
  })

  test('isFloat -> false:empty', () => {
    expect(isFloat('')).not.toBeTruthy()
  })
  test('isInteger -> true:int', () => {
    expect(isFloat('1')).toBeTruthy()
  })
  test('isInteger -> true:float', () => {
    expect(isFloat('1.05')).toBeTruthy()
  })
  test('isInteger -> false:undefined', () => {
    expect(isFloat(undefined)).not.toBeTruthy()
  })

  test('isTrue -> false:empty', () => {
    expect(isTrue('')).not.toBeTruthy()
  })
  test('isTrue -> true:true', () => {
    expect(isTrue('true')).toBeTruthy()
  })
  test('isTrue -> true:TRUE', () => {
    expect(isTrue('TRUE')).toBeTruthy()
  })
  test('isTrue -> false:false', () => {
    expect(isTrue('false')).not.toBeTruthy()
  })
  test('isTrue -> false:other', () => {
    expect(isTrue(randomString(5))).not.toBeTruthy()
  })
})
