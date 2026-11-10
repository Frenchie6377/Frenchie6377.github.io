<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterView } from 'vue-router'

import AppHeader from './components/AppHeader.vue'

const isDarkTheme = ref(true)
const hasStoredPreference = ref(false)
const themeClass = 'theme-dark'
const storageKey = 'theme-preference'
let mediaQuery = null
let mediaQueryHandler = null

const syncThemeClass = (enabled) => {
  document.body.classList.toggle(themeClass, enabled)
}

watch(isDarkTheme, (value) => {
  syncThemeClass(value)
  localStorage.setItem(storageKey, value ? 'dark' : 'light')
})

onMounted(() => {
  const storedTheme = localStorage.getItem(storageKey)
  if (storedTheme === 'dark' || storedTheme === 'light') {
    hasStoredPreference.value = true
    isDarkTheme.value = storedTheme === 'dark'
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDarkTheme.value = true
  } else {
    isDarkTheme.value = false
  }
  syncThemeClass(isDarkTheme.value)

  if (!hasStoredPreference.value && window.matchMedia) {
    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQueryHandler = (event) => {
      if (!hasStoredPreference.value) {
        isDarkTheme.value = event.matches
      }
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', mediaQueryHandler)
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(mediaQueryHandler)
    }
  }
})

onBeforeUnmount(() => {
  if (mediaQuery && mediaQueryHandler) {
    if (mediaQuery.removeEventListener) {
      mediaQuery.removeEventListener('change', mediaQueryHandler)
    } else if (mediaQuery.removeListener) {
      mediaQuery.removeListener(mediaQueryHandler)
    }
  }
  document.body.classList.remove(themeClass)
})
</script>

<template>
  <div>
    <AppHeader v-model:darkTheme="isDarkTheme" />
    <RouterView />
  </div>
  
</template>
