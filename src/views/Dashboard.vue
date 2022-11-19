<template>
    <div>
     <list :title="nowStreaming"></list>
     <list :title="kids" :audience="'kids'"></list>
    </div>
</template>
<script>

import List from '../components/List/List.vue'
export default {
  name: 'Dashboard',
  components: {
    List
  },
  data () {
    return {
      stories: [],
      nowStreaming: 'Now Streaming',
      specialEvents: 'SpecialEvents',
      kids: 'Kids Sepcial'
    }
  }
}
</script>
