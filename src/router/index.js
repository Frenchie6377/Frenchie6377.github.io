import { createRouter, createWebHashHistory } from 'vue-router'

import ContactView from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue'
import InteretView from '../views/InteretView.vue'
import PersoView from '../views/PersoView.vue'
import TechniqueView from '../views/TechniqueView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/interet', name: 'interet', component: InteretView },
  { path: '/technique', name: 'technique', component: TechniqueView },
  { path: '/perso', name: 'perso', component: PersoView },
  { path: '/contact', name: 'contact', component: ContactView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
