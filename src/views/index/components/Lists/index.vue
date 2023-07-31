<template>
  <div class="listBox">
    <div class="listBox-item" :class="{ 'listBox-item--active': item.isPlaying }" v-for="(item, index) in filterLists" @click="playSound(index)">
      <div class="listBox-item__info">
        <div class="listBox-item__voice">{{ item.voice }}</div>
        <div class="listBox-item__label">{{ item.label }}</div>
      </div>
      <LoadingBar class="listBox-item__loading" :active="item.isPlaying" />

      <div class="iconBox">
        <!-- <div class="iconBox-icon">
          <el-icon color="#fff" size="32"><VideoPlay /></el-icon>
        </div> -->
        <div class="iconBox-icon" @click.stop="stopSound(index)">
          <el-icon color="#fff" size="32"><RefreshRight /></el-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoadingBar from "@/components/LoadingBar/index.vue";

import { computed, onMounted, reactive, watch } from "vue";
import { Howl, Howler } from "howler";
import listsData from "@/assets/json/lists.js";

const $props = defineProps({
  searchVal: String,
});

const state = reactive({
  data: [],
});

const initSound = (e) => {
  return new Promise((resolve, reject) => {
    if (audio.howl) {
      state.data[e] = audio.howl;
      resolve();
    } else {
      state.data[e] = audio.howl = new Howl({
        src: [audio.file],
        html5: true,
        onload: () => {
          console.log(e);
        },
        onend: (e) => {
          console.log(e);
          audio.isPlaying = false;
        },
      });

      resolve();
    }
  });
};

const playSound = (e) => {
  let sound;
  let audio = state.data[e];

  if (audio.howl) {
    sound = audio.howl;
  } else {
    sound = audio.howl = new Howl({
      src: [audio.file],
      html5: true,
      onload: () => {
        console.log(e);
      },
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

const stopSound = (e) => {
  let sound = state.data[e].howl;
  sound.stop();
  state.data[e].isPlaying = true;
  sound.play();
};

const filterLists = computed(() => {
  return state.data.filter((item) => item.label.indexOf($props.searchVal) !== -1);
});

watch(
  () => $props.searchVal,
  (e1, _e1) => {
    console.log(e1);
  }
);

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
