<template>
  <div class="footer" :class="mode">
    <the-logo></the-logo>
    <div class="contact">
      <div>+852 6341 3878</div>
      <div>jimmy973878@gmail.com</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import TheLogo from "../ui/TheLogo.vue";
import { computed } from "vue";
import { key } from "../../store";

const store = useStore(key);

const mode = computed(() => {
  return store.state.isLightMode;
});
</script>

<style lang="scss">
.footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  .contact {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 12px;

    @media (min-width: 360px) {
      font-size: 14px;
    }
    @media (min-width: 780px) {
      width: 60%;
      column-gap: 50px;
      flex-direction: row;
      font-size: 16px;
    }
  }
}
.footer.dark {
color: #ccc;
}
</style>
