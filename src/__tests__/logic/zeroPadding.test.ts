/* global describe test expect */
import zeroPadding from '../../logic/zeroPadding'

describe('zeroPadding', () => {
  test('0,3 -> 000', () => {
    expect(zeroPadding(0, 3)).toBe('000')
  })
})
