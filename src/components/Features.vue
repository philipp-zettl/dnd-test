<script setup lang="ts">
import { ref } from 'vue'

const features = ref([
  {
    title: 'NPC Generator',
    description: 'Create unique and detailed NPCs with just a few clicks. Our AI-powered generator considers class, race, purpose, and more to craft compelling characters.',
    icon: '🧙‍♂️'
  },
  {
    title: 'Campaign Consistency',
    description: 'Maintain a cohesive world with NPCs that fit seamlessly into your campaign setting. Our generator ensures consistency across all characters.',
    icon: '🌍'
  },
  {
    title: 'Background Builder',
    description: 'Dive deep into your NPCs\' histories with our background builder. Create rich, detailed backstories that add depth to your world and inspire new plot hooks.',
    icon: '📜'
  }
])
</script>

<template>
  <section id="features" class="features">
    <div class="container">
      <h2 class="section-title">Crafting NPCs is <span class="highlight">challenging</span>.<br>Let us help you create unforgettable characters.</h2>
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 6rem 0;
  background-color: var(--secondary-color);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.feature-card {
  background-color: rgba(30, 30, 30, 0.6);
  border-radius: 10px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 77, 77, 0.2);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(255, 77, 77, 0.2);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.feature-description {
  font-size: 1rem;
  opacity: 0.8;
}
</style>