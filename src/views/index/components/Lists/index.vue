<template>
  <div class="listBox">
    <div class="listBox-item" :class="{ 'listBox-item--active': item.isPlaying }" v-for="(item, index) in state.data">
      <div @click="playSound(index)">{{ item.label }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { Howl, Howler } from "howler";
import listsData from "@/assets/json/lists.js";

const state = reactive({
  data: [],
});

const playSound = (e) => {
  let sound;
  let audio = state.data[e];

  if (audio.howl) {
    sound = audio.howl;
  } else {
    sound = audio.howl = new Howl({
      src: [audio.file],
      html5: true,
      onend: (e) => {
        console.log(e);
        audio.isPlaying = false;
      },
    });
  }

  if (!audio.isPlaying) {
    audio.isPlaying = true;
    sound.play();
  } else {
    audio.isPlaying = false;
    sound.pause();
  }
};

onMounted(() => {
  listsData.forEach((e) => {
    e.howl = null;
    e.isPlaying = false;
  });
  console.log(listsData);
  state.data = listsData;
});
</script>

<style lang="scss" scoped>
@import "./index";
</style>
