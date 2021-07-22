<template>
  <div class="periodic-element" :class="`element-block-${element.block}`">
    <div class="row">
      <div class="col-6 element-symbol">
        {{ element.symbol }}
      </div>
      <div class="col-6 element-number">
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
};
</script>

<style lang="scss" scoped>
.periodic-element {
  width: 62px;
  height: 62px;
  color: white;
  text-align: left;
  padding: 2px 4px 3px 4px;
  margin: 2px;

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
    font-size: 11px;
    text-align: right;
    padding-right: 16px;
  }

  .element-symbol {
    font-size: 20px;
  }

  .element-name {
    font-size: 8px;
  }

  .element-weight {
    font-size: 11px;
  }
}
</style>
