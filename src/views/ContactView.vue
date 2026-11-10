<script setup>
import { onMounted, reactive, ref } from 'vue'

const cvUrl = `${import.meta.env.BASE_URL}cv.pdf`

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const formState = reactive({
  nom: '',
  prenom: '',
  email: '',
  descriptif: ''
})

const emailConfig = {
  publicKey: 'ixKhES1Y8btjCQ4jZ',
  serviceId: 'service_kyuux2v',
  templateId: 'template_wqe98xd'
}

const resetForm = () => {
  formState.nom = ''
  formState.prenom = ''
  formState.email = ''
  formState.descriptif = ''
}

const handleSubmit = async () => {
  successMessage.value = ''
  errorMessage.value = ''
  isSubmitting.value = true

  const emailjs = window.emailjs
  if (!emailjs) {
    errorMessage.value = "EmailJS n'est pas chargé."
    isSubmitting.value = false
    return
  }

  try {
    await emailjs.send(emailConfig.serviceId, emailConfig.templateId, {
      nom: formState.nom,
      prenom: formState.prenom,
      email: formState.email,
      descriptif: formState.descriptif
    })

    successMessage.value = '✅ Message envoyé avec succès !'
    resetForm()
  } catch (error) {
    errorMessage.value = `❌ Erreur: ${error?.text || 'Veuillez réessayer plus tard'}`
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  if (window.emailjs) {
    window.emailjs.init(emailConfig.publicKey)
  }
})
</script>

<template>
  <section class="essai">
    <div class="testrow">
      <div class="contact">
        <h2>Vous pouvez me contacter ici :</h2>
        <form id="contact-form" @submit.prevent="handleSubmit">
          <div class="info">
            <label for="nom">Nom :</label>
            <input id="nom" v-model="formState.nom" type="text" name="nom" placeholder="Dupont" required />
          </div>
          <div class="info">
            <label for="prenom">Prénom :</label>
            <input id="prenom" v-model="formState.prenom" type="text" name="prenom" placeholder="Jean" required />
          </div>
          <div class="info">
            <label for="email">E-Mail :</label>
            <input id="email" v-model="formState.email" type="email" name="email" placeholder="jean.dupont@email.com" required />
          </div>
          <div class="message-box">
            <textarea
              v-model="formState.descriptif"
              name="descriptif"
              rows="5"
              cols="30"
              placeholder="Votre message..."
              class="input-text"
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" class="send-button" :disabled="isSubmitting">
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}
            </button>
          </div>
        </form>

        <div v-show="successMessage" class="status-message success-message">
          {{ successMessage }}
        </div>
        <div v-show="errorMessage" class="status-message error-message">
          {{ errorMessage }}
        </div>
      </div>

      <div class="cv">
        <div class="coordonnees">
          <h2>Mes coordonnées :</h2>
          <p><strong>Email</strong> : dicklan.lagarrigue@etu.uca.fr</p>
          <p>Vous pouvez aussi me retrouver ici :</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/dicklan-lagarrigue-a3b7232b5" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <a :href="cvUrl" download class="download-button">Télécharger le CV</a>
      </div>
    </div>
  </section>
</template>
