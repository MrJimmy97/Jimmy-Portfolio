<template>
  <div :class="mode" class="background">
    <the-header></the-header>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { key } from "./store";
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

const store = useStore(key);

const mode = computed(() => {
  return store.state.isLightMode;
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  box-sizing: border-box;
}

html {
  font-family: "Poppins", sans-serif;
}

body {
  margin: 0;
}

.background {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  color: #666;

  @media (min-width: 1200px) {
    padding: 0 calc(50% - 600px);
  }

}

.light {
  background-color: #f5f5f5;
}
.dark {
  background-color: #191919;
}
.fontGradi {
  background: -webkit-linear-gradient(left, #13b0f5, #e70faa);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
