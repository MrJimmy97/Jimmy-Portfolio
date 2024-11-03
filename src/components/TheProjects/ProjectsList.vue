<template>
  <div class="list">
    <project-item
      v-for="project in Data_TheProjects"
      :key="project.id"
      :project="project"
    ></project-item>
  </div>
</template>

<script setup lang="ts">
import ProjectItem from "./ProjectItem.vue";
import Data_TheProjects from "../../data/Data_TheProjects";
</script>

<style scoped lang="scss">
.list {
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  row-gap: 20px;
  column-gap: 20px;
  flex-wrap: wrap;
}
</style>
