import Vue from "vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
const localVue = createLocalVue();

describe("caption.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ComponentName, {
      localVue,
      propsData: {}
    });
  });
});

describe("#didBlur", () => {
  it("should emit setActiveCaptionState event", () => {
    wrapper.vm.didBlur();

    expect(wrapper.emitted("setActiveCaptionState")).toBeTruthy();
    expect(wrapper.emitted("setActiveCaptionState")).toEqual([
      [{ caption: wrapper.vm.subtitle, isActive: false }]
    ]);
  });
});

describe("#didBlur", () => {
  it("emit handleCaptionClicked event", () => {
    const stub = jest.fn();
    wrapper.vm.$eventHub.$on("handleCaptionClicked", stub);
    wrapper.vm.handleClick();
    expect(stub).toBeCalled();
    expect(stub).toBeCalledWith(wrapper.vm.subtitle.start_time);
  });
});
