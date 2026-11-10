<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

type Project = {
  number: string
  title: string
  text: string
  color: string
  details: string
  role: string
  technologies: string
  images: string[]
}

const projects: Project[] = [
  {
    number: '01',
    title: 'SAE Développement d’une application 2A',
    text: 'Une application autour du jeu Qwirkle, développée en équipe pour mobile, web et administration.',
    color: '#d8f36a',
    details: 'Pendant 165 heures, j’ai participé à la conception d’une application permettant de jouer à Qwirkle. Le projet comprenait une version mobile, une version web et une partie administration.',
    role: 'Développement web · mobile · administration',
    technologies: 'PHP · Android/Kotlin · PostgreSQL',
    images: ['/qwirkle.png', '/profilPicture.png', '/qwirkleGame2D.png', '/qwirkleGame3D.png'],
  },
  {
    number: '02',
    title: 'SAE Développement d’application',
    text: 'Un jeu de stratégie numérique inspiré de Jinx, réalisé en équipe pendant le BUT Informatique.',
    color: '#b7d8ff',
    details: 'Pendant 11 semaines, nous avons développé une application permettant de jouer à une partie complète de Jinx, avec une interface de paramètres, des scores et des dés.',
    role: 'Conception · Paramètres · Scores · Dés',
    technologies: 'C# · XAML · .NET · CI/CD',
    images: ['/jinx.png', '/sae.png'],
  },
  {
    number: '03',
    title: 'SAE Exploitation d’une base de données',
    text: 'Une analyse de jeux de données publics pour déterminer le type de vin adapté à une entreprise fictive.',
    color: '#f3c7b7',
    details: 'Le projet consistait à rechercher, nettoyer et analyser des données afin de mettre en évidence les caractéristiques qualitatives du vin et de produire des graphiques utiles.',
    role: 'Recherche · Nettoyage · Analyse · Datavisualisation',
    technologies: 'PostgreSQL · Python · Matplotlib',
    images: ['/SQL.png', '/graphiqueSql.png'],
  },
  {
    number: '04',
    title: 'Site web d’une école de chant',
    text: 'Refonte en cours du site d’une école de chant pour mieux répondre aux besoins de sa responsable.',
    color: '#e3d6ff',
    details: 'Un projet personnel encore en construction : la structure, la bannière et la présentation du logo sont progressivement améliorées pour rendre le site plus lisible.',
    role: 'Conception · Refonte · Intégration',
    technologies: 'HTML · CSS · JavaScript',
    images: ['/Academy1.png', '/Academy2.png'],
  },
]

const selected = ref(0)
const modalOpen = ref(false)
const activeImage = ref(0)

function openProject(index: number) {
  selected.value = index
  activeImage.value = 0
  modalOpen.value = true
}

function closeProject() {
  modalOpen.value = false
}

function nextImage() {
  const imageCount = projects[selected.value].images.length
  if (imageCount) activeImage.value = (activeImage.value + 1) % imageCount
}

function previousImage() {
  const imageCount = projects[selected.value].images.length
  if (imageCount) activeImage.value = (activeImage.value - 1 + imageCount) % imageCount
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') closeProject()
}

onMounted(() => window.addEventListener('keydown', handleEscape))
onUnmounted(() => window.removeEventListener('keydown', handleEscape))
</script>

