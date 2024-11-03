<template>
  <div class="container">
    <tech-item
      v-for="item in Data_TechStack"
      :item="item"
      :key="item.id"
    ></tech-item>
  </div>
</template>

<script setup lang="ts">
import TechItem from "./TechItem.vue";

import Data_TechStack from "../../data/Data_TechStack";
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  row-gap: 20px;
}
</style>
