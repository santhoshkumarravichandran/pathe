<template>
  <div>
    <control-bar></control-bar>
    <movie-section :category="nowStreaming"></movie-section>
    <movie-section :category="specialEvents"></movie-section>
    <movie-section :category="kids"></movie-section>
  </div>
</template>
<script>

import MovieSection from '../components/Organisms/MovieSection/MovieSection.vue'
import ControlBar from '../components/Organisms/ControlBar/ControlBar.vue'

export default {
  name: 'Dashboard',
  components: {
    MovieSection, ControlBar
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
