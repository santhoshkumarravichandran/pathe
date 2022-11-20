<template>
    <h6 class="CustomHeading">
        {{ tite | tranformToCaps }}
    </h6>
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
  text-align: left;
  font-weight: bold;
  font-size: 16px;
  margin-left: 20px;
}
</style>
