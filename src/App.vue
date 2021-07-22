<template>
  <div id="app">
    <PeriodicTable :elements="periodicTableData" />
  </div>
</template>

<script>
import PeriodicTable from "./components/PeriodicTable";
import PeriodicTableData from "./data/periodic-table-data.json";

export default {
  name: "App",
  components: {
    PeriodicTable,
  },
  data() {
    return {
      periodicTableData: PeriodicTableData,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
