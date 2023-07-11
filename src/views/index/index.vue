<template>
  <div>
    <Search @setSearchVal="setSearchVal" />

    <Lists :searchVal="state.searchVal" />
  </div>
</template>

<script setup>
import Search from "./components/Search/index.vue";
import Lists from "./components/Lists/index.vue";

import { reactive } from "vue";

const state = reactive({
  name: "lowkey11111111",
  searchVal: "",
});

const setSearchVal = (e) => {
  console.log("12312 ->", e);
  state.searchVal = e;
};
</script>

<style lang="scss" scoped>
@import "./scss/index";
</style>
