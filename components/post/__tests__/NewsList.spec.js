import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import NewsList from "../NewsList"
import BootstrapVue from 'bootstrap-vue'
import SocialSharing from 'vue-social-sharing'
import moment from '~/plugins/vue-moment'
import disqus from '~/plugins/disqus'
import social from '~/plugins/vue-social-sharing'

// import Logo from '@/components/Logo.vue'

const factory = () => {
  const localVue = createLocalVue();
  localVue.use(BootstrapVue);
  localVue.use(moment);
  localVue.use(disqus);
  return mount(NewsList, {
    localVue,
    propsData: {
      posts:{
        tag: "test",
        published: "2021-02-23T11:04:29.768Z"
      }
    },
    mocks: {},
    stubs: {
      adsbygoogle: { template: "<div></div> "}
    },
    methods: {},
  });
};

describe('NewsList', () => {
  test('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.vm).toBeTruthy()
  })

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
})
