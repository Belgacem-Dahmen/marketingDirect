<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";

</script>

<template>
  <Header />
  
    <main class="main">
      <RouterView />
    </main>
 
</template>

<style scoped>
main {
  min-height: 100%;
  padding: 5rem;
}
</style>
