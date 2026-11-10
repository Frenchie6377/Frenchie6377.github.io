<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const photos = [
  { src: '/maison.jpeg', title: 'Maison', caption: 'Puy-de-Dôme · 12/2024' },
  { src: '/personne.jpeg', title: 'Portrait', caption: 'Puy-de-Dôme · 12/2024' },
  { src: '/statue.jpeg', title: 'Statue', caption: 'Puy-de-Dôme · 12/2024' },
]

const selectedPhoto = ref<string | null>(null)

function openPhoto(src: string) {
  selectedPhoto.value = src
}

function closePhoto() {
  selectedPhoto.value = null
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') closePhoto()
}

onMounted(() => window.addEventListener('keydown', handleEscape))
onUnmounted(() => window.removeEventListener('keydown', handleEscape))
</script>

<template>
  <main class="about-page">
    <section class="interest-section content-width">
      <div class="section-label"><span class="eyebrow">Centres d'intérêt</span><span>01 / 03</span></div>
      <div class="interest-heading"><h2>La <em>photographie</em></h2><p>En dehors de l'informatique, je pratique le tennis depuis huit ans au TC Aulnat. Je suis aussi passionné par la photographie, qui me permet de capturer les paysages et les moments qui m'entourent.</p></div>
      <p class="interest-note">Voici quelques photographies réalisées dans le Puy-de-Dôme. Cliquez sur une image pour l'agrandir.</p>
      <div class="photo-grid"><button v-for="photo in photos" :key="photo.src" type="button" class="photo-card" @click="openPhoto(photo.src)"><img :src="photo.src" :alt="photo.title" /><span>{{ photo.caption }}</span></button></div>
    </section>

    <section class="equipment-section content-width">
      <div class="section-label"><span class="eyebrow">Photographie</span><span>02 / 03</span></div>
      <div class="equipment-grid"><div><h2>Le matériel<br /><em>utilisé.</em></h2><p class="section-muted">Mon matériel accompagne mes sorties et m'aide à expérimenter différents cadrages.</p></div><div class="equipment-list"><div><b>Boîtier reflex</b><p>Canon EOS 7D</p><a href="https://fr.wikipedia.org/wiki/Canon_EOS_7D" target="_blank" rel="noopener noreferrer">Voir la fiche ↗</a></div><div><b>Objectifs</b><p>Canon EF 75-300mm f/4-5,6 III USM<br />Yongnuo 50mm f/1,8</p><a href="https://www.canon.fr/lenses/ef-75-300mm-f-4-5-6-iii-usm-lens/" target="_blank" rel="noopener noreferrer">En savoir plus ↗</a></div><div><b>Stockage</b><p>Carte SD SanDisk de 32 Go</p><a href="https://www.amazon.fr/" target="_blank" rel="noopener noreferrer">Voir la référence ↗</a></div></div></div>
    </section>

    <section class="malte-section">
      <div class="content-width"><div class="section-label"><span class="eyebrow">Engagement</span><span>03 / 03</span></div><div class="malte-grid"><div class="malte-image"><img src="/malte.png" alt="Ordre de Malte France" /></div><div class="malte-copy"><p class="kicker">Ordre de Malte France</p><h2>Être utile,<br /><em>concrètement.</em></h2><p>L'Ordre de Malte France est une association dans laquelle je suis actif depuis mars 2025.</p><p>Je suis équipier secouriste et titulaire des diplômes PSE1 et PSE2. Je suis également formateur Premier Secours Citoyen (PICF, PAEPSC) et participe à des postes de secours lors d'événements.</p><a class="malte-link" href="https://www.ordredemaltefrance.org/" target="_blank" rel="noopener noreferrer">Découvrir l'Ordre de Malte France ↗</a></div></div><div class="missions"><div><img src="/solidarite.png" alt="" /><strong>Solidarité</strong><span>Don de repas, soins et hébergement d'urgence.</span></div><div><img src="/secourisme.png" alt="" /><strong>Secourisme</strong><span>Postes de secours et formations aux gestes qui sauvent.</span></div><div><img src="/medicosocial.png" alt="" /><strong>Médico-social</strong><span>Accompagnement individualisé et projet de vie.</span></div><div><img src="/international.png" alt="" /><strong>International</strong><span>Lutte contre la lèpre et santé materno-infantile.</span></div></div></div>
    </section>

    <dialog v-if="selectedPhoto" class="photo-modal" open @click.self="closePhoto"><div class="photo-modal-content"><button type="button" aria-label="Fermer la photo" @click="closePhoto">×</button><img :src="selectedPhoto" alt="Vue agrandie" /></div></dialog>
  </main>
</template>

