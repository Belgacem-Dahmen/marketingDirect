<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import FadeSlideTransition from "./transitions/FadeSlideTransition.vue";
</script>

<template>
  <Header />
  <FadeSlideTransition>
    <main class="main">
      <RouterView />
    </main>
  </FadeSlideTransition>
</template>

<style scoped>
main {
  min-height: 100%;
  padding: 5rem;
}
</style>
