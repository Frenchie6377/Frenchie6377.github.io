<script setup>
import { ref, watch } from 'vue'
import SaeBlock from '../components/SaeBlock.vue'

const activeProject = ref(null)

const openProject = (projectKey) => {
  activeProject.value = projectKey
}

const closeProject = () => {
  activeProject.value = null
}

watch(activeProject, (value) => {
  document.body.classList.toggle('modal-open', Boolean(value))
})
</script>

<template>
  <section class="realisation-technique">
    <div class="titre2">
      <h1>Mes réalisations technique</h1>
    </div>

    <button class="project-card project-button" type="button" @click="openProject('dev2a')">
      <div class="project-summary">
        <img src="/qwirkle.png" class="project-thumb" alt="Qwirkle" />
        <div>
          <h2 class="project-title">SAE Développement d'une application 2A</h2>
          <p class="project-subtitle">Clique pour afficher les détails</p>
        </div>
      </div>
    </button>

    <button class="project-card project-button" type="button" @click="openProject('dev')">
      <div class="project-summary">
        <img src="/jinx.png" class="project-thumb" alt="Jinx" />
        <div>
          <h2 class="project-title">SAE Développement d'application</h2>
          <p class="project-subtitle">Clique pour afficher les détails</p>
        </div>
      </div>
    </button>

    <button class="project-card project-button" type="button" @click="openProject('bdd')">
      <div class="project-summary">
        <img src="/SQL.png" class="project-thumb" alt="SQL" />
        <div>
          <h2 class="project-title">SAE Exploitation d'une Base de Données</h2>
          <p class="project-subtitle">Clique pour afficher les détails</p>
        </div>
      </div>
    </button>

    <div v-if="activeProject" class="project-modal" role="dialog" aria-modal="true">
      <div class="project-modal__backdrop" @click="closeProject"></div>
      <div class="project-modal__content">
        <button class="project-modal__close" type="button" @click="closeProject">Fermer</button>

        <SaeBlock v-if="activeProject === 'dev'">
          <template #text>
            <h2 class="titre2">Situation d'Apprentissage Évaluée</h2>
            <p><strong>Titre :</strong> SAE Développement d'application</p>
            <p><strong>Durée :</strong> 11 semaines</p>
            <p><strong>Contexte :</strong></p>
            <p>
              Cette SAE s'inscrit dans le cadre du deuxième semestre du BUT Informatique. Nous devions
              développer une application correspondant à un jeu de société ; dans notre cas, il
              s'agit du jeu de cartes <strong>Jinx</strong>.
            </p>
            <p><strong>Objectif :</strong></p>
            <p>
              Nous devons développer une application en utilisant les langages C#, MAUI et .NET
              permettant de jouer une partie exacte comme le jeu de carte.
            </p>
            <p><strong>Travaille réalisé :</strong></p>
            <ul>
              <li>Conception des sketchs de l'application</li>
              <li>Réalisation de la page Paramètre</li>
              <li>Réalisation de la page de Meilleure scores</li>
              <li>Développement des dés</li>
              <li>Possiblité de modifier le son</li>
            </ul>
          </template>
          <template #media>
            <img src="/sae.png" class="sae-image" alt="SAE" />
            <p>Sketch qui représente une partie de notre jeu</p>
            <img src="/jinx.png" class="sae-image" alt="Jinx" />
            <p>Image du menu de notre application</p>
          </template>
        </SaeBlock>

        <SaeBlock v-else-if="activeProject === 'dev2a'">
          <template #text>
            <h2 class="titre2">Situation d'Apprentissage Évaluée</h2>
            <p><strong>Titre :</strong> SAE Développement d'une application 2A</p>
            <p><strong>Durée :</strong> 165 heures</p>
            <p><strong>Contexte :</strong></p>
            <p>
              Cette SAE s'inscrit dans le cadre de la deuxième année du BUT Informatique.
              Elle consiste à concevoir et développer une application autour d'un jeu de société, ici
              <strong>Qwirkle</strong>. Pour cela, j'ai travaillé en équipe avec 7 personnes.
            </p>
            <p><strong>Objectif :</strong></p>
            <p>
            Avec un client dédié nous devions respecter ses exigences pour développer une application mobile (avec les langages Android/Kotlin) et une application web (avec le langage PHP) permettant de jouer à une partie de Qwirkle. Nous devions également réaliser une partie administration permettant de gérer les différente fonctionnalité de l'application (comme la gestion des pseudos, l'état du serveur ...) avec le langage Blazzor.
            </p>
            <p><strong>Travail réalisé :</strong></p>
            <ul>
              <li>Réalisation des sketchs</li>
              <li>Développement web de la page profil (via php)</li>
              <li>Développement mobile de la page profil (via android/kotlin)</li>
              <li>Développement de la gestion des pseudos pour la partie administration</li>
              <li>Implementation de la camera en android ainsi que le systeme de notification</li>
              <li>Réduction des Code smells sur le projet</li>
            </ul>
            <p>
              Ce sont les tâches  que j'ai pu réaliser personnellement sur ce projet,
              il y a également des tâches que j'ai pu faire avec l'aide de mes camarades.
              Par exemple j'ai pu aider dans l'implementation du jeu 2D ainsi que le mode voluer ou encore dans la version 3D du jeu.
            </p>
          </template>
          <template #media>
            <img src="/qwirkle.png" class="sae-image" alt="Qwirkle" />

            <img src="/profilPicture.png" class="sae-image" alt="Profil Qwirkle" />
            <p>Page profil</p>

            <img src="/qwirkleGame2D.png" class="sae-image" alt="Qwirkle Game 2D" />
            <p>Exemple de partie en 2D</p>

            <img src="/qwirkleGame3D.png" class="sae-image" alt="Qwirkle Game 3D" />
            <p>Exemple de partie en 3D</p>
          </template>
        </SaeBlock>

        <SaeBlock v-else>
          <template #text>
            <h2 class="titre2">Situation d'Apprentissage Évaluée</h2>
            <p><strong>Titre :</strong> SAE Exploitation d'une Base de Données</p>
            <p><strong>Durée :</strong> 6 semaines</p>
            <p><strong>Contexte :</strong></p>
            <p>
              Cette SAE s'inscrit dans le cadre du deuxième semestre du BUT Informatique. Notre
              objectif est de créer une entreprise fictive spécialisée dans la vente de vin. En nous
              basant sur des jeux de données publics, nous devons déterminer quel type de vin
              correspond le mieux à notre entreprise.
            </p>
            <p><strong>Objectif :</strong></p>
            <p>
              Nous devons utiliser des jeux de données publics, nettoyer les données afin d'éliminer
              les doublons et les informations non pertinentes pour notre entreprise, puis les analyser
              pour déterminer ce qui aurait été le plus avantageux pour celle-ci.
            </p>
            <p><strong>Travaille réalisé :</strong></p>
            <ul>
              <li>Recherche de jeux de données</li>
              <li>Codage des graphiques représentant les qualités du vin</li>
              <li>Analyse des caractéristiques qualitatives du vin</li>
            </ul>
          </template>
          <template #media>
            <img src="/SQL.png" class="sae-image" alt="SAE" />
            <p>Image représentant notre entreprise</p>
            <img src="/graphiqueSql.png" class="sae-image" alt="Jinx" />
            <p>Graphique exemple pour l’analyse des qualités</p>
          </template>
        </SaeBlock>
      </div>
    </div>
  </section>
</template>
