<template>
  <div>
    <p v-if="error" data-test="message-error">{{ error }}</p>
    <p v-else data-test="message">{{ message }}</p>
  </div>
</template>

<script>
import { getMessage } from '@/services/axios'

export default {
  name: 'MessageDisplay',
  data() {
    return {
      message: {
        text: ''
      },
      error: null
    }
  },
  async created() {
    try {
      this.message = await getMessage()
    } catch (err) {
      this.error = 'Oops! Something went wrong.'
    }
  }
}
</script>

<style lang="scss" scoped></style>
