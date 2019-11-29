import { mount } from '@vue/test-utils'
import App from './app.vue'

describe('App.vue', () => {
  it('matches App layout', () => {
    const wrapper = mount(App);

    expect(wrapper.html()).toMatchSnapshot()
  })
})
