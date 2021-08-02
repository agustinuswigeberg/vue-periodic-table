<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <table>
            <tr
              v-for="(elementsRow, rowIndex) in mappedElements"
              :key="rowIndex"
            >
              <td v-for="(element, colIndex) in elementsRow" :key="colIndex">
                <PeriodicTableElement
                  v-if="element"
                  :element="element"
                  :highlight="highlightedBlocks[element.block]"
                  @elementClicked="highlightBlocks(element.block)"
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="col-12">
        <div class="custom-control">
          <input
            type="checkbox"
            class="custom-control-input"
            id="cb-invert-table"
            v-model="invert"
            @change="mapElementsToTable"
          />
          <label for="cb-invert-table" class="custom-control-label">
            INVERT
          </label>
        </div>
      </div>
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
      invert: false,
      highlightedBlocks: {},
    };
  },
  mounted() {
    this.mapElementsToTable();
  },
  methods: {
    mapElementsToTable() {
      this.mappedElements = [];
      while (this.mappedElements.push(new Array(numOfColumns)) < numOfRows);

      if (this.invert) {
        this.elements.forEach((element) => {
          this.mappedElements[numOfRows - element.row][element.column - 1] =
            element;
        });
      } else {
        this.elements.forEach((element) => {
          this.mappedElements[element.row - 1][element.column - 1] = element;
        });
      }
    },
    highlightBlocks(blockName) {
      this.highlightedBlocks = {
        ...this.highlightedBlocks,
        [blockName]: !this.highlightedBlocks[blockName],
      };
      console.log(this.highlightedBlocks);
    },
    isHighlighted(blockName) {
      return this.highlightedBlocks[blockName];
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-control {
  display: block;
  margin-top: 20px;
  font-size: 1.2rem;
  text-align: center;

  .custom-control-input {
    margin-right: 6px;
  }

  .custom-control-label {
    font-weight: bold;
  }
}
</style>
