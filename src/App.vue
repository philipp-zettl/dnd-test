<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

:root {
  --primary-color: #ff4d4d;
  --background-color: #0a0a0a;
  --text-color: #ffffff;
  --secondary-color: #1e1e1e;
  --accent-color: #8b5cf6;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
}

.app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #ff6b6b;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--text-color);
}

.btn-primary:hover {
  background-color: #ff6b6b;
}

.btn-secondary {
  background-color: var(--accent-color);
  color: var(--text-color);
}

.btn-secondary:hover {
  background-color: #9d6eff;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.highlight {
  color: var(--primary-color);
}
</style>