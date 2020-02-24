import * as components from '@a11y-kit/vue-tabs'

describe('sanity checks for vue-tabs', () => {
  it('has a TabActivator component', () => {
    expect(typeof components.TabActivator).toBe('object')
  })
  it('has a TabList component', () => {
    expect(typeof components.TabList).toBe('object')
  })
  it('has a TabPanel component', () => {
    expect(typeof components.TabPanel).toBe('object')
  })
  it('has a TabWrapper component', () => {
    expect(typeof components.TabWrapper).toBe('object')
  })
})
