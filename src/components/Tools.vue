<script setup lang="ts">
import { ref } from 'vue'

const tools = ref([
  {
    name: 'NPC Generator',
    description: 'Create fully-fleshed NPCs with unique backgrounds, motivations, and stats.',
    icon: '🧙‍♂️'
  },
  {
    name: 'Encounter Builder',
    description: 'Design balanced and exciting encounters tailored to your party\'s level and composition.',
    icon: '⚔️'
  },
  {
    name: 'Loot Generator',
    description: 'Generate appropriate treasures and magical items for your adventures.',
    icon: '💎'
  }
])
</script>

<template>
  <section class="tools">
    <div class="container">
      <h2 class="section-title">The best tools for creating<br>immersive D&D adventures <span class="highlight">included</span></h2>
      <div class="tools-grid">
        <div v-for="tool in tools" :key="tool.name" class="tool-card">
          <div class="tool-icon">{{ tool.icon }}</div>
          <h3 class="tool-name">{{ tool.name }}</h3>
          <p class="tool-description">{{ tool.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tools {
  padding: 6rem 0;
  background-color: var(--background-color);
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.tool-card {
  background-color: rgba(30, 30, 30, 0.6);
  border-radius: 10px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 77, 77, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.tool-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(255, 77, 77, 0.2);
}

.tool-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.tool-name {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.tool-description {
  font-size: 1rem;
  opacity: 0.8;
}
</style>