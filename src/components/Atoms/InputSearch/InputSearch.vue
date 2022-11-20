<template>
    <div>
        <b-form-input
            list="input-list"
            id="input-with-list"
            v-model="keyword"
            placeholder="Search your fav show"
            @change="onChange(keyword)"
            @input="getSuggestions"/>
        <b-form-datalist id="input-list" :options="options" @change="onChange()"/>
    </div>
</template>

<script>
import { searchShow } from '../../../services/streamingService'

export default {
    name: 'InputSearch',
    props: {
        allShowInformation: {
            type: Array,
            default: () => ([])
        }
    },
    data: function() {
        return {
            suggestion: [],
            keyword: '',
            options: []
        }
    },
    methods: {
        /**
         * A function to get the list of suggestion (title of the show) matching the keyword
         */
        getSuggestions() {
            setTimeout(() => {
                this.options = this.suggestion.filter((suggestion) => suggestion.indexOf(this.keyword.toLowerCase()) !== -1)
            }, 300)
        },
        /**
         * A function to send the selected show title to the parent component
         */
        onChange: function() {
            this.$parent.onSearch(this.keyword)
        },
        /**
         * A function to prepare the list of suggestion( auto complete option)
         */
        prepareSuggestion: function(keyword) {
            searchShow(keyword).then((response) => {
                const result = response.map((show) => show.name.toLowerCase())
                this.suggestion = [...new Set(result)]
            }).catch((error) => console.log(error))
        }
    },
    mounted: function() {
        this.prepareSuggestion(this.keyword)
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

</style>
