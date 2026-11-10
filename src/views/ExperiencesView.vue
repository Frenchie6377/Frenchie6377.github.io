<script setup lang="ts">
type Experience = {
  number: string
  company: string
  period: string
  type: string
  title: string
  description: string
  tasks: string[]
  color: string
  image: string
}

const experiences: Experience[] = [
  {
    number: '01',
    company: 'VOCAL ACADEMY 63',
    period: '2026 · 2 mois',
    type: 'Stage',
    title: 'Développement d’une application web',
    description: 'Transformation d’un site vitrine en application web afin de répondre aux besoins de l’école de chant.',
    tasks: [
      'Gestion des réservations',
      'Administration du site',
      'Mise en place d’un blog',
      'Connexion à une base de données MariaDB',
    ],
    color: '#d8f36a',
    image: '/vocal-academy-63.png',
  },
  {
    number: '02',
    company: 'Michelin',
    period: '2025 · 2 mois et demi',
    type: 'Emploi vacances',
    title: 'Gestion de stock et amélioration des outils',
    description: 'Participation à la gestion des stocks et à la préparation des dossiers nécessaires à la création des pneus.',
    tasks: [
      'Gestion et suivi des stocks',
      'Réalisation de dossiers de production',
      'Création de fichiers Power BI',
      'Mise en place de macros codées en VBA',
    ],
    color: '#b7d8ff',
    image: '/michelin.png',
  },
]
</script>

<template>
  <main class="experiences-page content-width">
    <div class="page-heading"><span class="eyebrow">03 — Expériences</span><span>Parcours professionnel</span></div>
    <section class="experiences-intro">
      <h1>Mes<br /><em>expériences.</em></h1>
      <p>Les expériences professionnelles qui m’ont permis de mettre en pratique mes compétences et de découvrir de nouveaux environnements de travail.</p>
    </section>

    <section class="experience-list" aria-label="Expériences professionnelles">
      <article v-for="experience in experiences" :key="experience.number" class="experience-card" :style="{ '--experience-color': experience.color }">
        <div class="experience-topline">
          <span class="number">{{ experience.number }}</span>
          <span class="eyebrow">{{ experience.period }}</span>
        </div>
        <div class="experience-grid">
          <div class="experience-heading">
            <div class="experience-heading-content">
              <div class="experience-image"><img :src="experience.image" :alt="`Logo ${experience.company}`" /></div>
              <div>
                <p class="company">{{ experience.company }}</p>
                <h2>{{ experience.title }}</h2>
                <span class="experience-type">{{ experience.type }}</span>
              </div>
            </div>
          </div>
          <div class="experience-content">
            <p>{{ experience.description }}</p>
            <ul>
              <li v-for="task in experience.tasks" :key="task">{{ task }}</li>
            </ul>
          </div>
        </div>
      </article>
    </section>

  </main>
</template>

<style scoped>
.content-width { margin: auto; max-width: 1600px; padding-left: clamp(1.25rem, 4vw, 4rem); padding-right: clamp(1.25rem, 4vw, 4rem); }
.experiences-page { padding-bottom: 8rem; padding-top: 5rem; }
.page-heading { border-bottom: 1px solid var(--line); color: var(--muted); display: flex; font-family: 'DM Mono', monospace; font-size: .65rem; justify-content: space-between; padding-bottom: 1.5rem; text-transform: uppercase; }
.eyebrow { color: var(--muted); font-family: 'DM Mono', monospace; font-size: .67rem; text-transform: uppercase; }
.experiences-intro { align-items: end; display: flex; justify-content: space-between; padding: 7rem 0 5rem; }.experiences-intro h1 { font-size: clamp(3.5rem, 7vw, 7rem); letter-spacing: -.1em; line-height: .86; margin: 0; }.experiences-intro h1 em { color: #87a819; font-style: normal; }.experiences-intro p { color: var(--muted); font-size: .9rem; line-height: 1.7; max-width: 34rem; }
.experience-list { border-top: 1px solid var(--line); }.experience-card { background: var(--experience-color); margin-bottom: 1.5rem; padding: 1.5rem clamp(1.25rem, 4vw, 3rem) 2.5rem; }.experience-topline { align-items: center; border-bottom: 1px solid rgba(31, 39, 31, .2); display: flex; justify-content: space-between; padding-bottom: 1rem; }.number { color: var(--muted); font-family: 'DM Mono', monospace; font-size: .68rem; }
.experience-grid { display: grid; gap: 10vw; grid-template-columns: 1.1fr .9fr; padding-top: 3.5rem; }.company { color: #51613d; font-family: 'DM Mono', monospace; font-size: .7rem; margin: 0 0 1rem; text-transform: uppercase; }.experience-heading h2 { font-size: clamp(2.2rem, 5vw, 5.2rem); letter-spacing: -.09em; line-height: .9; margin: 0 0 1.5rem; }.experience-type { border: 1px solid rgba(31, 39, 31, .35); color: #51613d; display: inline-block; font-family: 'DM Mono', monospace; font-size: .65rem; padding: .45rem .65rem; text-transform: uppercase; }.experience-image { align-items: center; display: flex; height: 9rem; margin-bottom: 2rem; max-width: 22rem; }.experience-image img { height: 100%; max-width: 100%; object-fit: contain; width: 100%; }.experience-content { align-self: center; }.experience-content > p { color: #51613d; font-size: .9rem; line-height: 1.7; margin: 0 0 2rem; }.experience-content ul { border-top: 1px solid rgba(31, 39, 31, .2); list-style: none; margin: 0; padding: 0; }.experience-content li { border-bottom: 1px solid rgba(31, 39, 31, .2); color: var(--ink); font-size: .78rem; padding: .8rem 0; }.experience-content li::before { color: #87a819; content: '↗'; margin-right: .8rem; }
@media (min-width: 681px) { .experiences-page { max-width: 1600px; }.experience-card { padding-left: clamp(1.5rem, 4vw, 4rem); padding-right: clamp(1.5rem, 4vw, 4rem); }.experience-heading-content { align-items: center; display: grid; gap: clamp(1.5rem, 3vw, 4rem); grid-template-columns: minmax(9rem, 15rem) 1fr; }.experience-image { height: 10rem; margin-bottom: 0; max-width: 15rem; }.experience-heading h2 { font-size: clamp(2rem, 4vw, 4.5rem); } }
@media (max-width: 680px) { .experiences-page { padding-bottom: 5rem; padding-top: 3.5rem; }.experiences-intro { align-items: flex-start; display: block; padding: 4rem 0 3rem; }.experiences-intro p { margin-top: 2rem; }.experience-grid { display: block; padding-top: 2.5rem; }.experience-content { margin-top: 2.5rem; }.experience-image { height: 8rem; margin-bottom: 1.5rem; } }
</style>
