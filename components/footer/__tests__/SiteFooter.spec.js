import { createLocalVue, shallowMount } from '@vue/test-utils'
import SiteFooter from "../SiteFooter"
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
// import Logo from '@/components/Logo.vue'

const factory = () => {
  const $recaptcha = { init: function(){return true;} }

  const localVue = createLocalVue();
  localVue.use(VueRouter)
  localVue.use(BootstrapVue);

  const routes = [{ path: '/foo', component: SiteFooter }]
  const router = new VueRouter({
    routes
  })

  return shallowMount(SiteFooter, {
    localVue,
    router,
    mocks: { $recaptcha }
  });
};

describe('SiteHeader', () => {
  test('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
})
