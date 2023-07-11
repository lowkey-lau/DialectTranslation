<template>
  <div class="loadingBox" :class="{ active: $props.active }">
    <div class="loadingBox-line"></div>
    <div class="loadingBox-line"></div>
    <div class="loadingBox-line"></div>
    <div class="loadingBox-line"></div>
    <div class="loadingBox-line"></div>
  </div>
</template>

<script setup>
const $props = defineProps({
  active: Boolean,
});
</script>

<style lang="scss" scoped>
@import "./index";
</style>
