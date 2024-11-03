<template>
  <div class="container" :class="{ home: home }">
    <div class="title" :class="mode">
      <h3>Projects</h3>
      <div>Things I’ve built so far</div>
    </div>
    <projects-list></projects-list>
  </div>
</template>

<script setup lang="ts">
import ProjectsList from "./ProjectsList.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { key } from "../../store";
const { home } = defineProps<{ home: boolean }>();

const store = useStore(key);

const mode = computed(() => {
  return store.state.isLightMode;
});
</script>

<style scoped lang="scss">
.container.home {
  min-height: calc(100vh - 120px);
  padding-bottom: 120px;
  @media (min-width: 780px) {
    min-height: auto;
    margin-bottom: 0;
  }
  .title {
    text-align: center;

  }
}

.container {
  margin: 0;
  min-height: calc(100vh - 400px);
  @media (min-width: 780px) {

  }
  .title {
    margin-bottom: 60px;
    h3 {
      font-size: 24px;
      color: #42446e;
      margin-top: 24px;
      margin-bottom: 12px;
      @media (min-width: 780px) {
        font-size: 36px;
      }
    }
    div {
      @media (min-width: 780px) {
        font-size: 20px;
      }
    }
  }
  .title.dark {
    h3 {
      color: #ccc;
    }
    div {
      color: #a7a7a7;
    }
  }
}
</style>
