<template>
  <div class="container" :class="mode">
    <div class="imgBox" :class="project.imgMode">
      <img :src="getImgUrl.href" alt="" />
    </div>
    <div class="contentBox">
      <div class="title">{{ project.title }}</div>
      <div class="description">{{ project.description }}</div>
      <div class="linkContainer">
        <div class="linkBox">
          <div class="icon">
            <img :src="linkUrl" alt="" />
          </div>
          <a class="link" :href="project.codeHref" target="_blank">Live Demo</a>
        </div>
        <div class="linkBox">
          <div class="icon">
            <img :src="gitUrl" alt="" />
          </div>
          <a class="link" :href="project.liveHref" target="_blank">View Code</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Portfolio } from "../../types/projects/Portfolio";
import { useStore } from "vuex";
import { computed } from "vue";
import { key } from "../../store";
import linkUrl from "../../assets/projects/link.png";
import gitUrl from "../../assets/projects/git.png";

const { project } = defineProps<{ project: Portfolio }>();

const getImgUrl = computed<URL>(() => {
  return new URL(project.imgPath, import.meta.url);
});

const store = useStore(key);

const mode = computed(() => {
  return store.state.isLightMode;
});
</script>

<style scoped lang="scss">
.container {
  width: clamp(260px, 45%, 280px);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  //   min-width: 260px;
  //   max-width: 280px;
  background-color: white;
  height: 400px;
  border-radius: 12px;

  @media (min-width: 780px) {
    width: 30%;
    max-width: 300px;
  }
  .imgBox.center {
    width: 100%;
    height: 50%;
    border-radius: 12px 12px 0 0;
    display: grid;
    place-items: center;
    img.center {
      width: 70%;
      height: auto;
    }
  }
  .imgBox.full {
    width: 100%;
    height: 50%;
    border-radius: 12px 12px 0 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .contentBox {
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 50%;
    .title {
      font-size: 14px;
      font-weight: 600;
      color: black;
    }
    .description {
      margin-top: 10px;
      font-weight: 300;
      font-size: 14px;
    }
    .linkContainer {
      margin-top: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .linkBox {
        width: 50%;
        display: flex;
        justify-content: center;
        column-gap: 6px;
        font-size: 14px;
        .icon {
          img {
            height: 16px;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>
