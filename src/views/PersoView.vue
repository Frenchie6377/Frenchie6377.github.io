<script setup>
import SaeBlock from '../components/SaeBlock.vue'
</script>

<template>
  <section class="perso">
    <h1 class="perso2">Mes projets personnels</h1>
    <SaeBlock>
      <template #text>
        <h2 class="titre2">Site web d'une école de chant</h2>
        <p><strong>Contexte :</strong></p>
        <p>
          En réutilisant le site actuel de l'école de chant, j'ai refait le site d'une école de
          chant afin qu'il convienne mieux à la personne qui me l'a demandé.
        </p>
        <p>
          <strong>
            Cependant, ce projet est toujours en cours. Je n'ai pas encore eu le temps de le
            finir, mais je m'efforce de le terminer au plus vite.
          </strong>
        </p>
        <p>
          Il est actuellement en construction et manque encore d'informations que je compte
          ajouter.
        </p>
        <p>
          La façon dont il est conçu va aussi être modifiée : la banderole sera plus fine et
          d'une autre couleur, les boutons disparaîtront pour ne laisser que le texte cliquable.
          Sur la page d'accueil, je compte aussi trouver une solution pour afficher le logo de
          façon lisible car actuellement je trouve qu'il n'est pas assez visible et qu'il ressemble
          trop au fond de l'écran.
        </p>
        <p>Si vous souhaitez en savoir plus sur cette école, voici un lien vers le site actuel de l'école :</p>
        <p>
          <a href="https://vocalacademy63.com/" target="_blank" rel="noopener noreferrer">Vocal Academy</a>
        </p>
      </template>
      <template #media>
        <img src="/Academy1.png" class="sae-image" alt="SAE" />
        <p>Image d'accueil du site actuelle</p>
        <img src="/Academy2.png" class="sae-image" alt="Jinx" />
        <p>Image d'accueil que j'ai réalisé pour le moment</p>
      </template>
    </SaeBlock>
  </section>
</template>
