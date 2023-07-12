<template>
  <div class="titleBox">
    <div class="titleBox-label">{{ $props.title }}</div>
  </div>
</template>

<script setup>
const $props = defineProps({
  title: String,
});
</script>
<style lang="scss" scoped>
@import "./index";
</style>
