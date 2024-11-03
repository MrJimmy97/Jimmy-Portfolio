<template>
  <transition>
    <div class="menu" :class="mode" v-if="props.isExpandMenu">
      <router-link v-for="navLink in navLinks" :to="navLink.link">{{
        navLink.title
      }}</router-link>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { key } from "../../store";
import { computed, watch, toRefs } from "vue";
import { NavLink } from "../../types/header/NavLink";

const props = defineProps<{
  navLinks: NavLink[];
  isExpandMenu: Boolean;
}>();

const { isExpandMenu } = toRefs(props);

const store = useStore(key);

const mode = computed(() => {
  return store.state.isLightMode;
});

watch(isExpandMenu, (newVal) => {
  console.log("toggle");
  if (newVal) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "visible";
});
</script>

<style lang="scss">
.v-enter-from,
.v-leave-to {
  height: 0;
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.v-enter-to,
.v-leave-from {
  height: calc(100vh - 120px);
  opacity: 1;
}
.menu {
  position: absolute;
  min-height: calc(100vh - 120px);
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  background-color: white;
  z-index: 1;
  a {
    text-decoration: none;
    display: block;
    color: #666;
    padding-bottom: 10px;
  }
  a:hover {
    color: black;
  }
  a.router-link-active {
    border-radius: 2px;
    color: black;
    border: none;
  }
}
.menu.dark {
  a {
    color: #a7a7a7;
  }
  a:hover {
    color: white;
  }
  a.router-link-active {
    color: white;
  }
}
</style>
