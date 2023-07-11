<template>
  <div class="search">
    <el-input v-model="state.searchVal" placeholder="想搜索些啥" @input="inputSeachVal" />
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";

const $emits = defineEmits(["setSearchVal"]);

const state = reactive({
  searchVal: "",
});

const inputSeachVal = (e) => {
  $emits("setSearchVal", e);
};
</script>
<style lang="scss" scoped>
@import "./index";
</style>
