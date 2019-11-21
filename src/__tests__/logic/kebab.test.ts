/* global describe test expect */
import kebab from '../../logic/kebab'

describe('kebab', () => {
  test('kebab', () => {
    const result = kebab('AniLInsh')
    expect(result).toBe('ani-linsh')
  })
})
