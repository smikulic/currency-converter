import { mount, shallowMount } from '@vue/test-utils'
import DatePicker from './DatePicker.vue'

const datePickerPropsMock = {
  value: "2019-01-01",
  "change-date": () =>  jest.fn(),
}

describe('DatePicker.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(DatePicker)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe("DatePicker.vue with all props", () => {
  const wrapper = shallowMount(DatePicker, {
    propsData: datePickerPropsMock,
  });

  it("contains date picker wrapper", () => {
    expect(wrapper.contains('.date-picker')).toBe(true)
  });

  it("emits change event", () => {
    wrapper.vm.$emit('change-date')
    expect(wrapper.emitted()['change-date']).toBeTruthy()
  });
});