<style scoped>
.content-width { margin: auto; max-width: 1600px; padding-left: clamp(1.25rem, 4vw, 4rem); padding-right: clamp(1.25rem, 4vw, 4rem); }.about-intro { padding-bottom: 8rem; padding-top: 5rem; }.page-heading, .section-label { border-bottom: 1px solid var(--line); color: var(--muted); display: flex; font-family: 'DM Mono', monospace; font-size: .65rem; justify-content: space-between; padding-bottom: 1.5rem; text-transform: uppercase; }.eyebrow, .kicker { color: var(--muted); font-family: 'DM Mono', monospace; font-size: .67rem; text-transform: uppercase; }.intro-grid { align-items: end; display: grid; gap: 10vw; grid-template-columns: 1.2fr .8fr; padding-top: 8rem; }.about-intro h1 { font-size: clamp(4rem, 9vw, 9rem); letter-spacing: -.1em; line-height: .82; margin: 1rem 0 0; }.about-intro h1 em, h2 em { color: #87a819; font-style: normal; }.about-intro h1 span { color: #87a819; }.intro-copy { color: var(--muted); font-size: .95rem; line-height: 1.8; max-width: 34rem; }.intro-copy p + p { margin-top: 1.4rem; }.interest-section { padding-bottom: 9rem; }.interest-heading { align-items: end; display: flex; gap: 8vw; justify-content: space-between; padding: 5rem 0 1rem; }.interest-heading h2, .equipment-grid h2, .malte-copy h2 { font-size: clamp(3rem, 6vw, 6.5rem); letter-spacing: -.1em; line-height: .88; margin: 0; }.interest-heading p, .interest-note, .section-muted, .malte-copy > p:not(.kicker) { color: var(--muted); font-size: .9rem; line-height: 1.75; max-width: 34rem; }.interest-note { margin: 2rem 0; }.photo-grid { display: grid; gap: 1rem; grid-template-columns: repeat(3, 1fr); }.photo-card { background: var(--cream); border: 0; color: var(--muted); cursor: pointer; padding: 0 0 .7rem; text-align: left; }.photo-card img { aspect-ratio: 1.15; display: block; filter: saturate(.85); object-fit: cover; transition: transform .4s, filter .4s; width: 100%; }.photo-card:hover img { filter: saturate(1.1); transform: scale(.97); }.photo-card span { display: block; font-family: 'DM Mono', monospace; font-size: .62rem; padding: .7rem .8rem 0; }.equipment-section { border-top: 1px solid var(--line); padding-bottom: 9rem; padding-top: 2rem; }.equipment-grid { display: grid; gap: 10vw; grid-template-columns: 1fr 1fr; padding-top: 6rem; }.equipment-list > div { border-top: 1px solid var(--line); padding: 1.2rem 0; }.equipment-list b { font-size: 1rem; }.equipment-list p { color: var(--muted); font-size: .85rem; line-height: 1.7; }.equipment-list a, .malte-link { color: var(--ink); font-size: .75rem; text-decoration: none; }.equipment-list a:hover, .malte-link:hover { color: #87a819; }.malte-section { background: var(--ink); color: var(--paper); padding: 2rem 0 7rem; }.malte-section .section-label { border-color: #3a483d; color: #9ca99f; }.malte-grid { align-items: center; display: grid; gap: 10vw; grid-template-columns: .9fr 1.1fr; padding: 7rem 0; }.malte-image { background: var(--cream); }.malte-image img { display: block; height: 100%; max-height: 28rem; object-fit: cover; width: 100%; }.malte-copy .kicker { color: #9ca99f; }.malte-copy h2 { margin: 1rem 0 2rem; }.malte-copy h2 em { color: var(--lime); }.malte-copy > p:not(.kicker) { color: #aab5ac; }.malte-link { border-bottom: 1px solid #617065; color: var(--paper); display: inline-block; margin-top: 1rem; padding-bottom: .5rem; }.missions { border-top: 1px solid #3a483d; display: grid; gap: 1rem; grid-template-columns: repeat(4, 1fr); padding-top: 1.5rem; }.missions div { display: flex; flex-direction: column; gap: .55rem; }.missions img { height: 2.5rem; object-fit: contain; object-position: left; width: 2.5rem; }.missions strong { font-size: .85rem; }.missions span { color: #9ca99f; font-size: .72rem; line-height: 1.5; }.photo-modal { align-items: center; background: rgba(23,33,27,.82); display: flex; inset: 0; justify-content: center; padding: 1rem; position: fixed; z-index: 20; }.photo-modal-content { max-height: 92vh; max-width: 1100px; position: relative; }.photo-modal-content img { display: block; max-height: 88vh; max-width: 90vw; object-fit: contain; }.photo-modal-content button { background: var(--lime); border: 0; color: var(--ink); font-size: 1.5rem; height: 2.5rem; position: absolute; right: -1rem; top: -1rem; width: 2.5rem; z-index: 1; }
@media (max-width: 680px) { .about-intro { padding-bottom: 5rem; padding-top: 3.5rem; }.intro-grid, .equipment-grid, .malte-grid { display: block; padding-top: 5rem; }.about-intro h1 { font-size: clamp(3.8rem, 17vw, 6rem); }.intro-copy { margin-top: 3rem; }.interest-section { padding-bottom: 5rem; }.interest-heading { align-items: start; display: block; padding-top: 4rem; }.interest-heading p { margin-top: 2rem; }.photo-grid { grid-template-columns: 1fr; }.photo-card img { aspect-ratio: 1.4; }.equipment-section { padding-bottom: 5rem; }.equipment-list { margin-top: 3rem; }.malte-section { padding-bottom: 5rem; }.malte-grid { padding-bottom: 5rem; }.malte-image { margin-bottom: 3rem; }.missions { grid-template-columns: repeat(2, 1fr); row-gap: 2rem; }.photo-modal-content button { right: 0; top: -3rem; } }
.missions img { height: 4rem; width: 4rem; }
</style>
