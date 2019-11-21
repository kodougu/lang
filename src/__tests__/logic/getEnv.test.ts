import {
  getEnv,
  getEnvByInt,
  getEnvByFloat,
  getEnvByBoolean,
  getEnvByArrayString,
} from '../../index'

describe('getEnv', () => {
  test('getEnv', () => {
    process.env.ENV_KEY = 'test'
    expect(getEnv('ENV_KEY')).toBe('test')
  })
  test('getEnv -> empty', () => {
    expect(getEnv('ENV_KEY_X')).toBe('')
  })
  test('getEnv -> defalt', () => {
    expect(getEnv('ENV_KEY_X', 'default')).toBe('default')
  })

  test('getEnvByInt', () => {
    process.env.ENV_KEY = '1'
    expect(getEnvByInt('ENV_KEY')).toBe(1)
  })
  test('getEnvByInt -> empty is zero', () => {
    expect(getEnvByInt('ENV_KEY_X')).toBe(0)
  })
  test('getEnvByInt -> defalt', () => {
    expect(getEnvByInt('ENV_KEY_X', 100)).toBe(100)
  })
  test('getEnvByInt -> float is zero', () => {
    process.env.ENV_KEY = '1.05'
    expect(getEnvByInt('ENV_KEY')).toBe(0)
  })
  test('getEnvByInt -> string is zero', () => {
    process.env.ENV_KEY = 'string'
    expect(getEnvByInt('ENV_KEY')).toBe(0)
  })

  test('getEnvByFloat', () => {
    process.env.ENV_KEY = '1.05'
    expect(getEnvByFloat('ENV_KEY')).toBe(1.05)
  })
  test('getEnvByFloat -> int', () => {
    process.env.ENV_KEY = '1'
    expect(getEnvByFloat('ENV_KEY')).toBe(1)
  })
  test('getEnvByFloat -> empty is zero', () => {
    expect(getEnvByFloat('ENV_KEY_X')).toBe(0)
  })
  test('getEnvByFloat -> defalt', () => {
    expect(getEnvByFloat('ENV_KEY_X', 100.05)).toBe(100.05)
  })
  test('getEnvByFloat -> string is zero', () => {
    process.env.ENV_KEY = 'string'
    expect(getEnvByFloat('ENV_KEY')).toBe(0)
  })

  test('getEnvByBoolean', () => {
    process.env.ENV_KEY = 'true'
    expect(getEnvByBoolean('ENV_KEY')).toBeTruthy()
  })
  test('getEnvByBoolean -> true: TRUE', () => {
    process.env.ENV_KEY = 'TRUE'
    expect(getEnvByBoolean('ENV_KEY')).toBeTruthy()
  })
  test('getEnvByFloat -> empty is false', () => {
    expect(getEnvByFloat('ENV_KEY_X')).toBeFalsy()
  })
  test('getEnvByBoolean -> false: false', () => {
    process.env.ENV_KEY = 'false'
    expect(getEnvByBoolean('ENV_KEY')).toBeFalsy()
  })
  test('getEnvByBoolean -> false: int', () => {
    process.env.ENV_KEY = '1'
    expect(getEnvByBoolean('ENV_KEY')).toBeFalsy()
  })

  test('getEnvByArrayString -> one item', () => {
    process.env.ENV_KEY = 'test1'
    expect(getEnvByArrayString('ENV_KEY')).toEqual(['test1'])
  })
  test('getEnvByArrayString -> two items', () => {
    process.env.ENV_KEY = 'test1,test2'
    expect(getEnvByArrayString('ENV_KEY')).toEqual(['test1', 'test2'])
  })
  test('getEnvByArrayString -> empty', () => {
    expect(getEnvByArrayString('ENV_KEY_X')).toEqual([''])
  })
  test('getEnvByArrayString -> defalt', () => {
    expect(getEnvByArrayString('ENV_KEY_X', 'default')).toEqual(['default'])
  })
})
