<template>
  <div>
    <Title title="汕尾话" />
    <Search @setSearchVal="setSearchVal" />
    <Lists :searchVal="state.searchVal" />
  </div>
</template>

<script setup>
import Title from "./components/Title/index.vue";
import Search from "./components/Search/index.vue";
import Lists from "./components/Lists/index.vue";

import { reactive } from "vue";

const state = reactive({
  name: "lowkey11111111",
  searchVal: "",
});

const setSearchVal = (e) => {
  state.searchVal = e;
};
</script>

<style lang="scss" scoped>
@import "./scss/index";
</style>
