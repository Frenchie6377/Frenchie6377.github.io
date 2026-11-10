<script setup>
import { onBeforeUnmount, onMounted } from 'vue'

const lockClass = 'home-lock'

onMounted(() => {
  document.body.classList.add(lockClass)
})

onBeforeUnmount(() => {
  document.body.classList.remove(lockClass)
})
</script>

<template>
  <section class="presentation hero-landscape">
    <div class="landscape" aria-hidden="true">
      <div class="sky">
        <span class="sun"></span>
        <span class="cloud cloud-1"></span>
        <span class="cloud cloud-2"></span>
        <span class="cloud cloud-3"></span>
        <span class="bird bird-1"></span>
        <span class="bird bird-2"></span>
      </div>
      <div class="horizon">
        <div class="forest forest-1"></div>
        <div class="forest forest-2"></div>
        <div class="forest forest-3"></div>
      </div>
      <div class="ground"></div>
    </div>

    <div class="hero-content">
      <div class="Photo">
        <div class="profile-frame landscape-frame">
          <span class="frame-glow"></span>
          <span class="leaf leaf-1"></span>
          <span class="leaf leaf-2"></span>
          <span class="leaf leaf-3"></span>
          <span class="flower flower-1"></span>
          <span class="flower flower-2"></span>
          <span class="frame-cloud frame-cloud-1"></span>
          <span class="frame-cloud frame-cloud-2"></span>
          <img src="/photo.png" class="photo" alt="Photo de Dicklan Lagarrigue" />
        </div>
      </div>

      <div class="text hero-text">
        <h2 class="prenom2">Dicklan LAGARRIGUE</h2>
        <p>
          Je suis Dicklan Lagarrigue, actuellement étudiant en première année au sein du
          BUT Informatique à Clermont-Ferrand afin de devenir développeur.
        </p>
        <p>
          Depuis peu, j'ai rejoint l'association Ordre de Malte en tant que bénévole. Celle-ci me
          forme pour devenir secouriste, car j'aime pouvoir porter secours aux personnes qui en ont besoin.
        </p>
        <p>
          J'aime aussi la photographie de paysage. J'adore admirer la nature qui
          m'entoure et la photographie me permet de capturer ces paysages qui sont, à mes
          yeux, magnifiques.
        </p>
      </div>
    </div>
  </section>
</template>
