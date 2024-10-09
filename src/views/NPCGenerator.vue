<script setup lang="ts">
import { ref } from 'vue'

const npcClass = ref('')
const npcRace = ref('')
const npcPurpose = ref('')
const npcAdditionalDetails = ref('')

const generatedNPC = ref({
  name: '',
  background: '',
  alignment: '',
  equipment: '',
  stats: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  },
  potentialEncounters: ''
})

const isGenerating = ref(false)

const generateNPC = () => {
  isGenerating.value = true
  // Simulate API call with setTimeout
  setTimeout(() => {
    generatedNPC.value = {
      name: 'Thorne Ironheart',
      background: 'Former soldier turned wandering paladin',
      alignment: 'Lawful Good',
      equipment: 'Plate armor, longsword, shield, holy symbol',
      stats: {
        strength: 16,
        dexterity: 10,
        constitution: 14,
        intelligence: 12,
        wisdom: 13,
        charisma: 15
      },
      potentialEncounters: 'Thorne might be encountered defending a small village from bandits, or seeking aid for a plague-stricken town.'
    }
    isGenerating.value = false
  }, 2000)
}

const clearForm = () => {
  npcClass.value = ''
  npcRace.value = ''
  npcPurpose.value = ''
  npcAdditionalDetails.value = ''
  generatedNPC.value = {
    name: '',
    background: '',
    alignment: '',
    equipment: '',
    stats: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0
    },
    potentialEncounters: ''
  }
}
</script>

<template>
  <section class="npc-generator">
    <h2 class="section-title">NPC Generator</h2>
    <div class="generator-container">
      <form @submit.prevent="generateNPC" class="npc-form">
        <div class="form-group">
          <label for="npcClass">Class:</label>
          <input type="text" id="npcClass" v-model="npcClass" required>
        </div>
        <div class="form-group">
          <label for="npcRace">Race:</label>
          <input type="text" id="npcRace" v-model="npcRace" required>
        </div>
        <div class="form-group">
          <label for="npcPurpose">Purpose:</label>
          <input type="text" id="npcPurpose" v-model="npcPurpose" required>
        </div>
        <div class="form-group">
          <label for="npcAdditionalDetails">Additional Details:</label>
          <textarea id="npcAdditionalDetails" v-model="npcAdditionalDetails" rows="3"></textarea>
        </div>
        <div class="form-actions">
          <button type="submit" :disabled="isGenerating" class="generate-btn">
            {{ isGenerating ? 'Generating...' : 'Generate NPC' }}
          </button>
          <button type="button" @click="clearForm" class="clear-btn">Clear</button>
        </div>
      </form>
      
      <div v-if="generatedNPC.name" class="generated-npc">
        <h3>Generated NPC</h3>
        <div class="npc-details">
          <p><strong>Name:</strong> {{ generatedNPC.name }}</p>
          <p><strong>Background:</strong> {{ generatedNPC.background }}</p>
          <p><strong>Alignment:</strong> {{ generatedNPC.alignment }}</p>
          <p><strong>Equipment:</strong> {{ generatedNPC.equipment }}</p>
          <div class="stats-block">
            <h4>Stats</h4>
            <ul>
              <li v-for="(value, stat) in generatedNPC.stats" :key="stat">
                <strong>{{ stat.charAt(0).toUpperCase() + stat.slice(1) }}:</strong> {{ value }}
              </li>
            </ul>
          </div>
          <p><strong>Potential Encounters:</strong> {{ generatedNPC.potentialEncounters }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.npc-generator {
  margin-top: 4rem;
  padding: 4rem 2rem;
  background-color: #16213e;
  min-height: calc(100vh - 4rem);
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

.npc-form {
  display: grid;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  color: #e94560;
}

input, textarea {
  padding: 0.5rem;
  border: 1px solid #e94560;
  border-radius: 5px;
  background-color: rgba(15, 52, 96, 0.6);
  color: #e0e0e0;
  transition: all 0.3s ease;
}

input:focus, textarea:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(233, 69, 96, 0.5);
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.generate-btn, .clear-btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
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

.clear-btn:hover {
  background-color: #16213e;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(15, 52, 96, 0.4);
}

.generate-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.generated-npc {
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(15, 52, 96, 0.6);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.generated-npc h3 {
  color: #e94560;
  margin-bottom: 1rem;
}

.npc-details p {
  margin-bottom: 0.5rem;
}

.stats-block {
  margin-top: 1rem;
}

.stats-block h4 {
  color: #e94560;
  margin-bottom: 0.5rem;
}

.stats-block ul {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.generated-npc {
  animation: fadeIn 0.5s ease-out;
}
</style>