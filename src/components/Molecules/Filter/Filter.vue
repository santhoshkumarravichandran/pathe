<template>
    <div class="genere-filter">
        <b-dropdown
            size="sm"
            :text="(text || title)"
            id="dropdown-right"
            right
            variant="warning"
            class="md-2 ">
            <b-dropdown-item
                @click="onFilterOptionSection(option)"
                v-for="option in filterOptions"
                :value="option"
                :key="option">{{ option }}</b-dropdown-item>
        </b-dropdown>
    </div>
</template>
<script>

export default {
    name: 'GenerFilter',
    props: {
        filterOptions: {
            type: Array,
            default: () => ([])
        },
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            text: null
        }
    },
    methods: {
        onFilterOptionSection: function(option) {
            // pass the selected value to parent component
            this.$parent.onGenreFilterClick(option, this.title)
            this.text = option.toString()
        }
    }
}
</script>
<style scoped>
.genere-filter {
    margin-left: 10px;
}
</style>
