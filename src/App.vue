<script setup>
import Header from "./components/Header.vue";
import MarketingDirect from "./pages/MarketingDirect.vue";
</script>

<template>
  <Header />
  <main class="main">
      <MarketingDirect />
  </main>
</template>

<style scoped>
  main {
    min-height: 100%;
    padding: 5rem;
  }
</style>
