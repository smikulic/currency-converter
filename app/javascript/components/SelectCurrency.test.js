import { mount } from '@vue/test-utils'
import SelectCurrency from './SelectCurrency.vue'

describe('SelectCurrency', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SelectCurrency)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
