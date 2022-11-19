<template>
  <div class="container">
    <input-search></input-search>
    <gener-filter :filterOptions="genre" :title="'Genre'"></gener-filter>
    <gener-filter :filterOptions="rating" :title="'Rating'"></gener-filter>
   
  </div>
</template>
<script>
import GenerFilter from '../../Molecules/Filter/Filter.vue'
import InputSearch from '../../Atoms/InputSearch/InputSearch.vue'

export default {
  name: 'ControlBar',
  props: ['genre', 'rating'],
  components: {
    GenerFilter,
    InputSearch
  },
  methods: {
    onGenreFilterClick: function (option, source) {
      this.$parent.onGenreFilterClick(option, source)
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  /* for horizontal aligning of child divs */
  justify-content:  flex-start;
  /* for vertical aligning */
  align-items: flex-start;
  
}
</style>
