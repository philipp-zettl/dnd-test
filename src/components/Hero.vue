<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const title = ref('Create NPCs that');
const highlightedWord = ref('inspire');
const subtitle = ref(
  'Breathe life into your D&D world with AI-generated characters that captivate and engage your players.'
);

const words = ['inspire', 'immerse', 'engage', 'animate', 'interest', 'excite'];
let currentIndex = 0;
let intervalId: number | null = null;

const rotateWords = () => {
  currentIndex = (currentIndex + 1) % words.length;
  highlightedWord.value = words[currentIndex];
};

onMounted(() => {
  intervalId = setInterval(rotateWords, 20000) as unknown as number;
});

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
});
</script>

<template>
  <section class="hero">
    <div class="container hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          {{ title }}
          <span class="highlight word-rotation">
            <transition name="fade" mode="out-in">
              <span :key="highlightedWord">{{ highlightedWord }}</span>
            </transition>
          </span>
        </h1>
        <p class="hero-subtitle">{{ subtitle }}</p>
        <div class="hero-cta">
          <RouterLink to="/generator" class="btn btn-primary"
            >Generate NPC</RouterLink
          >
          <RouterLink to="/learn-more" class="btn btn-secondary"
            >Learn More</RouterLink
          >
        </div>
      </div>
      <div class="hero-image">
        <img
          src="https://assetsio.gnwcdn.com/Spelljams-D%26D-album-artwork-header-ship.png"
          alt="D&D Artwork"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  background-color: rgba(10, 10, 10, 0.7);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://assetsio.gnwcdn.com/Spelljams-D%26D-album-artwork-header-ship.png');
  background-size: cover;
  background-position: center;
  filter: blur(5px);
  z-index: -1;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero-text {
  max-width: 50%;
}

.hero-title {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  color: #ffffff;
}

.hero-cta {
  display: flex;
  gap: 1rem;
}

.hero-image {
  width: 40%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(255, 77, 77, 0.3);
}

.hero-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.word-rotation {
  display: inline-block;
  min-width: 120px;
  text-align: left;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
