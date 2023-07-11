<template>
  <div>
    <Search />

    <Lists />
  </div>
</template>

<script setup>
import Search from "./components/Search/index.vue";
import Lists from "./components/Lists/index.vue";

import { reactive } from "vue";

const state = reactive({
  name: "lowkey11111111",
});
</script>

<style lang="scss" scoped>
@import "./scss/index";
</style>
