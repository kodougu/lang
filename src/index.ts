import zeroPadding from './logic/zeroPadding'
import { isString, isObject, isInteger, isFloat, isTrue } from './logic/is'
import { randomString, randomElement } from './logic/random'
import { stringify, decycle } from './logic/stringify'
import kebab from './logic/kebab'
import cloneOnlyValue from './logic/cloneOnlyValue'
import cloneArrayOnlyValue from './logic/cloneArrayOnlyValue'
import actualArray from './logic/actualArray'

import {
  getEnv,
  getEnvByInt,
  getEnvByFloat,
  getEnvByBoolean,
  getEnvByArrayString,
} from './logic/getEnv'

export {
  zeroPadding,
  isString,
  isObject,
  isInteger,
  isFloat,
  isTrue,
  randomString,
  stringify,
  decycle,
  randomElement,
  kebab,
  getEnv,
  getEnvByInt,
  getEnvByFloat,
  getEnvByBoolean,
  getEnvByArrayString,
  cloneOnlyValue,
  cloneArrayOnlyValue,
  actualArray,
}
