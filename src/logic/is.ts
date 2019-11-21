export function isObject(value: any): boolean {
  return (
    value !== null && typeof value !== 'undefined' && Object(value) === value
  )
}

export function isString(val: any): boolean {
  if (typeof val === 'string' || val instanceof String) {
    return true
  }
  return false
}

export function isInteger(str: string | undefined): boolean {
  if (!str || !Number.isInteger(+str)) {
    return false
  }
  return true
}

export function isFloat(str: string | undefined): boolean {
  if (!str || Number.isNaN(parseFloat(str))) {
    return false
  }
  return true
}

export function isTrue(str: string | undefined): boolean {
  if (!str || str.toLocaleLowerCase() !== 'true') {
    return false
  }
  return true
}
