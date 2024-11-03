<template>
  <div
    class="container"
    :class="{ fontGradi: isFontGradi }"
    @click="toggleMode"
  >
    <div class="title">{Developer}</div>
    <div class="name">Jimmy Lo</div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { key } from "../../store";

const { isFontGradi } = defineProps(["isFontGradi"]);

const store = useStore(key);

function toggleMode() {
  store.commit("toggleLightMode");
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  line-height: 24px;
  line-height: 20px;
  cursor: pointer;
  @media (min-width: 780px) {
    line-height: 24px;
  }
  .title {
    align-self: flex-end;
    font-size: 18px;
    @media (min-width: 780px) {
      font-size: 22px;
    }
  }
  .name {
    font-size: 14px;
    @media (min-width: 780px) {
      font-size: 16px;
    }
  }
}
</style>
