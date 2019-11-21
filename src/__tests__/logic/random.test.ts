/* global describe test expect */
import { randomElement, randomString } from '../..'

describe('random', () => {
  test('randomElement', () => {
    const result = randomElement(['1', '2', '3'])
    let check = false
    if (result.includes('1') || result.includes('2') || result.includes('3')) {
      check = true
    }
    expect(check).toBeTruthy()
  })
  test('randomString', () => {
    const r = randomString()
    expect(r).not.toBeNull()
    expect(r.length).toBe(4)
  })
  test('randomString - length', () => {
    const r = randomString(16)
    expect(r).not.toBeNull()
    expect(r.length).toBe(16)
  })
})