<template>
  <main class="projects-page content-width">
    <div class="page-heading"><span class="eyebrow">04 — Projets</span><span>Réalisations</span></div>
    <section class="projects-intro"><h1>Ce que<br /><em>je construis.</em></h1><p>Retrouvez ici les projets qui illustrent mon apprentissage en BUT Informatique.</p></section>

    <div class="project-list">
      <button v-for="(project, index) in projects" :key="project.number" class="project-row" :class="{ selected: selected === index }" type="button" @click="openProject(index)">
        <span class="number">{{ project.number }}</span>
        <img class="project-thumb" :src="project.images[0]" :alt="project.title" />
        <span class="project-title">{{ project.title }}</span>
        <span class="project-text">{{ project.text }}</span>
        <span class="arrow">↗</span>
      </button>
    </div>

    <div class="project-preview" :style="{ background: projects[selected].color }">
      <img class="project-preview-image" :src="projects[selected].images[0]" :alt="projects[selected].title" />
      <span>Projet {{ projects[selected].number }}</span><strong>{{ projects[selected].title }}</strong><p>{{ projects[selected].details }}</p>
      <div class="preview-meta"><span><b>Rôle</b>{{ projects[selected].role }}</span><span><b>Technologies</b>{{ projects[selected].technologies }}</span></div>
      <button class="details-button" type="button" @click="openProject(selected)">Voir le projet en détail <span>↗</span></button>
    </div>

    <div v-if="modalOpen" class="modal-backdrop" role="presentation" @click.self="closeProject">
      <section class="project-modal" role="dialog" aria-modal="true" :aria-labelledby="`project-title-${projects[selected].number}`">
        <button class="modal-close" type="button" aria-label="Fermer la fenêtre" @click="closeProject">×</button>
        <div class="modal-layout">
          <div v-if="projects[selected].images.length" class="project-gallery">
            <div class="gallery-main"><img :src="projects[selected].images[activeImage]" :alt="`Capture du projet ${projects[selected].title}`" /><button class="gallery-arrow gallery-previous" type="button" aria-label="Image précédente" @click="previousImage">←</button><button class="gallery-arrow gallery-next" type="button" aria-label="Image suivante" @click="nextImage">→</button><span class="gallery-counter">{{ activeImage + 1 }} / {{ projects[selected].images.length }}</span></div>
            <div class="gallery-thumbnails"><button v-for="(image, imageIndex) in projects[selected].images" :key="image" type="button" :class="{ active: activeImage === imageIndex }" :aria-label="`Afficher la capture ${imageIndex + 1}`" @click="activeImage = imageIndex"><img :src="image" :alt="`Capture ${imageIndex + 1}`" /></button></div>
          </div>
          <div v-else class="empty-gallery"><span>✳</span><p>Ajoutez ici les photos ou captures d’écran de ce projet.</p></div>
          <div class="modal-info"><div class="modal-heading"><span class="eyebrow">Projet {{ projects[selected].number }}</span><h2 :id="`project-title-${projects[selected].number}`">{{ projects[selected].title }}</h2><p>{{ projects[selected].details }}</p></div><div class="modal-meta"><div><b>Rôle</b><span>{{ projects[selected].role }}</span></div><div><b>Technologies</b><span>{{ projects[selected].technologies }}</span></div></div></div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.content-width { margin: auto; max-width: 1600px; padding-left: clamp(1.25rem, 4vw, 4rem); padding-right: clamp(1.25rem, 4vw, 4rem); }
