<template>
  <div class="container" :class="mode">
    <div class="title">For any questions please mail me&#128522;</div>
    <div class="email fontGradi">jimmy973878@gmail.com</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { key } from "../../store";

const store = useStore(key);

const mode = computed(() => {
  return store.state.isLightMode;
});
</script>

<style scoped lang="scss">
.container {
  display: grid;
  place-items: center;
  margin: auto 0;
  font-weight: 500;
  @media (min-width: 360px) {
    font-size: 16px;
  }
  @media (min-width: 600px) {
    font-size: 20px;
  }
  @media (min-width: 780px) {
    font-size: 30px;
  }
}
.container.dark {
  color: #ccc;
}
</style>
