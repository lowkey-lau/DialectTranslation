<template>
  <div class="pages">
    <router-view />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0 auto;
}
.pages {
  background-color: $color-bg;
}
</style>
