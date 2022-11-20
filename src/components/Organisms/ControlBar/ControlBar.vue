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
  props: ['genre', 'rating', 'allShowInformation'],
  components: {
    GenerFilter,
    InputSearch
  },
  methods: {
    onGenreFilterClick: function (option, source) {
      this.$parent.onGenreFilterClick(option, source)
    },
    onSearch: function (keyword) {
      this.$parent.onSearch(keyword)
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  max-width: 1000px;
  margin: auto;
  margin-left: 10px;
}
.filter {
  padding-left: 10px;
}
</style>
