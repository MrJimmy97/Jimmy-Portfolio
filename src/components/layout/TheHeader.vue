<template>
  <nav>
    <main-nav
      :navLinks="navLinks"
      @menuClick="toggleMenu"
      :isExpandMenu="isExpandMenu"
    ></main-nav>
    <transition>
      <the-menu :navLinks="navLinks" :isExpandMenu="isExpandMenu"></the-menu>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import { NavLink } from "../../types/header/NavLink";

import MainNav from "../header/MainNav.vue";
import TheMenu from "../header/TheMenu.vue";

const isExpandMenu = ref<Boolean>(false);
function toggleMenu(): void {
  isExpandMenu.value = !isExpandMenu.value;
}

function resizeHandler(): void {
  if (window.innerWidth > 780) isExpandMenu.value = false;
}

const resizeEventListener: any = window.addEventListener(
  "resize",
  resizeHandler
);

onUnmounted(() => {
  window.removeEventListener("resize", resizeEventListener);
});

const navLinks: NavLink[] = [
  { link: "/home", title: "Home" },
  { link: "/about", title: "About" },
  { link: "/tech", title: "Tech Stack" },
  { link: "/projects", title: "Projects" },
  { link: "/comments", title: "Comments" },
  { link: "/contact", title: "Contact" },
];
</script>

<style></style>
