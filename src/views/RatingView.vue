<template>
  <div id="RatingView">
    <Rating :grade="2" />
  </div>
</template>

<script>
import Rating from '@/components/Rating'
export default {
  name: 'RatingView',
  components: {
    Rating
  }
}
</script>

<style>
html,
body,
#RatingView {
  height: 100%;
}
#RatingView {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
}
</style>
