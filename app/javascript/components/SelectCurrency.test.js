import { mount, shallowMount } from '@vue/test-utils'
import SelectCurrency from './SelectCurrency.vue'

const selectCurrencyPropsMock = {
  name: "expenseFrom",
  value: "EUR",
  defaultCurrency: "USD",
  "change-currency": () =>  jest.fn(),
  availableCurrencies: ["EUR", "USD", "HRK"],
}

describe('SelectCurrency.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SelectCurrency)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe("SelectCurrency.vue with all props", () => {
  const wrapper = shallowMount(SelectCurrency, {
    propsData: selectCurrencyPropsMock,
  });

  it("contains select wrapper", () => {
    expect(wrapper.contains('.select-currency')).toBe(true)
  });

  it(`contains ${selectCurrencyPropsMock.availableCurrencies.length} options`, () => {
    expect(wrapper.contains('option')).toBe(true)
    expect(wrapper.findAll('option').length).toBe(selectCurrencyPropsMock.availableCurrencies.length)
  });
});

describe("SelectCurrency.vue with no props", () => {
  const wrapper = shallowMount(SelectCurrency, {
    propsData: {},
  });

  it("renders with no options", () => {
    expect(wrapper.contains('option')).toBe(false)
  });
});
