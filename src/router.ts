import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ContactView from './views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/a-propos', name: 'about', component: AboutView },
    { path: '/projets', name: 'projects', component: ProjectsView },
    { path: '/contact', name: 'contact', component: ContactView },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

export default router
