<script setup lang="ts">
import { ref, computed } from 'vue'

const npcName = ref('')
const npcRace = ref('')
const npcClass = ref('')
const npcBackground = ref('')
const npcAlignment = ref('')
const npcPersonality = ref('')
const isGenerating = ref(false)

const generateNPC = () => {
  isGenerating.value = true
  // Simulate API call with setTimeout
  setTimeout(() => {
    npcName.value = 'Thorne Ironheart'
    npcRace.value = 'Dwarf'
    npcClass.value = 'Paladin'
    npcBackground.value = 'Soldier'
    npcAlignment.value = 'Lawful Good'
    npcPersonality.value = 'Brave and steadfast, Thorne is a beacon of hope in dark times. His unwavering loyalty to his comrades is matched only by his dedication to his oath.'
    isGenerating.value = false
  }, 2000)
}

const clearNPC = () => {
  npcName.value = ''
  npcRace.value = ''
  npcClass.value = ''
  npcBackground.value = ''
  npcAlignment.value = ''
  npcPersonality.value = ''
}

const hasNPCData = computed(() => 
  npcName.value || npcRace.value || npcClass.value || 
  npcBackground.value || npcAlignment.value || npcPersonality.value
)
</script>

<template>
  <section class="npc-generator">
    <h2 class="section-title">NPC Generator</h2>
    <div class="generator-container">
      <div class="control-panel">
        <button @click="generateNPC" :disabled="isGenerating" class="generate-btn">
          {{ isGenerating ? 'Generating...' : 'Generate NPC' }}
        </button>
        <button @click="clearNPC" :disabled="!hasNPCData" class="clear-btn">Clear</button>
      </div>
      <div class="npc-display" :class="{ 'generating': isGenerating }">
        <div class="npc-attribute">
          <h3>Name</h3>
          <p>{{ npcName || 'N/A' }}</p>
        </div>
        <div class="npc-attribute">
          <h3>Race</h3>
          <p>{{ npcRace || 'N/A' }}</p>
        </div>
        <div class="npc-attribute">
          <h3>Class</h3>
          <p>{{ npcClass || 'N/A' }}</p>
        </div>
        <div class="npc-attribute">
          <h3>Background</h3>
          <p>{{ npcBackground || 'N/A' }}</p>
        </div>
        <div class="npc-attribute">
          <h3>Alignment</h3>
          <p>{{ npcAlignment || 'N/A' }}</p>
        </div>
        <div class="npc-attribute personality">
          <h3>Personality</h3>
          <p>{{ npcPersonality || 'N/A' }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.npc-generator {
  padding: 4rem 2rem;
  background-color: #16213e;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #e94560;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(233, 69, 96, 0.5);
}

.generator-container {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(26, 26, 46, 0.8);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.control-panel {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.generate-btn, .clear-btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 0.5rem;
}

.generate-btn {
  background-color: #e94560;
  color: #fff;
}

.generate-btn:hover:not(:disabled) {
  background-color: #c81e45;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(233, 69, 96, 0.4);
}

.clear-btn {
  background-color: #0f3460;
  color: #fff;
}

.clear-btn:hover:not(:disabled) {
  background-color: #16213e;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(15, 52, 96, 0.4);
}

.generate-btn:disabled, .clear-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.npc-display {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.npc-display.generating {
  opacity: 0.5;
}

.npc-attribute {
  background: rgba(15, 52, 96, 0.6);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.npc-attribute:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.npc-attribute h3 {
  color: #e94560;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.npc-attribute p {
  color: #e0e0e0;
  font-size: 1rem;
  line-height: 1.4;
}

.personality {
  grid-column: span 2;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(233, 69, 96, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(233, 69, 96, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(233, 69, 96, 0);
  }
}

.generating .npc-attribute {
  animation: pulse 1.5s infinite;
}
</style>