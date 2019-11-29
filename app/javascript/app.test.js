import { mount } from '@vue/test-utils'
import App from './app.vue'

describe('App.vue', () => {
  it('increments counter', () => {
    const wrapper = mount(App);

    expect(wrapper.html()).toMatchSnapshot()
  })
})
