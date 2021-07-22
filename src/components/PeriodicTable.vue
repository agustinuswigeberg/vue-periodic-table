<template>
  <div>
    <div class="container">
      <table>
        <tr v-for="(elementsRow, rowIndex) in mappedElements" :key="rowIndex">
          <td v-for="(element, colIndex) in elementsRow" :key="colIndex">
            <PeriodicTableElement v-if="element" :element="element" />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import PeriodicTableElement from "./PeriodicTableElement";
const numOfRows = 9;
const numOfColumns = 18;

export default {
  props: {
    elements: {
      type: Array,
      required: true,
      default: function () {
        return [];
      },
    },
  },
  components: {
    PeriodicTableElement,
  },
  data() {
    return {
      mappedElements: [],
    };
  },
  mounted() {
    while (this.mappedElements.push(new Array(numOfColumns)) < numOfRows);
    this.mapElementsToTable();
  },
  methods: {
    mapElementsToTable() {
      this.elements.forEach((element) => {
        this.mappedElements[element.row - 1][element.column - 1] = element;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>