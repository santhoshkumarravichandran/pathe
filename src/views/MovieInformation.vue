<template>
    <div>
        <div class="wrapper">
            <div clss="left-container">
            </div>
            <div class="right-container">
              <movie-bio
              :title="movieInformation.name"
              :imageURL="movieInformation.image.original"
              :runtime="movieInformation.runtime"
              :language="movieInformation.language"
              :summary="movieInformation.summary"
              ></movie-bio>
            </div>
        </div>
    </div>
</template>
<script>
import { getShowInformation } from '../services/streamingService'
import MovieBio from '../components/Molecules/MovieBio/MovieBio.vue'
export default {
  name: 'MovieInformation',
  components: {
    MovieBio
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
      movieInformation: {
        name: '',
        image: {
          original: ''
        },
        runtime: 0,
        language: '',
        summary: ''
      }
    }
  },
  methods: {
    fetchMovieInformation: function (movieId) {
      // get the query movie id from the query param and load the movie information
      getShowInformation(movieId).then((movieInformation) => {
        const { image, name = 'No Movie Information',
          rating, language, summary, runtime } = movieInformation
        this.movieInformation = {
          image,
          name,
          language,
          rating,
          runtime,
          summary
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
  color: red;
}

.right-container {
    flex: 1;
}
</style>
