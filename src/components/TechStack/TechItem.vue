<template>
  <div class="box" :class="{ dark: item.nightMode && mode === 'dark' }">
    <img :src="getImgUrl.href" :alt="item.description" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { TechStackImg } from "../../types/techstack/TechStackImg";
import { useStore } from "vuex";
import { key } from "../../store";

const { item } = defineProps<{ item: TechStackImg }>();

const getImgUrl = computed<URL>(() => {
  return new URL(item.path, import.meta.url);
});

const store = useStore(key);

const mode = computed(() => {
  return store.state.isLightMode;
});
</script>

<style scoped lang="scss">
.box {
  //   background-color: red;
  width: 45%;
  aspect-ratio: 1/1;
  display: grid;
  place-items: center;
  @media (min-width: 600px) {
    width: 25%;
  }
  @media (min-width: 780px) {
    width: 20%;
  }

  img {
    width: 50%;
    height: auto;
    max-width: 100px;
  }
}
.box.dark {
  position: relative;
  img {
    z-index: 1;
  }
}
.box.dark::after {
  content: "";
  position: absolute;
  width: 50%;
  border-radius: 10px;
  aspect-ratio: 1/1;
  background-color: white;
  z-index: 0;
}
</style>
