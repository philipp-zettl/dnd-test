import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NPCGenerator from '../views/NPCGenerator.vue'
import LearnMore from '../views/LearnMore.vue'
import Pricing from '../views/Pricing.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/generator', component: NPCGenerator },
    { path: '/learn-more', component: LearnMore },
    { path: '/pricing', component: Pricing },
  ]
})

export default router