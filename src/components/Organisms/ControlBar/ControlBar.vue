<template>
  <div class="container">
    <div style="width:100%">
      <input-search></input-search>
    </div>
    <div class="filter">
      <gener-filter :filterOptions="genre" :title="'Genre'"></gener-filter>
    </div>
    <div>
    <gener-filter :filterOptions="rating" :title="'Rating'"></gener-filter>
    </div>
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
  margin-top: 10px;
  margin-left: 20px;
}
.filter {
  padding-left: 10px;
}
</style>
