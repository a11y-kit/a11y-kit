import * as utils from '@a11y-kit/utils'

describe('sanity checks for utils', () => {
  it('has an orderNodes function', () => {
    expect(typeof utils.orderNodes).toBe('function')
  })
})
