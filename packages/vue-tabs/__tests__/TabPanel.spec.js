import { mount } from '@vue/test-utils'
import TabPanel from '../src/components/TabPanel.vue'

describe('TabPanel', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TabPanel, {
      propsData: {
        tab: 'foo'
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
