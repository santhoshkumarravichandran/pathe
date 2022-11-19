<template>
    <div class="home">
     <list :title="nowStreaming"></list>
    </div>
</template>
<script>

import List from '../components/List/List.vue'
export default {
  name: 'Home',
  components: {
    List
  },
  data () {
    return {
      stories: [],
      nowStreaming: 'Now Streaming',
      specialEvents: 'SpecialEvents',
      kids: 'Kids'
    }
  },
  created () {
  }
}
</script>
<style scoped>
</style>
