<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  darkTheme: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:darkTheme'])

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: "Centres d'intérêt", to: '/interet' },
  { label: 'Réalisation technique', to: '/technique' },
  { label: 'Projet personnel', to: '/perso' },
  { label: 'Contact | CV', to: '/contact' }
]

const isDark = computed({
  get: () => props.darkTheme,
  set: (value) => emit('update:darkTheme', value)
})

const menuOpen = ref(false)
</script>

<template>
  <header>
    <div class="prenom">
      <p>
        <span class="prenom-full">Dicklan LAGARRIGUE</span>
        <span class="prenom-short">DL</span>
      </p>
    </div>
    <div class="test">
      <button
        class="nav-toggle"
        type="button"
        aria-label="Ouvrir le menu"
        :aria-expanded="menuOpen"
        aria-controls="main-menu"
        @click="menuOpen = !menuOpen"
      >
        ☰
      </button>
      <nav id="main-menu" class="menu" :class="{ 'is-open': menuOpen }">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="button"
          active-class="active"
          exact-active-class="active"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
      <div class="theme-toggle">
        <span class="toggle-label">Thème</span>
        <button class="toggle-button" :class="{ active: isDark }" type="button" @click="isDark = !isDark">
          <span class="toggle-thumb"></span>
        </button>
      </div>
    </div>
  </header>
</template>
