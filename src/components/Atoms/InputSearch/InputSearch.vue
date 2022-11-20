<template>
  <div>
      <b-form-input list="input-list" id="input-with-list" v-model="keyword"
        placeholder="Search your fav show"
        @change="onChange(keyword)"
      @input="getSuggestions"></b-form-input>
      <b-form-datalist id="input-list" :options="options" @change="onChange()"></b-form-datalist>
  </div>
</template>

<script>
import { searchShow } from '../../../services/streamingService'

export default {
  name: 'InputSearch',
  props: ['allShowInformation'],
  data: function () {
    return {
      suggestion: [],
      keyword: '',
      options: []
    }
  },
  methods: {
    getSuggestions () {
      setTimeout(() => {
        this.options = this.suggestion.filter((suggestion) => suggestion.indexOf(this.keyword.toLowerCase()) !== -1)
      }, 300)
    },
    onChange: function () {
      this.$parent.onSearch(this.keyword)
    }
  },
  mounted: function () {
    searchShow(this.keyword).then((response) => {
      const result = response.map((show) => show.name.toLowerCase())
      this.suggestion = [...new Set(result)]
    }).catch((error) => console.log(error))
  }
}
</script>
<style scoped>
.form-control {
  height: 35px;
}

.form-control:focus {
  outline: none !important;
  box-shadow: 0 0 0 0.25rem #ffc426 !important;
  -webkit-box-shadow: 0 0 0 0.25rem #ffc426 !important;
  border-color: #ffc426 !important;
  outline: none !important;
}

.dropdown-menu ul {
  z-index: 1000;
}
</style>
