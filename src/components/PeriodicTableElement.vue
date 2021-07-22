<template>
  <div
    class="periodic-element"
    :class="[elementBlockClassName, { 'bg-dark': highlighted }]"
    @click="toggleHighlight"
  >
    <div class="row">
      <div class="col-5 element-symbol">
        {{ element.symbol }}
      </div>
      <div class="col-7 element-number">
        {{ element.atomicNumber }}
      </div>
    </div>
    <div class="row">
      <div class="col element-name">
        {{ element.name }}
      </div>
    </div>
    <div class="row">
      <div class="col element-weight">
        {{ element.atomicWeight }}
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  props: {
    element: {
      type: Object,
      default: function () {
        return {
          name: "Hydrogen",
          atomicNumber: 1,
          symbol: "H",
          atomicWeight: "1.008",
          block: "s",
        };
      },
    },
  },
  computed: {
    elementBlockClassName() {
      return `element-block-${this.element.block}`;
    },
  },
  data() {
    return {
      highlighted: false,
    };
  },
  created() {
    const vm = this;
    eventBus.$on("ElementClicked", (payload) => {
      if (payload.className === vm.elementBlockClassName)
        vm.highlighted = !vm.highlighted;
    });

    eventBus.$on("TableMapped", () => {
      vm.highlighted = false;
    });
  },
  methods: {
    toggleHighlight() {
      eventBus.$emit("ElementClicked", {
        className: this.elementBlockClassName,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.periodic-element {
  color: white;
  text-align: left;
  padding: 2px 4px 3px 4px;
  margin: 1px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  &.element-block-s {
    background: #ad1e2d;
  }

  &.element-block-p {
    background: #ed7700;
  }

  &.element-block-d {
    background: #004985;
  }

  &.element-block-f {
    background: #238e03;
  }

  .element-number {
    font-size: 0.675rem;
    text-align: right;
    padding-right: 1rem;
  }

  .element-symbol {
    font-size: 1.1rem;
  }

  .element-name {
    font-size: 0.5rem;
  }

  .element-weight {
    font-size: 0.675rem;
  }
}
</style>
