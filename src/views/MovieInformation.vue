<template>
    <div>
        <div class="wrapper">
            <div clss="left-container">
                <b-img :src="`${movieInformation.image.original}`" fluid alt="Responsive image"></b-img>
            </div>
            <div class="right-container">
                <p class="additional-information" v-html="movieInformation.summary">
                </p>
            </div>
        </div>
        <div>
            <p class="additional-information" v-html="movieInformation.summary">
            </p>
        </div>
    </div>
</template>
<script>
import { getShowInformation } from '../services/streamingService'
export default {
  name: 'MovieInformation',
  components: {
  },
  mounted: function () {
    const movieId = this.$route.params.id
    if (movieId) {
      this.fetchMovieInformation(movieId)
    } else {
      this.$router.push('/')
    }
  },
  data () {
    return {
      movieInformation: {}
    }
  },
  methods: {
    fetchMovieInformation: function (movieId) {
      // get the query movie id from the query param and load the movie information
      getShowInformation(movieId).then((movieInformation) => {
        const { image, name = 'No Movie Information',
          rating, language, summary } = movieInformation
        this.movieInformation = {
          image,
          name,
          summary,
          language,
          rating
        }
      }).then((noMovieFound) => {
        console.log('Unable to load movie information, try again later', noMovieFound)
      })
    }
  }
}
</script>
<style scoped>
.wrapper {
    display: flex;
}

img {
    width: 300px;
}

.left-container {
    width: 150px;
}

.additional-information {
    background: black;
    color: white;
}

.right-container {
    flex: 1;
}
</style>
