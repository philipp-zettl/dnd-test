<script setup lang="ts">
import { ref } from 'vue'

const plans = ref([
  {
    name: 'Basic',
    price: '$9.99/month',
    features: [
      'Generate up to 50 NPCs per month',
      'Access to basic character traits',
      'Simple background generation',
      'Email support'
    ]
  },
  {
    name: 'Premium',
    price: '$19.99/month',
    features: [
      'Generate up to 200 NPCs per month',
      'Advanced character traits and personalities',
      'Detailed background and history generation',
      'Encounter suggestions',
      'Priority email support'
    ]
  },
  {
    name: 'Unlimited',
    price: '$39.99/month',
    features: [
      'Unlimited NPC generation',
      'Full access to all character traits and personalities',
      'Complex background and history generation',
      'Encounter and campaign integration suggestions',
      '24/7 priority support',
      'Early access to new features'
    ]
  }
])
</script>

<template>
  <div class="pricing">
    <div class="container">
      <h1 class="page-title">Choose Your Plan</h1>
      <div class="plans-container">
        <div v-for="plan in plans" :key="plan.name" class="plan-card">
          <h2 class="plan-name">{{ plan.name }}</h2>
          <p class="plan-price">{{ plan.price }}</p>
          <ul class="plan-features">
            <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
          </ul>
          <button class="btn btn-primary">Choose Plan</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing {
  padding: 6rem 0;
  background-color: var(--background-color);
}

.page-title {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: center;
}

.plans-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.plan-card {
  background-color: var(--secondary-color);
  border-radius: 10px;
  padding: 2rem;
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.plan-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(255, 77, 77, 0.2);
}

.plan-name {
  font-size: 1.8rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
}

.plan-price {
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.plan-features {
  list-style-type: none;
  padding: 0;
  margin-bottom: 2rem;
}

.plan-features li {
  margin-bottom: 0.5rem;
}

.btn {
  width: 100%;
}
</style>