<template>
  <div>
    <gener-filter :filterOptions="genre" :title="'Genre'"></gener-filter>
  </div>
</template>
<script>
import GenerFilter from '../../Molecules/Filter/Filter.vue'

export default {
  name: 'ControlBar',
  props: ['genre'],
  components: {
    GenerFilter
  },
  data () {
    return {
    }
  },
  methods: {
    onGenreFilterClick: function (option, source) {
      this.$parent.onGenreFilterClick(option, source)
    }
  }
}
</script>
<style scoped>

</style>
