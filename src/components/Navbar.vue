<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuItems = ref([
  { name: 'Home', path: '/' },
  { name: 'Learn More', path: '/learn-more' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Generator', path: '/generator' },
])
</script>

<template>
  <nav class="navbar">
    <div class="container navbar-container">
      <RouterLink to="/" class="navbar-brand">D&D NPC AI</RouterLink>
      <ul class="navbar-menu">
        <li v-for="item in menuItems" :key="item.name" class="navbar-item">
          <RouterLink :to="item.path">{{ item.name }}</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  text-decoration: none;
}

.navbar-menu {
  display: flex;
  list-style-type: none;
}

.navbar-item {
  margin-left: 1.5rem;
}

.navbar-item a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar-item a:hover,
.navbar-item a.router-link-active {
  color: var(--primary-color);
}
</style>