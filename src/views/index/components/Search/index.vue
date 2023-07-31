<template>
  <div class="search">
    <div class="search-input">
      <el-input v-model="state.searchVal" size="large" placeholder="想搜索些啥" clearable :prefix-icon="Search" @input="inputSeachVal" />
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import { Search } from "@element-plus/icons-vue";

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
