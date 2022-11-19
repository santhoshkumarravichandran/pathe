<template>
    <div>
        <div class="container">
            <b-img :src="`${imageURL}`" fluid alt="Responsive image"></b-img>
            <div class="movie-title">
              {{ title | trimShowTitle }}
            </div>
            <div class="movie-subtitle">
              {{ language }} | {{ runtime }} Minutes
            </div>
          </div>
    </div>
</template>
<script>

export default {
  name: 'MovieBio',
  components: {

  },
  props: {
    title: {
      type: String
    },
    imageURL: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    runtime: {
      type: String,
      required: true
    }
  },
  filters: {
    trimShowTitle (title) {
      return title.length > 15 ? title.substring(0, 15) + '...' : title
    }
  }
}
</script>
