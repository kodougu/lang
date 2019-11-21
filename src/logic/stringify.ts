'use strict'

export function decycle(object: any) {
  const objects = new WeakMap()
  return (function derez(value, path) {
    let oldPath: any
    let nu: any
    if (
      typeof value === 'object' &&
      value !== null &&
      !(value instanceof Boolean) &&
      !(value instanceof Date) &&
      !(value instanceof Number) &&
      !(value instanceof RegExp) &&
      !(value instanceof String)
    ) {
      oldPath = objects.get(value)
      if (oldPath !== undefined) {
        return { $ref: oldPath }
      }
      objects.set(value, path)
      if (Array.isArray(value)) {
        nu = []
        value.forEach(function(element, i) {
          nu[i] = derez(element, `${path}[${i}]`)
        })
      } else {
        nu = {}
        Object.keys(value).forEach(function(name) {
          nu[name] = derez(value[name], `${path}[${JSON.stringify(name)}]`)
        })
      }
      return nu
    }
    return value
  })(object, '$')
}

export function stringify(object: any, space?: string | number) {
  return JSON.stringify(decycle(object), null, space)
}
