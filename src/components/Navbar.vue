<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
</script>

<template>
  <header class="site-header">
    <RouterLink class="wordmark" to="/" @click="closeMenu">Portfolio<span>.</span></RouterLink>
    <button class="menu-button" type="button" :aria-expanded="menuOpen" aria-label="Ouvrir le menu" @click="menuOpen = !menuOpen">
      <span></span><span></span>
    </button>
    <nav class="site-nav" :class="{ open: menuOpen }">
      <RouterLink to="/" @click="closeMenu">Accueil</RouterLink>
      <RouterLink to="/a-propos" @click="closeMenu">À propos</RouterLink>
      <RouterLink to="/projets" @click="closeMenu">Projets</RouterLink>
      <RouterLink to="/contact" @click="closeMenu">Contact</RouterLink>
    </nav>
    <span class="student-badge">BUT2A</span>
  </header>
</template>

<style scoped>
.site-header { align-items: center; background: rgba(246, 247, 242, .88); backdrop-filter: blur(16px); display: flex; justify-content: space-between; padding: 1.35rem clamp(1.25rem, 6vw, 7.5rem); position: sticky; top: 0; z-index: 10; }
.wordmark { color: var(--ink); font-size: 1.15rem; font-weight: 800; letter-spacing: -.06em; text-decoration: none; }.wordmark span { color: #87a819; }
.site-nav { display: flex; gap: clamp(1rem, 3vw, 3rem); }.site-nav a { color: var(--muted); font-size: .75rem; font-weight: 700; text-decoration: none; text-transform: uppercase; }.site-nav a:hover, .site-nav a.router-link-active { color: #87a819; }.student-badge { border: 1px solid var(--line); color: var(--muted); font-family: 'DM Mono', monospace; font-size: .62rem; padding: .35rem .55rem; }
.menu-button { background: none; border: 0; display: none; }.menu-button span { background: var(--ink); display: block; height: 1px; margin: .3rem; width: 1.4rem; }
@media (max-width: 680px) { .menu-button { display: block; order: 3; }.student-badge { margin-left: auto; margin-right: 1rem; }.site-nav { background: var(--cream); display: none; flex-direction: column; gap: 1.5rem; left: 0; padding: 5rem 1.5rem 2rem; position: absolute; top: 0; width: 100%; z-index: -1; }.site-nav.open { display: flex; }.site-nav a { font-size: .8rem; } }
</style>
