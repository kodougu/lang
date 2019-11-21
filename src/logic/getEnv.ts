import * as process from 'process'
import { isInteger, isFloat, isTrue } from './is'

export const getEnv = (key: string, defaultValue?: string): string => {
  let value: string | undefined = process.env[key]
  if (!value) {
    value = defaultValue ? defaultValue : ''
  }
  return value
}

export const getEnvByInt = (key: string, defaultValue?: number): number => {
  const str: string = getEnv(key)
  if (!isInteger(str)) {
    return defaultValue ? defaultValue : 0
  }
  return parseInt(str, 10)
}

export const getEnvByFloat = (key: string, defaultValue?: number): number => {
  const str: string = getEnv(key)
  if (!isFloat(str)) {
    return defaultValue ? defaultValue : 0
  }
  return parseFloat(str)
}

export const getEnvByBoolean = (key: string): boolean => {
  const str: string = getEnv(key)
  return isTrue(str)
}

export const getEnvByArrayString = (
  key: string,
  defaultValue?: string
): string[] => {
  const str: string = getEnv(key, defaultValue)
  return str.split(',')
}
