import { createLocalVue, mount } from '@vue/test-utils'
import SiteHeader from "../SiteHeader"
import BootstrapVue from 'bootstrap-vue'
// import Logo from '@/components/Logo.vue'

const factory = () => {
  const localVue = createLocalVue();
  localVue.use(BootstrapVue);
  return mount(SiteHeader, {
    localVue
  });
};

describe('SiteHeader', () => {
  test('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
})