.projects-page { padding-bottom: 8rem; padding-top: 5rem; }
.page-heading { border-bottom: 1px solid var(--line); color: var(--muted); display: flex; font-family: 'DM Mono', monospace; font-size: .65rem; justify-content: space-between; padding-bottom: 1.5rem; text-transform: uppercase; }
.eyebrow { color: var(--muted); font-family: 'DM Mono', monospace; font-size: .67rem; text-transform: uppercase; }
.projects-intro { align-items: end; display: flex; justify-content: space-between; padding: 7rem 0 5rem; }.projects-intro h1 { font-size: clamp(3.5rem, 7vw, 7rem); letter-spacing: -.1em; line-height: .86; margin: 0; }.projects-intro h1 em { color: #87a819; font-style: normal; }.projects-intro p { color: var(--muted); font-size: .9rem; line-height: 1.7; max-width: 34rem; }
.project-list { border-top: 1px solid var(--line); }.project-row { align-items: center; background: none; border: 0; border-bottom: 1px solid var(--line); color: var(--ink); display: grid; gap: 1.2rem; grid-template-columns: 4% 8rem minmax(12rem, 30%) 1fr 2rem; padding: 1.1rem 0; text-align: left; width: 100%; }.project-row:hover, .project-row.selected { background: rgba(216,243,106,.18); }.number { color: var(--muted); font-family: 'DM Mono', monospace; font-size: .68rem; }.project-thumb { aspect-ratio: 1.45; object-fit: cover; width: 8rem; }.project-title { font-size: clamp(1.15rem, 2vw, 2rem); letter-spacing: -.07em; }.project-text { color: var(--muted); font-size: .75rem; line-height: 1.5; max-width: 24rem; }.arrow { font-size: 1.3rem; }
.project-preview { align-items: center; display: flex; flex-direction: column; gap: .8rem; justify-content: center; margin-top: 3.5rem; min-height: 24rem; padding: 2rem; text-align: center; }.project-preview-image { height: 7rem; object-fit: cover; width: 12rem; }.project-preview > span { color: var(--muted); font-family: 'DM Mono', monospace; font-size: .65rem; }.project-preview strong { font-size: clamp(2rem, 5vw, 4.5rem); letter-spacing: -.08em; line-height: 1; max-width: 100%; overflow-wrap: anywhere; }.project-preview p { color: #51613d; font-size: .85rem; line-height: 1.6; margin: 0; max-width: 32rem; }.preview-meta { display: flex; gap: 2rem; margin-top: .8rem; }.preview-meta span { color: #51613d; display: flex; flex-direction: column; font-family: 'Manrope', sans-serif; font-size: .75rem; }.preview-meta b, .modal-meta b { color: var(--ink); font-family: 'DM Mono', monospace; font-size: .6rem; font-weight: normal; margin-bottom: .3rem; text-transform: uppercase; }.details-button { background: var(--ink); border: 0; color: var(--paper); font-size: .68rem; margin-top: 1.2rem; padding: .85rem 1rem; text-transform: uppercase; }.details-button span { color: var(--lime); margin-left: 1.2rem; }
.modal-backdrop { align-items: center; background: rgba(23,33,27,.72); display: flex; inset: 0; justify-content: center; overflow: auto; padding: 1rem; position: fixed; z-index: 20; }.project-modal { background: var(--paper); box-sizing: border-box; margin: auto; max-height: calc(100dvh - 2rem); max-width: min(960px, calc(100vw - 2rem)); min-width: 0; overflow: auto; padding: clamp(1.25rem, 4vw, 3.5rem); position: relative; width: 100%; }.modal-close { background: var(--ink); border: 0; color: var(--paper); font-size: 1.5rem; height: 2.5rem; line-height: 1; position: absolute; right: 1.5rem; top: 1.5rem; width: 2.5rem; }.modal-layout { align-items: start; display: grid; gap: clamp(2rem, 5vw, 4.5rem); grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr); min-width: 0; }.project-gallery { min-width: 0; }.gallery-main { aspect-ratio: 1.18; overflow: hidden; position: relative; }.gallery-main img { display: block; height: 100%; object-fit: cover; width: 100%; }.gallery-arrow { align-items: center; background: rgba(246,247,242,.9); border: 0; border-radius: 50%; color: var(--ink); display: flex; font-size: 1.1rem; height: 2.3rem; justify-content: center; position: absolute; top: calc(50% - 1.15rem); width: 2.3rem; }.gallery-arrow:hover { background: var(--lime); }.gallery-previous { left: 1rem; }.gallery-next { right: 1rem; }.gallery-counter { background: rgba(23,33,27,.78); bottom: .8rem; color: var(--paper); font-family: 'DM Mono', monospace; font-size: .65rem; padding: .35rem .5rem; position: absolute; right: .8rem; }.gallery-thumbnails { display: flex; flex-wrap: wrap; gap: .6rem; margin-top: .7rem; }.gallery-thumbnails button { background: none; border: 2px solid transparent; cursor: pointer; padding: 0; }.gallery-thumbnails button.active { border-color: #87a819; }.gallery-thumbnails img { aspect-ratio: 1.4; display: block; height: 3.5rem; object-fit: cover; opacity: .55; width: 5rem; }.gallery-thumbnails button.active img, .gallery-thumbnails button:hover img { opacity: 1; }.modal-info { display: flex; flex-direction: column; min-width: 0; min-height: 100%; }.modal-heading { min-width: 0; padding-right: 3rem; }.modal-heading h2 { font-size: clamp(2rem, 5vw, 4.5rem); letter-spacing: -.09em; line-height: .9; margin: 1rem 0; overflow-wrap: anywhere; }.modal-heading p { color: var(--muted); font-size: .9rem; line-height: 1.7; max-width: 38rem; overflow-wrap: anywhere; }.modal-info .modal-meta { margin-top: 3rem; }.modal-meta { border-top: 1px solid var(--line); display: flex; flex-wrap: wrap; gap: 2rem 4rem; padding-top: 1rem; }.modal-meta div { display: flex; flex-direction: column; gap: .4rem; min-width: 0; }.modal-meta span { font-size: .8rem; overflow-wrap: anywhere; }.empty-gallery { align-items: center; background: var(--cream); color: var(--muted); display: flex; flex-direction: column; justify-content: center; min-height: 12rem; text-align: center; }.empty-gallery span { color: #87a819; font-size: 1.8rem; }.empty-gallery p { font-size: .8rem; overflow-wrap: anywhere; }
@media (max-width: 760px) { .projects-page { padding-bottom: 5rem; padding-top: 3.5rem; }.projects-intro { align-items: start; display: block; padding: 4rem 0 3rem; }.projects-intro p { margin-top: 2rem; }.project-row { gap: .7rem; grid-template-columns: 12% 5rem minmax(0, 1fr) 1.5rem; }.project-thumb { width: 5rem; }.project-text { display: none; }.project-title { font-size: 1.05rem; }.project-preview { min-height: 18rem; }.project-preview strong { font-size: clamp(1.8rem, 10vw, 3rem); }.preview-meta { align-items: center; flex-direction: column; gap: .7rem; }.modal-layout { display: block; }.modal-layout .project-gallery { margin-bottom: 2rem; }.modal-info .modal-meta { margin-top: 2rem; }.modal-close { right: .8rem; top: .8rem; }.modal-heading { padding-right: 2.5rem; }.modal-meta { flex-direction: column; gap: 1rem; } }
@media (max-width: 420px) { .project-row { grid-template-columns: 12% 4.2rem minmax(0, 1fr) 1.2rem; }.project-thumb { width: 4.2rem; }.project-title { font-size: .9rem; }.project-modal { max-width: calc(100vw - 1rem); padding: 1rem; } }
</style>
