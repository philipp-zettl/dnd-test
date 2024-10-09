<script setup lang="ts">
import { ref } from 'vue'

const stats = ref([
  { value: '1000+', label: 'NPCs Generated Daily' },
  { value: '95%', label: 'DMs report improved storytelling' }
])
</script>

<template>
  <section class="stats">
    <div class="container">
      <h2 class="section-title">Dungeon Masters <span class="highlight">love</span> our NPC generator</h2>
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat-card">
          <h3 class="stat-value">{{ stat.value }}</h3>
          <p class="stat-label">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats {
  padding: 6rem 0;
  background-color: var(--secondary-color);
}

.stats-grid {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;
}

.stat-card {
  text-align: center;
}

.stat-value {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.2rem;
  opacity: 0.8;
}
</style>