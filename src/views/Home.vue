<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MessageDisplay />
  </div>
</template>

<script>
import MessageDisplay from '@/components/MessageDisplay'
export default {
  name: 'Home',
  components: {
    MessageDisplay
  }
}
</script>
