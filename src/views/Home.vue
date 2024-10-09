<script setup lang="ts">
import Hero from '../components/Hero.vue'
import Features from '../components/Features.vue'
import Tools from '../components/Tools.vue'
import Stats from '../components/Stats.vue'
</script>

<template>
  <div class="home">
    <Hero />
    <Features />
    <Tools />
    <Stats />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>