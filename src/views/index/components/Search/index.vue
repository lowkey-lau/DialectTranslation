<template>
  <div class="search">
    <el-input v-model="state.searchVal" placeholder="想搜索些啥" />
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  searchVal: "",
});
</script>
<style lang="scss" scoped>
@import "./index";
</style>
