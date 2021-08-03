import { shallowMount } from "@vue/test-utils";
import PeriodicTableElement from "../../src/components/PeriodicTableElement";

describe("PeriodicTableElement.vue", () => {
  it("renders props.element.name when passed", () => {
    const element = {
      name: "Hydrogen",
      atomicNumber: 1,
      symbol: "H",
      atomicWeight: "1.008",
      block: "s",
    };
    const wrapper = shallowMount(PeriodicTableElement, {
      propsData: { element },
    });
    expect(wrapper.text()).toMatch(element.name);
  });
});
