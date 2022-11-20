<template>
    <div class="container">
        <div style="width:100%">
            <input-search/>
        </div>
        <div class="filter">
            <gener-filter :filter-options="genre" :title="'Genre'"/>
        </div>
        <div>
            <gener-filter :filter-options="rating" :title="'Rating'"/>
        </div>
    </div>
</template>
<script>
import GenerFilter from '../../Molecules/Filter/Filter.vue'
import InputSearch from '../../Atoms/InputSearch/InputSearch.vue'

export default {
    name: 'ControlBar',
    props: {
        genre: {
            type: Array,
            default: () => ([])
        },
        rating: {
            type: Array,
            default: () => ([])
        },
        allShowInformation: {
            type: Array,
            default: () => ([])
        }
    },
    components: {
        GenerFilter,
        InputSearch
    },
    methods: {
        onGenreFilterClick: function(option, source) {
            this.$parent.onGenreFilterClick(option, source)
        },
        onSearch: function(keyword) {
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
