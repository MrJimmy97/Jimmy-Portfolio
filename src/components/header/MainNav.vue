<template>
  <div class="nav" :class="mode">
    <the-logo isFontGradi="false"></the-logo>
    <div class="mobile">
      <div
        class="hamburger"
        :class="{ active: isExpandMenu }"
        @click="emit('menuClick')"
      >
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="desktop">
      <router-link v-for="link in navLinks" :to="link.link">
        {{ link.title }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { key } from "../../store";

import { NavLink } from "../../types/header/NavLink";

import TheLogo from "../ui/TheLogo.vue";

const { navLinks, isExpandMenu } = defineProps<{
  navLinks: NavLink[];
  isExpandMenu: Boolean;
}>();

const emit = defineEmits(["menuClick"]);

const store = useStore(key);
const mode = computed(() => {
  return store.state.isLightMode;
});
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 780px) {
  }
  .mobile {
    display: flex;
    width: 30px;
    @media (min-width: 780px) {
      display: none;
    }
    .hamburger {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 15px;
      cursor: pointer;
      div {
        width: 100%;
        height: 2px;
        background-color: #666;
        transition: transform 0.3s;
      }
    }
    .hamburger.active {
      div:first-of-type {
        transform: rotate(45deg) translateY(9px);
      }
      div:last-of-type {
        transform: rotate(-45deg) translateY(-9px);
      }
    }
  }
  .desktop {
    display: none;
    @media (min-width: 780px) {
      display: flex;
      justify-content: flex-end;
      column-gap: 3%;
      width: 80%;
    }
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
      border-bottom: 3px solid #666;
      border-radius: 2px;
      color: black;
    }
  }
}

.nav.dark {
  .mobile {
    .hamburger {
      div {
        background-color: #a7a7a7;
      }
    }
  }
  .desktop {
    color: #a7a7a7;
    a {
      color: #a7a7a7;
    }
    a:hover {
      color: white;
    }
    a.router-link-active {
      border-bottom: 2px solid #a7a7a7;

      color: white;
    }
  }
}
</style>
