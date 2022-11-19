<template>
  <div>
    <movie-section :category="nowStreaming"></movie-section>
    <movie-section :category="specialEvents"></movie-section>
    <movie-section :category="kids"></movie-section>
  </div>
</template>
<script>

import MovieSection from '../components/Organisms/MovieSection/MovieSection.vue'
export default {
  name: 'Dashboard',
  components: {
    MovieSection
  },
  data: function () {
    return {
      nowStreaming: 'Now Streaming',
      specialEvents: 'SpecialEvents',
      kids: 'Kids Sepcial'
    }
  }
}
</script>
