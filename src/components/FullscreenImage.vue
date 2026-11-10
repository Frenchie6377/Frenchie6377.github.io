<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  src: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close'])

const handleClose = () => {
  if (!props.isOpen) {
    return
  }

  emit('close')
}
</script>

<template>
  <div v-show="props.isOpen" class="fullscreen" @click="handleClose">
    <img :src="props.src" alt="Fullscreen Image" />
  </div>
</template>
