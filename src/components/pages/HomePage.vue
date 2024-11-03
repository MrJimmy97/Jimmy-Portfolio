<template>
  <div>
    <div class="intro">
      <div class="description" :class="mode">
        Hi👋,<br />
        My name is <br /><span class="fontGradi">Jimmy Lo</span><br />
        I am a self-taught developer
      </div>
      <div class="icon">
        <img src="../../assets/icon.jpeg" alt="icon" />
      </div>
    </div>
    <tech-stack :home="true"></tech-stack>
    <the-projects :home="true"></the-projects>
  </div>
</template>

<script setup lang="ts">
import TechStack from "../TechStack/TechStack.vue";
import TheProjects from "../TheProjects/TheProjects.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { key } from "../../store";

const store = useStore(key);

const mode = computed(() => {
  return store.state.isLightMode;
});
</script>

<style scoped lang="scss">
.intro {
  font-weight: 700;
  color: #42446e;
  font-size: 28px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  min-height: calc(100vh - 120px);
  @media (min-width: 780px) {
    min-height: calc(100vh - 275px);
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 180px;
    font-size: 40px;
  }
  .description.dark {
    color: white;
  }
  .icon {
    width: clamp(170px, 40%, 240px);
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: linear-gradient(to left, #13b0f5, #e70faa);
    align-self: center;
    display: grid;
    place-items: center;
    margin-bottom: 80px;
    @media (min-width: 780px) {
      width: 300px;
    }
    img {
      width: 95%;
      border-radius: 50%;
    }
  }
}
</style>
