<template>
    <h3 class="CustomHeading">
        {{ tite | tranformToCaps }}
    </h3>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    tite: {
      type: String,
      required: true
    }
  },
  filters: {
    tranformToCaps (title) {
      return title.toUpperCase()
    }
  }
}
</script>
<style scoped>
.CustomHeading {
    padding-top: 10px;
    text-align: left;
}
</style>
